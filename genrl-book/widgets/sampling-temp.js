// 샘플링 온도: 로짓을 T로 나누면 뽑히는 확률이 모델의 분포와 달라진다.
// 조작: 샘플링 온도 T 슬라이더 + 분포 단추.
// 8장 「샘플링 온도」 절 전용. 단추 둘:
//   "본문 예" : [0.5, 0.3, 0.2] (본문의 T = 0.5 · 2 계산)
//   "문제 7"  : [0.6, 0.3, 0.1] (문제 7 의 모델 분포. T 는 독자가 0.7 로 맞춘다)
// 설명글에는 문제의 답을 적지 않는다.
GW.register("sampling-temp", (el) => {
  const f = GW.frame(el, {
    title: "샘플링 온도 — 모델의 분포와 실제로 뽑히는 분포",
    caption:
      "진한 막대는 모델이 내놓은 확률 <span class='sym-pi'>π<sub>θ</sub></span>, 옅은 막대는 로짓을 샘플링 온도 T 로 나눈 뒤 실제로 뽑히는 확률이다. " +
      "처음 화면은 본문의 T = 0.5 다. T 를 1에 가까이, 또 1 너머로 옮기며 두 막대가 어떻게 벌어지는지, 가장 큰 토큰이 바뀌는지 보라. 수치판의 <span class='sym-ratio'>w</span> 는 두 확률의 비 " +
      "<span class='sym-pi'>π<sub>θ</sub></span> ÷ (뽑히는 확률)이다. 단추로 분포를 고른 뒤 T 를 문제의 값에 맞추고 풀이와 견주어 보라.",
  });
  const sets = {
    body: { p: [0.5, 0.3, 0.2], label: "본문 예" },
    p7: { p: [0.6, 0.3, 0.1], label: "문제 7" },
  };
  let cur = "body";
  const st = { T: 0.5 }; // 처음 화면은 본문의 T = 0.5 (T = 1 이면 두 막대가 같아 차이가 안 보인다)
  const bar = GW.h("div", { class: "w-controls" }, f.controls);
  GW.segmented(bar, {
    options: Object.entries(sets).map(([k, s]) => [k, s.label]),
    value: cur,
    onchange: (k) => { cur = k; draw(); },
  });
  GW.slider(f.controls, {
    label: "샘플링 온도 T", min: 0.2, max: 2, step: 0.05, value: st.T, fmt: (v) => v.toFixed(2),
    oninput: (v) => { st.T = v; draw(); },
  });
  const c = GW.chart(f.stage, { x: [0, 3], y: [0, 1], xticks: [], ylabel: "확률", h: 260, margin: { b: 36 }, label: "세 토큰의 확률: 모델 대 샘플러" });
  GW.legend(f.stage, [
    ["cs-pi", "모델의 확률 <span class='sym-pi'>π<sub>θ</sub></span>"],
    ["c2", "샘플링 온도 T 로 뽑히는 확률"],
  ]);

  function sampled(p, T) {
    const z = p.map((v) => Math.log(v) / T);
    const m = Math.max(...z);
    const e = z.map((v) => Math.exp(v - m));
    const s = e.reduce((a, b) => a + b, 0);
    return e.map((v) => v / s);
  }

  function draw() {
    c.layer.innerHTML = ""; c.top.innerHTML = "";
    const p = sets[cur].p;
    const q = sampled(p, st.T);
    const names = ["토큰 1", "토큰 2", "토큰 3"];
    p.forEach((v, i) => {
      const x0 = i + 0.14, w = 0.34;
      GW.s("rect", { class: "fs-pi", x: c.X(x0), y: c.Y(v), width: c.X(x0 + w) - c.X(x0), height: c.Y(0) - c.Y(v), rx: 3 }, c.layer);
      GW.s("rect", { class: "f2", style: { opacity: 0.55 }, x: c.X(x0 + w), y: c.Y(q[i]), width: c.X(x0 + 2 * w) - c.X(x0 + w), height: c.Y(0) - c.Y(q[i]), rx: 3 }, c.layer);
      c.text(x0 + w / 2, v + 0.03, v.toFixed(2), "strong", "middle");
      c.text(x0 + 1.5 * w, q[i] + 0.03, q[i].toFixed(3), "", "middle");
      GW.s("text", { class: "w-tick", x: c.X(i + 0.5), y: c.Y(0) + 18, "text-anchor": "middle", text: names[i] }, c.top);
    });
    f.readout.innerHTML =
      `T = <b>${st.T.toFixed(2)}</b> · 뽑히는 확률 [<b>${q.map((v) => v.toFixed(3)).join(", ")}</b>] · ` +
      `<span class='sym-ratio'>w</span> = [${p.map((v, i) => GW.fmt(v / q[i], 2)).join(", ")}]`;
  }
  draw();
});
