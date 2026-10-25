// 세 구역 택시의 리턴과 가치 추정.
// 마르코프 결정 과정 장 「정책과 가치함수: 상태의 값, 행동의 값」 절에 놓인다.
// 구역마다 행동(배회 / 승차장)을 골라 정책을 만들고, 출발 구역에서 하루(에피소드)를 여러 번 돌린다.
// 왼쪽: 하루마다의 리턴 G 히스토그램. 오른쪽: 돌린 하루 수에 따른 리턴 평균(가치 V 의 추정)과 ±2 표준오차 띠.
// 숫자(목적지 확률, 요금, 기다리는 비용, 퇴근 확률)는 sources/mdp/mdp_taxi.py 와 같다.
// 단추 하나는 아래 문제 11 의 설정(출발 시장, 시장만 배회로 바꾼 정책, γ = 1)을 불러온다. 설명글에는 문제의 답을 적지 않는다.
GW.register("mdp-return", (el) => {
  const ZONES = ["역", "시장", "대학가"];
  const ACTS = ["배회", "승차장"];
  const END = 0.1;
  const DEST = [
    [[0.6, 0.3, 0.1], [0.1, 0.2, 0.7]],
    [[0.3, 0.6, 0.1], [0.4, 0.2, 0.4]],
    [[0.2, 0.2, 0.6], [0.7, 0.3, 0.0]],
  ];
  const FARE = [[4, 7, 10], [7, 3, 6], [10, 6, 4]];
  const WAIT = [0, 2];
  const MAX_DAYS = 200000;

  const c = (hex, t) => `<span style='color:var(--sym-${hex}, #${hex})'>${t}</span>`;
  const gam = c("7a1f5a", "γ"), Gs = c("5d4037", "G"), Vs = c("00897b", "V"), Ns = c("5f970c", "N");

  const f = GW.frame(el, {
    title: "택시 하루의 리턴과 가치 추정",
    caption:
      `하루는 손님을 내려 줄 때마다 1/10 확률로 끝난다. 하루 동안 받은 요금에서 승차장 대기 비용을 뺀 값을 ${gam}<sup>k</sup> 로 할인해 더한 것이 그날의 리턴 ${Gs} 이다. ` +
      `정책이나 ${gam} 를 바꾸면 쌓아 둔 하루들은 지워진다. 히스토그램이 얼마나 넓게 퍼지는지, 평균이 몇 날쯤 돌려야 한 값 근처에 머무는지, 정책 둘의 평균 차이가 표준오차 띠보다 큰지를 보라. ` +
      `마지막 단추는 아래 문제 11 의 설정을 불러온다.`,
  });

  const st = { pol: [1, 1, 1], start: 1, gamma: 1, seed: 1, returns: [], lastDay: null };
  let rng = GW.rng(st.seed);

  // 조작부
  const segs = [];
  const polRow = GW.h("div", { style: { display: "flex", flexWrap: "wrap", gap: "0.4rem 0.9rem", alignItems: "center" } }, f.controls);
  ZONES.forEach((z, s) => {
    const w = GW.h("span", { style: { whiteSpace: "nowrap" } }, polRow);
    GW.h("span", { html: c("0093b8", z) + " 에서 ", style: { marginRight: "0.3em" } }, w);
    segs.push(GW.segmented(w, { options: ACTS.map((a, i) => [i, a]), value: st.pol[s], onchange: (v) => { st.pol[s] = v; reset(); } }));
  });
  const row2 = GW.h("div", { style: { display: "flex", flexWrap: "wrap", gap: "0.4rem 0.9rem", alignItems: "center", marginTop: "0.4rem" } }, f.controls);
  const sw = GW.h("span", { style: { whiteSpace: "nowrap" } }, row2);
  GW.h("span", { text: "출발 구역 ", style: { marginRight: "0.3em" } }, sw);
  const startSeg = GW.segmented(sw, { options: ZONES.map((z, i) => [i, z]), value: st.start, onchange: (v) => { st.start = v; reset(); } });
  const sG = GW.slider(f.controls, { label: "할인율 " + gam, min: 0, max: 1, step: 0.01, value: st.gamma, fmt: (v) => GW.fmt(v, 2), oninput: (v) => { st.gamma = v; reset(); } });
  const btnRow = GW.h("div", { style: { display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "0.4rem" } }, f.controls);
  GW.button(btnRow, "하루 1번", () => run(1));
  GW.button(btnRow, "하루 100번", () => run(100));
  GW.button(btnRow, "하루 1,000번", () => run(1000));
  GW.button(btnRow, "하루 10,000번", () => run(10000));
  GW.button(btnRow, "처음부터 (다른 난수)", () => { st.seed++; reset(); });
  GW.button(btnRow, "문제 11 설정 불러오기", () => {
    st.pol = [1, 0, 1]; st.start = 1; st.gamma = 1;
    st.pol.forEach((v, s) => segs[s].set(v)); startSeg.set(1); sG.value = 1;
    reset();
  });

  // 그림
  const grid = GW.h("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "0.8rem" } }, f.stage);
  const left = GW.h("div", {}, grid), right = GW.h("div", {}, grid);
  GW.legend(left, [["c1", "하루마다의 리턴 " + Gs]]);
  const hist = GW.chart(left, { w: 300, h: 230, x: [0, 100], y: [0, 1], yticks: [], xlabel: "리턴 G (천 원)", margin: { l: 16, r: 12 }, label: "리턴 히스토그램" });
  GW.legend(right, [["cs-V", "리턴 평균 = " + Vs + " 의 추정"], ["cm", "± 2 표준오차"]]);
  const run_c = GW.chart(right, { w: 300, h: 230, x: [1, 10], y: [0, 100], xlabel: "돌린 하루 수 (로그 눈금)", ylabel: "평균 리턴", margin: { l: 44, r: 12 }, label: "리턴 평균의 흐름" });

  run_c.clip();

  function day() {
    let s = st.start, g = 0, disc = 1, n = 0;
    for (;;) {
      const a = st.pol[s];
      const u = rng(), p = DEST[s][a];
      const s2 = u < p[0] ? 0 : u < p[0] + p[1] ? 1 : 2;
      g += disc * (FARE[s][s2] - WAIT[a]);
      disc *= st.gamma; n++;
      if (rng() < END) break;
      s = s2;
    }
    st.lastDay = { n, g };
    return g;
  }
  function run(k) {
    for (let i = 0; i < k && st.returns.length < MAX_DAYS; i++) st.returns.push(day());
    draw();
  }
  function reset() {
    rng = GW.rng(st.seed * 7919 + 13);
    st.returns = []; st.lastDay = null;
    run(100);
  }

  function draw() {
    const R = st.returns, n = R.length;
    // 히스토그램: 오른쪽 꼬리는 99번째 백분위수에서 자른다(나머지는 맨 끝 칸에 모음)
    const sorted = R.slice().sort((a, b) => a - b);
    const hi = Math.max(10, sorted[Math.min(n - 1, Math.floor(n * 0.99))] * 1.05);
    hist.x = [0, hi];
    const BINS = 30, bw = hi / BINS, cnt = new Array(BINS).fill(0);
    for (const v of R) cnt[Math.min(BINS - 1, Math.max(0, Math.floor(v / bw)))]++;
    const mx = Math.max(1, ...cnt);
    hist.y = [0, mx * 1.1];
    hist.drawAxes();
    hist.layer.innerHTML = ""; hist.top.innerHTML = "";
    cnt.forEach((m, i) => {
      if (!m) return;
      GW.s("rect", { class: "f1", x: hist.X(i * bw) + 0.5, y: hist.Y(m), width: Math.max(0.5, hist.X(bw) - hist.X(0) - 1), height: hist.Y(0) - hist.Y(m), rx: 1.5 }, hist.layer);
    });
    // 평균의 흐름: 로그 간격의 점에서 누적 평균과 표준오차
    const pts = [], lo = [], up = [];
    let sum = 0, sq = 0, next = 1;
    for (let i = 0; i < n; i++) {
      sum += R[i]; sq += R[i] * R[i];
      const k = i + 1;
      if (k >= next || k === n) {
        const m = sum / k, sd = k > 1 ? Math.sqrt(Math.max(0, (sq - k * m * m) / (k - 1))) : 0, se = sd / Math.sqrt(k);
        pts.push([Math.log10(k), m]); lo.push([Math.log10(k), m - 2 * se]); up.push([Math.log10(k), m + 2 * se]);
        next = Math.ceil(k * 1.08);
      }
    }
    const xmax = Math.max(2, Math.ceil(Math.log10(Math.max(n, 10))));
    const all = pts.slice(Math.min(3, pts.length - 1)).map((p) => p[1]);
    const mean = sum / n;
    const ymin = Math.max(0, Math.min(...all) * 0.8), ymax = Math.max(...all) * 1.2 + 1;
    run_c.x = [0, xmax]; run_c.y = [ymin, ymax];
    run_c.drawAxes();
    // x 눈금을 1, 10, 100 … 으로 다시 쓴다
    run_c.svg.querySelectorAll("text.w-tick").forEach((t) => {
      const v = +t.textContent;
      if (t.getAttribute("text-anchor") === "middle" && Number.isInteger(v)) t.textContent = String(10 ** v).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      else if (t.getAttribute("text-anchor") === "middle") t.textContent = "";
    });
    run_c.layer.innerHTML = ""; run_c.top.innerHTML = "";
    run_c.path(lo, "cm thin dash"); run_c.path(up, "cm thin dash");
    run_c.path(pts, "cs-V");
    const sd = n > 1 ? Math.sqrt(Math.max(0, (sq - n * mean * mean) / (n - 1))) : 0;
    const ld = st.lastDay;
    f.readout.innerHTML =
      `${Ns} = <b>${n.toLocaleString()}</b>일 · 평균 리턴 ${c("00897b", "V̂")} = <b>${GW.fmt(mean, 2)}</b> · 표준오차 <b>${GW.fmt(sd / Math.sqrt(Math.max(1, n)), 2)}</b> · ` +
      `한 날 리턴의 표준편차 ${GW.fmt(sd, 1)}` +
      (ld ? ` · 마지막 하루: 손님 ${ld.n}명, ${Gs} = ${GW.fmt(ld.g, 2)}` : "") +
      (n >= MAX_DAYS ? ` · <b>${MAX_DAYS.toLocaleString()}일에서 멈춤</b>` : "");
  }
  hist.hover((x) => `리턴 ≈ ${GW.fmt(x, 1)}`);
  reset();
});
