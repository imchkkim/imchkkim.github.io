// PPO 클리핑 목적함수: L(r) = min(r·A, clip(r, 1−ε, 1+ε)·A)
// 왼쪽 A>0, 오른쪽 A<0. 그래디언트가 0 이 되는 구간을 음영으로 표시.
// 단추 둘: 「문제 5」(ε = 0.2, A = +2, r = 3 → 가로축을 3.2 까지 넓힘), 「문제 6」(ε = 0.2, A = −1, r = 1.5).
// 단추를 누르면 그 문제의 점을 그래프에 찍고 수치판에 값을 보인다. 슬라이더를 움직이면 점이 사라진다.
// 설명글에는 문제의 답을 적지 않는다.
GW.register("ppo-clip", (el) => {
  const f = GW.frame(el, {
    title: "PPO 클리핑 — 비율 r 이 얼마나 멀어지면 멈추는가",
    caption:
      "가로축은 확률 비율 <span class='sym-ratio'>r</span> = <span class='sym-pi'>π<sub>θ</sub></span>/<span class='sym-ref'>π<sub>old</sub></span> (업데이트 전엔 1). 실선은 PPO 목적함수, 점선은 클리핑 없는 <span class='sym-ratio'>r</span>·<span class='sym-A'>A</span>. " +
      "음영 구간에서는 목적함수가 평평해 그래디언트가 0 — 이 샘플은 더 이상 정책을 밀지 않는다. " +
      "좋은 행동(<span class='sym-A'>A</span>&gt;0)은 1+<span style='color:var(--sym-1f6d7a, #1f6d7a)'>ε</span> 까지만 올리고, 나쁜 행동(<span class='sym-A'>A</span>&lt;0)은 1−<span style='color:var(--sym-1f6d7a, #1f6d7a)'>ε</span> 까지만 내린다. " +
      "‘문제 5’, ‘문제 6’ 단추는 두 문제의 비율과 어드밴티지를 불러와 그래프에 점으로 찍는다. 풀이를 마친 뒤 수치판과 견주어 보라.",
  });
  let eps = 0.2, A = 1, pick = null;
  const PRESETS = {
    p5: { label: "문제 5", eps: 0.2, a: 2, r: 3 },
    p6: { label: "문제 6", eps: 0.2, a: -1, r: 1.5 },
  };
  const sEps = GW.slider(f.controls, { label: "<span style='color:var(--sym-1f6d7a, #1f6d7a)'>ε</span>", min: 0.05, max: 0.5, step: 0.01, value: eps, fmt: (v) => v.toFixed(2), oninput: (v) => { eps = v; pick = null; draw(); } });
  const sA = GW.slider(f.controls, { label: "|<span class=\"sym-A\">A</span>|", min: 0.2, max: 2, step: 0.1, value: A, fmt: (v) => v.toFixed(1), oninput: (v) => { A = v; pick = null; draw(); } });
  for (const [k, p] of Object.entries(PRESETS))
    GW.button(f.controls, p.label, () => {
      pick = p;
      eps = p.eps; A = Math.abs(p.a);
      sEps.value = eps; sA.value = A;
      draw();
    });
  GW.legend(f.stage, [["cs-J", "PPO 목적함수 <span class=\"sym-J\">L<sup>CLIP</sup></span>"], ["cm dash", "클리핑 없는 <span class=\"sym-ratio\">r</span>·<span class=\"sym-A\">A</span>", "dash"]]);
  const row = GW.h("div", { style: { display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: "0.8rem" } }, f.stage);
  const mk = (title, sign) => {
    const box = GW.h("div", {}, row);
    GW.h("div", { class: "w-caption", style: { marginTop: 0, textAlign: "center" }, html: title }, box);
    // opt 를 붙잡아 두고 가로축 범위와 눈금을 바꾼다(문제 5 의 r = 3 을 찍으려고)
    const opt = { w: 300, h: 250, x: [0, 2.2], y: sign > 0 ? [-0.5, 3] : [-3, 0.5], xlabel: "비율 r", ylabel: "목적함수", margin: { l: 40 }, xticks: [0, 0.5, 1, 1.5, 2], label: title };
    const c = GW.chart(box, opt);
    c.clip();
    c.sign = sign;
    c.opt = opt;
    return c;
  };
  const cp = mk("좋은 행동 (A &gt; 0)", 1);
  const cn = mk("나쁜 행동 (A &lt; 0)", -1);

  const L = (r, a) => Math.min(r * a, GW.clamp(r, 1 - eps, 1 + eps) * a);
  function panel(c) {
    const a = c.sign * A;
    const xmax = pick && pick.r > 2.1 ? 3.2 : 2.2;
    if (c.x[1] !== xmax) {
      c.x = [0, xmax];
      c.opt.xticks = xmax > 3 ? [0, 1, 2, 3] : [0, 0.5, 1, 1.5, 2];
      c.drawAxes();
    }
    c.layer.innerHTML = "";
    c.top.innerHTML = "";
    // 그래디언트 0 구간
    const [z0, z1] = a > 0 ? [1 + eps, xmax] : [0, 1 - eps];
    GW.s("rect", { class: "fa2", x: c.X(z0), y: c.m.t, width: c.X(z1) - c.X(z0), height: c.ph }, c.layer);
    GW.s("text", { class: "w-label", x: (c.X(z0) + c.X(z1)) / 2, y: c.m.t + 16, "text-anchor": "middle", text: "그래디언트 0" }, c.top);
    for (const v of [1 - eps, 1 + eps]) GW.s("line", { class: "w-line cm thin dash", x1: c.X(v), x2: c.X(v), y1: c.m.t, y2: c.m.t + c.ph }, c.layer);
    c.fn((r) => r * a, "cm dash");
    c.fn((r) => L(r, a), "cs-J");
    c.dot(1, a, "fs-J", 5);
    GW.s("text", { class: "w-tick", x: c.X(1 - eps), y: c.m.t + c.ph - 4, "text-anchor": "end", text: "1−ε " }, c.top);
    GW.s("text", { class: "w-tick", x: c.X(1 + eps), y: c.m.t + c.ph - 4, "text-anchor": "start", text: " 1+ε" }, c.top);
    // 불러온 문제의 점: 그 문제의 어드밴티지 부호와 같은 판에만
    if (pick && Math.sign(pick.a) === c.sign) {
      const y = GW.clamp(L(pick.r, a), c.y[0], c.y[1]);
      c.dot(pick.r, y, "fs-ratio", 6);
      c.text(pick.r, y, ` ${pick.label}`, "strong", pick.r > 2.5 ? "end" : "start");
    }
  }
  const tip = (c) => (r) => {
    if (r < 0 || r > c.x[1]) return null;
    const a = c.sign * A;
    const clipped = r * a > GW.clamp(r, 1 - eps, 1 + eps) * a + 1e-12 ? "잘림 → 그래디언트 0" : "그대로 → 그래디언트 <span class='sym-A'>A</span>";
    return `<span class='sym-ratio'>r</span> = ${r.toFixed(2)}<br><span class='sym-J'>L</span> = ${GW.fmt(L(r, a), 2)}<br>${clipped}`;
  };
  cp.hover(tip(cp));
  cn.hover(tip(cn));
  function draw() {
    panel(cp);
    panel(cn);
    let html = `허용 범위 <span class="sym-ratio">r</span> ∈ [<b>${(1 - eps).toFixed(2)}</b>, <b>${(1 + eps).toFixed(2)}</b>] — 한 배치로 여러 번 업데이트해도 각 행동의 확률은 이 범위 밖으로 “이득을 보며” 나가지 못한다.`;
    if (pick) {
      const { r, a } = pick;
      const lo = 1 - eps, hi = 1 + eps;
      const raw = r * a, cl = GW.clamp(r, lo, hi) * a, v = Math.min(raw, cl);
      const g = raw <= cl ? `<span class="sym-A">A</span> = ${GW.fmt(a, 1)} (살아 있음)` : "0 (잘린 쪽이 골라짐)";
      html += `<br>${pick.label}: <span class="sym-ratio">r</span> = <b>${r.toFixed(2)}</b>, <span class="sym-A">A</span> = <b>${a > 0 ? "+" + a : "−" + Math.abs(a)}</b> → ` +
        `<span class="sym-ratio">r</span>·<span class="sym-A">A</span> = <b>${GW.fmt(raw, 2)}</b>, clip(<span class="sym-ratio">r</span>)·<span class="sym-A">A</span> = <b>${GW.fmt(cl, 2)}</b>, ` +
        `<span class="sym-J">L<sup>CLIP</sup></span> = <b>${GW.fmt(v, 2)}</b>, <span class="sym-ratio">r</span> 에 대한 기울기 = <b>${g}</b>`;
    }
    f.readout.innerHTML = html;
  }
  draw();
});
