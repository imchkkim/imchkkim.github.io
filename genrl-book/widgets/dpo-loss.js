// DPO 손실 곡선: L = −log σ(β(Δθ − Δref))
// 조작: β, Δref, Δθ 슬라이더 + 프리셋 단추.
// 프리셋은 원고의 위젯 줄에 붙은 data-set 으로 고른다. 없으면 6장의 상황 A/B/C.
//   data-set="ref"  : 10장 「레퍼런스의 자리」 절 — 문제 1·2 의 값
//   data-set="beta" : 10장 「β」 절 — 문제 4 의 두 β (Δθ 를 밀어 크기가 0.1 로 떨어지는 곳을 찾는다)
// 설명글에는 문제의 답을 적지 않는다.
GW.register("dpo-loss", (el) => {
  const sets = {
    default: {
      title: "DPO 손실 — 원본 대비 마진을 얼마나 더 벌렸나",
      caption:
        "가로축은 학습 모델의 선호마진 <span class='sym-pi'>Δ<sub>θ</sub></span>. 곡선은 <span class='sym-pi'>Δ<sub>θ</sub></span> = <span class='sym-ref'>Δ<sub>ref</sub></span> 인 지점(점선)에서 항상 손실 0.693 을 지난다 — " +
        "원본과 똑같이 구분하면 아직 할 일이 남아 있다는 뜻이다. 그래디언트 크기 <span class='sym-A'>σ(−βz)</span>는 마진을 충분히 벌리면 0 으로 사라진다.",
      ref: "원본",
      refWa: "원본과",
      start: "A",
      presets: {
        A: { dref: 2.1972, dth: 2.9444, label: "상황 A" },
        B: { dref: 0, dth: 0, label: "상황 B" },
        C: { dref: 4.2485, dth: 2.7726, label: "상황 C" },
      },
    },
    ref: {
      title: "DPO 손실 — 레퍼런스 대비 마진을 얼마나 더 벌렸나",
      caption:
        "가로축은 학습 모델의 선호마진 <span class='sym-pi'>Δ<sub>θ</sub></span>, 세로 점선은 레퍼런스 마진 <span class='sym-ref'>Δ<sub>ref</sub></span>. " +
        "<span class='sym-ref'>Δ<sub>ref</sub></span> 를 움직이면 곡선이 어떻게 바뀌는지 보라. 단추는 아래 문제 1·2 의 값을 불러온다. 풀이를 마친 뒤 수치판과 견주어 보라.",
      ref: "레퍼런스",
      refWa: "레퍼런스와",
      hideLogLabel: true,
      start: "p1",
      presets: {
        p1: { beta: 0.1, dref: 4, dth: 0, label: "문제 1" },
        p2a: { beta: 0.5, dref: 3, dth: 1, label: "문제 2 · 쌍 A" },
        p2b: { beta: 0.5, dref: -3, dth: 1, label: "문제 2 · 쌍 B" },
      },
    },
    beta: {
      title: "DPO 손실 — β 에 따라 크기가 꺼지는 곳",
      caption:
        "<span class='sym-beta'>β</span> 를 고른 뒤 <span class='sym-pi'>Δ<sub>θ</sub></span> 를 오른쪽으로 밀어, 그래디언트 크기 <span class='sym-A'>σ(−βz)</span> (점선)가 어디서 0.1 아래로 떨어지는지 찾아보라. " +
        "단추는 아래 문제 4 의 두 <span class='sym-beta'>β</span> 를 불러온다(<span class='sym-ref'>Δ<sub>ref</sub></span> = 0 이라 <span class='sym-R'>z</span> = <span class='sym-pi'>Δ<sub>θ</sub></span>).",
      ref: "레퍼런스",
      refWa: "레퍼런스와",
      start: "b1",
      xmax: 30,
      ymax: 1.2,
      presets: {
        b1: { beta: 0.1, dref: 0, dth: 0, label: "문제 4 · β = 0.1" },
        b5: { beta: 0.5, dref: 0, dth: 0, label: "문제 4 · β = 0.5" },
      },
    },
  };
  const S = sets[el.dataset.set] || sets.default;
  const presets = S.presets;
  const XMAX = S.xmax || 8;
  const YMAX = S.ymax || 4;
  const f = GW.frame(el, { title: S.title, caption: S.caption });
  const st = Object.assign({ beta: 0.5 }, presets[S.start]);
  const bar = GW.h("div", { class: "w-controls" }, f.controls);
  const seg = GW.segmented(bar, {
    options: Object.entries(presets).map(([k, p]) => [k, p.label]),
    value: S.start,
    onchange: (k) => {
      Object.assign(st, presets[k]);
      if ("beta" in presets[k]) sBeta.value = st.beta;
      sRef.value = st.dref;
      sTh.value = st.dth;
      draw();
    },
  });
  const sBeta = GW.slider(f.controls, { label: "<span class=\"sym-beta\">β</span>", min: 0.1, max: 2, step: 0.05, value: st.beta, fmt: (v) => v.toFixed(2), oninput: (v) => { st.beta = v; draw(); } });
  const sRef = GW.slider(f.controls, { label: "<span class=\"sym-ref\">Δ<sub>ref</sub></span>", min: -3, max: 5, step: 0.1, value: st.dref, fmt: (v) => GW.fmt(v, 1), oninput: (v) => { st.dref = v; seg.set(null); draw(); } });
  const sTh = GW.slider(f.controls, { label: "<span class=\"sym-pi\">Δ<sub>θ</sub></span>", min: -6, max: XMAX, step: 0.1, value: st.dth, fmt: (v) => GW.fmt(v, 1), oninput: (v) => { st.dth = v; seg.set(null); draw(); } });

  GW.legend(f.stage, [
    ["cs-J", "손실 <span class=\"sym-J\">L</span>"],
    ["cs-A dash", "그래디언트 크기 <span class=\"sym-A\">σ(−βz)</span>", "dash"],
  ]);
  const c = GW.chart(f.stage, { x: [-6, XMAX], y: [0, YMAX], xlabel: "학습 모델의 선호마진 Δθ", ylabel: "값", h: 290, label: "DPO 손실 곡선" });
  c.clip();

  const L = (d) => -Math.log(GW.sigmoid(st.beta * (d - st.dref)));
  const G = (d) => GW.sigmoid(-st.beta * (d - st.dref));

  function draw() {
    c.layer.innerHTML = "";
    c.top.innerHTML = "";
    GW.s("line", { class: "w-line cs-ref dash thin", x1: c.X(st.dref), x2: c.X(st.dref), y1: c.Y(0), y2: c.Y(YMAX) }, c.layer);
    c.text(st.dref, YMAX * 0.95, " Δref", "", "start");
    GW.s("line", { class: "w-line cm dash thin", x1: c.X(-6), x2: c.X(XMAX), y1: c.Y(Math.log(2)), y2: c.Y(Math.log(2)) }, c.layer);
    if (!S.hideLogLabel) c.text(-5.9, Math.log(2) + 0.12, "0.693 = −log σ(0)", "", "start");
    c.fn(L, "cs-J");
    c.fn(G, "cs-A dash");
    const l = L(st.dth), g = G(st.dth);
    c.dot(st.dth, Math.min(l, YMAX - 0.05), "fs-J", 6);
    c.dot(st.dth, g, "fs-A", 5);
    const z = st.dth - st.dref;
    f.readout.innerHTML =
      `<span class="sym-R">z</span> = <span class="sym-pi">Δθ</span> − <span class="sym-ref">Δref</span> = <b>${GW.fmt(z, 2)}</b> · 손실 <span class="sym-J">L</span> <b>${GW.fmt(l, 3)}</b> · 그래디언트 크기 <span class="sym-A">σ(−βz)</span> <b>${GW.fmt(g, 3)}</b> — ` +
      (z > 0.5 ? S.ref + "보다 더 벌렸다. 곡선이 평평해지며 학습이 느려진다." : z < -0.5 ? S.ref + "보다 오히려 좁혔다. 손실과 그래디언트가 모두 크다." : S.refWa + " 거의 같다. 아직 배울 것이 남았다.");
  }
  c.hover((x) => `<span class='sym-pi'>Δθ</span> = ${GW.fmt(x, 2)}<br><span class='sym-J'>L</span> = ${GW.fmt(L(x), 3)}<br><span class='sym-A'>σ(−βz)</span> = ${GW.fmt(G(x), 3)}`);
  draw();
});
