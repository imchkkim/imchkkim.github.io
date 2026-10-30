// 타깃 네트워크: 결승선을 고정하는 주기.
// DQN 장 「타깃 네트워크: 움직이는 결승선을 잠시 붙박아 둔다」 절에 놓인다.
// 장난감 둘(숫자는 sources/dqn/s1_triad.py, s3_target.py 와 같다. 버퍼 비율대로 고르게 쓴 평균 업데이트라 무작위가 없다):
//   - 칸 셋, 숫자 둘(본문): 요약값 A=(1,0), B=(2,1), C=(2,2), 지금 정책 A→B→C→C, 버퍼 속 비율 A 20%·B 60%·C 20%.
//   - 칸 둘, 숫자 하나(아래 문제 7): 요약값 A=1, B=1.5, 버퍼에는 A→B 기록만.
// 보상은 모두 0 이라 참값은 0. γ = 0.9, 학습률 0.1, 처음 파라미터는 모두 1.
// 그림: 스텝마다 가장 큰 |V| 를 로그 눈금으로. 주황 = 타깃 없이 지금 파라미터로 결승선을 계산, 파랑 = C 스텝마다 복사해 둔 타깃으로 계산.
// 단추 하나는 문제 7 의 장난감과 C = 10 을 불러온다. 설명글에는 문제의 답(배율, 문턱 주기)을 적지 않는다.
GW.register("dqn-target", (el) => {
  const G = 0.9, ALPHA = 0.1;
  const TOYS = {
    three: { phi: [[1, 0], [2, 1], [2, 2]], nxt: [1, 2, 2], d: [0.2, 0.6, 0.2] },
    two: { phi: [[1], [1.5]], nxt: [1, 1], d: [1, 0] },
  };
  const c = (hex, t) => `<span style='color:var(--sym-${hex}, #${hex})'>${t}</span>`;
  const Qon = c("00897b", "Q<sub>θ</sub>"), Qtg = c("6f6f78", "Q<sub>θ⁻</sub>"), Cs = c("206049", "C"), gam = c("7a1f5a", "γ"), Vs = c("00897b", "V");

  const f = GW.frame(el, {
    title: "타깃 네트워크: 결승선을 고정하는 주기",
    caption:
      `보상이 모두 0 이라 참값은 모든 칸에서 0 이다. 주황 선은 결승선(목표값) ${gam}·${Vs}(다음 칸)을 지금 배우는 ${Qon} 로 계산하고, 파랑 선은 ${Cs} 스텝마다 복사해 얼려 둔 ${Qtg} 로 계산한다. ` +
      `세로축은 세 칸(또는 두 칸) 가운데 가장 큰 |${Vs}| 를 로그 눈금으로 그린 것이라, 오른쪽 위로 곧게 오르면 일정한 배율로 한없이 커지는 중이다. ` +
      `${Cs} 를 1 부터 조금씩 늘려 보며 파랑 선이 내려가기 시작하는 곳과, 너무 크게 했을 때 내려가는 속도가 어떻게 되는지 보라. 마지막 단추는 아래 문제 7 의 장난감을 불러온다.`,
  });

  const st = { toy: "three", C: 50, steps: 2000 };
  const row = GW.h("div", { style: { display: "flex", flexWrap: "wrap", gap: "0.4rem 0.9rem", alignItems: "center" } }, f.controls);
  GW.h("span", { text: "장난감 " }, row);
  const toySeg = GW.segmented(row, {
    options: [["three", "칸 셋, 숫자 둘"], ["two", "칸 둘, 숫자 하나"]],
    value: st.toy,
    onchange: (v) => { st.toy = v; draw(); },
  });
  const sC = GW.slider(f.controls, { label: "타깃 복사 주기 " + Cs, min: 1, max: 400, step: 1, value: st.C, fmt: (v) => v + "스텝", oninput: (v) => { st.C = v; draw(); } });
  const sN = GW.slider(f.controls, { label: "스텝 수", min: 100, max: 4000, step: 100, value: st.steps, fmt: (v) => v.toLocaleString(), oninput: (v) => { st.steps = v; draw(); } });
  const btnRow = GW.h("div", { style: { display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "0.4rem" } }, f.controls);
  GW.button(btnRow, "문제 7 설정 불러오기", () => {
    st.toy = "two"; st.C = 10; st.steps = 100;
    toySeg.set("two"); sC.value = 10; sN.value = 100;
    draw();
  });

  const legend = GW.h("div", { class: "w-legend", style: { display: "flex", gap: "1rem", flexWrap: "wrap", fontSize: "0.9em", marginBottom: "0.2rem" } }, f.stage);
  const lg = (cls, txt) => { const s = GW.h("span", {}, legend); GW.h("span", { class: "w-sw " + cls, style: { display: "inline-block", width: "18px", height: "3px", verticalAlign: "middle", marginRight: "0.35em" } }, s); GW.h("span", { html: txt }, s); };
  lg("c2", "타깃 없음 (결승선도 " + Qon + ")");
  lg("c1", "타깃 네트워크 (결승선은 " + Qtg + ", " + Cs + " 스텝마다 복사)");

  const sup = (n) => String(n).replace("-", "⁻").replace(/[0-9]/g, (d) => "⁰¹²³⁴⁵⁶⁷⁸⁹"[+d]);
  const ch = GW.chart(f.stage, {
    x: [0, st.steps], y: [-4, 8], h: 300, margin: { l: 56, b: 42 },
    yticks: [-4, -2, 0, 2, 4, 6, 8], yfmt: (v) => "10" + sup(v),
    xlabel: "스텝", ylabel: "가장 큰 |V| (로그 눈금)",
    label: "타깃 네트워크가 있을 때와 없을 때 가장 큰 |V| 의 변화",
  });
  ch.clip();

  function simulate(toy, C, n) {
    const { phi, nxt, d } = TOYS[toy];
    const k = phi[0].length;
    const dot = (p, w) => p.reduce((s, x, i) => s + x * w[i], 0);
    let w = new Array(k).fill(1), wt = w.slice();
    const out = [[0, Math.log10(Math.max(...phi.map((p) => Math.abs(dot(p, w)))))]];
    for (let t = 1; t <= n; t++) {
      const tgt = C > 0 ? wt : w;
      const g = new Array(k).fill(0);
      for (let s = 0; s < phi.length; s++) {
        if (!d[s]) continue;
        const td = G * dot(phi[nxt[s]], tgt) - dot(phi[s], w);
        for (let i = 0; i < k; i++) g[i] += d[s] * td * phi[s][i];
      }
      w = w.map((x, i) => x + ALPHA * g[i]);
      if (C > 0 && t % C === 0) wt = w.slice();
      const m = Math.max(...phi.map((p) => Math.abs(dot(p, w))));
      out.push([t, Math.log10(Math.max(m, 1e-300))]);
    }
    return out;
  }

  function draw() {
    ch.x = [0, st.steps];
    ch.drawAxes();
    ch.layer.innerHTML = "";
    const on = simulate(st.toy, 0, st.steps);
    const tg = simulate(st.toy, st.C, st.steps);
    const thin = (a) => a.filter((p, i) => i % Math.max(1, Math.floor(a.length / 600)) === 0 || i === a.length - 1);
    ch.path(thin(on), "c2");
    ch.path(thin(tg), "c1");
    const fmt = (lg) => {
      const v = Math.pow(10, lg[1]);
      if (v >= 1e5 || v < 1e-3) { const [m, e] = v.toExponential(2).split("e"); return m + " × 10" + sup(+e); }
      return GW.fmt(v, 3);
    };
    f.readout.innerHTML =
      `${st.steps.toLocaleString()}스텝 뒤 가장 큰 |V|: 타깃 없음 <b>${fmt(on[on.length - 1])}</b>, ` +
      `타깃 주기 ${st.C}스텝 <b>${fmt(tg[tg.length - 1])}</b>`;
  }
  draw();
});
