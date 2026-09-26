// 노출 편향 장난감: 프레임마다 어긋남 d 가 d_{n+1} = g·d_n + e0 로 쌓인다.
// 티처 포싱으로 배운 모델은 자기 출력(어긋난 과거)을 본 적이 없어 어긋남을 키운다(g > 1),
// 셀프 포싱으로 배운 모델은 자기 출력 위에서 배워 어긋남을 되돌린다(g < 1) → 한계 e0/(1−g).
GW.register("exposure-drift", (el) => {
  const f = GW.frame(el, {
    title: "프레임을 이어 붙일수록 쌓이는 어긋남 — 정답 과거로 배운 모델 vs 자기 과거로 배운 모델",
    caption:
      "한 프레임을 만들 때마다 작은 오차 <span style='color:var(--sym-206049, #206049)'>e₀</span>가 생긴다. " +
      "앞 프레임의 어긋남 <span style='color:var(--sym-993600, #993600)'>d</span>는 다음 프레임으로 <span style='color:var(--sym-cc00ff, #cc00ff)'>g</span>배가 되어 넘어간다. " +
      "정답 과거만 본 모델은 어긋난 입력을 처음 보므로 어긋남을 키운다(g > 1). 자기 과거로 배운 모델은 어긋난 입력에서 되돌아오는 법을 배웠다(g < 1). " +
      "점선은 어긋남을 키우지도 줄이지도 않는 경우(g = 1)다.",
  });
  const st = { e0: 0.02, gtf: 1.15, gsf: 0.9 };
  const N = 60;
  GW.slider(f.controls, { label: "한 프레임 오차 <span style='color:var(--sym-206049, #206049)'>e₀</span>", min: 0.005, max: 0.05, step: 0.005, value: st.e0, fmt: (v) => v.toFixed(3), oninput: (v) => { st.e0 = v; draw(); } });
  GW.slider(f.controls, { label: "티처 포싱 모델의 <span style='color:var(--sym-cc00ff, #cc00ff)'>g</span>", min: 1.0, max: 1.3, step: 0.01, value: st.gtf, fmt: (v) => v.toFixed(2), oninput: (v) => { st.gtf = v; draw(); } });
  GW.slider(f.controls, { label: "셀프 포싱 모델의 <span style='color:var(--sym-cc00ff, #cc00ff)'>g</span>", min: 0.5, max: 1.0, step: 0.01, value: st.gsf, fmt: (v) => v.toFixed(2), oninput: (v) => { st.gsf = v; draw(); } });
  GW.legend(f.stage, [["c2", "정답 과거로 배운 모델 (티처 포싱)"], ["c1", "자기 과거로 배운 모델 (셀프 포싱)"], ["cm dash", "g = 1", "dash"]]);
  const c = GW.chart(f.stage, { x: [0, N], y: [0, 2], w: 560, h: 260, xlabel: "프레임 번호 n", ylabel: "어긋남 d", label: "프레임별 어긋남" });
  c.clip();

  const run = (g) => { const out = [[0, 0]]; let d = 0; for (let n = 1; n <= N; n++) { d = g * d + st.e0; out.push([n, d]); } return out; };
  function draw() {
    c.layer.innerHTML = ""; c.top.innerHTML = "";
    GW.s("line", { class: "w-grid", x1: c.X(0), x2: c.X(N), y1: c.Y(1), y2: c.Y(1) }, c.layer);
    c.text(1, 1.04, "눈에 띄게 무너지는 선 (예시)", "", "start");
    const tf = run(st.gtf), sf = run(st.gsf), id = run(1);
    c.path(id, "cm dash"); c.path(tf, "c2"); c.path(sf, "c1");
    const cross = tf.find((p) => p[1] >= 1);
    const lim = st.gsf < 1 ? st.e0 / (1 - st.gsf) : Infinity;
    f.readout.innerHTML =
      `20번째 프레임 — 티처 포싱 <b>${GW.fmt(tf[20][1], 3)}</b> · 셀프 포싱 <b>${GW.fmt(sf[20][1], 3)}</b>` +
      ` &nbsp;|&nbsp; 티처 포싱이 선을 넘는 프레임: <b>${cross ? cross[0] : "60 안에서는 없음"}</b>` +
      ` &nbsp;|&nbsp; 셀프 포싱의 한계 e₀/(1−g) = <b>${GW.fmt(lim, 3)}</b>`;
  }
  draw();
});
