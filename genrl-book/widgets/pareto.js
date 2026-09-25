// 파레토 프론티어와 가중합: 정확성 × 간결성 평면의 응답들.
// 가중치 w 를 돌리면 가중합이 고르는 응답이 프론티어 위를 이동한다. 오목하게 들어간 C 는 어떤 w 로도 선택되지 않는다.
GW.register("pareto", (el) => {
  const f = GW.frame(el, {
    title: "파레토 프론티어 — 가중치를 돌리면 누가 뽑히나",
    caption:
      "채운 점은 파레토 최적(다른 어떤 응답에도 두 축 모두에서 밀리지 않음), 빈 점은 지배당한 응답. 점선은 현재 가중치의 등고선이고, " +
      "가중합 점수는 이 선을 오른쪽 위로 밀어 마지막에 닿는 응답을 고른다. C는 파레토 최적인데도 어떤 가중치로도 뽑히지 않는다 — 프론티어가 오목하게 들어간 곳이기 때문이다.",
  });
  const base = [
    { id: "A", x: 0.95, y: 0.2, note: "정확하지만 장황" },
    { id: "B", x: 0.85, y: 0.5 },
    { id: "C", x: 0.62, y: 0.64 },
    { id: "D", x: 0.45, y: 0.85 },
    { id: "F", x: 0.2, y: 0.95, note: "짧지만 부정확" },
    { id: "G", x: 0.55, y: 0.45 },
    { id: "H", x: 0.35, y: 0.6 },
    { id: "I", x: 0.75, y: 0.35 },
    { id: "J", x: 0.3, y: 0.3 },
  ];
  const E = { id: "E", x: 0.7, y: 0.72, note: "개선된 모델의 새 응답" };
  let w = 0.5, withE = false;
  GW.slider(f.controls, { label: "정확성 가중치 w", min: 0, max: 1, step: 0.01, value: w, fmt: (v) => `${v.toFixed(2)} / 간결성 ${(1 - v).toFixed(2)}`, oninput: (v) => { w = v; draw(); } });
  GW.toggle(f.controls, { label: "모델 개선: 새 응답 E 추가", value: false, onchange: (v) => { withE = v; draw(); } });
  GW.legend(f.stage, [["c1", "파레토 프론티어"], ["cm dash", "가중합 등고선", "dash"]]);
  const c = GW.chart(f.stage, { x: [0, 1], y: [0, 1], xlabel: "정확성", ylabel: "간결성", w: 460, h: 380, label: "정확성과 간결성의 파레토 프론티어" });
  c.clip();

  const dominated = (p, pts) => pts.some((q) => q !== p && q.x >= p.x && q.y >= p.y && (q.x > p.x || q.y > p.y));
  function draw() {
    c.layer.innerHTML = ""; c.top.innerHTML = "";
    const pts = withE ? [...base, E] : base;
    const front = pts.filter((p) => !dominated(p, pts)).sort((a, b) => a.x - b.x);
    // 계단식 프론티어 (지배 영역의 경계)
    const step = [[0, front[0].y]];
    front.forEach((p, i) => { step.push([p.x, p.y]); if (i < front.length - 1) step.push([p.x, front[i + 1].y]); });
    step.push([front[front.length - 1].x, 0]);
    c.path(step, "c1 thin");
    let best = null, bv = -1;
    for (const p of pts) { const s = w * p.x + (1 - w) * p.y; if (s > bv) { bv = s; best = p; } }
    // 등고선 w x + (1-w) y = bv
    if (w > 0.001 && w < 0.999) c.path([[0, bv / (1 - w)], [bv / w, 0]], "cm dash thin");
    else if (w <= 0.001) c.path([[0, bv], [1, bv]], "cm dash thin");
    else c.path([[bv, 0], [bv, 1]], "cm dash thin");
    for (const p of pts) {
      const dom = dominated(p, pts);
      GW.s("circle", { class: "w-dot " + (dom ? "" : "f1"), cx: c.X(p.x), cy: c.Y(p.y), r: p === best ? 9 : 6, style: dom ? { fill: "var(--w-surface)", stroke: "var(--w-muted)", strokeWidth: 1.5 } : {} }, c.top);
      c.text(p.x + 0.02, p.y + 0.025, p.id, p === best ? "strong" : "", "start");
    }
    const cDom = withE && dominated(base[2], pts);
    f.readout.innerHTML =
      `가중합이 고른 응답: <b>${best.id}</b>${best.note ? " (" + best.note + ")" : ""} · 점수 ${bv.toFixed(3)}` +
      (cDom ? " · <b>E가 C를 지배한다</b> — 프론티어가 바깥으로 밀려났다." : "");
  }
  draw();
});
