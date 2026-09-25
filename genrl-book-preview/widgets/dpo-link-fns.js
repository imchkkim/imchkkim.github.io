// DPO 변형들의 "링크 함수" 비교: 같은 마진 z = Δθ − Δref 에 대해 손실이 어떻게 생겼나.
// DPO −log σ(βz) / IPO (z − 1/(2β))² / 힌지(SLiC) max(0, 1 − βz) / SimPO식 목표 마진 −log σ(βz − γ)
GW.register("dpo-link-fns", (el) => {
  const f = GW.frame(el, {
    title: "링크 함수를 바꾸면 — ‘언제 그만 벌릴 것인가’가 달라진다",
    caption:
      "DPO 곡선은 오른쪽으로 갈수록 0에 다가가기만 할 뿐 닿지 않는다 — 마진을 끝없이 벌리려는 힘이 남는다. " +
      "IPO는 z* = 1/(2β)에서 바닥을 치고 그 너머로 가면 다시 손실이 커진다. 힌지는 z = 1/β 에서 손실과 그래디언트가 정확히 0이 된다. " +
      "목표 마진 γ(SimPO)는 DPO 곡선을 γ/β 만큼 오른쪽으로 민다 — ‘최소 이만큼은 벌려라’.",
  });
  const st = { beta: 0.5, gamma: 1.0 };
  GW.slider(f.controls, { label: "β", min: 0.2, max: 2, step: 0.05, value: st.beta, fmt: (v) => v.toFixed(2), oninput: (v) => { st.beta = v; draw(); } });
  GW.slider(f.controls, { label: "γ (목표 마진)", min: 0, max: 3, step: 0.1, value: st.gamma, fmt: (v) => v.toFixed(1), oninput: (v) => { st.gamma = v; draw(); } });
  GW.legend(f.stage, [
    ["c1", "DPO: −log σ(βz)"],
    ["c2", "IPO: (z − 1/(2β))²"],
    ["c3", "힌지: max(0, 1 − βz)"],
    ["c4 dash", "목표 마진: −log σ(βz − γ)", "dash"],
  ]);
  const c = GW.chart(f.stage, { x: [-4, 8], y: [0, 4], xlabel: "원본 대비 마진 z = Δθ − Δref", ylabel: "손실", h: 290, label: "링크 함수 비교" });
  c.clip();
  const F = {
    dpo: (z) => -Math.log(GW.sigmoid(st.beta * z)),
    ipo: (z) => Math.pow(z - 1 / (2 * st.beta), 2),
    hinge: (z) => Math.max(0, 1 - st.beta * z),
    tgt: (z) => -Math.log(GW.sigmoid(st.beta * z - st.gamma)),
  };
  function draw() {
    c.layer.innerHTML = "";
    c.top.innerHTML = "";
    c.fn(F.dpo, "c1");
    c.fn(F.ipo, "c2", 300);
    c.fn(F.hinge, "c3", 300);
    c.fn(F.tgt, "c4 dash");
    const zI = 1 / (2 * st.beta), zH = 1 / st.beta;
    if (zI <= 8) { c.dot(zI, 0, "f2", 5); c.text(zI - 0.15, 0.15, "IPO 바닥", "", "end"); }
    if (zH <= 8) { c.dot(zH, 0, "f3", 5); c.text(zH + 0.15, 0.15, "힌지 멈춤", "", "start"); }
    f.readout.innerHTML =
      `z = 6 에서 DPO 손실 <b>${F.dpo(6).toFixed(3)}</b> (0이 아님) · IPO 타깃 z* = <b>${zI.toFixed(2)}</b> · ` +
      `힌지가 멈추는 z = <b>${zH.toFixed(2)}</b> · 목표 마진이 DPO 곡선을 민 거리 γ/β = <b>${(st.gamma / st.beta).toFixed(2)}</b>`;
  }
  c.hover((z) => `z = ${GW.fmt(z, 2)}<br>DPO ${GW.fmt(F.dpo(z), 3)}<br>IPO ${GW.fmt(F.ipo(z), 3)}<br>힌지 ${GW.fmt(F.hinge(z), 3)}<br>목표 마진 ${GW.fmt(F.tgt(z), 3)}`);
  draw();
});
