// GAE(λ): 토큰별 어드밴티지를 비평가의 예측으로 나눠 주기.
// 응답 "17×3 = 10×3 + 7×3 = 30 + 21 = 51" 을 10토큰으로 보고, 끝에서만 보상(정답 1 / 오답 0)을 준다.
// V* = 실제 가치(이 접두어에서 결국 맞힐 확률), V̂ = 비평가의 예측 (품질 슬라이더로 오차를 섞는다).
// δ_t = r_t + V̂(s_{t+1}) − V̂(s_t),  Â_t = Σ_l λ^l δ_{t+l}   (γ = 1)
GW.register("gae-lambda", (el) => {
  const f = GW.frame(el, {
    title: "GAE — 끝에 한 번 받은 점수를 토큰별로 나누기",
    caption:
      "마름모는 완벽한 비평가가 알려주는 ‘진짜 기여도’(그 토큰이 결국 맞힐 확률을 얼마나 바꿨나). " +
      "λ = 1 이면 Â<sub>t</sub> = R − V̂(s<sub>t</sub>) — 비평가를 베이스라인으로만 쓰고, 좋은 수든 나쁜 수든 결과를 뒤집어쓴다. " +
      "λ = 0 이면 Â<sub>t</sub> = δ<sub>t</sub> — 비평가를 전적으로 믿어 정확히 짚어내지만, 비평가가 틀리면 그 오류가 그대로 어드밴티지가 된다.",
  });
  const SC = {
    right: { toks: ["17×3은", "10×3", "+", "7×3", "=", "30", "+", "21", "=", "51"], V: [0.45, 0.45, 0.7, 0.7, 0.72, 0.72, 0.8, 0.8, 0.95, 0.95], R: 1 },
    wrong: { toks: ["17×3은", "10×3", "+", "7×3", "=", "30", "+", "24", "=", "54"], V: [0.45, 0.45, 0.7, 0.7, 0.72, 0.72, 0.8, 0.8, 0.05, 0.05], R: 0 },
  };
  const st = { sc: "wrong", lam: 0.95, q: 0 };
  const noise = (() => { const r = GW.rng(11); return Array.from({ length: 10 }, () => r.normal()); })();

  GW.segmented(f.controls, { options: [["right", "정답 응답 (R = 1)"], ["wrong", "오답 응답 (R = 0)"]], value: st.sc, onchange: (v) => { st.sc = v; draw(); } });
  GW.slider(f.controls, { label: "λ", min: 0, max: 1, step: 0.05, value: st.lam, fmt: (v) => v.toFixed(2), oninput: (v) => { st.lam = v; draw(); } });
  GW.slider(f.controls, { label: "비평가 오차", min: 0, max: 1, step: 0.05, value: st.q, fmt: (v) => (v === 0 ? "완벽" : v.toFixed(2)), oninput: (v) => { st.q = v; draw(); } });

  GW.legend(f.stage, [["cm dash", "실제 가치 V*", "dash"], ["c3", "비평가 예측 V̂"]]);
  const top = GW.chart(f.stage, { w: 560, h: 150, x: [0, 10], y: [0, 1], xticks: [], yticks: [0, 0.5, 1], ylabel: "가치", margin: { b: 10, l: 48 }, label: "가치 예측" });
  GW.legend(f.stage, [["c1", "Â > 0 (강화)"], ["c2", "Â < 0 (억제)"], ["c4", "진짜 기여도 (완벽한 비평가, λ=0)"]]);
  const bot = GW.chart(f.stage, { w: 560, h: 230, x: [0, 10], y: [-1, 1], xticks: [], yticks: [-1, -0.5, 0, 0.5, 1], ylabel: "어드밴티지 Â", margin: { b: 30, l: 48 }, label: "토큰별 어드밴티지" });

  function gae(V, R, lam) {
    const T = V.length, d = V.map((v, t) => (t < T - 1 ? V[t + 1] : R) - v);
    const A = new Array(T); let run = 0;
    for (let t = T - 1; t >= 0; t--) { run = d[t] + lam * run; A[t] = run; }
    return A;
  }

  function draw() {
    const s = SC[st.sc];
    const Vh = s.V.map((v, t) => GW.clamp(v + st.q * 0.28 * noise[t], 0, 1));
    const A = gae(Vh, s.R, st.lam);
    const truth = gae(s.V, s.R, 0);

    top.layer.innerHTML = ""; top.top.innerHTML = "";
    top.path(s.V.map((v, t) => [t + 0.5, v]).concat([[10, s.R]]), "cm dash");
    top.path(Vh.map((v, t) => [t + 0.5, v]), "c3");
    Vh.forEach((v, t) => top.dot(t + 0.5, v, "f3", 3.5));
    top.dot(10, s.R, "fm", 4);
    top.text(9.9, s.R > 0.5 ? s.R - 0.12 : s.R + 0.08, "R = " + s.R, "strong", "end");

    bot.layer.innerHTML = ""; bot.top.innerHTML = "";
    A.forEach((a, t) => {
      const x0 = bot.X(t + 0.18), x1 = bot.X(t + 0.82);
      const y0 = bot.Y(Math.max(0, a)), y1 = bot.Y(Math.min(0, a));
      GW.s("rect", { class: a >= 0 ? "f1" : "f2", x: x0, y: y0, width: x1 - x0, height: Math.max(1, y1 - y0), rx: 3 }, bot.layer);
      const xm = bot.X(t + 0.5), yt = bot.Y(truth[t]);
      GW.s("path", { class: "f4", d: `M${xm},${yt - 5} L${xm + 5},${yt} L${xm},${yt + 5} L${xm - 5},${yt} Z` }, bot.top);
      GW.s("text", { class: "w-tick", x: xm, y: bot.Y(-1) + 18, "text-anchor": "middle", text: s.toks[t] }, bot.top);
    });

    const key = st.sc === "wrong" ? 7 : 1;
    const other = st.sc === "wrong" ? 1 : 7;
    f.readout.innerHTML =
      `‘${s.toks[key]}’ 의 Â = <b>${GW.fmt(A[key], 2)}</b> (진짜 기여도 ${GW.fmt(truth[key], 2)}) · ` +
      `‘${s.toks[other]}’ 의 Â = <b>${GW.fmt(A[other], 2)}</b> (진짜 기여도 ${GW.fmt(truth[other], 2)})`;
  }
  bot.hover((x) => {
    const t = Math.floor(x); if (t < 0 || t > 9) return "";
    const s = SC[st.sc];
    const Vh = s.V.map((v, i) => GW.clamp(v + st.q * 0.28 * noise[i], 0, 1));
    const A = gae(Vh, s.R, st.lam), truth = gae(s.V, s.R, 0);
    return `토큰 ‘${s.toks[t]}’<br>V̂(s<sub>t</sub>) = ${GW.fmt(Vh[t], 2)}<br>Â = ${GW.fmt(A[t], 2)} · 진짜 ${GW.fmt(truth[t], 2)}`;
  });
  draw();
});
