// 문장 로그확률 = 토큰 로그확률의 합. 두 응답이 갈라지는 토큰이 마진을 대부분 결정한다.
// 조작: 네 토큰의 조건부 확률 슬라이더.
GW.register("token-logprob", (el) => {
  const f = GW.frame(el, {
    title: "토큰 로그확률을 더하면 문장 점수가 된다",
    caption:
      "막대는 각 토큰의 log p(아래로 길수록 모델이 덜 예상한 토큰). 오른쪽 끝 막대가 문장 전체의 log π(y|x) = 합. " +
      "뒤의 ‘입니다’는 앞 토큰이 달라 조건이 다르므로 확률도 조금 다르다 — 공유 토큰은 대부분 상쇄되지만 완전히는 아니다.",
  });
  const toks = [
    { resp: "w", text: "서울", p: 0.74, branch: true },
    { resp: "w", text: "입니다", p: 0.82 },
    { resp: "l", text: "부산", p: 0.03, branch: true },
    { resp: "l", text: "입니다", p: 0.74 },
  ];
  const lbl = (t) => `${t.resp === "w" ? "y<sub>w</sub>" : "y<sub>l</sub>"} “${t.text}”`;
  toks.forEach((t) =>
    GW.slider(f.controls, {
      label: lbl(t), min: 0.01, max: 0.99, step: 0.01, value: t.p, fmt: (v) => v.toFixed(2),
      oninput: (v) => { t.p = v; draw(); },
    })
  );
  const c = GW.chart(f.stage, { x: [0, 7], y: [-6, 0.4], xticks: [], ylabel: "로그확률", h: 280, margin: { b: 48 }, label: "토큰별 로그확률" });
  GW.legend(f.stage, [["c1", "선호 응답 y<sub>w</sub>"], ["c2", "비선호 응답 y<sub>l</sub>"]]);

  function bar(x, v, cls, label, sub) {
    const y0 = c.Y(0), y1 = c.Y(Math.max(v, -6));
    GW.s("rect", { class: cls, x: c.X(x - 0.38), y: y0, width: c.X(x + 0.38) - c.X(x - 0.38), height: Math.max(0, y1 - y0), rx: 4 }, c.layer);
    GW.s("text", { class: "w-label strong", x: c.X(x), y: Math.min(y1 + 14, c.Y(-6) - 2), "text-anchor": "middle", text: GW.fmt(v, 2) }, c.top);
    GW.s("text", { class: "w-tick", x: c.X(x), y: c.Y(-6) + 16, "text-anchor": "middle", text: label }, c.top);
    if (sub) GW.s("text", { class: "w-tick", x: c.X(x), y: c.Y(-6) + 30, "text-anchor": "middle", text: sub }, c.top);
  }

  function draw() {
    c.layer.innerHTML = ""; c.top.innerHTML = "";
    const lw = Math.log(toks[0].p) + Math.log(toks[1].p);
    const ll = Math.log(toks[2].p) + Math.log(toks[3].p);
    bar(0.5, Math.log(toks[0].p), "f1", "서울", "분기");
    bar(1.5, Math.log(toks[1].p), "f1", "입니다");
    bar(2.6, lw, "f1", "합 y_w", "log π(y_w)");
    bar(4.1, Math.log(toks[2].p), "f2", "부산", "분기");
    bar(5.1, Math.log(toks[3].p), "f2", "입니다");
    bar(6.2, ll, "f2", "합 y_l", "log π(y_l)");
    GW.s("line", { class: "w-line cm dash thin", x1: c.X(3.35), x2: c.X(3.35), y1: c.Y(0.4), y2: c.Y(-6) }, c.layer);
    const d = lw - ll;
    const branch = Math.log(toks[0].p) - Math.log(toks[2].p);
    const share = d !== 0 ? (branch / d) * 100 : 0;
    f.readout.innerHTML =
      `log π(y<sub>w</sub>) = <b>${GW.fmt(lw, 2)}</b> · log π(y<sub>l</sub>) = <b>${GW.fmt(ll, 2)}</b> · ` +
      `마진 Δθ = <b>${GW.fmt(d, 2)}</b> · 그중 분기 토큰(서울 vs 부산) 몫 <b>${GW.fmt(branch, 2)}</b>` +
      (Math.abs(d) > 0.05 ? ` (${share.toFixed(0)}%)` : "");
  }
  draw();
});
