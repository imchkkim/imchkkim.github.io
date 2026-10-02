// 길이 편향: 합 vs 평균 vs 평균 위의 오즈
// 두 응답의 길이와 토큰당 확률을 바꾸며 어느 쪽이 '이기는지' 본다.
// 9장 세 절에서 쓴다. 원고의 위젯 줄에 붙은 data-set 으로 절마다 표의 줄과 단추를 고른다.
//   (없음)          : 「합의 잣대」 절 — 본문 예(12토큰 × 0.8, 4토큰 × 0.6)에서 시작, 단추는 문제 2 의 두 길이
//   data-set="norm" : 「길이 정규화」 절 — 선호 응답 끝에 붙이는 토큰 칸을 더함, 단추는 문제 5 의 값
//   data-set="odds" : 「오즈」 절 — 평균과 로그오즈 두 줄, 단추는 문제 7 의 두 쌍
// 설명글에는 문제의 답을 적지 않는다.
GW.register("length-bias", (el) => {
  const YW = "<span style='color:var(--sym-e000a5, #e000a5)'>y<sub>w</sub></span>";
  const YL = "<span style='color:var(--sym-e000a5, #e000a5)'>y<sub>l</sub></span>";
  const sets = {
    sum: {
      title: "긴 정답 vs 짧은 오답 — 누가 더 높은 점수를 받는가",
      caption:
        "선은 토큰을 하나씩 더할 때의 누적 로그확률(합). 점은 각 응답이 끝나는 지점이다. " +
        "길이와 토큰당 확률을 바꾸며 표의 두 잣대가 언제 다른 답을 내는지 보라. 단추는 아래 문제 2 의 두 길이를 불러온다. 토큰당 확률을 밀어 문턱을 찾아보라.",
      rows: ["sum", "mean"],
      start: "body",
      presets: {
        body: { nw: 12, pw: 0.8, nl: 4, pl: 0.6, label: "본문의 두 응답" },
        p24: { nw: 24, pw: 0.84, nl: 4, pl: 0.6, label: "문제 2 · 24토큰" },
        p48: { nw: 48, pw: 0.84, nl: 4, pl: 0.6, label: "문제 2 · 48토큰" },
      },
    },
    norm: {
      title: "평균으로 나누면 — 끝에 붙인 토큰은 무엇을 바꾸나",
      caption:
        "선호 응답 끝에 토큰을 덧붙일 수 있다. 덧붙인 토큰 수와 그 토큰들의 확률을 바꾸며 합과 평균이 어떻게 움직이는지 보라. " +
        "단추는 아래 문제 5 의 값을 불러온다. 풀이를 마친 뒤 표와 견주어 보라.",
      rows: ["sum", "mean"],
      tail: true,
      start: "body",
      presets: {
        body: { nw: 12, pw: 0.8, na: 0, pa: 0.99, nl: 4, pl: 0.6, label: "붙이기 전" },
        p5: { nw: 12, pw: 0.8, na: 20, pa: 0.99, nl: 4, pl: 0.6, label: "문제 5" },
      },
    },
    odds: {
      title: "평균 확률 위에 오즈를 씌우면",
      caption:
        "두 응답의 길이를 같게 두고 토큰당 확률만 바꾸며, 평균 로그확률의 차와 로그오즈의 차가 어떻게 다른지 보라. " +
        "단추는 본문의 쌍과 아래 문제 7 의 두 쌍을 불러온다. 풀이를 마친 뒤 표와 견주어 보라.",
      rows: ["mean", "logodds"],
      diff: true,
      start: "body",
      presets: {
        body: { nw: 10, pw: 0.95, nl: 10, pl: 0.75, label: "본문의 쌍" },
        p7a: { nw: 10, pw: 0.8, nl: 10, pl: 0.6, label: "문제 7 · 첫 쌍" },
        p7b: { nw: 10, pw: 0.3, nl: 10, pl: 0.1, label: "문제 7 · 둘째 쌍" },
      },
    },
  };
  const S = sets[el.dataset.set] || sets.sum;
  const f = GW.frame(el, { title: S.title, caption: S.caption });
  const st = Object.assign({ na: 0, pa: 0.99 }, S.presets[S.start]);
  const bar = GW.h("div", { class: "w-controls" }, f.controls);
  const sliders = {};
  const seg = GW.segmented(bar, {
    options: Object.entries(S.presets).map(([k, p]) => [k, p.label]),
    value: S.start,
    onchange: (k) => {
      Object.assign(st, S.presets[k]);
      for (const key in sliders) sliders[key].value = st[key];
      draw();
    },
  });
  const add = (key, label, min, max, step, fmt) => {
    sliders[key] = GW.slider(f.controls, { label, min, max, step, value: st[key], fmt, oninput: (v) => { st[key] = v; seg.set(null); draw(); } });
  };
  add("nw", YW + " 길이", 1, 60, 1, (v) => v + "토큰");
  add("pw", YW + " 토큰당 확률", 0.05, 0.99, 0.01, (v) => v.toFixed(2));
  if (S.tail) {
    add("na", YW + " 끝에 붙인 토큰 수", 0, 40, 1, (v) => v + "토큰");
    add("pa", "붙인 토큰의 확률", 0.05, 0.99, 0.01, (v) => v.toFixed(2));
  }
  add("nl", YL + " 길이", 1, 60, 1, (v) => v + "토큰");
  add("pl", YL + " 토큰당 확률", 0.05, 0.99, 0.01, (v) => v.toFixed(2));
  GW.legend(f.stage, [["c1", "선호 응답 " + YW + " (정답)"], ["c2", "비선호 응답 " + YL + " (오답)"]]);
  const c = GW.chart(f.stage, { x: [0, 60], y: [-16, 0], xlabel: "토큰 수", ylabel: "누적 로그확률 (합)", h: 260, label: "길이에 따른 누적 로그확률" });
  c.clip();
  const tbl = GW.h("table", { style: { marginTop: "0.6em" } }, f.stage);

  const logodds = (p) => Math.log(p / (1 - p));
  const names = {
    sum: "합 Σ log p",
    mean: "평균 (1/|y|) Σ log p",
    logodds: "평균 확률의 로그오즈",
  };
  function draw() {
    c.layer.innerHTML = ""; c.top.innerHTML = "";
    const na = S.tail ? st.na : 0;
    const lw = Math.log(st.pw), la = Math.log(st.pa), ll = Math.log(st.pl);
    const sumW = st.nw * lw + na * la, sumL = st.nl * ll;
    const nW = st.nw + na;
    const pts = [[0, 0], [st.nw, st.nw * lw]];
    if (na > 0) pts.push([nW, sumW]);
    c.path(pts, "c1");
    c.path([[0, 0], [st.nl, sumL]], "c2");
    c.dot(nW, Math.max(-16, sumW), "f1", 6);
    c.dot(st.nl, Math.max(-16, sumL), "f2", 6);
    const meanW = sumW / nW, meanL = ll;
    const val = {
      sum: [sumW, sumL],
      mean: [meanW, meanL],
      logodds: [logodds(Math.exp(meanW)), logodds(Math.exp(meanL))],
    };
    const win = (a, b) => a > b ? "✓ 정답 " + YW : a < b ? "✗ 오답 " + YL : "무승부";
    tbl.innerHTML =
      "<tr><th>비교 방식</th><th>" + YW + "</th><th>" + YL + "</th>" + (S.diff ? "<th>차</th>" : "<th>이기는 쪽</th>") + "</tr>" +
      S.rows.map((k) => {
        const [a, b] = val[k];
        return `<tr><td>${names[k]}</td><td>${GW.fmt(a, 3)}</td><td>${GW.fmt(b, 3)}</td><td>${S.diff ? GW.fmt(a - b, 3) : win(a, b)}</td></tr>`;
      }).join("");
    f.readout.innerHTML = !S.diff && sumW < sumL && meanW > meanL
      ? "<b>합으로는 오답이 이긴다.</b> 토큰마다 더 확신하는 정답이, 길다는 이유만으로 진다."
      : "";
  }
  draw();
});
