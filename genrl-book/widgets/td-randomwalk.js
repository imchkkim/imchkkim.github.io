// 일곱 칸 랜덤 워크에서 시간차 학습과 몬테카를로의 오차 곡선.
// 시간차 학습 장에 두 번 놓인다.
//  - 기본(data-set 없음): 「시간차 학습: 다음 예측을 목표로 삼는다」 절. 위: 한 줄의 학습에서 칸마다의 값(에피소드를 하나씩 걸린다).
//    아래: 에피소드 100개 동안의 RMS 오차를 100줄 평균한 곡선(시간차 α, 몬테카를로 α 를 따로 민다).
//    단추 하나는 아래 문제 2 의 에피소드(4 → 5 → 6 → 5 → 4 → 5 → 6 → 7 → 끝)를 처음 값 0.5 에서 한 번 걸린다.
//  - data-set="nstep": 「n스텝 시간차: 한 스텝과 끝까지 사이」 절. n 과 처음 값(0.5 / 0)을 고르면 α 마다 에피소드 10개 뒤의 RMS 오차(100줄 평균)를 그린다.
//    아래 문제 11 의 에피소드에서 첫 칸의 n스텝 목표(참값 V 사용)를 수치판에 보인다.
// 길과 보상은 sources/td/walk.py 와 같다: 칸 1..7, 칸 4 출발, 오른쪽 끝 1점, 왼쪽 끝 0점, γ = 1, 참값 V(k) = k/8.
// 난수는 위젯의 것이라 곡선의 숫자는 본문 표(스크립트 출력)와 조금 다르다. 설명글에는 문제의 답을 적지 않는다.
GW.register("td-randomwalk", (el) => {
  const N = 7, TRUE = [0, 1, 2, 3, 4, 5, 6, 7, 8].map((k) => k / 8);
  const c = (hex, t) => `<span style='color:var(--sym-${hex}, #${hex})'>${t}</span>`;
  const al = c("536020", "α"), Vs = c("00897b", "V"), ns = c("993600", "n");
  const PROB2 = [4, 5, 6, 5, 4, 5, 6, 7, 8];

  function episode(rng) {
    let s = 4; const st = [s], rw = [];
    while (s >= 1 && s <= N) { s += rng() < 0.5 ? 1 : -1; st.push(s); rw.push(s === N + 1 ? 1 : 0); }
    return [st, rw];
  }
  const newV = (init) => { const V = new Array(N + 2).fill(init); V[0] = 0; V[N + 1] = 0; return V; };
  // n스텝 시간차 (n = Infinity 이면 몬테카를로). 스텝 순서대로 고친다
  function update(V, st, rw, a, n) {
    const T = rw.length;
    for (let t = 0; t < T; t++) {
      const h = Math.min(t + n, T);
      let G = 0;
      for (let k = t; k < h; k++) G += rw[k];
      if (h < T) G += V[st[h]];
      V[st[t]] += a * (G - V[st[t]]);
    }
  }
  const rms = (V) => { let s = 0; for (let k = 1; k <= N; k++) s += (V[k] - TRUE[k]) ** 2; return Math.sqrt(s / N); };

  if (el.dataset.set === "nstep") return nstep();

  // ── 기본: 시간차 대 몬테카를로 ──
  const f = GW.frame(el, {
    title: "일곱 칸 랜덤 워크: 시간차 학습과 몬테카를로",
    caption:
      `위 그림은 한 줄의 학습이다. 「에피소드 1개」를 누를 때마다 말이 칸 4에서 출발해 끝까지 걷고, 두 방법이 같은 에피소드로 칸마다의 값 ${Vs} 를 고친다(가는 가로선이 참값). ` +
      `아래 그림은 같은 일을 100줄 되풀이해 평균 낸 RMS 오차(칸 일곱 개의 참값과의 차이를 제곱해 평균 낸 뒤 제곱근)다. 두 방법의 ${al} 를 따로 밀어, 곡선이 얼마나 빨리 내려가는지와 어디서 더 내려가지 않는지를 보라. ` +
      `마지막 단추는 아래 문제 2 의 에피소드를 처음 값 0.5 에서 한 번 걸린다.`,
  });
  const st = { aT: 0.1, aM: 0.02, seed: 1 };
  const sT = GW.slider(f.controls, { label: "시간차 " + al, min: 0.01, max: 1, step: 0.01, value: st.aT, fmt: (v) => GW.fmt(v, 2), oninput: (v) => { st.aT = v; resetAll(); } });
  const sM = GW.slider(f.controls, { label: "몬테카를로 " + al, min: 0.01, max: 1, step: 0.01, value: st.aM, fmt: (v) => GW.fmt(v, 2), oninput: (v) => { st.aM = v; resetAll(); } });
  const br = GW.h("div", { style: { display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "0.4rem" } }, f.controls);
  GW.button(br, "에피소드 1개", () => step(1));
  GW.button(br, "에피소드 10개", () => step(10));
  GW.button(br, "처음 값으로 (다른 난수)", () => { st.seed++; resetOne(); draw(); });
  GW.button(br, "문제 2 에피소드", () => { resetOne(); applyEp(PROB2, PROB2.slice(1).map((s) => (s === N + 1 ? 1 : 0))); draw(); });

  const grid = GW.h("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "0.8rem" } }, f.stage);
  const top = GW.h("div", {}, grid), bot = GW.h("div", {}, grid);
  GW.legend(top, [["c1", "시간차"], ["c2", "몬테카를로"], ["cm", "참값"]]);
  const cv = GW.chart(top, { w: 320, h: 230, x: [0.4, 7.6], y: [0, 1], xticks: [1, 2, 3, 4, 5, 6, 7], xlabel: "칸", ylabel: "값 V", margin: { l: 40, r: 10 }, label: "칸마다의 값" });
  GW.legend(bot, [["c1", "시간차"], ["c2", "몬테카를로"]]);
  const cr = GW.chart(bot, { w: 320, h: 230, x: [0, 100], y: [0, 0.3], xlabel: "에피소드", ylabel: "RMS 오차 (100줄 평균)", margin: { l: 44, r: 10 }, label: "RMS 오차 곡선" });

  let rng, VT, VM, epCount = 0, lastEp = null, curves = null;
  function resetOne() { rng = GW.rng(st.seed * 977 + 5); VT = newV(0.5); VM = newV(0.5); epCount = 0; lastEp = null; }
  function applyEp(s, r) { update(VT, s, r, st.aT, 1); update(VM, s, r, st.aM, Infinity); epCount++; lastEp = s; }
  function step(k) { for (let i = 0; i < k; i++) { const [s, r] = episode(rng); applyEp(s, r); } draw(); }
  function computeCurves() {
    const E = 100, R = 100, cT = new Array(E + 1).fill(0), cM = new Array(E + 1).fill(0);
    for (let r = 0; r < R; r++) {
      const g = GW.rng(1000 + r), a = newV(0.5), b = newV(0.5);
      cT[0] += rms(a); cM[0] += rms(b);
      for (let e = 1; e <= E; e++) { const [s, w] = episode(g); update(a, s, w, st.aT, 1); update(b, s, w, st.aM, Infinity); cT[e] += rms(a); cM[e] += rms(b); }
    }
    curves = { T: cT.map((v, i) => [i, v / R]), M: cM.map((v, i) => [i, v / R]) };
  }
  function resetAll() { resetOne(); computeCurves(); draw(); }

  function draw() {
    cv.layer.innerHTML = ""; cv.top.innerHTML = "";
    for (let k = 1; k <= N; k++) {
      GW.s("rect", { class: "f1", x: cv.X(k - 0.32), y: cv.Y(VT[k]), width: cv.X(0.3) - cv.X(0), height: cv.Y(0) - cv.Y(VT[k]), rx: 1.5 }, cv.layer);
      GW.s("rect", { class: "f2", x: cv.X(k + 0.02), y: cv.Y(VM[k]), width: cv.X(0.3) - cv.X(0), height: cv.Y(0) - cv.Y(VM[k]), rx: 1.5 }, cv.layer);
      cv.path([[k - 0.4, TRUE[k]], [k + 0.4, TRUE[k]]], "cm");
    }
    cr.drawAxes(); cr.layer.innerHTML = "";
    cr.path(curves.M, "c2"); cr.path(curves.T, "c1");
    const at = (arr, e) => GW.fmt(arr[e][1], 3);
    f.readout.innerHTML =
      `이 줄: 에피소드 <b>${epCount}</b>개 · RMS 오차 시간차 <b>${GW.fmt(rms(VT), 3)}</b>, 몬테카를로 <b>${GW.fmt(rms(VM), 3)}</b>` +
      (lastEp ? ` · 마지막 에피소드 ${lastEp.map((s) => (s === 0 ? "왼끝" : s === N + 1 ? "오른끝" : s)).join("→")}` : "") +
      `<br>100줄 평균, 에피소드 10 / 50 / 100 뒤: 시간차 ${at(curves.T, 10)} / ${at(curves.T, 50)} / ${at(curves.T, 100)}, 몬테카를로 ${at(curves.M, 10)} / ${at(curves.M, 50)} / ${at(curves.M, 100)}`;
  }
  cr.hover((x) => {
    const e = Math.round(GW.clamp(x, 0, 100));
    return curves ? `에피소드 ${e}: 시간차 ${GW.fmt(curves.T[e][1], 3)}, 몬테카를로 ${GW.fmt(curves.M[e][1], 3)}` : "";
  });
  resetAll();

  // ── n스텝 ──
  function nstep() {
    const f = GW.frame(el, {
      title: "n스텝 시간차: 에피소드 10개 뒤의 오차",
      caption:
        `${ns} 스텝까지는 실제로 받은 보상을 더하고, 그 뒤는 ${ns} 스텝 뒤 칸의 값 ${Vs} 를 믿는다. ${ns} = 1 이 한 스텝 시간차, 맨 오른쪽(끝까지)이 몬테카를로다. ` +
        `곡선 하나는 ${al} 마다 에피소드 10개로 학습한 뒤의 RMS 오차(100줄 평균)이고, 흐린 두 선은 비교용 양 끝이다. ` +
        `처음 값을 0.5(대충 맞는 추측)와 0(아무것도 모름)으로 바꿔 가며, 가장 낮은 오차를 내는 ${ns} 이 어디로 옮겨 가는지 보라. 수치판 마지막 줄은 아래 문제 11 의 에피소드에서 첫 칸의 ${ns} 스텝 목표다.`,
    });
    const S = { n: 3, init: 0.5 };
    const nf = (v) => (v >= 17 ? "끝까지" : String(v));
    GW.slider(f.controls, { label: "스텝 수 " + ns, min: 1, max: 17, step: 1, value: S.n, fmt: nf, oninput: (v) => { S.n = v; draw(); } });
    const w = GW.h("span", { style: { whiteSpace: "nowrap", marginLeft: "0.6rem" } }, f.controls);
    GW.h("span", { text: "처음 값 ", style: { marginRight: "0.3em" } }, w);
    GW.segmented(w, { options: [[0.5, "0.5"], [0, "0"]], value: S.init, onchange: (v) => { S.init = v; draw(); } });
    const ALPHAS = []; for (let a = 0.05; a <= 1.0001; a += 0.05) ALPHAS.push(+a.toFixed(2));
    GW.legend(f.stage, [["c1", ns + " 스텝"], ["cm", "1 스텝 (흐림)"], ["c2", "끝까지 (흐림)"]]);
    const ch = GW.chart(f.stage, { w: 560, h: 260, x: [0, 1], y: [0, 0.5], xlabel: "α", ylabel: "에피소드 10개 뒤 RMS 오차", margin: { l: 48, r: 14 }, label: "n스텝 시간차의 오차" });
    const cache = {};
    function curve(n, init) {
      const key = n + ":" + init;
      if (cache[key]) return cache[key];
      const R = 100, out = ALPHAS.map((a) => {
        let tot = 0;
        for (let r = 0; r < R; r++) {
          const g = GW.rng(2000 + r), V = newV(init);
          for (let e = 0; e < 10; e++) { const [s, w] = episode(g); update(V, s, w, a, n); }
          tot += rms(V);
        }
        return [a, tot / R];
      });
      return (cache[key] = out);
    }
    function draw() {
      const n = S.n >= 17 ? Infinity : S.n;
      const cn = curve(n, S.init), c1 = curve(1, S.init), cM = curve(Infinity, S.init);
      ch.drawAxes(); ch.layer.innerHTML = ""; ch.top.innerHTML = "";
      ch.path(c1, "cm thin"); ch.path(cM, "c2 thin dash"); ch.path(cn, "c1");
      let b = 0; cn.forEach((p, i) => { if (p[1] < cn[b][1]) b = i; });
      ch.dot(cn[b][0], cn[b][1], "f1");
      // 문제 11: 에피소드 4,5,6,5,4,5,6,7,8 에서 t=0 의 n스텝 목표 (참값 V)
      const T = PROB2.length - 1, h = Math.min(n, T);
      const tgt = h < T ? TRUE[PROB2[h]] : 1;
      f.readout.innerHTML =
        `${ns} = <b>${nf(S.n)}</b> · 처음 값 ${S.init} · 가장 낮은 오차 <b>${GW.fmt(cn[b][1], 3)}</b> (${al} = ${GW.fmt(cn[b][0], 2)}) · ` +
        `비교: 1 스텝 ${GW.fmt(Math.min(...c1.map((p) => p[1])), 3)}, 끝까지 ${GW.fmt(Math.min(...cM.map((p) => p[1])), 3)}` +
        `<br>문제 11 의 에피소드(4→5→6→5→4→5→6→7→오른끝), 첫 칸의 ${ns} 스텝 목표 (참값 ${Vs} 사용): <b>${GW.fmt(tgt, 3)}</b>`;
    }
    ch.hover((x) => {
      const n = S.n >= 17 ? Infinity : S.n, cn = curve(n, S.init);
      const i = Math.round(GW.clamp((x - 0.05) / 0.05, 0, ALPHAS.length - 1));
      return `α = ${GW.fmt(ALPHAS[i], 2)}: 오차 ${GW.fmt(cn[i][1], 3)}`;
    });
    draw();
  }
});
