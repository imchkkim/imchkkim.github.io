// 임포턴스 샘플링 주사위: 찌그러진 주사위(π_old)로 던져서 공정한 주사위(π_θ)의 기대값 3.5 를 추정.
// 한 번의 실험(N번 던지기)을 300번 반복해 네 추정량의 퍼짐(분산)을 비교한다.
GW.register("is-dice", (el) => {
  const f = GW.frame(el, {
    title: "임포턴스 샘플링 — 찌그러진 주사위로 공정한 주사위의 평균 맞히기",
    caption:
      "목표는 공정한 주사위의 기대값 3.5. 점 하나가 ‘N번 던지는 실험’ 한 번의 추정값이고, 실험을 300번 반복했다. " +
      "보정 없는 평균은 한쪽으로 치우치고(편향), 임포턴스 가중치는 중심은 맞추지만 π<sub>old</sub>가 찌그러질수록 크게 퍼진다(분산). " +
      "가중치를 [0.8, 1.2]로 자르면 퍼짐은 줄지만 다시 치우친다 — PPO가 고른 절충이다.",
  });
  const OLD = {
    "약간": [0.22, 0.2, 0.17, 0.16, 0.13, 0.12],
    "보통": [0.4, 0.2, 0.15, 0.1, 0.1, 0.05],
    "극단": [0.55, 0.25, 0.1, 0.06, 0.035, 0.005],
  };
  let key = "보통", N = 20, seed = 1;
  GW.h("span", { class: "w-slider-label", text: "π_old 찌그러짐", style: { color: "var(--w-ink-2)" } }, f.controls);
  GW.segmented(f.controls, { options: Object.keys(OLD).map((k) => [k, k]), value: key, onchange: (k) => { key = k; draw(); } });
  GW.slider(f.controls, { label: "한 실험당 던지는 횟수 N", min: 5, max: 200, step: 5, value: N, oninput: (v) => { N = v; draw(); } });
  GW.button(f.controls, "다시 던지기", () => { seed++; draw(); });

  const row = GW.h("div", { style: { display: "grid", gridTemplateColumns: "minmax(0,0.8fr) minmax(0,1.2fr)", gap: "0.8rem" } }, f.stage);
  const left = GW.h("div", {}, row), right = GW.h("div", {}, row);
  const wc = GW.chart(left, { w: 260, h: 250, x: [0.5, 6.5], y: [0, 10], xticks: [1, 2, 3, 4, 5, 6], xlabel: "주사위 눈", ylabel: "가중치 w = π_θ / π_old", margin: { l: 44 }, label: "눈별 임포턴스 가중치" });
  const ROWS = [
    ["보정 없음", "c1", "f1"],
    ["IS (그대로)", "c2", "f2"],
    ["IS (정규화)", "c3", "f3"],
    ["IS (w를 0.8~1.2로 자름)", "c4", "f4"],
  ];
  const ec = GW.chart(right, { w: 400, h: 250, x: [0, 8], y: [0, 4], yticks: [], xlabel: "추정값 (실험 300회)", margin: { l: 150 }, label: "추정량별 퍼짐" });

  function experiment(p, rng) {
    let s0 = 0, sw = 0, swy = 0, scy = 0;
    for (let i = 0; i < N; i++) {
      let u = rng(), k = 0;
      while (k < 5 && u > p[k]) { u -= p[k]; k++; }
      const y = k + 1, w = 1 / 6 / p[k], wc = GW.clamp(w, 0.8, 1.2);
      s0 += y; sw += w; swy += w * y; scy += wc * y;
    }
    return [s0 / N, swy / N, swy / sw, scy / N];
  }

  function draw() {
    const p = OLD[key];
    const w = p.map((q) => 1 / 6 / q);
    const ymax = Math.max(4, Math.ceil(Math.max(...w)));
    wc.y = [0, ymax];
    wc.drawAxes();
    wc.layer.innerHTML = ""; wc.top.innerHTML = "";
    GW.s("line", { class: "w-line cm dash thin", x1: wc.X(0.5), x2: wc.X(6.5), y1: wc.Y(1), y2: wc.Y(1) }, wc.layer);
    w.forEach((v, k) => {
      const x0 = wc.X(k + 0.7), x1 = wc.X(k + 1.3);
      GW.s("rect", { class: "fs-ratio", x: x0, y: wc.Y(v), width: x1 - x0, height: wc.Y(0) - wc.Y(v), rx: 3 }, wc.layer);
      GW.s("text", { class: "w-label", x: (x0 + x1) / 2, y: wc.Y(v) - 4, "text-anchor": "middle", text: v.toFixed(v < 10 ? 2 : 0) }, wc.top);
    });

    const rng = GW.rng(seed * 7919);
    const res = [];
    for (let t = 0; t < 300; t++) res.push(experiment(p, rng));
    ec.layer.innerHTML = ""; ec.top.innerHTML = "";
    GW.s("line", { class: "w-line cm", x1: ec.X(3.5), x2: ec.X(3.5), y1: ec.m.t, y2: ec.m.t + ec.ph }, ec.layer);
    GW.s("text", { class: "w-label strong", x: ec.X(3.5), y: ec.m.t - 2, "text-anchor": "middle", text: "정답 3.5" }, ec.top);
    const jit = GW.rng(3);
    const stats = [];
    ROWS.forEach(([name, , fc], i) => {
      const yc = 3.5 - i;
      GW.s("text", { class: "w-label", x: ec.m.l - 8, y: ec.Y(yc) + 4, "text-anchor": "end", text: name }, ec.top);
      const vals = res.map((r) => r[i]);
      const mean = vals.reduce((a, b) => a + b) / vals.length;
      const sd = Math.sqrt(vals.reduce((a, b) => a + (b - mean) ** 2, 0) / vals.length);
      stats.push([name, mean, sd]);
      for (const v of vals) {
        GW.s("circle", { class: fc, cx: ec.X(GW.clamp(v, 0, 8)), cy: ec.Y(yc + (jit() - 0.5) * 0.55), r: 1.8, opacity: 0.45 }, ec.layer);
      }
      GW.s("line", { class: "w-line", x1: ec.X(GW.clamp(mean - sd, 0, 8)), x2: ec.X(GW.clamp(mean + sd, 0, 8)), y1: ec.Y(yc - 0.38), y2: ec.Y(yc - 0.38), style: { stroke: "var(--w-ink-2)" } }, ec.top);
      GW.s("circle", { cx: ec.X(mean), cy: ec.Y(yc - 0.38), r: 3.5, style: { fill: "var(--w-ink)" } }, ec.top);
    });
    f.readout.innerHTML = stats
      .map(([n, m, s]) => `${n}: 평균 <b>${m.toFixed(2)}</b> ± <b>${s.toFixed(2)}</b>`)
      .join(" · ") + ` — 가장 큰 가중치 <b>${Math.max(...w).toFixed(1)}</b>`;
  }
  draw();
});
