// 위젯 공통 라이브러리 — 의존성 없음.
// 원고에서 <div class="widget" data-widget="이름"></div> 로 호출하면
// build.cjs 가 이 파일과 widgets/이름.js 를 페이지에 넣고, 아래 init 이 GW.reg[이름](el) 을 실행한다.
// 색은 style.css 의 --w-* 변수만 쓴다 (다크모드 자동 대응).
(function () {
  const NS = "http://www.w3.org/2000/svg";
  const GW = (window.GW = { reg: {} });

  GW.register = (name, fn) => (GW.reg[name] = fn);

  function apply(e, props) {
    for (const [k, v] of Object.entries(props || {})) {
      if (v === undefined || v === null) continue;
      if (k === "style") Object.assign(e.style, v);
      else if (k === "text") e.textContent = v;
      else if (k === "html") e.innerHTML = v;
      else if (k.startsWith("on")) e.addEventListener(k.slice(2), v);
      else e.setAttribute(k, v);
    }
    return e;
  }
  GW.h = (tag, props, parent) => {
    const e = apply(document.createElement(tag), props);
    if (parent) parent.appendChild(e);
    return e;
  };
  GW.s = (tag, props, parent) => {
    const e = apply(document.createElementNS(NS, tag), props);
    if (parent) parent.appendChild(e);
    return e;
  };

  GW.fmt = (v, d = 2) => {
    if (!isFinite(v)) return v > 0 ? "∞" : v < 0 ? "−∞" : "—";
    const s = Math.abs(v).toFixed(d);
    return (v < 0 && +s !== 0 ? "−" : "") + s;
  };
  GW.clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  GW.sigmoid = (z) => 1 / (1 + Math.exp(-z));

  // 재현 가능한 난수 (mulberry32) + 정규분포
  GW.rng = (seed = 1) => {
    let a = seed >>> 0;
    const u = () => {
      a = (a + 0x6d2b79f5) >>> 0;
      let t = a;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
    u.normal = () => Math.sqrt(-2 * Math.log(u() + 1e-12)) * Math.cos(2 * Math.PI * u());
    return u;
  };

  // 위젯 틀: 제목 / 조작부 / 그림 / 수치판 / 설명
  GW.frame = (el, { title, caption } = {}) => {
    el.innerHTML = "";
    const f = {};
    if (title) f.title = GW.h("div", { class: "w-title", text: title }, el);
    f.controls = GW.h("div", { class: "w-controls" }, el);
    f.stage = GW.h("div", { class: "w-stage" }, el);
    f.readout = GW.h("div", { class: "w-readout" }, el);
    if (caption) f.caption = GW.h("div", { class: "w-caption", html: caption }, el);
    return f;
  };

  GW.slider = (parent, { label, min, max, step, value, fmt, oninput }) => {
    const wrap = GW.h("label", { class: "w-slider" }, parent);
    GW.h("span", { class: "w-slider-label", html: label }, wrap);
    const inp = GW.h("input", { type: "range", min, max, step, value }, wrap);
    const out = GW.h("span", { class: "w-slider-value" }, wrap);
    const show = () => (out.textContent = fmt ? fmt(+inp.value) : inp.value);
    inp.addEventListener("input", () => {
      show();
      oninput && oninput(+inp.value);
    });
    show();
    return {
      get value() { return +inp.value; },
      set value(v) { inp.value = v; show(); },
      input: inp,
    };
  };

  GW.button = (parent, label, onclick, cls = "") =>
    GW.h("button", { class: "w-btn " + cls, type: "button", html: label, onclick }, parent);

  GW.toggle = (parent, { label, value, onchange }) => {
    const wrap = GW.h("label", { class: "w-toggle" }, parent);
    const inp = GW.h("input", { type: "checkbox" }, wrap);
    inp.checked = !!value;
    GW.h("span", { html: label }, wrap);
    inp.addEventListener("change", () => onchange && onchange(inp.checked));
    return inp;
  };

  // 선택지 버튼 묶음 (하나만 선택)
  GW.segmented = (parent, { options, value, onchange }) => {
    const wrap = GW.h("div", { class: "w-seg" }, parent);
    const btns = options.map(([v, lbl]) =>
      GW.h("button", { type: "button", html: lbl, onclick: () => set(v, true) }, wrap)
    );
    function set(v, fire) {
      options.forEach(([ov], i) => btns[i].classList.toggle("on", ov === v));
      if (fire && onchange) onchange(v);
    }
    set(value, false);
    return { set };
  };

  function ticks(a, b, n) {
    const span = b - a;
    const raw = span / n;
    const mag = Math.pow(10, Math.floor(Math.log10(raw)));
    const step = [1, 2, 2.5, 5, 10].map((m) => m * mag).find((s) => span / s <= n) || raw;
    const out = [];
    for (let v = Math.ceil(a / step) * step; v <= b + 1e-9; v += step) out.push(+v.toFixed(10));
    return out;
  }
  GW.ticks = ticks;

  // 좌표축이 있는 차트. x, y 는 [최소, 최대].
  GW.chart = (parent, opt) => {
    const W = opt.w || 560, H = opt.h || 280;
    const m = Object.assign({ t: 16, r: 16, b: 40, l: 48 }, opt.margin);
    const svg = GW.s("svg", { class: "w-svg", viewBox: `0 0 ${W} ${H}`, role: "img" }, parent);
    if (opt.label) svg.setAttribute("aria-label", opt.label);
    const pw = W - m.l - m.r, ph = H - m.t - m.b;
    const c = { svg, W, H, m, pw, ph, x: opt.x, y: opt.y };
    c.X = (v) => m.l + ((v - c.x[0]) / (c.x[1] - c.x[0])) * pw;
    c.Y = (v) => m.t + (1 - (v - c.y[0]) / (c.y[1] - c.y[0])) * ph;
    c.invX = (px) => c.x[0] + ((px - m.l) / pw) * (c.x[1] - c.x[0]);
    const axes = GW.s("g", {}, svg);
    c.layer = GW.s("g", {}, svg);
    c.top = GW.s("g", {}, svg);

    c.drawAxes = () => {
      axes.innerHTML = "";
      const xt = opt.xticks || ticks(c.x[0], c.x[1], opt.nx || 6);
      const yt = opt.yticks || ticks(c.y[0], c.y[1], opt.ny || 5);
      for (const v of yt) {
        GW.s("line", { class: "w-grid", x1: m.l, x2: m.l + pw, y1: c.Y(v), y2: c.Y(v) }, axes);
        GW.s("text", { class: "w-tick", x: m.l - 6, y: c.Y(v) + 4, "text-anchor": "end", text: (opt.yfmt || String)(v) }, axes);
      }
      for (const v of xt) {
        GW.s("text", { class: "w-tick", x: c.X(v), y: m.t + ph + 16, "text-anchor": "middle", text: (opt.xfmt || String)(v) }, axes);
      }
      const y0 = c.y[0] <= 0 && c.y[1] >= 0 ? c.Y(0) : m.t + ph;
      GW.s("line", { class: "w-axis", x1: m.l, x2: m.l + pw, y1: y0, y2: y0 }, axes);
      GW.s("line", { class: "w-axis", x1: m.l, x2: m.l, y1: m.t, y2: m.t + ph }, axes);
      if (opt.xlabel) GW.s("text", { class: "w-axis-label", x: m.l + pw / 2, y: H - 6, "text-anchor": "middle", text: opt.xlabel }, axes);
      if (opt.ylabel)
        GW.s("text", { class: "w-axis-label", x: 12, y: m.t + ph / 2, "text-anchor": "middle", transform: `rotate(-90 12 ${m.t + ph / 2})`, text: opt.ylabel }, axes);
    };
    c.drawAxes();

    c.path = (pts, cls, g = c.layer) => {
      const d = pts
        .filter((p) => isFinite(p[1]))
        .map((p, i) => (i ? "L" : "M") + c.X(p[0]).toFixed(1) + "," + c.Y(GW.clamp(p[1], c.y[0] - 1e3, c.y[1] + 1e3)).toFixed(1))
        .join("");
      return GW.s("path", { class: "w-line " + (cls || ""), d }, g);
    };
    c.fn = (f, cls, n = 200, g) => {
      const pts = [];
      for (let i = 0; i <= n; i++) {
        const x = c.x[0] + ((c.x[1] - c.x[0]) * i) / n;
        pts.push([x, f(x)]);
      }
      return c.path(pts, cls, g);
    };
    c.dot = (x, y, cls, r = 5, g = c.top) => GW.s("circle", { class: "w-dot " + (cls || ""), cx: c.X(x), cy: c.Y(y), r }, g);
    c.text = (x, y, s, cls, anchor = "start", g = c.top) =>
      GW.s("text", { class: "w-label " + (cls || ""), x: c.X(x), y: c.Y(y), "text-anchor": anchor, text: s }, g);
    c.clip = () => {
      const id = "clip" + Math.random().toString(36).slice(2);
      const defs = GW.s("defs", {}, svg);
      const cp = GW.s("clipPath", { id }, defs);
      GW.s("rect", { x: m.l, y: m.t, width: pw, height: ph }, cp);
      c.layer.setAttribute("clip-path", `url(#${id})`);
    };

    // 마우스 위치의 x 값을 알려주는 십자선 + 툴팁. fn(x) 가 html 을 돌려준다.
    c.hover = (fn) => {
      const wrap = svg.parentNode;
      wrap.classList.add("w-rel");
      const tip = GW.h("div", { class: "w-tip" }, wrap);
      const vline = GW.s("line", { class: "w-cross", y1: m.t, y2: m.t + ph }, svg);
      const hit = GW.s("rect", { x: m.l, y: m.t, width: pw, height: ph, fill: "transparent" }, svg);
      const hide = () => { tip.style.display = "none"; vline.style.display = "none"; };
      hide();
      hit.addEventListener("pointermove", (ev) => {
        const r = svg.getBoundingClientRect();
        const px = ((ev.clientX - r.left) / r.width) * W;
        const x = c.invX(px);
        const html = fn(x);
        if (!html) return hide();
        vline.setAttribute("x1", px); vline.setAttribute("x2", px);
        vline.style.display = "";
        tip.innerHTML = html;
        tip.style.display = "block";
        const left = ev.clientX - wrap.getBoundingClientRect().left;
        const tw = tip.offsetWidth;
        tip.style.left = (left + 14 + tw > wrap.clientWidth ? left - 14 - tw : left + 14) + "px";
        tip.style.top = ((ev.clientY - r.top) * 0.9) + "px";
      });
      hit.addEventListener("pointerleave", hide);
    };
    return c;
  };

  // 범례
  GW.legend = (parent, items) => {
    const lg = GW.h("div", { class: "w-legend" }, parent);
    for (const [cls, label, kind] of items) {
      const it = GW.h("span", { class: "w-legend-item" }, lg);
      GW.h("i", { class: "w-sw " + cls + (kind === "dash" ? " dash" : "") }, it);
      GW.h("span", { html: label }, it);
    }
    return lg;
  };

  function init() {
    document.querySelectorAll(".widget[data-widget]").forEach((el) => {
      const fn = GW.reg[el.dataset.widget];
      if (!fn) { el.textContent = "(위젯을 불러오지 못했습니다: " + el.dataset.widget + ")"; return; }
      try { fn(el); } catch (e) { console.error(e); el.textContent = "(위젯 오류: " + e.message + ")"; }
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else setTimeout(init, 0);
})();
