// 가치 반복: 서로 다른 두 처음 표가 한 점으로 모이는 모습.
// 벨먼 방정식 장 「축약 사상: 가치 반복은 왜 한 점에 모이나」 절에 놓인다.
// 세 구역 택시의 가치 표 두 개(A, B)에 벨먼 최적 연산자 𝒯 를 거듭 적용하고, 걸음마다 두 표의 가장 큰 칸 차이를 로그 눈금으로 그린다.
// 점선은 상한 (배율)^k × (처음 차이). 배율 = γ × (1 − 퇴근 확률).
// 숫자(목적지 확률, 요금, 기다리는 비용)는 sources/mdp/mdp_taxi.py, 처음 표와 기본 설정(퇴근 없음, γ = 0.95)은 sources/bellman/s3_contraction.py 와 같다.
// 단추 하나는 아래 문제 8 의 설정(퇴근 1/10, γ = 1)을 불러온다. 설명글에는 문제의 답을 적지 않는다.
GW.register("value-iteration", (el) => {
  const ZONES = ["역", "시장", "대학가"];
  const ACTS = ["배회", "승차장"];
  const DEST = [
    [[0.6, 0.3, 0.1], [0.1, 0.2, 0.7]],
    [[0.3, 0.6, 0.1], [0.4, 0.2, 0.4]],
    [[0.2, 0.2, 0.6], [0.7, 0.3, 0.0]],
  ];
  const FARE = [[4, 7, 10], [7, 3, 6], [10, 6, 4]];
  const WAIT = [0, 2];
  const R = DEST.map((row, s) => row.map((p, a) => p.reduce((acc, q, j) => acc + q * FARE[s][j], 0) - WAIT[a]));
  const PRESETS = [
    ["(200, 50, 120)", [200, 50, 120]],
    ["모두 500", [500, 500, 500]],
    ["(−100, 300, 0)", [-100, 300, 0]],
  ];
  const KMAX = 400;

  const c = (hex, t) => `<span style='color:var(--sym-${hex}, #${hex})'>${t}</span>`;
  const gam = c("7a1f5a", "γ"), T = c("ff0059", "𝒯"), Vs = c("00897b", "V");

  const f = GW.frame(el, {
    title: "가치 반복: 두 처음 표의 차이",
    caption:
      `표 A 는 모든 칸이 0, 표 B 는 고른 값에서 시작한다. 두 표에 같은 연산자 ${T} 를 한 번씩 적용할 때마다 세 칸 가운데 가장 큰 차이를 왼쪽 그림에 찍는다(세로는 로그 눈금). ` +
      `점선은 「처음 차이 × 배율의 k제곱」, 가로 점선은 처음 차이의 1/1000 이다. ${gam} 를 1 쪽으로 밀 때 실선이 얼마나 눕는지, 퇴근 확률을 바꾸면 무엇이 배율 노릇을 하는지 보라. ` +
      `오른쪽 표는 「걸음 k」 슬라이더의 걸음에서 두 표의 값과, 그 표로 고른 그리디 정책이다. 마지막 단추는 아래 문제 8 의 설정을 불러온다.`,
  });

  const st = { gamma: 0.95, end: 0, b: 0, k: 10 };

  const row1 = GW.h("div", { style: { display: "flex", flexWrap: "wrap", gap: "0.4rem 0.9rem", alignItems: "center" } }, f.controls);
  const sG = GW.slider(row1, { label: "할인율 " + gam, min: 0.5, max: 1, step: 0.01, value: st.gamma, fmt: (v) => GW.fmt(v, 2), oninput: (v) => { st.gamma = v; draw(); } });
  const ew = GW.h("span", { style: { whiteSpace: "nowrap" } }, row1);
  GW.h("span", { text: "퇴근 확률 ", style: { marginRight: "0.3em" } }, ew);
  const endSeg = GW.segmented(ew, { options: [[0, "없음"], [0.1, "1/10"]], value: st.end, onchange: (v) => { st.end = v; draw(); } });
  const row2 = GW.h("div", { style: { display: "flex", flexWrap: "wrap", gap: "0.4rem 0.9rem", alignItems: "center", marginTop: "0.4rem" } }, f.controls);
  const bw = GW.h("span", { style: { whiteSpace: "nowrap" } }, row2);
  GW.h("span", { text: "표 B 의 처음 값 ", style: { marginRight: "0.3em" } }, bw);
  const bSeg = GW.segmented(bw, { options: PRESETS.map((p, i) => [i, p[0]]), value: st.b, onchange: (v) => { st.b = v; draw(); } });
  const sK = GW.slider(f.controls, { label: "걸음 k", min: 0, max: 200, step: 1, value: st.k, fmt: (v) => String(v), oninput: (v) => { st.k = v; draw(); } });
  const btnRow = GW.h("div", { style: { display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "0.4rem" } }, f.controls);
  GW.button(btnRow, "처음 설정", () => { set(0.95, 0, 0, 10); });
  GW.button(btnRow, "문제 8 설정 불러오기", () => { set(1, 0.1, 0, 10); });
  function set(g, e, b, k) {
    st.gamma = g; st.end = e; st.b = b; st.k = k;
    sG.value = g; endSeg.set(e); bSeg.set(b); sK.value = k;
    draw();
  }

  const grid = GW.h("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "0.8rem" } }, f.stage);
  const left = GW.h("div", {}, grid), right = GW.h("div", {}, grid);
  GW.legend(left, [["c1", "두 표의 가장 큰 칸 차이"], ["cm", "처음 차이 × 배율<sup>k</sup>", "dash"]]);
  const ch = GW.chart(left, { w: 320, h: 240, x: [0, 200], y: [-3, 3], xlabel: "걸음 k (𝒯 를 적용한 횟수)", margin: { l: 50, r: 12 }, label: "두 표의 차이, 로그 눈금", yfmt: (v) => (Number.isInteger(v) ? "10^" + v : "") });
  ch.clip();
  const tbl = GW.h("div", { style: { fontSize: "0.9em", overflowX: "auto" } }, right);

  function T_op(V) {
    const out = [], pol = [];
    for (let s = 0; s < 3; s++) {
      let best = -Infinity, ba = 0;
      for (let a = 0; a < 2; a++) {
        let q = R[s][a];
        for (let j = 0; j < 3; j++) q += st.gamma * (1 - st.end) * DEST[s][a][j] * V[j];
        if (q > best + 1e-12) { best = q; ba = a; }
      }
      out.push(best); pol.push(ba);
    }
    return [out, pol];
  }

  function draw() {
    let A = [0, 0, 0], B = PRESETS[st.b][1].slice();
    const gaps = [], hist = [];
    for (let k = 0; k <= KMAX; k++) {
      gaps.push(Math.max(...A.map((v, i) => Math.abs(v - B[i]))));
      const [A2, pA] = T_op(A), [B2, pB] = T_op(B);
      hist.push({ A, B, pA, pB });
      A = A2; B = B2;
    }
    const rate = st.gamma * (1 - st.end);
    const g0 = gaps[0];
    const lg = (v) => Math.log10(Math.max(v, 1e-9));
    const xmax = 200;
    const ys = gaps.slice(0, xmax + 1).map(lg);
    const ylo = Math.floor(Math.min(lg(g0 / 1000) - 0.5, ...ys)), yhi = Math.ceil(lg(g0) + 0.3);
    ch.x = [0, xmax]; ch.y = [Math.max(ylo, -9), yhi];
    ch.drawAxes();
    ch.layer.innerHTML = ""; ch.top.innerHTML = "";
    ch.path([[0, lg(g0 / 1000)], [xmax, lg(g0 / 1000)]], "cm thin dash");
    ch.path(Array.from({ length: xmax + 1 }, (_, k) => [k, lg(g0 * Math.pow(rate, k))]), "cm dash");
    ch.path(ys.map((y, k) => [k, y]), "c1");
    ch.dot(st.k, ys[st.k], "f1", 4);

    const hit = gaps.findIndex((g) => g <= g0 / 1000);
    const bound = rate < 1 ? Math.log(1000) / Math.log(1 / rate) : Infinity;
    const h = hist[st.k];
    const cell = (v) => `<td style="text-align:right;padding:0 0.5em">${GW.fmt(v, 2)}</td>`;
    tbl.innerHTML =
      `<table style="border-collapse:collapse"><tr><th></th>${ZONES.map((z) => `<th style="padding:0 0.5em">${c("0093b8", z)}</th>`).join("")}</tr>` +
      `<tr><td>표 A 의 ${Vs}<sub>${st.k}</sub></td>${h.A.map(cell).join("")}</tr>` +
      `<tr><td>표 B 의 ${Vs}<sub>${st.k}</sub></td>${h.B.map(cell).join("")}</tr>` +
      `<tr><td>칸 차이</td>${h.A.map((v, i) => cell(Math.abs(v - h.B[i]))).join("")}</tr>` +
      `<tr><td>A 로 고른 행동</td>${h.pA.map((a) => `<td style="text-align:right;padding:0 0.5em">${c("1c9c60", ACTS[a])}</td>`).join("")}</tr>` +
      `<tr><td>B 로 고른 행동</td>${h.pB.map((a) => `<td style="text-align:right;padding:0 0.5em">${c("1c9c60", ACTS[a])}</td>`).join("")}</tr></table>`;
    f.readout.innerHTML =
      `점선의 배율 <b>${GW.fmt(rate, 3)}</b> · 걸음 ${st.k}: 가장 큰 칸 차이 <b>${GW.fmt(gaps[st.k], 4)}</b>` +
      (st.k ? ` (앞 걸음의 ${GW.fmt(gaps[st.k] / Math.max(gaps[st.k - 1], 1e-12), 4)}배)` : "") +
      ` · 처음의 1/1000 아래로: ${hit >= 0 ? `<b>${hit}</b>걸음` : `${KMAX}걸음 안에 안 닿음`}` +
      ` · 상한 식 ln1000 / ln(1/배율) = ${isFinite(bound) ? GW.fmt(bound, 1) : "∞"}`;
  }
  ch.hover((x) => {
    const k = Math.round(x);
    return k >= 0 && k <= 200 ? `걸음 ${k}` : "";
  });
  draw();
});
