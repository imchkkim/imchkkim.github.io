// GAE(λ): 토큰별 어드밴티지를 비평가의 예측으로 나눠 주기.
// 응답 "17×3 = 10×3 + 7×3 = 30 + 21 = 51" 을 10토큰으로 보고, 끝에서만 보상(정답 1 / 오답 0)을 준다.
// V* = 실제 가치(이 앞부분에서 결국 맞힐 확률), V̂ = 비평가의 예측 (품질 슬라이더로 오차를 섞는다).
// δ_t = r_t + V̂(s_{t+1}) − V̂(s_t),  Â_t = Σ_l λ^l δ_{t+l}   (γ = 1)
// 원고의 위젯 줄에 붙은 data-set 으로 절마다 다르게 연다. 설명글에는 문제의 답을 적지 않는다.
//   (없음)          : 4장 「GAE」 절 — 「문제 5 값」 단추(정답 응답, λ = 1, 비평가 완벽)
//   data-set="bias" : 4장 「비평가의 청구서」 절 — 문제 8. 비평가 단추에 「‘24’ 뒤 +0.3」(‘24’ 를 쓴 뒤의 앞부분을 0.3 높게 보는 비평가)을 더한다
GW.register("gae-lambda", (el) => {
  const LAM = "<span style='color:var(--sym-993600, #993600)'>λ</span>";
  const sets = {
    default: {
      caption:
        "마름모는 완벽한 비평가가 알려주는 ‘진짜 기여도’(그 토큰이 결국 맞힐 확률을 얼마나 바꿨나). " +
        LAM + " = 1 이면 <span class='sym-A'>Â<sub>t</sub></span> = <span class='sym-R'>R</span> − <span class='sym-V'>V̂</span>(<span style='color:var(--sym-0093b8, #0093b8)'>s<sub>t</sub></span>) — 비평가를 베이스라인으로만 쓰고, 좋은 수든 나쁜 수든 결과를 뒤집어쓴다. " +
        LAM + " = 0 이면 <span class='sym-A'>Â<sub>t</sub></span> = <span class='sym-A'>δ<sub>t</sub></span> — 비평가를 전적으로 믿어 정확히 짚어내지만, 비평가가 틀리면 그 오류가 그대로 어드밴티지가 된다. " +
        "「문제 5 값」 단추는 아래 문제 5 의 설정을 불러온다.",
      start: { sc: "wrong", lam: 0.95, q: 0, mode: "noise" },
      presets: [["문제 5 값", { sc: "right", lam: 1, q: 0, mode: "noise" }]],
      modes: false,
      ymax: 1,
    },
    bias: {
      caption:
        "마름모는 완벽한 비평가가 알려주는 ‘진짜 기여도’다. 「‘24’ 뒤 +0.3」 비평가는 ‘24’ 를 쓴 뒤의 모든 앞부분을 실제보다 0.3 높게 보고, 다른 앞부분은 정확히 본다. " +
        LAM + " 를 0 과 1 로 바꿔 가며 어느 토큰의 막대가 마름모에서 벗어나는지 보라. 「문제 8 값」 단추는 아래 문제 8 의 설정을 불러온다.",
      start: { sc: "wrong", lam: 0.95, q: 0, mode: "noise" },
      presets: [["문제 8 값", { sc: "wrong", lam: 0, q: 0, mode: "bias" }]],
      modes: true,
      ymax: 1.3,
    },
  };
  const S = sets[el.dataset.set] || sets.default;
  const f = GW.frame(el, {
    title: "GAE — 끝에 한 번 받은 점수를 토큰별로 나누기",
    caption: S.caption,
  });
  const SC = {
    right: { toks: ["17×3은", "10×3", "+", "7×3", "=", "30", "+", "21", "=", "51"], V: [0.45, 0.45, 0.7, 0.7, 0.72, 0.72, 0.8, 0.8, 0.95, 0.95], R: 1 },
    wrong: { toks: ["17×3은", "10×3", "+", "7×3", "=", "30", "+", "24", "=", "54"], V: [0.45, 0.45, 0.7, 0.7, 0.72, 0.72, 0.8, 0.8, 0.05, 0.05], R: 0 },
  };
  const BIAS_FROM = 8; // ‘24’(또는 ‘21’)를 쓴 뒤의 상태부터
  const st = Object.assign({}, S.start);
  const noise = (() => { const r = GW.rng(11); return Array.from({ length: 10 }, () => r.normal()); })();

  const bar = GW.h("div", { class: "w-controls" }, f.controls);
  S.presets.forEach(([label, p]) =>
    GW.button(bar, label, () => {
      Object.assign(st, p);
      segSc.set(st.sc); sLam.value = st.lam; sQ.value = st.q;
      if (segMode) segMode.set(st.mode);
      draw();
    })
  );
  const segSc = GW.segmented(f.controls, { options: [["right", "정답 응답 (<span class=\"sym-R\">R</span> = 1)"], ["wrong", "오답 응답 (<span class=\"sym-R\">R</span> = 0)"]], value: st.sc, onchange: (v) => { st.sc = v; draw(); } });
  const segMode = S.modes
    ? GW.segmented(f.controls, { options: [["noise", "비평가: 무작위 오차"], ["bias", "비평가: ‘24’ 뒤 +0.3"]], value: st.mode, onchange: (v) => { st.mode = v; draw(); } })
    : null;
  const sLam = GW.slider(f.controls, { label: LAM, min: 0, max: 1, step: 0.05, value: st.lam, fmt: (v) => v.toFixed(2), oninput: (v) => { st.lam = v; draw(); } });
  const sQ = GW.slider(f.controls, { label: "비평가 오차", min: 0, max: 1, step: 0.05, value: st.q, fmt: (v) => (v === 0 ? "완벽" : v.toFixed(2)), oninput: (v) => { st.q = v; draw(); } });

  GW.legend(f.stage, [["cm dash", "실제 가치 V*", "dash"], ["cs-V", "비평가 예측 <span class=\"sym-V\">V̂</span>"]]);
  const top = GW.chart(f.stage, { w: 560, h: 150, x: [0, 10], y: [0, S.ymax], xticks: [], yticks: [0, 0.5, 1], ylabel: "가치", margin: { b: 10, l: 48 }, label: "가치 예측" });
  GW.legend(f.stage, [["cs-A", "<span class=\"sym-A\">Â</span> (위: 강화, 아래: 억제)"], ["cm", "◆ 진짜 기여도 (완벽한 비평가, " + LAM + "=0)"]]);
  const bot = GW.chart(f.stage, { w: 560, h: 230, x: [0, 10], y: [-1, 1], xticks: [], yticks: [-1, -0.5, 0, 0.5, 1], ylabel: "어드밴티지 Â", margin: { b: 30, l: 48 }, label: "토큰별 어드밴티지" });

  function gae(V, R, lam) {
    const T = V.length, d = V.map((v, t) => (t < T - 1 ? V[t + 1] : R) - v);
    const A = new Array(T); let run = 0;
    for (let t = T - 1; t >= 0; t--) { run = d[t] + lam * run; A[t] = run; }
    return A;
  }
  function critic(s) {
    if (st.mode === "bias") return s.V.map((v, t) => (t >= BIAS_FROM ? v + 0.3 : v));
    return s.V.map((v, t) => GW.clamp(v + st.q * 0.28 * noise[t], 0, 1));
  }

  function draw() {
    const s = SC[st.sc];
    const Vh = critic(s);
    const A = gae(Vh, s.R, st.lam);
    const truth = gae(s.V, s.R, 0);

    top.layer.innerHTML = ""; top.top.innerHTML = "";
    top.path(s.V.map((v, t) => [t + 0.5, v]).concat([[10, s.R]]), "cm dash");
    top.path(Vh.map((v, t) => [t + 0.5, v]), "cs-V");
    Vh.forEach((v, t) => top.dot(t + 0.5, v, "fs-V", 3.5));
    top.dot(10, s.R, "fm", 4);
    top.text(9.9, s.R > 0.5 ? s.R - 0.12 : s.R + 0.08, "R = " + s.R, "strong", "end");

    bot.layer.innerHTML = ""; bot.top.innerHTML = "";
    A.forEach((a, t) => {
      const x0 = bot.X(t + 0.18), x1 = bot.X(t + 0.82);
      const y0 = bot.Y(Math.max(0, a)), y1 = bot.Y(Math.min(0, a));
      GW.s("rect", { class: "fs-A", style: { opacity: a >= 0 ? 1 : 0.55 }, x: x0, y: y0, width: x1 - x0, height: Math.max(1, y1 - y0), rx: 3 }, bot.layer);
      const xm = bot.X(t + 0.5), yt = bot.Y(truth[t]);
      GW.s("path", { class: "fm", d: `M${xm},${yt - 5} L${xm + 5},${yt} L${xm},${yt + 5} L${xm - 5},${yt} Z` }, bot.top);
      GW.s("text", { class: "w-tick", x: xm, y: bot.Y(-1) + 18, "text-anchor": "middle", text: s.toks[t] }, bot.top);
    });

    const bias = st.mode === "bias";
    const key = bias || st.sc === "wrong" ? 7 : 1;
    const other = bias ? 9 : st.sc === "wrong" ? 1 : 7;
    f.readout.innerHTML =
      `‘${s.toks[key]}’ 의 <span class="sym-A">Â</span> = <b>${GW.fmt(A[key], 2)}</b> (진짜 기여도 ${GW.fmt(truth[key], 2)}) · ` +
      `‘${s.toks[other]}’ 의 <span class="sym-A">Â</span> = <b>${GW.fmt(A[other], 2)}</b> (진짜 기여도 ${GW.fmt(truth[other], 2)})`;
  }
  bot.hover((x) => {
    const t = Math.floor(x); if (t < 0 || t > 9) return "";
    const s = SC[st.sc];
    const Vh = critic(s);
    const A = gae(Vh, s.R, st.lam), truth = gae(s.V, s.R, 0);
    return `토큰 ‘${s.toks[t]}’<br><span class='sym-V'>V̂</span>(<span style='color:var(--sym-0093b8, #0093b8)'>s<sub>t</sub></span>) = ${GW.fmt(Vh[t], 2)}<br><span class='sym-A'>Â</span> = ${GW.fmt(A[t], 2)} · 진짜 ${GW.fmt(truth[t], 2)}`;
  });
  draw();
});
