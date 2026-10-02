// Bradley-Terry: 이길 확률 = σ(실력 차). 실력 차 슬라이더 + 12경기 시뮬레이션.
// 시뮬레이션은 "7승 5패는 실력 차이의 증거인가"를 몸으로 느끼게 한다.
// 원고의 위젯 줄에 붙은 data-set 으로 모양을 고른다.
//   (없음)         : 11장 「Bradley-Terry 모델」 절 — 곡선과 12경기
//   data-set="mle" : 11장 「DPO 안의 BT」 절 — 문제 6 의 값(실력 차 0)을 불러오는 단추와
//                    12경기짜리 대회를 1000번 치러 7승 이상이 나온 비율을 세는 단추.
//                    처음 화면은 실력 차 1(73%)로 연다 — 0(반반)으로 열면 곡선 위의 점이 한가운데 뭉개진다
// 설명글에는 문제의 답을 적지 않는다.
GW.register("bt-sigmoid", (el) => {
  const mle = el.dataset.set === "mle";
  const f = GW.frame(el, {
    title: "Bradley-Terry — 이길 확률은 실력 차의 시그모이드",
    caption: mle
      ? "‘문제 6 (나)’ 단추는 두 선수의 실력 차를 0으로 둔다. ‘12경기 해 보기’를 여러 번 눌러 기록이 어떻게 흔들리는지 보고, " +
        "‘대회 1000번’으로 12경기짜리 대회를 1000번 치러 A가 7승 이상 한 비율을 세어 풀이와 견주어 보라."
      : "곡선은 P(A가 B를 이김) = σ(<span class='sym-R'>r<sub>A</sub></span> − <span class='sym-R'>r<sub>B</sub></span>). 괄호 안의 Elo 점수는 같은 실력 차를 체스 레이팅 단위(×400/ln 10)로 바꾼 것. " +
        "‘12경기 해 보기’는 이 확률로 실제 경기를 치러 승패를 센다.",
  });
  let gap = mle ? 1 : 0.5, rng = GW.rng(3), games = [], tally = null;
  const sGap = GW.slider(f.controls, {
    label: "실력 차 <span class=\"sym-R\">r<sub>A</sub></span> − <span class=\"sym-R\">r<sub>B</sub></span>", min: -5, max: 5, step: 0.05, value: gap,
    fmt: (v) => `${GW.fmt(v, 2)} (Elo ${Math.round((v * 400) / Math.LN10)})`,
    oninput: (v) => { gap = v; games = []; tally = null; draw(); },
  });
  if (mle) GW.button(f.controls, "문제 6 (나)", () => { gap = 0; sGap.value = 0; games = []; tally = null; draw(); });
  GW.button(f.controls, "12경기 해 보기", () => {
    const p = GW.sigmoid(gap);
    games = Array.from({ length: 12 }, () => rng() < p);
    draw();
  });
  if (mle) GW.button(f.controls, "대회 1000번", () => {
    const p = GW.sigmoid(gap);
    let hit = 0;
    for (let k = 0; k < 1000; k++) {
      let w = 0;
      for (let g = 0; g < 12; g++) if (rng() < p) w++;
      if (w >= 7) hit++;
    }
    tally = hit;
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
    const lines = [];
    if (games.length) {
      const w = games.filter(Boolean).length;
      const est = w === 0 || w === 12 ? (w ? "+∞" : "−∞") : GW.fmt(Math.log(w / (12 - w)), 2);
      lines.push(
        games.map((g) => (g ? "<b>승</b>" : "패")).join(" · ") +
        `<br>결과 <b>${w}승 ${12 - w}패</b> → 이 기록만 보고 추정한 실력 차(최대우도) ln(${w}/${12 - w}) = <b>${est}</b> · 실제 실력 차 ${GW.fmt(gap, 2)}`
      );
    }
    if (tally !== null) lines.push(`12경기짜리 대회 1000번 가운데 A가 7승 이상 한 대회: <b>${tally}번</b> (${(tally / 10).toFixed(1)}%) · 실제 실력 차 ${GW.fmt(gap, 2)}`);
    strip.innerHTML = lines.join("<br>");
  }
  c.hover((x) => `실력 차 ${GW.fmt(x, 2)}<br>이길 확률 ${(GW.sigmoid(x) * 100).toFixed(1)}%`);
  draw();
});
