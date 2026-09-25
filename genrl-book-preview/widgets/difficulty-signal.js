// 적정 난이도: 정답률 p 인 문제에서 G 개 롤아웃을 뽑을 때
//  (1) 그룹에 시그널이 있을 확률 1 − p^G − (1−p)^G
//  (2) 롤아웃 하나당 기대 시그널 E[Σ|Â|]/G  — σ로 나눌 때 2·E[σ̂], 안 나눌 때 2·E[μ̂(1−μ̂)]
GW.register("difficulty-signal", (el) => {
  const f = GW.frame(el, {
    title: "문제의 정답률 p 와 GRPO 학습 시그널",
    caption:
      "곡선은 정답률 p 인 문제 하나에서 G 개 롤아웃을 뽑았을 때의 기댓값(이항분포로 정확히 계산). " +
      "p 가 0 이나 1 에 가까우면 그룹 전체가 같은 보상을 받을 확률이 커져 시그널이 사라진다. " +
      "σ로 나눈 곡선이 양 끝에서 덜 가라앉는 것에 주목 — 아주 쉽거나 어려운 문제의 가중치를 키우는 효과다(Ch18 Dr. GRPO).",
  });
  let G = 8, p = 0.3;
  GW.slider(f.controls, { label: "그룹 크기 G", min: 2, max: 32, step: 1, value: G, oninput: (v) => { G = v; draw(); } });
  GW.slider(f.controls, { label: "정답률 p", min: 0.01, max: 0.99, step: 0.01, value: p, fmt: (v) => v.toFixed(2), oninput: (v) => { p = v; draw(); } });
  GW.legend(f.stage, [["c1", "시그널이 있을 확률"], ["c2", "롤아웃당 시그널 (σ로 나눔)"], ["c3 dash", "롤아웃당 시그널 (σ 없음)", "dash"]]);
  const c = GW.chart(f.stage, { x: [0, 1], y: [0, 1], xlabel: "문제의 정답률 p", ylabel: "값", h: 280, label: "난이도별 학습 시그널" });

  function binom(n, k) { let s = 1; for (let i = 0; i < k; i++) s = (s * (n - i)) / (i + 1); return s; }
  function calc(pp) {
    const P = 1 - pp ** G - (1 - pp) ** G;
    let es = 0, en = 0;
    for (let k = 0; k <= G; k++) {
      const w = binom(G, k) * pp ** k * (1 - pp) ** (G - k);
      const m = k / G;
      es += w * 2 * Math.sqrt(m * (1 - m));
      en += w * 2 * m * (1 - m);
    }
    return { P, es, en };
  }
  function draw() {
    c.layer.innerHTML = ""; c.top.innerHTML = "";
    GW.s("rect", { class: "fa3", x: c.X(0.3), y: c.Y(1), width: c.X(0.7) - c.X(0.3), height: c.Y(0) - c.Y(1) }, c.layer);
    c.text(0.5, 0.04, "흔히 말하는 적정 구간 30–70%", "", "middle", c.layer);
    c.fn((x) => calc(x).P, "c1");
    c.fn((x) => calc(x).es, "c2");
    c.fn((x) => calc(x).en, "c3 dash");
    const v = calc(p);
    GW.s("line", { class: "w-line cm dash thin", x1: c.X(p), x2: c.X(p), y1: c.Y(0), y2: c.Y(1) }, c.layer);
    c.dot(p, v.P, "f1"); c.dot(p, v.es, "f2"); c.dot(p, v.en, "f3");
    f.readout.innerHTML =
      `p = <b>${p.toFixed(2)}</b>, G = <b>${G}</b> → 그룹 전체가 같은 보상일 확률 <b>${(1 - v.P).toFixed(3)}</b> · ` +
      `롤아웃당 시그널 <b>${v.es.toFixed(3)}</b> (σ 없음 <b>${v.en.toFixed(3)}</b>)`;
  }
  c.hover((x) => { if (x < 0 || x > 1) return ""; const v = calc(x); return `p = ${x.toFixed(2)}<br>시그널 확률 ${v.P.toFixed(3)}<br>σ로 나눔 ${v.es.toFixed(3)}<br>σ 없음 ${v.en.toFixed(3)}`; });
  draw();
});
