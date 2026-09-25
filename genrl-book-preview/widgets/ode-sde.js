// ODE 샘플러 vs 같은 주변분포를 주는 SDE 샘플러 (Flow-GRPO / DanceGRPO 의 핵심 아이디어, 1차원 장난감).
// 노이즈 x(0) ~ N(0,1) 에서 데이터 x(1) ~ N(2, 0.5²) 로 가는 직선 보간 흐름.
// 시각 t 의 주변분포 N(m_t, V_t), m_t = 2t, V_t = (1−t)² + 0.25t².
// ODE: dx = v dt,  v(x,t) = 2 + V'(t)/(2V_t)·(x − m_t)
// SDE: dx = [v + (g²/2)·∇log p_t(x)] dt + g dW,  ∇log p_t = −(x − m_t)/V_t  → 모든 t 에서 주변분포가 ODE 와 같다.
GW.register("ode-sde", (el) => {
  const f = GW.frame(el, {
    title: "같은 시작 노이즈에서 8장 생성하기 — ODE는 한 장, SDE는 여덟 장",
    caption:
      "흐름 매칭 모델은 보통 결정론적 ODE로 샘플링한다. 같은 시작 노이즈에서 G개를 뽑으면 G개가 전부 같은 결과라 그룹 내 보상 분산이 0 — GRPO가 배울 것이 없다. " +
      "Flow-GRPO·DanceGRPO는 ODE를 ‘모든 시각에서 같은 분포를 주는’ SDE로 바꿔 스텝마다 노이즈를 넣는다. 오른쪽 히스토그램(2000장)은 노이즈 세기와 무관하게 목표 분포(점선)와 일치한다.",
  });
  const st = { g: 0.8, seed: 5 };
  const K = 60;
  GW.slider(f.controls, { label: "SDE 노이즈 세기 g", min: 0, max: 1.5, step: 0.05, value: st.g, fmt: (v) => v.toFixed(2), oninput: (v) => { st.g = v; draw(); } });
  GW.button(f.controls, "다른 시작 노이즈", () => { st.seed++; draw(); });
  const row = GW.h("div", { style: { display: "grid", gridTemplateColumns: "minmax(0,3fr) minmax(0,2fr)", gap: "0.8rem" } }, f.stage);
  const L = GW.h("div", {}, row), Rt = GW.h("div", {}, row);
  GW.legend(L, [["cm dash", "ODE 8개 (전부 겹침)", "dash"], ["c1", "SDE 8개"]]);
  const c = GW.chart(L, { x: [0, 1], y: [-2.5, 4], w: 360, h: 260, xlabel: "시각 t (0 = 노이즈, 1 = 데이터)", ylabel: "x", label: "샘플 경로" });
  c.clip();
  GW.legend(Rt, [["c1", "SDE 결과 2000개"], ["cm dash", "목표 N(2, 0.5²)", "dash"]]);
  const h = GW.chart(Rt, { x: [0, 4], y: [0, 1], w: 240, h: 236, xlabel: "x(1)", yticks: [], label: "결과 분포" });

  const m = (t) => 2 * t, V = (t) => (1 - t) ** 2 + 0.25 * t * t, dV = (t) => -2 * (1 - t) + 0.5 * t;
  const vel = (x, t) => 2 + (dV(t) / (2 * V(t))) * (x - m(t));
  const score = (x, t) => -(x - m(t)) / V(t);
  function path(x0, g, rng) {
    const xs = [x0];
    let x = x0;
    for (let k = 0; k < K; k++) {
      const t = k / K, dt = 1 / K;
      x += (vel(x, t) + 0.5 * g * g * score(x, t)) * dt + g * Math.sqrt(dt) * rng.normal();
      xs.push(x);
    }
    return xs;
  }
  const reward = (x) => Math.exp(-Math.pow(x - 2.3, 2) / 0.1);

  function draw() {
    c.layer.innerHTML = ""; h.layer.innerHTML = "";
    const x0 = GW.rng(st.seed).normal();
    const ode = path(x0, 0, GW.rng(1));
    const rng = GW.rng(100 + st.seed);
    const sde = [];
    for (let i = 0; i < 8; i++) sde.push(path(x0, st.g, rng));
    for (const p of sde) c.path(p.map((x, k) => [k / K, x]), "c1 thin");
    c.path(ode.map((x, k) => [k / K, x]), "cm dash");
    c.dot(0, x0, "fm", 5);
    // 결과 분포
    const ends = [], r2 = GW.rng(9);
    for (let i = 0; i < 2000; i++) ends.push(path(r2.normal(), st.g, r2)[K]);
    const bins = 32, w = 4 / bins, cnt = new Array(bins).fill(0);
    for (const e of ends) { const b = Math.floor(e / w); if (b >= 0 && b < bins) cnt[b]++; }
    const dens = cnt.map((k) => k / (ends.length * w));
    const ymax = 0.9;
    h.y = [0, ymax];
    for (let b = 0; b < bins; b++) {
      GW.s("rect", { class: "fa1", x: h.X(b * w) + 0.5, y: h.Y(Math.min(ymax, dens[b])), width: h.X(w) - h.X(0) - 1, height: h.Y(0) - h.Y(Math.min(ymax, dens[b])) }, h.layer);
    }
    h.fn((x) => Math.exp(-Math.pow(x - 2, 2) / (2 * 0.25)) / Math.sqrt(2 * Math.PI * 0.25), "cm dash");
    const rs = sde.map((p) => reward(p[K]));
    const mean = rs.reduce((a, b) => a + b, 0) / 8;
    const sd = Math.sqrt(rs.reduce((a, b) => a + (b - mean) ** 2, 0) / 8);
    const eMean = ends.reduce((a, b) => a + b, 0) / ends.length;
    const eSd = Math.sqrt(ends.reduce((a, b) => a + (b - eMean) ** 2, 0) / ends.length);
    f.readout.innerHTML =
      `같은 시작점 8개의 보상 표준편차 — ODE <b>0.000</b> · SDE <b>${sd.toFixed(3)}</b> (GRPO 어드밴티지의 재료)` +
      ` &nbsp;|&nbsp; SDE 결과 2000개: 평균 <b>${eMean.toFixed(2)}</b>, 표준편차 <b>${eSd.toFixed(2)}</b> (목표 2.00, 0.50)`;
  }
  draw();
});
