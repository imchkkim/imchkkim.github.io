// 마진의 역설 (Diffusion-SDPO 의 1차 근사 논리):
// 업데이트 d = −g_w + λ g_l  (g_w = winner 복원오차의 그래디언트, g_l = loser 복원오차의 그래디언트)
// winner 오차의 1차 변화 Δe_w ≈ g_w · d = −|g_w|² + λ (g_w·g_l).
// g_w·g_l > |g_w|²/λ 이면 winner 오차가 오히려 커진다. 안전 스케일: λ ≤ |g_w|² / (g_w·g_l).
GW.register("sdpo-interference", (el) => {
  const f = GW.frame(el, {
    title: "loser를 밀어내는 힘이 winner까지 밀어낼 때",
    caption:
      "파란 화살표 −<span style='color:var(--sym-cc00ff, #cc00ff)'>g<sub>w</sub></span>는 winner 오차를 줄이는 방향, 주황 화살표 <span style='color:var(--sym-536020, #536020)'>λ</span><span style='color:var(--sym-cc00ff, #cc00ff)'>g<sub>l</sub></span>은 loser 오차를 키우는 방향, 회색 화살표가 실제 업데이트 <span style='color:var(--sym-993600, #993600)'>d</span> 다. " +
      "두 그래디언트가 비슷한 방향을 가리키면(각도가 작으면) loser를 밀어낼 때 winner도 같이 밀려난다. " +
      "‘winner 보호’를 켜면 <span style='color:var(--sym-536020, #536020)'>λ</span>를 1차 근사로 winner 오차가 늘지 않는 한도까지 줄인다.",
  });
  const st = { ang: 35, ratio: 1.2, lam: 1, guard: false };
  GW.slider(f.controls, { label: "<span style='color:var(--sym-cc00ff, #cc00ff)'>g<sub>w</sub></span>와 <span style='color:var(--sym-cc00ff, #cc00ff)'>g<sub>l</sub></span> 사이 각도", min: 0, max: 180, step: 1, value: st.ang, fmt: (v) => v + "°", oninput: (v) => { st.ang = v; draw(); } });
  GW.slider(f.controls, { label: "|<span style='color:var(--sym-cc00ff, #cc00ff)'>g<sub>l</sub></span>| / |<span style='color:var(--sym-cc00ff, #cc00ff)'>g<sub>w</sub></span>|", min: 0.2, max: 3, step: 0.05, value: st.ratio, fmt: (v) => v.toFixed(2), oninput: (v) => { st.ratio = v; draw(); } });
  GW.slider(f.controls, { label: "loser 쪽 강도 <span style='color:var(--sym-536020, #536020)'>λ</span>", min: 0, max: 2, step: 0.05, value: st.lam, fmt: (v) => v.toFixed(2), oninput: (v) => { st.lam = v; draw(); } });
  GW.toggle(f.controls, { label: "winner 보호 (SDPO식 스케일링)", value: st.guard, onchange: (v) => { st.guard = v; draw(); } });
  GW.legend(f.stage, [["c1", "−<span style='color:var(--sym-cc00ff, #cc00ff)'>g<sub>w</sub></span> (winner 개선)"], ["c2", "<span style='color:var(--sym-536020, #536020)'>λ</span>·<span style='color:var(--sym-cc00ff, #cc00ff)'>g<sub>l</sub></span> (loser 억제)"], ["cm", "실제 업데이트 <span style='color:var(--sym-993600, #993600)'>d</span>"]]);
  const c = GW.chart(f.stage, { x: [-3.2, 3.2], y: [-1.4, 3], w: 460, h: 250, xticks: [], yticks: [], label: "그래디언트 간섭" });
  c.clip();
  function arrow(x2, y2, cls, fillCls, w = 2.5) {
    GW.s("line", { class: "w-line " + cls, x1: c.X(0), y1: c.Y(0), x2: c.X(x2), y2: c.Y(y2), "stroke-width": w }, c.layer);
    const a = Math.atan2(c.Y(y2) - c.Y(0), c.X(x2) - c.X(0));
    const px = c.X(x2), py = c.Y(y2), L = 10;
    GW.s("path", { class: fillCls, d: `M${px},${py} L${px - L * Math.cos(a - 0.4)},${py - L * Math.sin(a - 0.4)} L${px - L * Math.cos(a + 0.4)},${py - L * Math.sin(a + 0.4)} Z` }, c.layer);
  }
  function draw() {
    c.layer.innerHTML = ""; c.top.innerHTML = "";
    // g_w 를 (−1, 0) 방향에 두면 −g_w = (1, 0)
    const gw = [-1, 0];
    const th = (st.ang * Math.PI) / 180;
    const gl = [st.ratio * -Math.cos(th), st.ratio * Math.sin(th)];
    const dot = gw[0] * gl[0] + gw[1] * gl[1];
    const safe = dot > 0 ? 1 / dot : Infinity; // |g_w|² = 1
    const lam = st.guard ? Math.min(st.lam, safe) : st.lam;
    const d = [-gw[0] + lam * gl[0], -gw[1] + lam * gl[1]];
    const dEw = -1 + lam * dot;
    const dEl = -dot + lam * st.ratio * st.ratio;
    const s = 1.5;
    arrow(-gw[0] * s, -gw[1] * s, "c1", "f1");
    arrow(lam * gl[0] * s, lam * gl[1] * s, "c2", "f2");
    arrow(d[0] * s, d[1] * s, "cm", "fm", 3.5);
    GW.s("circle", { class: "fneutral", cx: c.X(0), cy: c.Y(0), r: 4 }, c.top);
    const verdict = dEw > 1e-9 ? "<b>winner 오차가 커진다</b> — 마진은 벌어지지만 선호 이미지 품질이 나빠진다" : "winner 오차는 줄거나 그대로다";
    f.readout.innerHTML =
      `<span style='color:var(--sym-cc00ff, #cc00ff)'>g<sub>w</sub></span>·<span style='color:var(--sym-cc00ff, #cc00ff)'>g<sub>l</sub></span> = <b>${GW.fmt(dot, 2)}</b> · 쓰인 <span style='color:var(--sym-536020, #536020)'>λ</span> = <b>${GW.fmt(lam, 2)}</b>` +
      (dot > 0 ? ` (안전 한도 1/(<span style='color:var(--sym-cc00ff, #cc00ff)'>g<sub>w</sub></span>·<span style='color:var(--sym-cc00ff, #cc00ff)'>g<sub>l</sub></span>) = ${GW.fmt(safe, 2)})` : " (각도가 90° 이상이면 간섭 없음)") +
      `<br>winner 오차 변화 <span class="sym-pi">Δe<sub>w</sub></span> ≈ <b>${GW.fmt(dEw, 2)}</b> · loser 오차 변화 Δe<sub>l</sub> ≈ <b>${GW.fmt(dEl, 2)}</b> — ${verdict}`;
  }
  draw();
});
