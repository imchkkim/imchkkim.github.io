// 데이터가 얼마나 낡았나 — 오프라인 / 반복(iterative) / 온라인 비교.
// 장난감: 정책 = 정규분포 N(μ_θ, 1). 학습하며 μ_θ(t) = D·(1 − e^{−t/τ}) 로 목표를 향해 이동.
// 데이터는 마지막 갱신 시점의 정책 N(μ_data, 1) 에서 뽑았다.
// 임포턴스 가중치 w = N(x; μ_θ,1)/N(x; μ_data,1) 의 유효 표본 비율 = 1/E[w²] = exp(−Δ²), Δ = μ_θ − μ_data.
GW.register("stale-data", (el) => {
  const f = GW.frame(el, {
    title: "학습이 진행될수록 데이터는 낡는다 — 유효 표본 비율",
    caption:
      "세로축은 데이터 1000개 중 ‘지금 정책의 눈으로 보면’ 실제로 쓸모 있는 몫(임포턴스 가중치의 유효 표본 비율 exp(−Δ²), Δ는 데이터를 만든 정책과 지금 정책의 거리)이다. " +
      "오프라인은 한 번 만든 데이터로 끝까지 가므로 곡선이 바닥으로 떨어진다. 반복(iterative) 방식은 라운드마다 새 데이터를 만들어 톱니 모양으로 회복한다. 온라인은 매 걸음 갱신하므로 항상 100%다 — 대신 매 걸음 생성·평가 비용을 낸다.",
  });
  const T = 100, tau = 30;
  const st = { D: 2.5, rounds: 3 };
  GW.slider(f.controls, { label: "학습이 가는 거리 D", min: 0.5, max: 4, step: 0.1, value: st.D, fmt: (v) => v.toFixed(1), oninput: (v) => { st.D = v; draw(); } });
  GW.slider(f.controls, { label: "반복 라운드 수", min: 1, max: 10, step: 1, value: st.rounds, fmt: (v) => v + "회", oninput: (v) => { st.rounds = v; draw(); } });
  GW.legend(f.stage, [
    ["c1", "오프라인 (갱신 없음)"],
    ["c2", "반복 (라운드마다 갱신)"],
    ["c3 dash", "온라인 (매 걸음 갱신)", "dash"],
  ]);
  const c = GW.chart(f.stage, { x: [0, T], y: [0, 1], xlabel: "학습 걸음", ylabel: "유효 표본 비율", yfmt: (v) => Math.round(v * 100) + "%", h: 280, label: "유효 표본 비율" });
  c.clip();
  const mu = (t) => st.D * (1 - Math.exp(-t / tau));
  const offline = (t) => Math.exp(-Math.pow(mu(t) - mu(0), 2));
  const iter = (t) => {
    const L = T / st.rounds;
    const t0 = Math.floor(Math.min(t, T - 1e-9) / L) * L;
    return Math.exp(-Math.pow(mu(t) - mu(t0), 2));
  };
  function draw() {
    c.layer.innerHTML = "";
    c.fn(offline, "c1", 200);
    c.fn(iter, "c2", 600);
    c.path([[0, 1], [T, 1]], "c3 dash");
    const avg = (g) => { let s = 0; for (let i = 0; i <= 1000; i++) s += g((T * i) / 1000); return s / 1001; };
    f.readout.innerHTML =
      `학습 끝의 유효 비율 — 오프라인 <b>${Math.round(offline(T) * 100)}%</b> · 반복 <b>${Math.round(iter(T) * 100)}%</b> · 온라인 <b>100%</b>` +
      ` &nbsp;|&nbsp; 전체 평균 — 오프라인 <b>${Math.round(avg(offline) * 100)}%</b> · 반복 <b>${Math.round(avg(iter) * 100)}%</b>` +
      ` &nbsp;|&nbsp; 데이터 생성 횟수 — 1 · ${st.rounds} · ${T}`;
  }
  c.hover((t) => `걸음 ${Math.round(t)}<br>오프라인 ${Math.round(offline(t) * 100)}%<br>반복 ${Math.round(iter(t) * 100)}%`);
  draw();
});
