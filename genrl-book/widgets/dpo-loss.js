// DPO 손실 곡선: L = −log σ(β(Δθ − Δref))
// 조작: β, Δref, Δθ 슬라이더 + Ch1 의 상황 A/B/C 프리셋
GW.register("dpo-loss", (el) => {
  const f = GW.frame(el, {
    title: "DPO 손실 — 원본 대비 마진을 얼마나 더 벌렸나",
    caption:
      "가로축은 학습 모델의 선호마진 Δ<sub>θ</sub>. 곡선은 Δ<sub>θ</sub> = Δ<sub>ref</sub> 인 지점(점선)에서 항상 손실 0.693 을 지난다 — " +
      "원본과 똑같이 구분하면 아직 할 일이 남아 있다는 뜻이다. 그래디언트 세기 σ(−z)는 마진을 충분히 벌리면 0 으로 사라진다.",
  });
  const st = { beta: 0.5, dref: 2.2, dth: 2.9 };
  const presets = {
    A: { dref: 2.2, dth: 2.9, label: "상황 A" },
    B: { dref: 0, dth: 0, label: "상황 B" },
    C: { dref: 4.2, dth: 2.8, label: "상황 C" },
  };
  const bar = GW.h("div", { class: "w-controls" }, f.controls);
  const seg = GW.segmented(bar, {
    options: Object.entries(presets).map(([k, p]) => [k, p.label]),
    value: "A",
    onchange: (k) => {
      Object.assign(st, presets[k]);
      sRef.value = st.dref;
      sTh.value = st.dth;
      draw();
    },
  });
  const sBeta = GW.slider(f.controls, { label: "β", min: 0.1, max: 2, step: 0.05, value: st.beta, fmt: (v) => v.toFixed(2), oninput: (v) => { st.beta = v; draw(); } });
  const sRef = GW.slider(f.controls, { label: "Δ<sub>ref</sub>", min: -3, max: 5, step: 0.1, value: st.dref, fmt: (v) => GW.fmt(v, 1), oninput: (v) => { st.dref = v; seg.set(null); draw(); } });
  const sTh = GW.slider(f.controls, { label: "Δ<sub>θ</sub>", min: -6, max: 8, step: 0.1, value: st.dth, fmt: (v) => GW.fmt(v, 1), oninput: (v) => { st.dth = v; seg.set(null); draw(); } });

  GW.legend(f.stage, [
    ["cs-J", "손실 L"],
    ["cs-A dash", "그래디언트 세기 σ(−z)", "dash"],
  ]);
  const c = GW.chart(f.stage, { x: [-6, 8], y: [0, 4], xlabel: "학습 모델의 선호마진 Δθ", ylabel: "값", h: 290, label: "DPO 손실 곡선" });
  c.clip();

  const L = (d) => -Math.log(GW.sigmoid(st.beta * (d - st.dref)));
  const G = (d) => GW.sigmoid(-st.beta * (d - st.dref));

  function draw() {
    c.layer.innerHTML = "";
    c.top.innerHTML = "";
    GW.s("line", { class: "w-line cs-ref dash thin", x1: c.X(st.dref), x2: c.X(st.dref), y1: c.Y(0), y2: c.Y(4) }, c.layer);
    c.text(st.dref, 3.8, " Δref", "", "start");
    GW.s("line", { class: "w-line cm dash thin", x1: c.X(-6), x2: c.X(8), y1: c.Y(Math.log(2)), y2: c.Y(Math.log(2)) }, c.layer);
    c.text(-5.9, Math.log(2) + 0.12, "0.693 = −log σ(0)", "", "start");
    c.fn(L, "cs-J");
    c.fn(G, "cs-A dash");
    const l = L(st.dth), g = G(st.dth);
    c.dot(st.dth, Math.min(l, 3.95), "fs-J", 6);
    c.dot(st.dth, g, "fs-A", 5);
    const z = st.dth - st.dref;
    f.readout.innerHTML =
      `z = <span class="sym-pi">Δθ</span> − <span class="sym-ref">Δref</span> = <b>${GW.fmt(z, 2)}</b> · 손실 <span class="sym-J">L</span> <b>${GW.fmt(l, 3)}</b> · 그래디언트 세기 <span class="sym-A">σ(−z)</span> <b>${GW.fmt(g, 3)}</b> — ` +
      (z > 0.5 ? "원본보다 더 벌렸다. 곡선이 평평해지며 학습이 느려진다." : z < -0.5 ? "원본보다 오히려 좁혔다. 손실과 그래디언트가 모두 크다." : "원본과 거의 같다. 아직 배울 것이 남았다.");
  }
  c.hover((x) => `Δθ = ${GW.fmt(x, 2)}<br>L = ${GW.fmt(L(x), 3)}<br>σ(−z) = ${GW.fmt(G(x), 3)}`);
  draw();
});
