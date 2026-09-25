// PPO 클리핑 목적함수: L(r) = min(r·A, clip(r, 1−ε, 1+ε)·A)
// 왼쪽 A>0, 오른쪽 A<0. 그래디언트가 0 이 되는 구간을 음영으로 표시.
GW.register("ppo-clip", (el) => {
  const f = GW.frame(el, {
    title: "PPO 클리핑 — 비율 r 이 얼마나 멀어지면 멈추는가",
    caption:
      "가로축은 확률 비율 r = π<sub>θ</sub>/π<sub>old</sub> (업데이트 전엔 1). 실선은 PPO 목적함수, 점선은 클리핑 없는 r·A. " +
      "음영 구간에서는 목적함수가 평평해 그래디언트가 0 — 이 샘플은 더 이상 정책을 밀지 않는다. " +
      "좋은 행동(A&gt;0)은 1+ε 까지만 올리고, 나쁜 행동(A&lt;0)은 1−ε 까지만 내린다. 반대 방향으로 멀어진 경우는 잘라내지 않는다.",
  });
  let eps = 0.2, A = 1;
  GW.slider(f.controls, { label: "ε", min: 0.05, max: 0.5, step: 0.01, value: eps, fmt: (v) => v.toFixed(2), oninput: (v) => { eps = v; draw(); } });
  GW.slider(f.controls, { label: "|A|", min: 0.2, max: 2, step: 0.1, value: A, fmt: (v) => v.toFixed(1), oninput: (v) => { A = v; draw(); } });
  GW.legend(f.stage, [["cs-J", "PPO 목적함수 L<sup>CLIP</sup>"], ["cm dash", "클리핑 없는 r·A", "dash"]]);
  const row = GW.h("div", { style: { display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: "0.8rem" } }, f.stage);
  const mk = (title, sign) => {
    const box = GW.h("div", {}, row);
    GW.h("div", { class: "w-caption", style: { marginTop: 0, textAlign: "center" }, html: title }, box);
    const c = GW.chart(box, { w: 300, h: 250, x: [0, 2.2], y: sign > 0 ? [-0.5, 3] : [-3, 0.5], xlabel: "비율 r", ylabel: "목적함수", margin: { l: 40 }, xticks: [0, 0.5, 1, 1.5, 2], label: title });
    c.clip();
    c.sign = sign;
    return c;
  };
  const cp = mk("좋은 행동 (A &gt; 0)", 1);
  const cn = mk("나쁜 행동 (A &lt; 0)", -1);

  const L = (r, a) => Math.min(r * a, GW.clamp(r, 1 - eps, 1 + eps) * a);
  function panel(c) {
    const a = c.sign * A;
    c.layer.innerHTML = "";
    c.top.innerHTML = "";
    // 그래디언트 0 구간
    const [z0, z1] = a > 0 ? [1 + eps, 2.2] : [0, 1 - eps];
    GW.s("rect", { class: "fa2", x: c.X(z0), y: c.m.t, width: c.X(z1) - c.X(z0), height: c.ph }, c.layer);
    GW.s("text", { class: "w-label", x: (c.X(z0) + c.X(z1)) / 2, y: c.m.t + 16, "text-anchor": "middle", text: "그래디언트 0" }, c.top);
    for (const v of [1 - eps, 1 + eps]) GW.s("line", { class: "w-line cm thin dash", x1: c.X(v), x2: c.X(v), y1: c.m.t, y2: c.m.t + c.ph }, c.layer);
    c.fn((r) => r * a, "cm dash");
    c.fn((r) => L(r, a), "cs-J");
    c.dot(1, a, "fs-J", 5);
    GW.s("text", { class: "w-tick", x: c.X(1 - eps), y: c.m.t + c.ph - 4, "text-anchor": "end", text: "1−ε " }, c.top);
    GW.s("text", { class: "w-tick", x: c.X(1 + eps), y: c.m.t + c.ph - 4, "text-anchor": "start", text: " 1+ε" }, c.top);
  }
  const tip = (c) => (r) => {
    if (r < 0 || r > 2.2) return null;
    const a = c.sign * A;
    const clipped = r * a > GW.clamp(r, 1 - eps, 1 + eps) * a + 1e-12 ? "잘림 → 그래디언트 0" : "그대로 → 그래디언트 A";
    return `r = ${r.toFixed(2)}<br>L = ${GW.fmt(L(r, a), 2)}<br>${clipped}`;
  };
  cp.hover(tip(cp));
  cn.hover(tip(cn));
  function draw() {
    panel(cp);
    panel(cn);
    f.readout.innerHTML = `허용 범위 <span class="sym-ratio">r</span> ∈ [<b>${(1 - eps).toFixed(2)}</b>, <b>${(1 + eps).toFixed(2)}</b>] — 한 배치로 여러 번 업데이트해도 각 행동의 확률은 이 범위 밖으로 “이득을 보며” 나가지 못한다.`;
  }
  draw();
});
