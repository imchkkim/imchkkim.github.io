// 디노이징 = 여러 스텝의 결정 과정. 1차원 장난감 디퓨전을 REINFORCE(그룹 평균 베이스라인)로 학습.
// 상태 x_t, 행동 x_{t-1} = μ_θ + σ·z,  μ_θ = (1 − a_t)·x_t + b_t  (a_t, b_t 가 학습되는 파라미터, σ·z = 탐색 노이즈)
// ∂ log p / ∂ b_t = z_t / σ,  ∂ log p / ∂ a_t = −x_t · z_t / σ.  그래디언트 = mean_i (r_i − r̄) · (위 값).
// 보상: 진짜 보상 = x0 ≈ 2.5 근처.  "보상 모델" = 진짜 보상 + x0 가 클수록 조금씩 더 주는 편향(포화형).
// 학습률 0.05 에서 보상 모델로 학습하면 진짜 보상은 약 25회에서 최고점 후 하락 (node 시뮬레이션으로 확인).
GW.register("denoise-mdp", (el) => {
  const f = GW.frame(el, {
    title: "노이즈는 탐색이고 μθ는 학습이다 — 1차원 디노이징을 정책 그래디언트로",
    caption:
      "선 하나가 이미지 하나의 디노이징 경로다(왼쪽 순수 노이즈 x<sub>T</sub> → 오른쪽 결과 x<sub>0</sub>). 진할수록 보상이 높다. " +
      "초록 띠는 ‘진짜로 좋은 이미지’다. 보상 모델은 진짜 보상에 더해 ‘x가 클수록 조금 더’ 점수를 주는 편향을 갖고 있다(예: 채도가 높을수록 좋아하는 미학 점수). " +
      "‘보상 모델로 학습’으로 50번 이상 학습시키면, 보상 모델 점수는 계속 오르는데 진짜 보상은 25회 근처에서 꺾인다. ‘진짜 보상으로 학습’과 비교해 보라.",
  });
  const T = 10, N = 32;
  const st = { sigma: 0.3, lr: 0.05, useProxy: true };
  let a = new Array(T).fill(0), b = new Array(T).fill(0), it = 0, hist = [], seed = 3;
  const trueR = (x) => Math.exp(-Math.pow(x - 2.5, 2) / 0.5);
  const proxyR = (x) => trueR(x) + 0.8 / (1 + Math.exp(-1.2 * (x - 3.5)));

  GW.segmented(f.controls, { options: [[true, "보상 모델로 학습"], [false, "진짜 보상으로 학습"]], value: true, onchange: (v) => { st.useProxy = v; reset(); } });
  GW.button(f.controls, "1번 학습", () => { train(1); draw(); });
  GW.button(f.controls, "10번 학습", () => { train(10); draw(); });
  GW.button(f.controls, "50번 학습", () => { train(50); draw(); });
  GW.button(f.controls, "처음으로", reset);
  GW.slider(f.controls, { label: "스텝 노이즈 σ", min: 0.05, max: 0.8, step: 0.05, value: st.sigma, fmt: (v) => v.toFixed(2), oninput: (v) => { st.sigma = v; reset(); } });

  const row = GW.h("div", { style: { display: "grid", gridTemplateColumns: "minmax(0,3fr) minmax(0,2fr)", gap: "0.8rem" } }, f.stage);
  const L = GW.h("div", {}, row), Rt = GW.h("div", {}, row);
  const c = GW.chart(L, { x: [0, T], y: [-3.5, 7], w: 360, h: 270, xticks: [0, 5, 10], xfmt: (v) => (v === 0 ? "x_T" : v === T ? "x_0" : "t=" + (T - v)), xlabel: "디노이징 스텝 →", ylabel: "x", label: "디노이징 경로" });
  c.clip();
  GW.legend(Rt, [["c2", "보상 모델 점수"], ["c3", "진짜 보상"]]);
  const h = GW.chart(Rt, { x: [0, 100], y: [0, 1], w: 250, h: 246, xlabel: "학습 횟수", label: "평균 보상" });
  h.clip();

  function rollout(rng) {
    const paths = [];
    for (let i = 0; i < N; i++) {
      const xs = [rng.normal()], zs = [];
      for (let t = 0; t < T; t++) {
        const z = rng.normal();
        zs.push(z);
        xs.push((1 - a[t]) * xs[t] + b[t] + st.sigma * z);
      }
      paths.push({ xs, zs, r: st.useProxy ? proxyR(xs[T]) : trueR(xs[T]), rt: trueR(xs[T]), rp: proxyR(xs[T]) });
    }
    return paths;
  }
  let rng = GW.rng(seed), paths = [];
  function train(k) {
    for (let j = 0; j < k; j++) {
      const P = rollout(rng);
      const mean = P.reduce((a, p) => a + p.r, 0) / N;
      for (let t = 0; t < T; t++) {
        let g = 0, ga = 0;
        for (const p of P) {
          g += (p.r - mean) * p.zs[t] / st.sigma;
          ga += (p.r - mean) * (p.zs[t] / st.sigma) * -p.xs[t];
        }
        b[t] += st.lr * (g / N);
        a[t] = GW.clamp(a[t] + st.lr * 0.3 * (ga / N), -0.2, 0.5);
      }
      it++;
      const E = rollout(GW.rng(1000 + it));
      hist.push([it, E.reduce((a, p) => a + p.rp, 0) / N, E.reduce((a, p) => a + p.rt, 0) / N]);
    }
    paths = rollout(GW.rng(500 + it));
  }
  function reset() {
    a = new Array(T).fill(0); b = new Array(T).fill(0); it = 0; rng = GW.rng(seed);
    paths = rollout(GW.rng(500));
    hist = [[0, paths.reduce((a, p) => a + p.rp, 0) / N, paths.reduce((a, p) => a + p.rt, 0) / N]];
    draw();
  }
  function draw() {
    c.layer.innerHTML = ""; c.top.innerHTML = "";
    GW.s("rect", { class: "fa3", x: c.X(T - 0.6), y: c.Y(3.05), width: c.X(T) - c.X(T - 0.6), height: c.Y(1.95) - c.Y(3.05) }, c.layer);
    for (const p of paths) {
      const e = c.path(p.xs.map((x, t) => [t, x]), "c1 thin");
      e.style.opacity = (0.15 + 0.85 * Math.min(1, p.r)).toFixed(2);
    }
    c.text(T - 0.1, 2.5, "진짜 좋은 영역", "", "end");
    c.text(T - 0.1, 5.4, "보상 모델의 편향 ↑", "", "end");
    h.x = [0, Math.max(100, it)]; h.drawAxes();
    h.layer.innerHTML = "";
    h.path(hist.map((q) => [q[0], q[1]]), "c2");
    h.path(hist.map((q) => [q[0], q[2]]), "c3");
    const last = hist[hist.length - 1];
    f.readout.innerHTML = `학습 <b>${it}</b>회 · 보상 모델 평균 <b>${last[1].toFixed(3)}</b> · 진짜 보상 평균 <b>${last[2].toFixed(3)}</b>`;
  }
  reset();
});
