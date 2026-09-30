// REINFORCE 의 분산과 베이스라인.
// 세 답 정책(π = softmax(z), r = [1, 0, 0.6])에서 배치 N 개로 그래디언트를 추정한다.
// 왼쪽: 처음 정책에서 "서울입니다" 로짓 성분의 추정치 1,500번 — 흩어진 정도(분산)
// 오른쪽: 같은 설정으로 5번 따로 학습한 곡선 — 흩어진 추정이 학습을 어떻게 흔드는가
// 선택지 묶음은 원고의 위젯 줄에 붙은 data-set 으로 고른다.
//   data-set="baseline" : 「베이스라인」 절 — 없음 / 고정 b = 0.5 / 이동평균
//   (없음)               : 「프롬프트별 베이스라인」 절 — 위 셋 + 같은 프롬프트 평균(자기 뺀 평균 / 자기 포함 평균), 문제 7 의 값 단추
// 설명글에는 문제의 답(추정치 평균이 참값의 몇 배인가)을 적지 않는다.
GW.register("reinforce-variance", (el) => {
  const Nsym = "<span style='color:var(--sym-5f970c, #5f970c)'>N</span>";
  const sets = {
    baseline: {
      modes: ["none", "const", "ema"],
      caption:
        "점선은 참값이다. 보상에 더할 상수 c 를 올리고 베이스라인을 끄거나 켜서, 히스토그램의 중심과 폭, 학습 곡선 다섯 개가 흩어진 정도를 견줘 보라. " +
        "이동평균은 지난 배치들의 평균 보상을 베이스라인으로 쓴다.",
    },
    default: {
      modes: ["none", "const", "ema", "loo", "incl"],
      caption:
        "‘자기 뺀 평균’과 ‘자기 포함 평균’은 같은 프롬프트에서 한 번에 뽑은 " + Nsym + "개의 보상으로 베이스라인을 만든다. 앞의 것은 자기를 뺀 나머지의 평균, 뒤의 것은 자기까지 넣은 평균이다. ‘없음’은 베이스라인을 쓰지 않는다. " +
        "추정치 평균을 참값(점선)과 견줘 보라. 단추는 아래 문제 7 의 값(" + Nsym + " = 4, c = 0, 자기 포함)을 불러온다.",
      preset: { label: "문제 7 값 불러오기", mode: "incl", c: 0, N: 4 },
    },
  };
  const S = sets[el.dataset.set] || sets.default;
  const f = GW.frame(el, { title: "베이스라인이 흔들림을 얼마나 줄이는가", caption: S.caption });
  const R = [1.0, 0.0, 0.6];
  const Z0 = [-0.6, 0.9, 0.0];
  const LR = 0.5, STEPS = 40, SEEDS = 5, HIST_N = 1500;
  const st = { mode: "none", c: 0, N: 4, seed: 1 };

  const softmax = (v) => { const m = Math.max(...v); const e = v.map((x) => Math.exp(x - m)); const s = e.reduce((a, b) => a + b); return e.map((x) => x / s); };
  const Jof = (p) => p.reduce((a, pk, k) => a + pk * R[k], 0);
  const sample = (p, u) => { let a = 0; while (a < 2 && u > p[a]) { u -= p[a]; a++; } return a; };

  // 선택지가 다섯이면 휴대폰 폭에서 단추 글자가 한 자씩 꺾이므로 짧은 이름을 쓴다.
  const MODE_LABEL = S.modes.length > 3
    ? { none: "없음", const: "고정 <span class=\"sym-V\">b</span> = 0.5", ema: "이동평균", loo: "자기 뺀 평균", incl: "자기 포함 평균" }
    : { none: "베이스라인 없음", const: "고정 <span class=\"sym-V\">b</span> = 0.5", ema: "이동평균" };
  const seg = GW.segmented(f.controls, {
    options: S.modes.map((m) => [m, MODE_LABEL[m]]),
    value: st.mode,
    onchange: (v) => { st.mode = v; draw(); },
  });
  const sC = GW.slider(f.controls, { label: "보상에 더할 상수 c", min: 0, max: 5, step: 0.5, value: st.c, fmt: (v) => GW.fmt(v, 1), oninput: (v) => { st.c = v; draw(); } });
  const sN = GW.slider(f.controls, { label: "배치 크기 " + Nsym, min: 1, max: 16, step: 1, value: st.N, fmt: (v) => String(v), oninput: (v) => { st.N = v; draw(); } });
  GW.button(f.controls, "다시 뽑기", () => { st.seed++; draw(); });
  if (S.preset) {
    GW.button(f.controls, S.preset.label, () => {
      Object.assign(st, { mode: S.preset.mode, c: S.preset.c, N: S.preset.N });
      seg.set(st.mode); sC.value = st.c; sN.value = st.N;
      draw();
    });
  }

  const row = GW.h("div", { style: { display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: "0.8rem" } }, f.stage);
  const left = GW.h("div", {}, row), right = GW.h("div", {}, row);
  GW.legend(left, [["c1", "추정치 분포"], ["c2 dash", "참값 ∂<span class=\"sym-J\">J</span>/∂z", "dash"]]);
  const hist = GW.chart(left, { w: 300, h: 240, x: [-1, 1], y: [0, 1], yticks: [], xlabel: "‘서울입니다’ 로짓의 그래디언트 추정", margin: { l: 16, r: 12 }, label: "그래디언트 추정치 히스토그램" });
  GW.legend(right, [["cs-J", "<span class=\"sym-J\">J</span> — 학습 5회 (각각 다른 난수)"], ["cm dash", "정확한 기대값 (VPG)", "dash"]]);
  const curves = GW.chart(right, { w: 300, h: 240, x: [0, STEPS], y: [0, 1], xlabel: "걸음", ylabel: "기대 보상 J", margin: { l: 40, r: 12 }, label: "학습 곡선" });

  // 배치 하나의 가중치 (r_i + c − b_i) 를 모드에 맞게 계산
  function weights(rs, b) {
    const n = rs.length;
    if (st.mode === "none") return rs.map((r) => r);
    if (st.mode === "const") return rs.map((r) => r - 0.5);
    if (st.mode === "ema") return rs.map((r) => r - b);
    const s = rs.reduce((a, x) => a + x, 0);
    // incl: 자기까지 넣은 평균.
    if (st.mode === "incl") return rs.map((r) => r - s / n);
    // loo: 자기를 뺀 나머지 평균. N=1 이면 비교할 대상이 없으므로 b=0.
    if (n < 2) return rs.map((r) => r);
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
    const warn = st.mode === "loo" && st.N < 2 ? " · <b>" + Nsym + " = 1 이면 비교할 다른 샘플이 없어 베이스라인이 0 이 된다</b>" : "";
    f.readout.innerHTML =
      `추정치 평균 <b>${GW.fmt(mean, 3)}</b> (참값 ${GW.fmt(truth, 3)}) · 표준편차 <b>${GW.fmt(sd, 3)}</b> · ` +
      `40걸음 뒤 <span class='sym-J'>J</span> 의 편차(5회) <b>${GW.fmt(fsd, 3)}</b>` + warn;
  }
  hist.hover((x) => `추정치 ≈ ${GW.fmt(x, 3)}`);
  draw();
});
