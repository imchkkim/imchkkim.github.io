// REINFORCE 의 분산과 베이스라인.
// Ch2 의 세 답 정책(π = softmax(z), r = [1, 0, 0.6])에서 배치 N 개로 그래디언트를 추정한다.
// 왼쪽: 처음 정책에서 "서울입니다" 로짓 성분의 추정치 1,500번 — 흩어진 정도(분산)
// 오른쪽: 같은 설정으로 5번 따로 학습한 곡선 — 흩어진 추정이 학습을 어떻게 흔드는가
GW.register("reinforce-variance", (el) => {
  const f = GW.frame(el, {
    title: "베이스라인이 흔들림을 얼마나 줄이는가",
    caption:
      "모든 설정에서 추정치의 평균(점선 근처)은 참값 0.098 에 머문다 — 베이스라인은 방향을 바꾸지 않는다. " +
      "바뀌는 것은 폭이다. 보상에 상수 c 를 더하고 베이스라인을 끄면 히스토그램이 넓게 퍼지고 학습 곡선 다섯 개가 제각각 흩어진다. " +
      "‘같은 프롬프트 평균’은 N개 중 자기를 뺀 나머지의 평균을 베이스라인으로 쓴다 (Ch16·18 의 RLOO·GRPO 의 씨앗).",
  });
  const R = [1.0, 0.0, 0.6];
  const Z0 = [-0.6, 0.9, 0.0];
  const LR = 0.5, STEPS = 40, SEEDS = 5, HIST_N = 1500;
  const st = { mode: "none", c: 0, N: 4, seed: 1 };

  const softmax = (v) => { const m = Math.max(...v); const e = v.map((x) => Math.exp(x - m)); const s = e.reduce((a, b) => a + b); return e.map((x) => x / s); };
  const Jof = (p) => p.reduce((a, pk, k) => a + pk * R[k], 0);
  const sample = (p, u) => { let a = 0; while (a < 2 && u > p[a]) { u -= p[a]; a++; } return a; };

  GW.segmented(f.controls, {
    options: [["none", "베이스라인 없음"], ["const", "고정 b = 0.5"], ["ema", "이동평균"], ["loo", "같은 프롬프트 평균"]],
    value: st.mode,
    onchange: (v) => { st.mode = v; draw(); },
  });
  GW.slider(f.controls, { label: "보상에 더할 상수 c", min: 0, max: 5, step: 0.5, value: st.c, fmt: (v) => GW.fmt(v, 1), oninput: (v) => { st.c = v; draw(); } });
  GW.slider(f.controls, { label: "배치 크기 N", min: 1, max: 16, step: 1, value: st.N, fmt: (v) => String(v), oninput: (v) => { st.N = v; draw(); } });
  GW.button(f.controls, "다시 뽑기", () => { st.seed++; draw(); });

  const row = GW.h("div", { style: { display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: "0.8rem" } }, f.stage);
  const left = GW.h("div", {}, row), right = GW.h("div", {}, row);
  GW.legend(left, [["c1", "추정치 분포"], ["c2 dash", "참값 ∂J/∂z", "dash"]]);
  const hist = GW.chart(left, { w: 300, h: 240, x: [-1, 1], y: [0, 1], yticks: [], xlabel: "‘서울입니다’ 로짓의 그래디언트 추정", margin: { l: 16, r: 12 }, label: "그래디언트 추정치 히스토그램" });
  GW.legend(right, [["cs-J", "J — 학습 5회 (각각 다른 난수)"], ["cm dash", "정확한 기대값 (VPG)", "dash"]]);
  const curves = GW.chart(right, { w: 300, h: 240, x: [0, STEPS], y: [0, 1], xlabel: "걸음", ylabel: "기대 보상 J", margin: { l: 40, r: 12 }, label: "학습 곡선" });

  // 배치 하나의 가중치 (r_i + c − b_i) 를 모드에 맞게 계산
  function weights(rs, b) {
    const n = rs.length;
    if (st.mode === "none") return rs.map((r) => r);
    if (st.mode === "const") return rs.map((r) => r - 0.5);
    if (st.mode === "ema") return rs.map((r) => r - b);
    // loo: 자기를 뺀 나머지 평균. N=1 이면 비교할 대상이 없으므로 b=0.
    if (n < 2) return rs.map((r) => r);
    const s = rs.reduce((a, x) => a + x, 0);
    return rs.map((r) => r - (s - r) / (n - 1));
  }

  // 배치 그래디언트 (로짓 3성분)
  function batchGrad(p, rng, b) {
    const acts = [], rs = [];
    for (let i = 0; i < st.N; i++) { const a = sample(p, rng()); acts.push(a); rs.push(R[a] + st.c); }
    const w = weights(rs, b);
    const g = [0, 0, 0];
    for (let i = 0; i < st.N; i++) for (let k = 0; k < 3; k++) g[k] += (w[i] * ((k === acts[i] ? 1 : 0) - p[k])) / st.N;
    return { g, meanR: rs.reduce((a, x) => a + x, 0) / st.N };
  }

  function draw() {
    // ── 왼쪽: 처음 정책에서 추정치 분포
    const p0 = softmax(Z0), J0 = Jof(p0);
    const truth = p0[0] * (R[0] - J0);
    const rng = GW.rng(1000 + st.seed);
    const est = [];
    for (let i = 0; i < HIST_N; i++) est.push(batchGrad(p0, rng, J0 + st.c).g[0]);
    const mean = est.reduce((a, x) => a + x, 0) / HIST_N;
    const sd = Math.sqrt(est.reduce((a, x) => a + (x - mean) ** 2, 0) / (HIST_N - 1));
    const sorted = est.slice().sort((a, b) => a - b);
    const span = Math.max(0.3, Math.abs(sorted[Math.floor(HIST_N * 0.995)] - truth), Math.abs(sorted[Math.floor(HIST_N * 0.005)] - truth)) * 1.08;
    hist.x = [truth - span, truth + span];
    const BINS = 36, bw = (2 * span) / BINS, cnt = new Array(BINS).fill(0);
    for (const v of est) { const i = Math.floor((v - hist.x[0]) / bw); if (i >= 0 && i < BINS) cnt[i]++; }
    const maxc = Math.max(...cnt);
    hist.y = [0, maxc * 1.1];
    hist.drawAxes();
    hist.layer.innerHTML = ""; hist.top.innerHTML = "";
    cnt.forEach((n, i) => {
      if (!n) return;
      const x0 = hist.x[0] + i * bw;
      GW.s("rect", { class: "f1", x: hist.X(x0) + 0.5, y: hist.Y(n), width: Math.max(0.5, hist.X(x0 + bw) - hist.X(x0) - 1), height: hist.Y(0) - hist.Y(n), rx: 1.5 }, hist.layer);
    });
    GW.s("line", { class: "w-line c2 dash", x1: hist.X(truth), x2: hist.X(truth), y1: hist.Y(0), y2: hist.Y(hist.y[1]) }, hist.top);

    // ── 오른쪽: 학습 곡선 5개 + 정확한 VPG
    curves.layer.innerHTML = ""; curves.top.innerHTML = "";
    let z = Z0.slice(); const exact = [Jof(softmax(z))];
    for (let t = 0; t < STEPS; t++) { const p = softmax(z), J = Jof(p); for (let k = 0; k < 3; k++) z[k] += LR * p[k] * (R[k] - J); exact.push(Jof(softmax(z))); }
    curves.path(exact.map((v, i) => [i, v]), "cm dash");
    const finals = [];
    for (let s = 0; s < SEEDS; s++) {
      const r2 = GW.rng(50 * st.seed + s + 1);
      z = Z0.slice();
      let b = Jof(softmax(Z0)) + st.c; // 이동평균은 처음부터 데워진 상태로 시작
      const js = [Jof(softmax(z))];
      for (let t = 0; t < STEPS; t++) {
        const p = softmax(z);
        const { g, meanR } = batchGrad(p, r2, b);
        for (let k = 0; k < 3; k++) z[k] += LR * g[k];
        b = 0.8 * b + 0.2 * meanR;
        js.push(Jof(softmax(z)));
      }
      finals.push(js[STEPS]);
      curves.path(js.map((v, i) => [i, v]), "cs-J thin");
    }
    const fm = finals.reduce((a, x) => a + x, 0) / SEEDS;
    const fsd = Math.sqrt(finals.reduce((a, x) => a + (x - fm) ** 2, 0) / (SEEDS - 1));
    const warn = st.mode === "loo" && st.N < 2 ? " · <b>N = 1 이면 비교할 다른 샘플이 없어 베이스라인이 0 이 된다</b>" : "";
    f.readout.innerHTML =
      `추정치 평균 <b>${GW.fmt(mean, 3)}</b> (참값 ${GW.fmt(truth, 3)}) · 표준편차 <b>${GW.fmt(sd, 3)}</b> · ` +
      `40걸음 뒤 J 의 편차(5회) <b>${GW.fmt(fsd, 3)}</b>` + warn;
  }
  hist.hover((x) => `추정치 ≈ ${GW.fmt(x, 3)}`);
  draw();
});
