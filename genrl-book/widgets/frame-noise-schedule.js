// 프레임 × 디노이징 반복 격자: 칸의 진하기 = 그 프레임의 노이즈 수준 k (0 = 깨끗, K = 순수 노이즈).
// 디퓨전 포싱은 프레임마다 k 를 따로 둘 수 있어서, 같은 모델로 여러 스케줄을 다 돌릴 수 있다.
GW.register("frame-noise-schedule", (el) => {
  const f = GW.frame(el, {
    title: "노이즈 스케줄 격자 — 가로는 프레임, 세로는 디노이징 반복",
    caption:
      "칸의 진하기와 숫자는 그 프레임의 노이즈 수준 <span style='color:var(--sym-4527a0, #4527a0)'>k</span>다(0 = 깨끗한 프레임, <span style='color:var(--sym-4527a0, #4527a0)'>K</span> = 순수 노이즈). " +
      "한 줄이 모델을 한 번 부르는 것이다. 전체 시퀀스 디퓨전은 모든 프레임을 같은 수준으로 걷어 낸다. 자기회귀는 한 프레임씩 끝까지 걷어 낸다. " +
      "피라미드는 뒤 프레임을 조금씩 늦게 출발시킨다. ‘학습 샘플’은 디퓨전 포싱이 학습할 때 프레임마다 k를 따로 뽑은 모습이다. 위의 세 스케줄은 모두 이 무작위 조합의 특수한 경우다.",
  });
  const N = 8, K = 4;
  const st = { mode: "pyr", lag: 1, seed: 3 };
  GW.segmented(f.controls, {
    options: [["full", "전체 시퀀스"], ["ar", "자기회귀"], ["pyr", "피라미드"], ["train", "학습 샘플(무작위)"]],
    value: st.mode, onchange: (v) => { st.mode = v; draw(); },
  });
  GW.slider(f.controls, { label: "피라미드 지연(반복)", min: 1, max: 3, step: 1, value: st.lag, fmt: String, oninput: (v) => { st.lag = v; if (st.mode === "pyr") draw(); } });
  GW.button(f.controls, "학습 샘플 다시 뽑기", () => { st.seed++; st.mode = "train"; draw(); });
  const host = GW.h("div", {}, f.stage);

  function rows() {
    const R = [];
    if (st.mode === "full") {
      for (let m = 0; m <= K; m++) R.push(new Array(N).fill(K - m));
    } else if (st.mode === "ar") {
      R.push(new Array(N).fill(K));
      for (let n = 0; n < N; n++) for (let s = 1; s <= K; s++) R.push(Array.from({ length: N }, (_, j) => (j < n ? 0 : j === n ? K - s : K)));
    } else if (st.mode === "pyr") {
      const M = K + st.lag * (N - 1);
      for (let m = 0; m <= M; m++) R.push(Array.from({ length: N }, (_, j) => GW.clamp(K - (m - st.lag * j), 0, K)));
    } else {
      const rng = GW.rng(st.seed);
      for (let i = 0; i < 6; i++) R.push(Array.from({ length: N }, () => Math.floor(rng() * (K + 1))));
    }
    return R;
  }

  function draw() {
    host.innerHTML = "";
    const R = rows();
    const cw = 44, ch = 22, L = 92, T = 26;
    const W = L + N * cw + 8, H = T + R.length * ch + 6;
    const svg = GW.s("svg", { class: "w-svg", viewBox: `0 0 ${W} ${H}`, role: "img", "aria-label": "노이즈 스케줄 격자" }, host);
    for (let j = 0; j < N; j++) GW.s("text", { class: "w-tick", x: L + j * cw + cw / 2, y: 16, "text-anchor": "middle", text: `프레임 ${j + 1}` }, svg);
    R.forEach((row, i) => {
      const y = T + i * ch;
      const lbl = st.mode === "train" ? `학습 샘플 ${i + 1}` : i === 0 ? "시작" : `반복 ${i}`;
      GW.s("text", { class: "w-tick", x: L - 8, y: y + ch / 2 + 4, "text-anchor": "end", text: lbl }, svg);
      row.forEach((k, j) => {
        GW.s("rect", { x: L + j * cw + 1, y: y + 1, width: cw - 2, height: ch - 2, rx: 3,
          style: { fill: "var(--sym-4527a0, #4527a0)", fillOpacity: String(0.06 + 0.8 * (k / K)), stroke: "var(--w-grid)" } }, svg);
        GW.s("text", { class: "w-label", x: L + j * cw + cw / 2, y: y + ch / 2 + 4, "text-anchor": "middle", text: String(k),
          style: k / K > 0.55 ? { fill: "var(--w-surface)" } : undefined }, svg);
      });
    });
    if (st.mode === "train") {
      f.readout.innerHTML = `프레임마다 <span style='color:var(--sym-4527a0, #4527a0)'>k</span>를 0…${K}에서 따로 뽑는다. 모델은 이 모든 조합에서 노이즈를 맞히도록 배우므로, 위의 어떤 스케줄로 생성해도 처음 보는 입력이 아니다.`;
    } else {
      const calls = R.length - 1;
      const first = R.findIndex((row) => row[0] === 0);
      f.readout.innerHTML = `모델 호출 <b>${calls}</b>번 (프레임 ${N}개, 프레임당 ${K}단계) &nbsp;|&nbsp; 첫 프레임이 깨끗해지는 반복: <b>${first}</b>` +
        (st.mode === "full" ? " — 다만 모든 프레임이 동시에 끝나므로 길이가 고정되고, 스트리밍하듯 앞부분부터 내보낼 수 없다" : "");
    }
  }
  draw();
});
