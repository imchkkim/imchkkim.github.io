// GRPO 의 길이 나누기 편향 (Dr. GRPO 가 지적한 것).
// 그룹 = 짧은 정답, 긴 정답, 짧은 오답, 긴 오답 → Â = +1, +1, −1, −1 (σ로 나눈 값).
// 토큰 하나당 그래디언트 가중치:
//   GRPO   : Â / (G·|o_i|)   — 응답마다 자기 길이로 나눈다
//   DAPO   : Â / Σ_j |o_j|   — 배치의 전체 토큰 수로 나눈다 (토큰 단위 평균)
//   Dr.GRPO: Â / (G·MAX)     — 상수로 나눈다
// 원고의 위젯 줄에 붙은 data-set 으로 절마다 조작부를 고른다(18장에서만 쓴다).
//   없음            : (a) 「두 개의 나누기」 절 — 「문제 1 값」 단추(짧은 답 50, 긴 답 500)
//   data-set="dapo" : (b) 「DAPO의 네 가지 처방」 절 — 같은 위젯, 문제 단추 없음
GW.register("length-bias-grpo", (el) => {
  const f = GW.frame(el, {
    title: "길이로 나누면 생기는 일 — 토큰 하나가 받는 힘",
    caption:
      "그룹은 짧은 정답, 긴 정답, 짧은 오답, 긴 오답 넷이고 어드밴티지는 +1, +1, −1, −1. 두 막대는 각각 가장 큰 값을 1로 맞춘 상대 크기다. " +
      "파랑 = 토큰 하나당 가중치. 모든 토큰이 같은 가중치 w 를 받으면 그래디언트는 w·∇log π(응답) 이므로, 이것이 곧 <b>응답 전체의 로그확률</b>을 미는 힘이다. " +
      "주황 = 그 가중치를 토큰 수만큼 더한 합.",
  });
  let Ls = 40, Ll = 400, mode = "GRPO";
  const MAX = 4096, G = 4;
  GW.segmented(f.controls, { options: [["GRPO", "GRPO"], ["DAPO", "DAPO (토큰 단위)"], ["DR", "Dr. GRPO"]], value: mode, onchange: (v) => { mode = v; draw(); } });
  const sS = GW.slider(f.controls, { label: "짧은 답 길이", min: 10, max: 200, step: 10, value: Ls, oninput: (v) => { Ls = v; draw(); } });
  const sL = GW.slider(f.controls, { label: "긴 답 길이", min: 200, max: 4000, step: 100, value: Ll, oninput: (v) => { Ll = v; draw(); } });
  if (el.dataset.set !== "dapo")
    GW.button(f.controls, "문제 1 값 (50 / 500)", () => { Ls = 50; Ll = 500; sS.value = Ls; sL.value = Ll; draw(); });
  GW.legend(f.stage, [["c1", "토큰 하나당 (= 응답 로그확률을 미는 힘)"], ["c2", "토큰 수만큼 더한 합"]]);
  const names = ["짧은 정답", "긴 정답", "짧은 오답", "긴 오답"];
  const c = GW.chart(f.stage, { x: [0, 4], y: [-1.2, 1.4], xticks: [], yticks: [-1, -0.5, 0, 0.5, 1], ylabel: "상대 가중치", h: 290, margin: { b: 30 }, label: "응답별 그래디언트 가중치" });

  function weights() {
    const L = [Ls, Ll, Ls, Ll], A = [1, 1, -1, -1];
    const tot = L.reduce((a, b) => a + b, 0);
    const per = A.map((a, i) => (mode === "GRPO" ? a / (G * L[i]) : mode === "DAPO" ? a / tot : a / (G * MAX)));
    const whole = per.map((w, i) => w * L[i]);
    // 두 계열은 단위가 달라 각자 최대값을 1로 맞춘다
    const mp = Math.max(...per.map(Math.abs)), mw = Math.max(...whole.map(Math.abs));
    return { per: per.map((w) => w / mp), whole: whole.map((w) => w / mw), rawPer: per };
  }
  function draw() {
    const w = weights();
    c.layer.innerHTML = ""; c.top.innerHTML = "";
    for (let i = 0; i < 4; i++) {
      [["per", 0.15, "f1"], ["whole", 0.52, "f2"]].forEach(([k, off, cls]) => {
        const v = w[k][i], y0 = c.Y(0), y1 = c.Y(v);
        GW.s("rect", { class: cls, x: c.X(i + off), width: c.X(i + off + 0.33) - c.X(i + off), y: Math.min(y0, y1), height: Math.max(1, Math.abs(y1 - y0)), rx: 3 }, c.layer);
        GW.s("text", { class: "w-tick", x: c.X(i + off + 0.165), y: v >= 0 ? y1 - 4 : y1 + 13, "text-anchor": "middle", text: GW.fmt(v, 2) }, c.top);
      });
      GW.s("text", { class: "w-label strong", x: c.X(i + 0.5), y: c.Y(1.3), "text-anchor": "middle", text: names[i] }, c.top);
    }
    const ratio = Math.abs(w.rawPer[2] / w.rawPer[3]);
    f.readout.innerHTML =
      `짧은 오답의 토큰은 긴 오답의 토큰보다 <b>${ratio.toFixed(ratio < 10 ? 2 : 0)}배</b> 세게 억제된다` +
      (Math.abs(ratio - 1) < 1e-9 ? " — 길이와 무관하게 공평하다." : ` (길이 비 ${Ll}/${Ls}).`);
  }
  draw();
});
