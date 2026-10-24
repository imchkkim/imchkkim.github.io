// 강가 산책로에서 SARSA 와 Q-러닝을 견준다.
// Q-러닝 장 「Q-러닝: 최선의 수를 가정하고 배운다」 절에 놓인다.
// 격자·보상 규칙은 sources/q-learning/riverside.py 와 같다: 4줄 × 10칸, 출발 S = (줄 3, 칸 0), 정자 G = (줄 3, 칸 9),
// 맨 아래 줄 칸 1~8 은 강물(들어가면 −50 을 받고 출발점으로), 한 스텝마다 −1, 할인율 γ = 1, Q 표의 처음 값은 모두 0.
// 탐색 확률 ε 과 학습률 α 로 두 방법을 같은 수만큼(학습 20번 × 에피소드 500) 돌린다.
// 위: 학습 20번 가운데 가장 많이 나온 그리디 길(탐색 없이 표에서 가장 큰 칸만 따라간 길).
// 아래: 에피소드마다의 리턴(탐색하며 걸은 그대로)을 학습 20번에 걸쳐 평균 내고 10 에피소드씩 이동 평균한 곡선.
// 단추 하나는 아래 문제 5 의 설정(ε = 0.02)을 불러온다. 설명글에는 문제의 답을 적지 않는다.
GW.register("cliff-walk", (el) => {
  const ROWS = 4, COLS = 10, START = [3, 0], GOAL = [3, 9];
  const ACTS = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  const RUNS = 20, EPISODES = 500, MAX_STEPS = 5000;
  const isRiver = (r, c) => r === 3 && c >= 1 && c <= 8;

  const c = (hex, t) => `<span style='color:var(--sym-${hex}, #${hex})'>${t}</span>`;
  const epsS = c("cc00ff", "ε"), alS = c("993600", "α");

  const f = GW.frame(el, {
    title: "강가 산책로: SARSA 와 Q-러닝",
    caption:
      `두 방법 모두 ${epsS} 의 확률로 네 방향 가운데 아무 쪽으로나 걷고(탐색), 나머지는 표에서 가장 큰 쪽으로 걷는다. ` +
      `위 격자는 학습이 끝난 표에서 가장 큰 칸만 따라간 길이고, 아래 곡선은 학습하는 동안 탐색하며 걸은 그대로의 리턴이다. ` +
      `${epsS} 를 0 쪽으로 내리거나 키우며 두 길과 두 곡선이 어떻게 바뀌는지 보라. 마지막 단추는 아래 문제 5 의 ${epsS} 를 불러온다.`,
  });

  const st = { eps: 0.1, alpha: 0.1, seed: 1 };
  const sE = GW.slider(f.controls, { label: "탐색 확률 " + epsS, min: 0, max: 0.3, step: 0.01, value: st.eps, fmt: (v) => GW.fmt(v, 2), oninput: (v) => { st.eps = v; schedule(); } });
  const sA = GW.slider(f.controls, { label: "학습률 " + alS, min: 0.05, max: 0.5, step: 0.05, value: st.alpha, fmt: (v) => GW.fmt(v, 2), oninput: (v) => { st.alpha = v; schedule(); } });
  const btnRow = GW.h("div", { style: { display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "0.4rem" } }, f.controls);
  GW.button(btnRow, "다시 학습 (다른 난수)", () => { st.seed++; compute(); });
  GW.button(btnRow, "처음 값으로 (ε = 0.1, α = 0.1)", () => { st.eps = 0.1; st.alpha = 0.1; sE.value = 0.1; sA.value = 0.1; compute(); });
  GW.button(btnRow, "문제 5 설정 불러오기 (ε = 0.02)", () => { st.eps = 0.02; sE.value = 0.02; compute(); });

  // 격자 그림
  const W = 560, CELL = 50, X0 = 30, Y0 = 26;
  const gsvg = GW.s("svg", { class: "w-svg", viewBox: `0 0 ${W} 250`, role: "img", "aria-label": "강가 산책로 격자와 두 방법이 배운 길" }, f.stage);
  for (let r = 0; r < ROWS; r++)
    for (let cc = 0; cc < COLS; cc++)
      GW.s("rect", { class: isRiver(r, cc) ? "fa1" : "fneutral", x: X0 + CELL * cc + 1, y: Y0 + CELL * r + 1, width: CELL - 2, height: CELL - 2, rx: 4 }, gsvg);
  GW.s("text", { class: "w-label", x: X0 + CELL * 5, y: Y0 + CELL * 3.5 + 4, "text-anchor": "middle", text: "강물 (−50, 출발점으로)" }, gsvg);
  GW.s("text", { class: "w-label strong", x: X0 + CELL * 0.5, y: Y0 + CELL * 3.5 + 5, "text-anchor": "middle", text: "S" }, gsvg);
  GW.s("text", { class: "w-label strong", x: X0 + CELL * 9.5, y: Y0 + CELL * 3.5 + 5, "text-anchor": "middle", text: "G" }, gsvg);
  const pathLayer = GW.s("g", {}, gsvg);
  const gLegend = GW.h("div", {}, f.stage);

  GW.legend(f.stage, [["c1", "SARSA"], ["c2", "Q-러닝"]]);
  const ch = GW.chart(f.stage, { w: 560, h: 260, x: [1, EPISODES], y: [-100, 0], xlabel: "에피소드", ylabel: "에피소드의 리턴 (10회 이동 평균)", margin: { l: 52 }, label: "에피소드마다의 리턴" });
  ch.clip();

  function makeRng(seed) { return GW.rng(seed); }

  function stepEnv(r, cc, a) {
    let nr = Math.min(Math.max(r + ACTS[a][0], 0), ROWS - 1), nc = Math.min(Math.max(cc + ACTS[a][1], 0), COLS - 1);
    if (isRiver(nr, nc)) return [START[0], START[1], -50, false, true];
    if (nr === GOAL[0] && nc === GOAL[1]) return [nr, nc, -1, true, false];
    return [nr, nc, -1, false, false];
  }
  function argmaxRand(q, base, rng) {
    let m = -Infinity, best = [];
    for (let a = 0; a < 4; a++) { const v = q[base + a]; if (v > m + 1e-12) { m = v; best = [a]; } else if (Math.abs(v - m) <= 1e-12) best.push(a); }
    return best.length === 1 ? best[0] : best[Math.floor(rng() * best.length)];
  }
  function choose(Q, r, cc, eps, rng) {
    if (rng() < eps) return Math.floor(rng() * 4);
    return argmaxRand(Q, (r * COLS + cc) * 4, rng);
  }
  function learn(method, rng) {
    const Q = new Float64Array(ROWS * COLS * 4);
    const rets = new Float64Array(EPISODES);
    let falls = 0;
    for (let ep = 0; ep < EPISODES; ep++) {
      let r = START[0], cc = START[1], a = choose(Q, r, cc, st.eps, rng), g = 0;
      for (let t = 0; t < MAX_STEPS; t++) {
        const [r2, c2, rew, done, fell] = stepEnv(r, cc, a);
        g += rew; if (fell && ep >= EPISODES - 100) falls++;
        const i = (r * COLS + cc) * 4 + a;
        let target = rew, a2 = 0;
        if (!done) {
          a2 = choose(Q, r2, c2, st.eps, rng);
          const b = (r2 * COLS + c2) * 4;
          target += method === "sarsa" ? Q[b + a2] : Math.max(Q[b], Q[b + 1], Q[b + 2], Q[b + 3]);
        }
        Q[i] += st.alpha * (target - Q[i]);
        if (done) break;
        r = r2; cc = c2; a = a2;
      }
      rets[ep] = g;
    }
    return { Q, rets, falls };
  }
  function greedyPath(Q) {
    let r = START[0], cc = START[1];
    const pts = [[r, cc]];
    for (let t = 0; t < 40; t++) {
      const b = (r * COLS + cc) * 4;
      let a = 0; for (let k = 1; k < 4; k++) if (Q[b + k] > Q[b + a]) a = k;
      const [r2, c2, , done] = stepEnv(r, cc, a);
      r = r2; cc = c2; pts.push([r, cc]);
      if (done) return { pts, ok: true };
    }
    return { pts, ok: false };
  }

  let timer = null;
  function schedule() { clearTimeout(timer); timer = setTimeout(compute, 120); }

  function compute() {
    const res = {};
    for (const m of ["sarsa", "q"]) {
      const rng = makeRng(st.seed * 7919 + (m === "q" ? 101 : 0));
      const avg = new Float64Array(EPISODES), counts = new Map();
      let last = 0, falls = 0;
      for (let k = 0; k < RUNS; k++) {
        const { Q, rets, falls: fl } = learn(m, rng);
        for (let e = 0; e < EPISODES; e++) avg[e] += rets[e] / RUNS;
        for (let e = EPISODES - 100; e < EPISODES; e++) last += rets[e] / (100 * RUNS);
        falls += fl / (100 * RUNS);
        const gp = greedyPath(Q);
        const key = gp.ok ? gp.pts.map((p) => p.join(",")).join(";") : "loop";
        const prev = counts.get(key) || { n: 0, gp };
        prev.n++; counts.set(key, prev);
      }
      let top = null; for (const v of counts.values()) if (!top || v.n > top.n) top = v;
      res[m] = { avg, last, falls, top };
    }
    draw(res);
  }

  function draw(res) {
    pathLayer.innerHTML = "";
    const lines = [];
    [["sarsa", "c1", -5, "SARSA"], ["q", "c2", 5, "Q-러닝"]].forEach(([m, cls, dy, name]) => {
      const { gp, n } = res[m].top;
      const pts = gp.pts.map(([r, cc]) => `${X0 + CELL * (cc + 0.5) + dy},${Y0 + CELL * (r + 0.5) + dy}`).join(" ");
      GW.s("polyline", { class: "w-line " + cls, points: pts, style: { strokeWidth: 3.5 } }, pathLayer);
      lines.push(`${name}: ${gp.ok ? `${gp.pts.length - 1}스텝 길` : "길이 맴돎(도착 못 함)"} (학습 ${RUNS}번 가운데 ${n}번)`);
    });
    gLegend.innerHTML = `<div class="w-readout">그리디 길 · ${lines.join(" · ")}</div>`;

    ch.layer.innerHTML = "";
    let lo = 0;
    [["sarsa", "c1"], ["q", "c2"]].forEach(([m, cls]) => {
      const a = res[m].avg, pts = [];
      for (let e = 0; e < EPISODES; e++) {
        const s = Math.max(0, e - 9);
        let sum = 0; for (let j = s; j <= e; j++) sum += a[j];
        const v = sum / (e - s + 1);
        pts.push([e + 1, v]);
        if (e >= 20) lo = Math.min(lo, v);
      }
      ch.path(pts, cls);
    });
    ch.y = [Math.max(-300, Math.floor((lo - 5) / 10) * 10), 0];
    ch.drawAxes();
    ch.layer.innerHTML = "";
    [["sarsa", "c1"], ["q", "c2"]].forEach(([m, cls]) => {
      const a = res[m].avg, pts = [];
      for (let e = 0; e < EPISODES; e++) {
        const s = Math.max(0, e - 9);
        let sum = 0; for (let j = s; j <= e; j++) sum += a[j];
        pts.push([e + 1, sum / (e - s + 1)]);
      }
      ch.path(pts, cls);
    });
    f.readout.innerHTML =
      `마지막 100 에피소드의 평균 리턴 · SARSA <b>${GW.fmt(res.sarsa.last, 2)}</b> · Q-러닝 <b>${GW.fmt(res.q.last, 2)}</b> · ` +
      `에피소드당 강물에 빠진 횟수 · SARSA ${GW.fmt(res.sarsa.falls, 3)} · Q-러닝 ${GW.fmt(res.q.falls, 3)}`;
  }

  compute();
});
