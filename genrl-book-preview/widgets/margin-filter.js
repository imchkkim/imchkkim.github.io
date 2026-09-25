// JoyCaption의 마진 기반 필터링: 프롬프트마다 N개 응답을 심사해
// (가) 무작위 2개로 쌍을 만들 때와 (나) 최상위 vs 최하위로 쌍을 만들 때의 마진 분포 비교.
// 점수 = 프롬프트 난이도 평균 + 정규 잡음(σ), 1–10 으로 자름. 재현 가능한 난수.
GW.register("margin-filter", (el) => {
  const f = GW.frame(el, {
    title: "후보를 많이 뽑아 양 끝을 고르면 마진이 저절로 벌어진다",
    caption:
      "프롬프트 400개 각각에 대해 N개 응답을 1–10점으로 심사했다고 가정한 시뮬레이션. " +
      "무작위 두 개로 쌍을 만들면 마진이 대부분 1–2점에 몰린다(JoyCaption 첫 시도의 실패). " +
      "N개 중 최상위와 최하위를 고르면 분포가 통째로 오른쪽으로 이동하고, 문턱을 넘는 쌍의 비율이 크게 는다.",
  });
  const st = { N: 10, sd: 1.5, thr: 4 };
  GW.slider(f.controls, { label: "프롬프트당 후보 수 N", min: 2, max: 16, step: 1, value: st.N, fmt: (v) => v + "개", oninput: (v) => { st.N = v; draw(); } });
  GW.slider(f.controls, { label: "응답 품질의 흩어짐 σ", min: 0.5, max: 3, step: 0.1, value: st.sd, fmt: (v) => v.toFixed(1), oninput: (v) => { st.sd = v; draw(); } });
  GW.slider(f.controls, { label: "남길 최소 마진", min: 1, max: 8, step: 1, value: st.thr, fmt: (v) => v + "점", oninput: (v) => { st.thr = v; draw(); } });
  GW.legend(f.stage, [["c4", "무작위 쌍"], ["c1", "최상위 vs 최하위"]]);
  const c = GW.chart(f.stage, { x: [-0.6, 9.6], y: [0, 0.5], xticks: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], xlabel: "쌍의 마진 (점수 차)", ylabel: "비율", yfmt: (v) => Math.round(v * 100) + "%", h: 270, label: "마진 분포" });
  const P = 400;
  function sim() {
    const rng = GW.rng(11);
    const rand = [], ext = [];
    for (let p = 0; p < P; p++) {
      const mean = 4 + 3 * rng();
      const s = [];
      for (let i = 0; i < st.N; i++) s.push(GW.clamp(Math.round(mean + st.sd * rng.normal()), 1, 10));
      rand.push(Math.abs(s[0] - s[1]));
      ext.push(Math.max(...s) - Math.min(...s));
    }
    return { rand, ext };
  }
  function hist(arr) {
    const h = new Array(10).fill(0);
    for (const v of arr) h[Math.min(9, v)]++;
    return h.map((x) => x / arr.length);
  }
  function draw() {
    const { rand, ext } = sim();
    const hr = hist(rand), he = hist(ext);
    const ymax = Math.max(0.5, ...hr, ...he);
    c.y = [0, Math.ceil(ymax * 10) / 10];
    c.drawAxes();
    c.layer.innerHTML = ""; c.top.innerHTML = "";
    const bw = 0.36;
    for (let k = 0; k < 10; k++) {
      const draws = [[hr[k], "f4", k - bw], [he[k], "f1", k]];
      for (const [v, cls, x0] of draws) {
        if (v <= 0) continue;
        GW.s("rect", { class: cls, x: c.X(x0) + 1, y: c.Y(v), width: c.X(x0 + bw) - c.X(x0) - 2, height: c.Y(0) - c.Y(v), rx: 2 }, c.layer);
      }
    }
    GW.s("line", { class: "w-line cm dash thin", x1: c.X(st.thr - 0.5), x2: c.X(st.thr - 0.5), y1: c.Y(0), y2: c.Y(c.y[1]) }, c.top);
    c.text(st.thr - 0.4, c.y[1] * 0.93, "이 오른쪽만 남김", "", "start");
    const keepR = rand.filter((v) => v >= st.thr).length / P, keepE = ext.filter((v) => v >= st.thr).length / P;
    const mean = (a) => a.reduce((x, y) => x + y, 0) / a.length;
    f.readout.innerHTML =
      `평균 마진 — 무작위 <b>${mean(rand).toFixed(2)}</b>점 · 양 끝 <b>${mean(ext).toFixed(2)}</b>점 &nbsp;|&nbsp; ` +
      `${st.thr}점 이상이라 남는 쌍 — 무작위 <b>${Math.round(keepR * 100)}%</b> · 양 끝 <b>${Math.round(keepE * 100)}%</b>`;
  }
  draw();
});
