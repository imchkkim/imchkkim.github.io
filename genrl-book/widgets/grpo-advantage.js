// GRPO 어드밴티지 계산기: 한 프롬프트의 G=8 롤아웃.
// 롤아웃을 클릭하면 보상이 1 → 0.5 → 0 → 1 로 바뀐다. Â = (r − μ)/σ (σ 토글 가능).
GW.register("grpo-advantage", (el) => {
  const f = GW.frame(el, {
    title: "GRPO 어드밴티지 — 같은 문제에 대한 8개 답을 서로 비교한다",
    caption:
      "위쪽 원을 클릭하면 그 답의 보상이 1(정답) → 0.5(부분 점수) → 0(오답) 순으로 바뀐다. 막대는 각 답이 받는 어드밴티지 <span class='sym-A'>Â</span>. " +
      "모두 같은 보상이면 모든 <span class='sym-A'>Â</span> 가 0 — 이 문제에서는 아무것도 배우지 않는다. ‘<span style='color:var(--sym-008deb, #008deb)'>σ</span>로 나누기’를 끄면 Dr. GRPO의 어드밴티지가 된다.",
  });
  const G = 8;
  let r = [1, 1, 1, 0, 1, 1, 0, 1];
  let useStd = true;
  const presets = {
    ex: [1, 1, 1, 0, 1, 1, 0, 1],
    all1: Array(G).fill(1),
    all0: Array(G).fill(0),
    one: [0, 0, 0, 0, 1, 0, 0, 0],
  };
  const seg = GW.segmented(f.controls, {
    options: [["ex", "본문 예제 (6/8)"], ["one", "1/8 만 정답"], ["all1", "모두 정답"], ["all0", "모두 오답"]],
    value: "ex",
    onchange: (k) => { r = presets[k].slice(); draw(); },
  });
  GW.toggle(f.controls, { label: "<span style='color:var(--sym-008deb, #008deb)'>σ</span>로 나누기", value: true, onchange: (v) => { useStd = v; draw(); } });

  const c = GW.chart(f.stage, { w: 560, h: 330, x: [0, G], y: [-3, 3], xticks: [], yticks: [-3, -2, -1, 0, 1, 2, 3], ylabel: "어드밴티지 Â", margin: { t: 70, b: 28 }, label: "롤아웃별 어드밴티지" });
  const chips = GW.s("g", {}, c.svg);

  function stats() {
    const mu = r.reduce((a, b) => a + b, 0) / G;
    const sd = Math.sqrt(r.reduce((a, x) => a + (x - mu) ** 2, 0) / G);
    const A = r.map((x) => (sd < 1e-9 ? 0 : useStd ? (x - mu) / sd : x - mu));
    return { mu, sd, A };
  }

  function draw() {
    const { mu, sd, A } = stats();
    chips.innerHTML = "";
    c.layer.innerHTML = "";
    c.top.innerHTML = "";
    for (let i = 0; i < G; i++) {
      const cx = c.X(i + 0.5);
      const g = GW.s("g", { style: { cursor: "pointer" }, role: "button", "aria-label": `답 ${i + 1} 보상 바꾸기` }, chips);
      const cls = r[i] === 1 ? "fgood" : r[i] === 0 ? "fbad" : "f4";
      GW.s("circle", { class: "w-dot " + cls, cx, cy: 22, r: 15 }, g);
      GW.s("text", { x: cx, y: 27, "text-anchor": "middle", style: { fill: "#fff", fontSize: "14px", fontWeight: 700 }, text: r[i] === 1 ? "✓" : r[i] === 0 ? "✗" : "½" }, g);
      GW.s("text", { class: "w-tick", x: cx, y: 54, "text-anchor": "middle", text: `y${i + 1}  r=${r[i]}` }, g);
      g.addEventListener("click", () => {
        r[i] = r[i] === 1 ? 0.5 : r[i] === 0.5 ? 0 : 1;
        seg.set(null);
        draw();
      });
      const a = A[i];
      const y0 = c.Y(0), y1 = c.Y(GW.clamp(a, -3, 3));
      GW.s("rect", { class: "fs-A", x: c.X(i + 0.22), width: c.X(i + 0.78) - c.X(i + 0.22), y: Math.min(y0, y1), height: Math.max(1, Math.abs(y1 - y0)), rx: 3 }, c.layer);
      GW.s("text", { class: "w-label strong", x: cx, y: a >= 0 ? y1 - 6 : y1 + 15, "text-anchor": "middle", text: GW.fmt(a, 2) }, c.top);
    }
    const mass = A.reduce((s, a) => s + Math.abs(a), 0);
    f.readout.innerHTML =
      `평균 <span class="sym-V">μ</span> = <b>${mu.toFixed(3)}</b> · 표준편차 <span style='color:var(--sym-008deb, #008deb)'>σ</span> = <b>${sd.toFixed(3)}</b> · 학습 시그널 Σ|<span class="sym-A">Â</span>| = <b>${mass.toFixed(2)}</b>` +
      (sd < 1e-9 ? " — <b>모든 답의 보상이 같다. 그래디언트 0.</b>" : "");
  }
  draw();
});
