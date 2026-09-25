// 3지선다 정책 그래디언트: 소프트맥스 정책 π = softmax(z), 보상 r.
// 정확한 그래디언트 ∂J/∂z_k = π_k (r_k − J)  vs  샘플 1개 추정 (r_a + c)(e_a − π).
// 보상에 상수 c 를 더해도 정확한 그래디언트는 그대로지만, 샘플 추정은 요동친다 → Ch3 의 분산 문제 예고.
GW.register("pg-bandit", (el) => {
  const f = GW.frame(el, {
    title: "세 개의 답 중 하나를 고르는 정책 — 그래디언트는 어디로 미는가",
    caption:
      "막대는 각 답을 고를 확률 π, 막대 위 화살표는 정확한 그래디언트가 로짓을 미는 방향과 크기(π<sub>k</sub>(r<sub>k</sub> − J)). " +
      "‘기대값으로 한 걸음’은 VPG, ‘샘플 1개로 한 걸음’은 다음 장의 REINFORCE 다. 보상에 상수 c 를 더한 뒤 두 방식의 학습 곡선을 비교해 보라.",
  });
  const ACT = ["서울입니다", "부산입니다", "서울이요"];
  const R = [1.0, 0.0, 0.6];
  const Z0 = [-0.6, 0.9, 0.0];
  const lr = 0.8;
  let z = Z0.slice(), c = 0, hist = [], rng = GW.rng(7), stepN = 0, mode = null;

  const softmax = (v) => { const m = Math.max(...v); const e = v.map((x) => Math.exp(x - m)); const s = e.reduce((a, b) => a + b); return e.map((x) => x / s); };
  const J = (p) => p.reduce((a, pk, k) => a + pk * R[k], 0);

  GW.button(f.controls, "기대값으로 한 걸음 (VPG)", () => step("exact"));
  GW.button(f.controls, "샘플 1개로 한 걸음", () => step("sample"));
  GW.button(f.controls, "20걸음", () => { for (let i = 0; i < 20; i++) step(mode || "exact", true); draw(); });
  GW.button(f.controls, "처음으로", reset);
  GW.slider(f.controls, { label: "보상에 더할 상수 c", min: -2, max: 5, step: 0.5, value: 0, fmt: (v) => GW.fmt(v, 1), oninput: (v) => { c = v; reset(); } });

  const row = GW.h("div", { style: { display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: "0.8rem" } }, f.stage);
  const left = GW.h("div", {}, row), right = GW.h("div", {}, row);
  const bars = GW.chart(left, { w: 300, h: 250, x: [0, 3], y: [0, 1], xticks: [], yticks: [0, 0.25, 0.5, 0.75, 1], ylabel: "확률 π", margin: { b: 44, l: 44 }, label: "답별 확률" });
  GW.legend(right, [["c1", "J (기대 보상)"]]);
  const line = GW.chart(right, { w: 300, h: 226, x: [0, 40], y: [0, 1], xlabel: "걸음", ylabel: "J", margin: { l: 40 }, label: "기대 보상 변화" });

  function reset() { z = Z0.slice(); hist = [J(softmax(z))]; rng = GW.rng(7); stepN = 0; mode = null; draw(); }

  function step(kind, silent) {
    mode = kind;
    const p = softmax(z);
    const Jv = J(p);
    if (kind === "exact") {
      for (let k = 0; k < 3; k++) z[k] += lr * p[k] * (R[k] - Jv); // 상수 c 는 상쇄되어 사라진다
    } else {
      let u = rng(), a = 0;
      while (a < 2 && u > p[a]) { u -= p[a]; a++; }
      const w = R[a] + c;
      for (let k = 0; k < 3; k++) z[k] += lr * w * ((k === a ? 1 : 0) - p[k]);
      f.lastSample = { a, w };
    }
    stepN++;
    hist.push(J(softmax(z)));
    if (hist.length > 41) hist.shift();
    if (!silent) draw();
  }

  function draw() {
    const p = softmax(z), Jv = J(p);
    bars.layer.innerHTML = ""; bars.top.innerHTML = "";
    for (let k = 0; k < 3; k++) {
      const x0 = k + 0.2, x1 = k + 0.8;
      GW.s("rect", { class: "f1", x: bars.X(x0), y: bars.Y(p[k]), width: bars.X(x1) - bars.X(x0), height: Math.max(0, bars.Y(0) - bars.Y(p[k])), rx: 4 }, bars.layer);
      GW.s("text", { class: "w-label strong", x: bars.X(k + 0.5), y: bars.Y(p[k]) - 6, "text-anchor": "middle", text: p[k].toFixed(2) }, bars.top);
      GW.s("text", { class: "w-tick", x: bars.X(k + 0.5), y: bars.Y(0) + 16, "text-anchor": "middle", text: ACT[k] }, bars.top);
      GW.s("text", { class: "w-tick", x: bars.X(k + 0.5), y: bars.Y(0) + 31, "text-anchor": "middle", text: "r = " + R[k] }, bars.top);
      const g = p[k] * (R[k] - Jv);
      const len = GW.clamp(g * 260, -60, 60);
      const xm = bars.X(k + 0.8) - 4, yb = bars.Y(Math.min(1, p[k])) - 22;
      if (Math.abs(len) > 1.5) {
        const cls = g > 0 ? "cgood" : "cbad";
        GW.s("line", { class: "w-line " + cls, x1: xm + 16, x2: xm + 16, y1: yb, y2: yb - len, "stroke-width": 3 }, bars.top);
        GW.s("path", { class: g > 0 ? "fgood" : "fbad", d: `M${xm + 11},${yb - len + (g > 0 ? 6 : -6)} L${xm + 16},${yb - len} L${xm + 21},${yb - len + (g > 0 ? 6 : -6)} Z` }, bars.top);
      }
    }
    line.layer.innerHTML = "";
    line.path(hist.map((v, i) => [i, v]), "c1");
    line.dot(hist.length - 1, hist[hist.length - 1], "f1", 4);
    const ls = f.lastSample && mode === "sample" ? ` · 방금 뽑은 답 <b>${ACT[f.lastSample.a]}</b>, 가중치 r+c = <b>${GW.fmt(f.lastSample.w, 1)}</b>` : "";
    f.readout.innerHTML = `걸음 <b>${stepN}</b> · 기대 보상 J = <b>${Jv.toFixed(3)}</b>${ls}`;
  }
  reset();
});
