// Bradley-Terry: 이길 확률 = σ(실력 차). 실력 차 슬라이더 + 12경기 시뮬레이션.
// 시뮬레이션은 "7승 5패는 실력 차이의 증거인가"를 몸으로 느끼게 한다.
GW.register("bt-sigmoid", (el) => {
  const f = GW.frame(el, {
    title: "Bradley-Terry — 이길 확률은 실력 차의 시그모이드",
    caption:
      "곡선은 P(A가 B를 이김) = σ(<span class='sym-R'>r<sub>A</sub></span> − <span class='sym-R'>r<sub>B</sub></span>). 괄호 안의 ELO 점수는 같은 실력 차를 체스 레이팅 단위(×400/ln 10)로 바꾼 것. " +
      "‘12경기 해 보기’는 이 확률로 실제 경기를 치러 승패를 센다 — 실력이 같아도 7승 5패는 흔하다.",
  });
  let gap = 0.5, rng = GW.rng(3), games = [];
  GW.slider(f.controls, {
    label: "실력 차 <span class=\"sym-R\">r<sub>A</sub></span> − <span class=\"sym-R\">r<sub>B</sub></span>", min: -5, max: 5, step: 0.05, value: gap,
    fmt: (v) => `${GW.fmt(v, 2)} (ELO ${Math.round((v * 400) / Math.LN10)})`,
    oninput: (v) => { gap = v; games = []; draw(); },
  });
  GW.button(f.controls, "12경기 해 보기", () => {
    const p = GW.sigmoid(gap);
    games = Array.from({ length: 12 }, () => rng() < p);
    draw();
  });
  const c = GW.chart(f.stage, { x: [-5, 5], y: [0, 1], xlabel: "실력 차 rA − rB", ylabel: "A가 이길 확률", h: 260, label: "Bradley-Terry 곡선" });
  const strip = GW.h("div", { class: "w-readout" }, f.stage);

  function draw() {
    c.layer.innerHTML = ""; c.top.innerHTML = "";
    GW.s("line", { class: "w-line cm dash thin", x1: c.X(-5), x2: c.X(5), y1: c.Y(0.5), y2: c.Y(0.5) }, c.layer);
    c.fn(GW.sigmoid, "c1");
    const p = GW.sigmoid(gap);
    GW.s("line", { class: "w-line cs-R dash thin", x1: c.X(gap), x2: c.X(gap), y1: c.Y(0), y2: c.Y(p) }, c.layer);
    c.dot(gap, p, "f1", 6);
    c.text(gap + 0.15, p - 0.05, `${(p * 100).toFixed(1)}%`, "strong");
    f.readout.innerHTML = `A가 이길 확률 σ(<span class="sym-R">${GW.fmt(gap, 2)}</span>) = <b>${(p * 100).toFixed(1)}%</b>`;
    if (games.length) {
      const w = games.filter(Boolean).length;
      const mle = w === 0 || w === 12 ? (w ? "+∞" : "−∞") : GW.fmt(Math.log(w / (12 - w)), 2);
      strip.innerHTML =
        games.map((g) => (g ? "<b>승</b>" : "패")).join(" · ") +
        `<br>결과 <b>${w}승 ${12 - w}패</b> → 이 기록만 보고 추정한 실력 차(최대우도) ln(${w}/${12 - w}) = <b>${mle}</b> · 실제 실력 차 ${GW.fmt(gap, 2)}`;
    } else strip.innerHTML = "";
  }
  c.hover((x) => `실력 차 ${GW.fmt(x, 2)}<br>이길 확률 ${(GW.sigmoid(x) * 100).toFixed(1)}%`);
  draw();
});
