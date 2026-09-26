// 길이 편향: 합(DPO식) vs 평균(SimPO식) vs 평균 위의 오즈(ORPO식)
// 두 응답의 길이와 토큰당 확률을 바꾸며 어느 쪽이 '이기는지' 본다.
GW.register("length-bias", (el) => {
  const f = GW.frame(el, {
    title: "긴 정답 vs 짧은 오답 — 누가 더 높은 점수를 받는가",
    caption:
      "선은 토큰을 하나씩 더할 때의 누적 로그확률(합). 점은 각 응답이 끝나는 지점이다. 합으로 비교하면 선이 길수록 불리하고, " +
      "평균(토큰당 로그확률)으로 비교하면 길이가 사라진다. ORPO는 평균 로그확률을 확률로 되돌린 <span class='sym-pi'>P̄</span> 위에서 오즈 log(<span class='sym-pi'>P̄</span>/(1−<span class='sym-pi'>P̄</span>))를 비교한다.",
  });
  const st = { nw: 12, pw: 0.8, nl: 4, pl: 0.6 };
  const add = (key, label, min, max, step, fmt) =>
    GW.slider(f.controls, { label, min, max, step, value: st[key], fmt, oninput: (v) => { st[key] = v; draw(); } });
  add("nw", "<span style='color:var(--sym-e000a5, #e000a5)'>y<sub>w</sub></span> 길이", 1, 40, 1, (v) => v + "토큰");
  add("pw", "<span style='color:var(--sym-e000a5, #e000a5)'>y<sub>w</sub></span> 토큰당 확률", 0.3, 0.99, 0.01, (v) => v.toFixed(2));
  add("nl", "<span style='color:var(--sym-e000a5, #e000a5)'>y<sub>l</sub></span> 길이", 1, 40, 1, (v) => v + "토큰");
  add("pl", "<span style='color:var(--sym-e000a5, #e000a5)'>y<sub>l</sub></span> 토큰당 확률", 0.3, 0.99, 0.01, (v) => v.toFixed(2));
  GW.legend(f.stage, [["c1", "선호 응답 <span style='color:var(--sym-e000a5, #e000a5)'>y<sub>w</sub></span> (정답)"], ["c2", "비선호 응답 <span style='color:var(--sym-e000a5, #e000a5)'>y<sub>l</sub></span> (오답)"]]);
  const c = GW.chart(f.stage, { x: [0, 40], y: [-12, 0], xlabel: "토큰 수", ylabel: "누적 로그확률 (합)", h: 260, label: "길이에 따른 누적 로그확률" });
  c.clip();
  const tbl = GW.h("table", { style: { marginTop: "0.6em" } }, f.stage);

  const logodds = (p) => Math.log(p / (1 - p));
  function draw() {
    c.layer.innerHTML = ""; c.top.innerHTML = "";
    const lw = Math.log(st.pw), ll = Math.log(st.pl);
    c.path([[0, 0], [st.nw, st.nw * lw]], "c1");
    c.path([[0, 0], [st.nl, st.nl * ll]], "c2");
    c.dot(st.nw, Math.max(-12, st.nw * lw), "f1", 6);
    c.dot(st.nl, Math.max(-12, st.nl * ll), "f2", 6);
    const sumW = st.nw * lw, sumL = st.nl * ll;
    const rows = [
      ["합 Σ log p (DPO가 쓰는 양)", sumW, sumL],
      ["평균 (1/|y|) Σ log p (SimPO)", lw, ll],
      ["평균 위의 로그오즈 (ORPO)", logodds(st.pw), logodds(st.pl)],
    ];
    tbl.innerHTML =
      "<tr><th>비교 방식</th><th><span style='color:var(--sym-e000a5, #e000a5)'>y<sub>w</sub></span></th><th><span style='color:var(--sym-e000a5, #e000a5)'>y<sub>l</sub></span></th><th>이기는 쪽</th></tr>" +
      rows.map(([name, a, b]) =>
        `<tr><td>${name}</td><td>${GW.fmt(a, 2)}</td><td>${GW.fmt(b, 2)}</td><td>${a > b ? "✓ 정답 <span style='color:var(--sym-e000a5, #e000a5)'>y<sub>w</sub></span>" : a < b ? "✗ 오답 <span style='color:var(--sym-e000a5, #e000a5)'>y<sub>l</sub></span>" : "무승부"}</td></tr>`
      ).join("");
    f.readout.innerHTML = sumW < sumL && lw > ll
      ? "<b>합으로는 오답이 이긴다.</b> 토큰마다 더 확신하는 정답이, 길다는 이유만으로 진다."
      : "";
  }
  draw();
});
