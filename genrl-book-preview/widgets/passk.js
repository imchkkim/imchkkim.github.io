// pass@k 교차 — 예시 모델 (실제 논문 수치 아님).
// 문제마다 성공확률 q 가 있다. pass@k = 1 − (1 − q)^k 의 평균.
// 베이스: q 가 넓게 퍼져 있음(작은 q 의 문제도 많음). RLVR: q ≥ τ 인 문제는 1 − (1−q)^m 으로 압축(첨예화),
// q < τ 인 문제는 q × 0.1 로 거의 사라짐(탐색 공간 축소).
GW.register("passk", (el) => {
  const f = GW.frame(el, {
    title: "pass@k 교차 — RLVR은 ‘한 번에 맞히기’를 사고, ‘여러 번 중 한 번’을 판다 (예시 모델)",
    caption:
      "400개 가상 문제로 만든 예시 모델이다. 실제 수치는 Yue et al.(2025)을 볼 것. " +
      "m 은 RL이 성공 경로를 얼마나 압축하는지(샘플 m 번에 한 번 맞히던 것을 한 번에), τ 는 이보다 성공확률이 낮은 문제를 RL이 잃는 문턱이다. " +
      "가로축은 log 눈금.",
  });
  let m = 6, tau = 0.02;
  GW.slider(f.controls, { label: "압축 m", min: 1, max: 16, step: 1, value: m, oninput: (v) => { m = v; draw(); } });
  GW.slider(f.controls, { label: "잃는 문턱 τ", min: 0, max: 0.1, step: 0.005, value: tau, fmt: (v) => v.toFixed(3), oninput: (v) => { tau = v; draw(); } });
  GW.legend(f.stage, [["c1", "베이스 모델"], ["c2", "RLVR 모델"]]);
  const c = GW.chart(f.stage, { x: [0, 8], y: [0, 1], xticks: [0, 1, 2, 3, 4, 5, 6, 7, 8], xfmt: (v) => String(2 ** v), xlabel: "시도 횟수 k (log 눈금)", ylabel: "pass@k", h: 280, label: "pass@k 곡선" });

  const rng = GW.rng(12345);
  const qs = [];
  for (let i = 0; i < 400; i++) {
    const u = rng();
    qs.push(u < 0.3 ? 0.3 + 0.6 * rng() : u < 0.6 ? 0.02 + 0.28 * rng() : u < 0.85 ? 0.001 + 0.019 * rng() : 0);
  }
  const rl = (q) => (q >= tau ? 1 - (1 - q) ** m : q * 0.1);
  const pass = (k, g) => qs.reduce((a, q) => a + 1 - (1 - g(q)) ** k, 0) / qs.length;

  function draw() {
    c.layer.innerHTML = ""; c.top.innerHTML = "";
    const base = (lk) => pass(2 ** lk, (q) => q), rlv = (lk) => pass(2 ** lk, rl);
    c.fn(base, "c1", 80);
    c.fn(rlv, "c2", 80);
    let cross = null;
    for (let lk = 0; lk <= 8; lk += 0.02) if (base(lk) > rlv(lk)) { cross = lk; break; }
    if (cross !== null) {
      c.dot(cross, base(cross), "fm", 5);
      c.text(cross, base(cross) + 0.07, "역전 k ≈ " + Math.round(2 ** cross), "strong", "middle");
    }
    f.readout.innerHTML =
      `pass@1: 베이스 <b>${base(0).toFixed(2)}</b> vs RLVR <b>${rlv(0).toFixed(2)}</b> · ` +
      `pass@256: 베이스 <b>${base(8).toFixed(2)}</b> vs RLVR <b>${rlv(8).toFixed(2)}</b>` +
      (cross === null ? " · 이 설정에서는 역전이 없다 (τ = 0 이면 RL이 잃는 문제가 없다)" : "");
  }
  c.hover((lk) => (lk < 0 || lk > 8 ? "" : `k = ${Math.round(2 ** lk)}<br>베이스 ${pass(2 ** lk, (q) => q).toFixed(3)}<br>RLVR ${pass(2 ** lk, rl).toFixed(3)}`));
  draw();
});
