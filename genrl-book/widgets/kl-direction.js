// 순KL vs 역KL: 봉우리 두 개인 목표 분포 p 에 봉우리 하나짜리 모델 q = N(μ, s²) 를 맞춘다.
// 순KL  KL(p‖q) 최소화 = SFT(크로스 엔트로피)  → 평균·분산 맞추기, 골짜기까지 덮는다.
// 역KL  KL(q‖p) 최소화 = KL 제약 RL          → 한 봉우리를 골라 그 안에 머문다.
GW.register("kl-direction", (el) => {
  const f = GW.frame(el, {
    title: "같은 목표, 다른 방향의 KL — SFT는 덮고, RL은 고른다",
    caption:
      "초록은 목표 분포(SFT의 정답 분포 p<sub>data</sub>, RL의 최적 정책 π*), 파랑은 봉우리 하나밖에 못 만드는 모델 π<sub>θ</sub>. " +
      "회색 띠는 목표가 거의 0인 ‘골짜기’ — 모델이 여기에 두는 확률은 데이터에도, 좋은 답에도 없는 응답, 즉 모델 자신의 실수다.",
  });
  const st = { sep: 2.2, w: 0.5, mode: "both" };
  GW.segmented(f.controls, {
    options: [["fwd", "SFT식 (순KL)"], ["rev", "RL식 (역KL)"], ["both", "둘 다"]],
    value: st.mode,
    onchange: (v) => { st.mode = v; draw(); },
  });
  GW.slider(f.controls, { label: "봉우리 간격", min: 0.5, max: 3.5, step: 0.1, value: st.sep, fmt: (v) => v.toFixed(1), oninput: (v) => { st.sep = v; draw(); } });
  GW.slider(f.controls, { label: "왼쪽 봉우리 비중", min: 0.1, max: 0.9, step: 0.05, value: st.w, fmt: (v) => Math.round(v * 100) + "%", oninput: (v) => { st.w = v; draw(); } });

  GW.legend(f.stage, [
    ["cs-tgt", "목표 분포 p (p<sub>data</sub> 또는 π*)"],
    ["cs-pi", "순KL로 맞춘 π<sub>θ</sub> (SFT)"],
    ["cs-pi dash", "역KL로 맞춘 π<sub>θ</sub> (RL)", "dash"],
  ]);
  const X0 = -6, X1 = 6, N = 600, dx = (X1 - X0) / N;
  const xs = Array.from({ length: N + 1 }, (_, i) => X0 + i * dx);
  const c = GW.chart(f.stage, { x: [X0, X1], y: [0, 0.85], xlabel: "응답 공간 (한 줄로 펼친 그림)", ylabel: "확률 밀도", h: 280, label: "순KL과 역KL 맞춤" });
  c.clip();

  const gauss = (x, m, s) => Math.exp(-0.5 * ((x - m) / s) ** 2) / (s * Math.sqrt(2 * Math.PI));
  const sd = 0.55;
  const p = (x) => st.w * gauss(x, -st.sep, sd) + (1 - st.w) * gauss(x, st.sep, sd);

  // 순KL 최적: 모멘트 맞추기 (가우스 모델의 닫힌 해)
  function fitForward() {
    const m = st.w * -st.sep + (1 - st.w) * st.sep;
    const v = st.w * (sd ** 2 + st.sep ** 2) + (1 - st.w) * (sd ** 2 + st.sep ** 2) - m * m;
    return { m, s: Math.sqrt(v) };
  }
  // 역KL 최적: 격자 탐색으로 KL(q‖p) 의 전역 최소
  function klqp(m, s) {
    let k = 0;
    for (const x of xs) { const q = gauss(x, m, s); if (q > 1e-12) k += q * (Math.log(q) - Math.log(p(x) + 1e-300)) * dx; }
    return k;
  }
  function klpq(m, s) {
    let k = 0;
    for (const x of xs) { const pp = p(x); if (pp > 1e-12) k += pp * (Math.log(pp) - Math.log(gauss(x, m, s) + 1e-300)) * dx; }
    return k;
  }
  function fitReverse() {
    let best = { k: Infinity };
    for (let m = -4; m <= 4; m += 0.25) for (let s = 0.3; s <= 3; s += 0.15) {
      const k = klqp(m, s); if (k < best.k) best = { k, m, s };
    }
    const b0 = best; // 근처를 촘촘히 다시
    for (let m = b0.m - 0.25; m <= b0.m + 0.25; m += 0.025) for (let s = Math.max(0.2, b0.s - 0.15); s <= b0.s + 0.15; s += 0.0125) {
      const k = klqp(m, s); if (k < best.k) best = { k, m, s };
    }
    return best;
  }
  const valley = (m, s) => { // 두 봉우리 사이 골짜기(목표 밀도가 봉우리 높이의 5% 미만, 음영 구간)에 모델이 둔 확률
    const peak = Math.max(p(-st.sep), p(st.sep));
    let mass = 0; for (const x of xs) if (p(x) < 0.05 * peak && Math.abs(x) < st.sep) mass += gauss(x, m, s) * dx;
    return mass;
  };

  function draw() {
    c.layer.innerHTML = ""; c.top.innerHTML = "";
    const peak = Math.max(p(-st.sep), p(st.sep));
    // 골짜기 음영
    let start = null;
    for (let i = 0; i <= N; i++) {
      const inV = p(xs[i]) < 0.05 * peak && Math.abs(xs[i]) < st.sep;
      if (inV && start === null) start = xs[i];
      if ((!inV || i === N) && start !== null) {
        GW.s("rect", { class: "fneutral", x: c.X(start), y: c.Y(0.85), width: c.X(xs[i]) - c.X(start), height: c.Y(0) - c.Y(0.85) }, c.layer);
        start = null;
      }
    }
    const area = xs.map((x) => [x, p(x)]);
    GW.s("path", { class: "fs-tgt", opacity: 0.18, d: "M" + c.X(X0) + "," + c.Y(0) + area.map(([x, y]) => "L" + c.X(x).toFixed(1) + "," + c.Y(y).toFixed(1)).join("") + "L" + c.X(X1) + "," + c.Y(0) + "Z" }, c.layer);
    c.path(area, "cs-tgt");
    const F = fitForward(), R = fitReverse();
    if (st.mode !== "rev") c.fn((x) => gauss(x, F.m, F.s), "cs-pi", 300);
    if (st.mode !== "fwd") c.fn((x) => gauss(x, R.m, R.s), "cs-pi dash", 300);
    const kf = klpq(F.m, F.s), kr = klqp(R.m, R.s);
    f.readout.innerHTML =
      (st.mode !== "rev" ? `<b>SFT식</b> μ=${GW.fmt(F.m, 2)}, 골짜기에 둔 확률 <b>${Math.round(valley(F.m, F.s) * 100)}%</b> · ` : "") +
      (st.mode !== "fwd" ? `<b>RL식</b> μ=${GW.fmt(R.m, 2)}, 골짜기에 둔 확률 <b>${Math.round(valley(R.m, R.s) * 100)}%</b>, 버린 봉우리의 확률 <b>${Math.round((R.m > 0 ? st.w : 1 - st.w) * 100)}%</b>` : "") +
      `<br><span class="sym-KL">KL</span>(<span class="sym-tgt">p</span>‖<span class="sym-pi">π<sub>θ</sub></span>) 최소 = ${GW.fmt(kf, 3)} · <span class="sym-KL">KL</span>(<span class="sym-pi">π<sub>θ</sub></span>‖<span class="sym-tgt">p</span>) 최소 = ${GW.fmt(kr, 3)}`;
  }
  c.hover((x) => `x = ${GW.fmt(x, 2)}<br>목표 p = ${GW.fmt(p(x), 3)}`);
  draw();
});
