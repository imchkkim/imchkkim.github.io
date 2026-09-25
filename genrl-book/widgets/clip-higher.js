// Clip-Higher (DAPO): 확률 비율 클리핑 [1−ε_low, 1+ε_high].
// Â>0 인 토큰은 한 라운드에 p_old·(1+ε_high) 까지만 오를 수 있다(그 위에서는 그래디언트가 끊긴다).
// 확률이 낮은 토큰은 절대 증가폭이 아주 작다 → 탐색(엔트로피)이 말라간다.
GW.register("clip-higher", (el) => {
  const f = GW.frame(el, {
    title: "클리핑 상한이 낮은 확률의 토큰을 얼마나 묶는가",
    caption:
      "가로축은 업데이트 전 확률 p<sub>old</sub>, 세로축은 한 라운드에 그래디언트가 살아 있는 범위의 새 확률. " +
      "Â>0 이면 위쪽 선, Â<0 이면 아래쪽 선에서 멈춘다. 대칭 클리핑(0.2/0.2)에서 0.01짜리 토큰은 한 라운드에 0.012까지만 오를 수 있다. " +
      "‘이 토큰을 0.5까지 올리려면’은 이 상한만으로 계산한 최소 라운드 수다.",
  });
  let el_ = 0.2, eh = 0.28;
  GW.slider(f.controls, { label: "ε<sub>low</sub>", min: 0.05, max: 0.4, step: 0.01, value: el_, fmt: (v) => v.toFixed(2), oninput: (v) => { el_ = v; draw(); } });
  GW.slider(f.controls, { label: "ε<sub>high</sub>", min: 0.05, max: 0.6, step: 0.01, value: eh, fmt: (v) => v.toFixed(2), oninput: (v) => { eh = v; draw(); } });
  GW.legend(f.stage, [["c3", "Â>0 일 때 상한 p·(1+ε<sub>high</sub>)"], ["c2", "Â<0 일 때 하한 p·(1−ε<sub>low</sub>)"], ["cm dash", "변화 없음", "dash"]]);
  const c = GW.chart(f.stage, { x: [0, 1], y: [0, 1], xlabel: "업데이트 전 확률 p_old", ylabel: "한 라운드 뒤 도달 가능한 확률", h: 300, label: "클리핑 범위" });

  function draw() {
    c.layer.innerHTML = ""; c.top.innerHTML = "";
    const up = (p) => Math.min(1, p * (1 + eh)), dn = (p) => p * (1 - el_);
    const pts = [];
    for (let i = 0; i <= 100; i++) pts.push([i / 100, up(i / 100)]);
    for (let i = 100; i >= 0; i--) pts.push([i / 100, dn(i / 100)]);
    GW.s("path", { class: "fa3", d: pts.map((q, i) => (i ? "L" : "M") + c.X(q[0]) + "," + c.Y(q[1])).join("") + "Z" }, c.layer);
    c.fn((p) => p, "cm dash thin");
    c.fn(up, "c3");
    c.fn(dn, "c2");
    for (const p of [0.01, 0.5, 0.9]) {
      c.dot(p, up(p), "f3", 4);
      c.text(p + 0.015, up(p) + 0.03, `+${(up(p) - p).toFixed(3)}`, "", "start");
    }
    const n = Math.log(0.5 / 0.01) / Math.log(1 + eh);
    f.readout.innerHTML =
      `p=0.01 토큰: 한 라운드 최대 <b>+${(up(0.01) - 0.01).toFixed(4)}</b> · p=0.9 토큰: <b>+${(up(0.9) - 0.9).toFixed(3)}</b> · ` +
      `0.01 → 0.5 까지 최소 <b>${n.toFixed(1)}</b> 라운드`;
  }
  c.hover((p) => (p < 0 || p > 1 ? "" : `p_old = ${p.toFixed(2)}<br>상한 ${Math.min(1, p * (1 + eh)).toFixed(3)}<br>하한 ${(p * (1 - el_)).toFixed(3)}`));
  draw();
});
