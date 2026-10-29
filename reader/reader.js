/*
 * lameproof 책 화면 코드 (reader.js)
 *
 * 배포 때 lib/reader.cjs 가 책 HTML 과 대문에 끼운다(책 저장소는 건드리지 않는다).
 * 설계 계약: docs/plan/2026-10-29-전자책과-원고-보강/api-contract.md 2절.
 *
 * 하는 일
 *   - 「문제 N」 함께 풀기: 풀이 말칸을 접고 단추를 누를 때마다 하나씩 보인다(2.4·2.12절)
 *     장 끝 「토론 N」도 같게 접고 첫 단추만 「토론 따라가기」(계약서 끝 「변경 (장 끝 토론)」 절)
 *   - 정리 문제(div.quiz): 객관식 화면, 오답이면 「아니다」와 다시 시도, 정답이면 진도에 더함(2.11절)
 *   - 절 완료(본문 끝까지 스크롤), 목차 패널의 장·절 진도, 책 달성률(2.8·2.9절)
 *   - 이어 읽기: 마지막 위치 기록, 앱 첫 실행·다른 책 첫 화면에서 마지막 페이지로 넘기기(2.13절)
 *   - 대문 책 카드의 달성률 막대(2.14절)
 *   - 로그인(구글), 서버 합치기, 댓글 칸(2.7·2.15절)
 *   - 책 안 낱말 검색: 목차 패널 맨 위·대문의 검색 칸, search-index.json 지연 로드, 도착한 페이지에서 찾은 말 표시
 *     (계약서 끝 「변경 (책 안 검색)」 절)
 *
 * 지키는 것
 *   - 서버가 없거나 꺼져 있어도 진도·이어 읽기·함께 풀기·정리 문제는 브라우저 저장만으로 돈다.
 *   - 어떤 오류도 책 읽기를 막지 않는다. 기능마다 try/catch, 저장소 읽기·쓰기도 모두 try/catch.
 *   - 남의 댓글 본문은 어떤 경로로도 받지 않는다(서버도 주지 않는다).
 *   - 의존성 없는 한 파일, 모듈 아님(즉시 실행 함수), 이모지 없음.
 */
(function () {
  "use strict";

  var CFG = window.LP_READER || {};
  var API = typeof CFG.api === "string" ? CFG.api.replace(/\/+$/, "") : "";
  var BOOK = CFG.book || null;
  var BASE = typeof CFG.base === "string" ? CFG.base : "/";
  var OPENED = Date.now();

  var CONSENT_VER = "v1";
  // 2.10절 문구(판 v1). 바꾸면 판을 올리고 서버 consentVersion 도 같이 바꾼다
  var CONSENT_TEXT = "구글 계정으로 로그인하면 이메일 주소를 저장합니다. 쓰는 곳은 두 가지입니다: 같은 독자인지 알아보는 일, 남긴 댓글을 처리하며 필요할 때 연락하는 일. 이메일은 다른 독자에게 보이지 않고 저자만 관리 화면에서 봅니다. 로그인하지 않아도 진도는 이 브라우저에만 저장되어 그대로 쓸 수 있습니다. 계정 지우기는 이 메뉴에서 할 수 있습니다.";

  var K = {
    progress: "lp.reader.v1.progress",
    session: "lp.reader.v1.session",
    dirty: "lp.reader.v1.dirty",
    tries: "lp.reader.v1.quizTries",
    resume: "lp.reader.resume",
    launched: "lp.reader.launched",
    stay: "lp.reader.stay.",
    config: "lp.reader.config",
    search: "lp.reader.search"
  };
  var STATUS_LABEL = { open: "저자가 아직 읽지 않음", applied: "원고에 반영됨", held: "보류" };
  var HEAD_RE = /^\s*(?:문제|토론)\s*\d+\s*[.:]/; // 접는 묶음의 머리: 「문제 N.」「문제 N:」, 장 끝 「토론 N.」「토론 N:」
  var TALK_RE = /^\s*토론\s*\d+\s*[.:]/;

  // ── 작은 도구 ────────────────────────────────────────────────────────────
  function warn(e) { try { console.warn("[lp-reader]", e); } catch (_) { /* 없음 */ } }
  function safe(fn) {
    return function () {
      try { return fn.apply(this, arguments); } catch (e) { warn(e); return undefined; }
    };
  }
  function now() { return Date.now(); }
  function jget(store, k) {
    try { var v = store.getItem(k); return v == null ? null : JSON.parse(v); } catch (e) { return null; }
  }
  function jset(store, k, v) {
    try { if (v == null) store.removeItem(k); else store.setItem(k, JSON.stringify(v)); } catch (e) { /* 막힌 저장소 */ }
  }
  var LS = null, SS = null;
  try { LS = window.localStorage; } catch (e) { LS = null; }
  try { SS = window.sessionStorage; } catch (e) { SS = null; }
  function lsGet(k) { return LS ? jget(LS, k) : null; }
  function lsSet(k, v) { if (LS) jset(LS, k, v); }
  function ssGet(k) { return SS ? jget(SS, k) : null; }
  function ssSet(k, v) { if (SS) jset(SS, k, v); }

  /** el("div", {class: "x", text: "…"}, [자식…]) */
  function el(tag, attrs, kids) {
    var e = document.createElement(tag);
    if (attrs) {
      for (var a in attrs) {
        if (!Object.prototype.hasOwnProperty.call(attrs, a) || attrs[a] == null || attrs[a] === false) continue;
        if (a === "text") e.textContent = attrs[a];
        else if (a === "html") e.innerHTML = attrs[a];
        else if (a === "class") e.className = attrs[a];
        else if (a.slice(0, 2) === "on") e.addEventListener(a.slice(2), attrs[a]);
        else e.setAttribute(a, attrs[a] === true ? "" : attrs[a]);
      }
    }
    if (kids) for (var i = 0; i < kids.length; i++) if (kids[i] != null) e.appendChild(typeof kids[i] === "string" ? document.createTextNode(kids[i]) : kids[i]);
    return e;
  }
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function after(ref, node) { ref.parentNode.insertBefore(node, ref.nextSibling); }
  function visible(e) { return !!(e && e.getClientRects().length); }
  function pad2(n) { return (n < 10 ? "0" : "") + n; }
  function ymd(ms) { var d = new Date(ms); return d.getFullYear() + "-" + pad2(d.getMonth() + 1) + "-" + pad2(d.getDate()); }
  function normBase(href) {
    try {
      var p = new URL(href, location.href).pathname;
      if (/\.html$/.test(p)) p = p.replace(/[^/]*$/, "");
      return p.charAt(p.length - 1) === "/" ? p : p + "/";
    } catch (e) { return "/"; }
  }
  // 저장소·서버에서 온 책 id·파일 이름으로 주소를 만들기 전에 꼴을 본다. 같은 출처의 다른 페이지가
  // 저장소에 「//다른곳」 같은 값을 써 두어도 바깥으로 넘어가지 않게(여덟 권의 파일 이름은 모두 이 꼴)
  function okBook(b) { return typeof b === "string" && /^[a-z0-9][a-z0-9-]*$/.test(b); }
  function okFile(f) { return typeof f === "string" && /^[A-Za-z0-9][A-Za-z0-9._-]*\.html$/.test(f); }
  /** 링크 href 에서 파일 이름만(./ · 질의 · 해시 떼기) */
  function fileOfHref(href) {
    if (!href) return "";
    var h = href.split("#")[0].split("?")[0].replace(/^\.\//, "");
    try { h = decodeURIComponent(h); } catch (e) { /* 그대로 */ }
    return h.replace(/^.*\//, "");
  }

  // ── 진도 저장(브라우저) ──────────────────────────────────────────────────
  // 꼴은 서버 GET /api/progress 와 같다: { books: { <책>: { pages, quizzes, position } }, last }
  function emptyProg() { return { books: {}, last: null }; }
  function loadProg() {
    var p = lsGet(K.progress);
    if (!p || typeof p !== "object" || !p.books || typeof p.books !== "object") p = emptyProg();
    return p;
  }
  function bookOf(p, b) {
    var x = p.books[b];
    if (!x || typeof x !== "object") x = p.books[b] = { pages: {}, quizzes: {}, position: null };
    if (!x.pages || typeof x.pages !== "object") x.pages = {};
    if (!x.quizzes || typeof x.quizzes !== "object") x.quizzes = {};
    if (x.position === undefined) x.position = null;
    return x;
  }
  function recomputeLast(p) {
    var best = null;
    for (var b in p.books) {
      var pos = p.books[b] && p.books[b].position;
      if (pos && typeof pos.at === "number" && (!best || pos.at > best.at)) best = { book: b, at: pos.at };
    }
    p.last = best;
  }
  /** 절 완료·정리 문제 값: +시각 = 읽음/맞힘, −시각 = 되돌림(안 읽음/다시 풀기). 0·없음 = 아직 */
  function isRead(v) { return typeof v === "number" && v > 0; }
  /** 합치기 규칙(서버와 같다): 절 완료·정리 문제는 |시각| 이 큰 쪽(나중 동작이 이긴다), 위치는 책마다 최신 at */
  function mergeProg(dst, src) {
    if (!src || !src.books || typeof src.books !== "object") return dst;
    for (var b in src.books) {
      var s = src.books[b];
      if (!s || typeof s !== "object") continue;
      var d = bookOf(dst, b);
      ["pages", "quizzes"].forEach(function (f) {
        var m = s[f];
        if (!m || typeof m !== "object") return;
        for (var k in m) {
          if (typeof m[k] !== "number" || !m[k]) continue;
          if (!(k in d[f]) || Math.abs(m[k]) > Math.abs(d[f][k] || 0)) d[f][k] = m[k];
        }
      });
      if (s.position && typeof s.position.at === "number" && (!d.position || s.position.at > d.position.at)) d.position = s.position;
    }
    recomputeLast(dst);
    return dst;
  }
  var PROG = loadProg();
  var DELTA = emptyProg(); // 이번 페이지에서 생긴, 서버에 아직 안 보낸 변경
  function hasAny(p) {
    for (var b in p.books) {
      var x = p.books[b];
      if (!x) continue;
      var pg = x.pages || {};
      var qz = x.quizzes || {};
      if (Object.keys(pg).some(function (k) { return isRead(pg[k]); }) || Object.keys(qz).some(function (k) { return isRead(qz[k]); }) || x.position) return true;
    }
    return false;
  }
  /** 브라우저 진도를 바꾼다. 다른 탭이 쓴 것을 잃지 않게 매번 저장소에서 다시 읽어 고친다 */
  function mutate(fn) {
    var p = loadProg();
    fn(p);
    recomputeLast(p);
    lsSet(K.progress, p);
    PROG = p;
  }
  /** 바꾸고, 로그인 상태면 서버로 보낼 변경에도 적는다 */
  function noteChange(fn, kind) {
    mutate(fn);
    fn(DELTA);
    recomputeLast(DELTA);
    if (getSession()) {
      lsSet(K.dirty, 1);
      scheduleSync(kind === "position" ? 15000 : 2000);
    }
  }

  // ── 세션·서버 ────────────────────────────────────────────────────────────
  function getSession() {
    var s = lsGet(K.session);
    if (!s || typeof s.token !== "string") return null;
    if (typeof s.expiresAt === "number" && s.expiresAt < now()) { lsSet(K.session, null); return null; }
    return s;
  }
  var onAuthChange = []; // 로그인·로그아웃 때 다시 그릴 것들
  function authChanged() { onAuthChange.forEach(function (f) { safe(f)(); }); }
  function clearSession() { lsSet(K.session, null); authChanged(); }

  /** 서버 호출. 절대 던지지 않는다: { ok, status, data }. status 0 = 닿지 않음 */
  function api(method, path, body, opt) {
    opt = opt || {};
    if (!API || typeof fetch !== "function") return Promise.resolve({ ok: false, status: 0, data: null });
    var headers = {};
    if (body !== undefined) headers["Content-Type"] = "application/json";
    if (opt.auth) {
      var s = getSession();
      if (!s) return Promise.resolve({ ok: false, status: 401, data: null });
      headers.Authorization = "Bearer " + s.token;
    }
    var ctrl = null, timer = null;
    if (!opt.keepalive && typeof AbortController === "function") {
      ctrl = new AbortController();
      timer = setTimeout(function () { try { ctrl.abort(); } catch (e) { /* 없음 */ } }, opt.timeout || 10000);
    }
    var init = { method: method, headers: headers, mode: "cors", credentials: "omit", cache: "no-store" };
    if (body !== undefined) init.body = JSON.stringify(body);
    if (opt.keepalive) init.keepalive = true;
    if (ctrl) init.signal = ctrl.signal;
    var p;
    try { p = fetch(API + path, init); } catch (e) { p = Promise.reject(e); }
    return p.then(function (r) {
      return r.json().catch(function () { return null; }).then(function (d) {
        return { ok: r.ok, status: r.status, data: d, retryAfter: Number(r.headers.get("Retry-After")) || 0 };
      });
    }).catch(function () {
      return { ok: false, status: 0, data: null };
    }).then(function (res) {
      if (timer) clearTimeout(timer);
      if (opt.auth && res.status === 401) clearSession(); // 진도는 브라우저에 그대로 둔다
      return res;
    });
  }
  function errMsg(res, fallback) {
    return (res && res.data && res.data.error && res.data.error.message) || fallback;
  }

  var CONFIG = null; // GET /api/config 결과. 닿지 않으면 null
  function loadConfig() {
    var c = ssGet(K.config);
    if (c && c.api === API && typeof c.at === "number" && c.at > now() - 10 * 60 * 1000 && c.data) return Promise.resolve(c.data);
    return api("GET", "/api/config", undefined, { timeout: 6000 }).then(function (r) {
      if (r.ok && r.data && typeof r.data === "object") { ssSet(K.config, { api: API, at: now(), data: r.data }); return r.data; }
      return null;
    });
  }
  function loginAvailable() { return !!(CONFIG && CONFIG.login && CONFIG.googleClientId); }

  // ── 서버 합치기(2.7절) ───────────────────────────────────────────────────
  var syncTimer = null, syncDue = 0, syncBusy = false, syncBlockedUntil = 0;
  function scheduleSync(delay) {
    if (!getSession()) return;
    var due = now() + delay;
    if (syncTimer && syncDue <= due) return; // 이미 더 이른 예약이 있다
    if (syncTimer) clearTimeout(syncTimer);
    syncDue = due;
    syncTimer = setTimeout(function () { syncTimer = null; syncNow(false); }, Math.max(delay, syncBlockedUntil - now(), 0));
  }
  function takeDelta() {
    var d = DELTA;
    DELTA = emptyProg();
    return d;
  }
  function payloadChunks(p) {
    // 서버 몸통 상한 64 KB. 넉넉히 48 KB 를 넘으면 책 하나씩 나눠 보낸다
    var s = JSON.stringify({ books: p.books });
    if (s.length < 48000) return [{ books: p.books }];
    return Object.keys(p.books).map(function (b) { var o = {}; o[b] = p.books[b]; return { books: o }; });
  }
  /** full=true 면 브라우저 진도 전체, 아니면 이번 변경만(없고 dirty 면 전체) */
  function syncNow(full) {
    if (!getSession()) return Promise.resolve(false);
    if (syncBusy) { scheduleSync(2000); return Promise.resolve(false); }
    if (now() < syncBlockedUntil) { scheduleSync(syncBlockedUntil - now()); return Promise.resolve(false); }
    var sent = takeDelta();
    var body = full || (!hasAny(sent) && lsGet(K.dirty)) ? loadProg() : sent;
    var chunks = payloadChunks(body);
    syncBusy = true;
    var okAll = true;
    var chain = Promise.resolve();
    chunks.forEach(function (c) {
      chain = chain.then(function () {
        if (!okAll) return null;
        return api("POST", "/api/progress/sync", c, { auth: true }).then(function (r) {
          if (r.ok && r.data && r.data.books) { mutate(function (p) { mergeProg(p, r.data); }); return; }
          okAll = false;
          if (r.status === 429) syncBlockedUntil = now() + 1000 * (r.retryAfter || 60);
        });
      });
    });
    return chain.then(function () {
      syncBusy = false;
      if (okAll) {
        if (!hasAny(DELTA)) lsSet(K.dirty, null);
        afterSync.forEach(function (f) { safe(f)(); });
      } else {
        mergeProg(DELTA, sent); // 다시 보낼 것으로 되돌린다
        if (getSession()) lsSet(K.dirty, 1);
      }
      return okAll;
    }, function () { syncBusy = false; mergeProg(DELTA, sent); return false; });
  }
  var afterSync = []; // 합친 뒤 다시 그릴 것들
  /** 페이지를 떠날 때: 기다리지 않고 keepalive 로 보낸다 */
  function flushOnLeave() {
    if (!getSession()) return;
    if (!hasAny(DELTA) && !lsGet(K.dirty)) return;
    var body = hasAny(DELTA) ? DELTA : loadProg();
    var s = JSON.stringify({ books: body.books });
    if (s.length > 60000) return; // keepalive 상한. dirty 가 남아 다음 페이지에서 보낸다
    api("POST", "/api/progress/sync", { books: body.books }, { auth: true, keepalive: true });
    // 성공 여부를 모르므로 dirty 는 남긴다(다음 페이지에서 한 번 더 보내도 합집합이라 무해)
  }

  // ── 책·절 목록(progress-index.json) ──────────────────────────────────────
  var INDEX_CACHE = {};
  function loadIndex(book, base) {
    if (INDEX_CACHE[book]) return INDEX_CACHE[book];
    var p = fetch(base + "progress-index.json", { cache: "no-cache" })
      .then(function (r) { if (!r.ok) throw new Error("progress-index " + r.status); return r.json(); })
      .then(function (j) { if (!j || !Array.isArray(j.chapters)) throw new Error("progress-index 꼴"); return j; })
      .catch(function () { return indexFromPages(book, base); });
    INDEX_CACHE[book] = p;
    return p;
  }
  /** progress-index.json 이 없을 때의 대신: pages.json 으로 장·절만(정리 문제 없음) */
  function indexFromPages(book, base) {
    return fetch(base + "pages.json", { cache: "no-cache" })
      .then(function (r) { if (!r.ok) throw new Error("pages " + r.status); return r.json(); })
      .then(function (pages) {
        var chapters = [], byId = {};
        pages.forEach(function (pg) {
          if (!pg || !pg.file) return;
          var cid = pg.chapter || pg.file.replace(/\.html$/, "");
          var ch = byId[cid];
          if (!ch) { ch = byId[cid] = { id: cid, title: pg.title, pages: [], quizzes: [] }; chapters.push(ch); }
          ch.pages.push({ key: pg.id || pg.file.replace(/\.html$/, ""), file: pg.file, title: pg.title });
        });
        return { v: 1, book: book, base: base, chapters: chapters, fallback: true };
      });
  }
  function statsOf(idx, bp) {
    var out = { chapters: {}, done: 0, total: 0 };
    (idx.chapters || []).forEach(function (ch) {
      var d = 0, t = 0, qd = 0;
      (ch.pages || []).forEach(function (pg) { t++; if (bp && isRead(bp.pages[pg.key])) d++; });
      (ch.quizzes || []).forEach(function (q) { t++; if (bp && isRead(bp.quizzes[q.id])) { d++; qd++; } });
      out.chapters[ch.id] = { done: d, total: t, quizDone: qd, quizTotal: (ch.quizzes || []).length };
      out.done += d; out.total += t;
    });
    out.pct = out.total ? Math.floor((100 * out.done) / out.total) : 0;
    return out;
  }
  function findPage(idx, pred) {
    for (var i = 0; i < idx.chapters.length; i++) {
      var ch = idx.chapters[i];
      for (var j = 0; j < (ch.pages || []).length; j++) if (pred(ch.pages[j])) return { page: ch.pages[j], chapter: ch };
    }
    return null;
  }

  // ── 지금 페이지 ──────────────────────────────────────────────────────────
  var FILE = (function () {
    var p = location.pathname;
    try { p = decodeURIComponent(p); } catch (e) { /* 그대로 */ }
    if (BASE && p.indexOf(BASE) === 0) p = p.slice(BASE.length);
    else p = p.replace(/^.*\//, "");
    return p;
  })();
  var IS_FIRST = !!BOOK && (FILE === "" || FILE === "index.html");
  var INDEX = null, PAGE = null, CHAPTER = null; // PAGE = {key, file, title}

  // ── 함께 풀기(2.4·2.12절) ────────────────────────────────────────────────
  var GROUPS = [];
  function isBox(e) { return e.matches("div.dialogue, div.dlg"); }
  function isTurn(e) { return e.matches(".turn, .dlg-line"); }
  function foldAll() {
    var root = $("main > .chapter");
    if (!root) return;
    $$("h2, h3, h4, h5, h6", root).forEach(function (h) {
      if (HEAD_RE.test(h.textContent || "")) safe(foldOne)(h);
    });
  }
  function foldOne(h) {
    var par = h.parentElement, items = [], c;
    if (par && isBox(par)) {
      for (c = h.nextElementSibling; c; c = c.nextElementSibling) items.push(c);
    } else {
      var lvl = Number(h.tagName.charAt(1));
      for (c = h.nextElementSibling; c; c = c.nextElementSibling) {
        if (/^H[1-6]$/.test(c.tagName) && (Number(c.tagName.charAt(1)) <= lvl || HEAD_RE.test(c.textContent || ""))) break;
        if (c.matches("aside.sidenote, hr, div.quiz, section.lp-comments")) break;
        items.push(c);
      }
    }
    var flat = [];
    items.forEach(function (e) {
      if (isBox(e) && !e.contains(h)) Array.prototype.forEach.call(e.children, function (k) { flat.push({ el: k, box: e }); });
      else flat.push({ el: e, box: null });
    });
    var body = [], steps = [], cur = null, pre = [];
    flat.forEach(function (it) {
      var e = it.el;
      if (e.matches("aside.sidenote, script, style")) return; // 늘 보임
      if (isTurn(e)) { cur = pre.concat([it]); pre = []; steps.push(cur); }
      else if (e.matches(".dlg-scene")) pre.push(it); // 장면 설명은 다음 말칸에 붙는다
      else if (!cur) body.push(it);
      else cur.push(it);
    });
    if (pre.length) { if (cur) Array.prototype.push.apply(cur, pre); else body = body.concat(pre); }
    if (!steps.length) return; // 말칸 없는 묶음은 건드리지 않는다

    var boxes = [];
    steps.forEach(function (st) { st.forEach(function (it) {
      it.el.classList.add("lp-fold-hidden");
      if (it.box && boxes.indexOf(it.box) < 0) boxes.push(it.box);
    }); });
    function syncBoxes() {
      boxes.forEach(function (b) {
        var anyShown = Array.prototype.some.call(b.children, function (k) {
          return !k.classList.contains("lp-fold-hidden") && !k.classList.contains("lp-fold-bar");
        });
        b.classList.toggle("lp-fold-hidden", !anyShown);
      });
    }
    syncBoxes();

    var shown = 0;
    var startLabel = TALK_RE.test(h.textContent || "") ? "토론 따라가기" : "함께 풀기";
    var next = el("button", { type: "button", class: "lp-fold-next", text: startLabel });
    var all = el("button", { type: "button", class: "lp-fold-all", text: "모두 펼치기" });
    var fold = el("button", { type: "button", class: "lp-fold-back", text: "다시 접기", hidden: "" });
    var bar = el("div", { class: "lp-fold-bar" }, [next, all, fold]);
    var anchorEl = body.length ? body[body.length - 1].el : h;
    after(anchorEl, bar);

    function reveal(n, scroll) {
      var first = null, last = null;
      while (n-- > 0 && shown < steps.length) {
        steps[shown].forEach(function (it) { it.el.classList.remove("lp-fold-hidden"); if (!first) first = it.el; last = it.el; });
        shown++;
      }
      syncBoxes();
      if (last) after(last, bar); // 단추는 마지막으로 보인 걸음 바로 아래로 따라간다
      var end = shown >= steps.length;
      next.hidden = end; all.hidden = end; fold.hidden = shown === 0;
      if (!end) next.textContent = "다음 (" + shown + "/" + steps.length + ")";
      if (scroll && first) {
        var r = first.getBoundingClientRect();
        var bottom = shown < steps.length ? bar.getBoundingClientRect().bottom : r.bottom;
        if (bottom > window.innerHeight) {
          var dy = Math.min(bottom - window.innerHeight + 24, r.top - 72);
          if (dy > 0) {
            try { window.scrollBy({ top: dy, behavior: "smooth" }); } catch (e) { window.scrollBy(0, dy); }
          }
        }
      }
    }
    /** 펼친 풀이를 처음처럼 접는다. 문제 머리가 화면 위로 넘어갔으면 그리로 올린다 */
    function collapse() {
      steps.forEach(function (st) { st.forEach(function (it) { it.el.classList.add("lp-fold-hidden"); }); });
      shown = 0;
      syncBoxes();
      after(anchorEl, bar);
      next.textContent = startLabel;
      next.hidden = false; all.hidden = false; fold.hidden = true;
      var r = h.getBoundingClientRect();
      if (r.top < 0) { try { h.scrollIntoView({ behavior: "smooth", block: "start" }); } catch (e) { h.scrollIntoView(); } }
    }
    fold.addEventListener("click", collapse);
    next.addEventListener("click", function () { reveal(1, true); });
    all.addEventListener("click", function () { reveal(steps.length, false); });
    GROUPS.push({
      contains: function (t) {
        return steps.some(function (st) { return st.some(function (it) { return it.el === t || it.el.contains(t); }); });
      },
      revealAll: function () { reveal(steps.length, false); }
    });
  }
  function hashTarget() {
    var id = location.hash ? location.hash.slice(1) : "";
    if (!id) return null;
    try { id = decodeURIComponent(id); } catch (e) { /* 그대로 */ }
    return document.getElementById(id);
  }
  /** 주소 해시가 접힌 풀이 안을 가리키면 그 묶음을 다 편다 */
  function revealForHash(scroll) {
    var t = hashTarget();
    if (!t) return;
    GROUPS.forEach(function (g) { if (g.contains(t)) g.revealAll(); });
    if (scroll) { try { t.scrollIntoView(); } catch (e) { /* 없음 */ } }
  }

  // ── 정리 문제(2.11절) ────────────────────────────────────────────────────
  var QUIZZES = [];
  var MARK_RE = /〔\s*(틀림|맞음)\s*[:：]\s*([\s\S]*?)〕/;
  var BOX_RE = /^(\s*(?:<p>\s*)?)\[([ xX])\]\s*/;
  function parseChoice(li) {
    var html = li.innerHTML;
    var correct = null;
    var cb = /<input\b[^>]*type="checkbox"[^>]*>/i.exec(html);
    var m = BOX_RE.exec(html);
    if (m) { correct = m[2] !== " "; html = html.replace(BOX_RE, "$1"); }
    else if (cb) { correct = /\bchecked\b/i.test(cb[0]); html = html.replace(cb[0], ""); }
    var mk = MARK_RE.exec(html);
    var why = "";
    if (mk) { why = mk[2].trim(); html = html.replace(MARK_RE, ""); }
    return { correct: correct, html: html.trim(), why: why, verdict: mk ? mk[1] : null };
  }
  function initQuizzes() {
    $$("div.quiz[data-id]").forEach(safe(setupQuiz));
  }
  function setupQuiz(q) {
    var id = q.getAttribute("data-id");
    var ul = null;
    for (var c = q.firstElementChild; c; c = c.nextElementSibling) if (c.tagName === "UL" || c.tagName === "OL") { ul = c; break; }
    if (!ul) return;
    var lis = Array.prototype.filter.call(ul.children, function (x) { return x.tagName === "LI"; });
    var choices = lis.map(parseChoice);
    var nRight = choices.filter(function (x) { return x.correct === true; }).length;
    if (choices.length < 2 || nRight !== 1 || choices.some(function (x) { return x.correct === null; })) return; // 문법이 어긋나면 손대지 않는다

    q.classList.add("lp-quiz");
    var list = el("div", { class: "lp-q-choices", role: "group", "aria-label": "보기" });
    var items = choices.map(function (ch, i) {
      var btn = el("button", { type: "button", class: "lp-q-btn", html: ch.html });
      var why = el("div", { class: "lp-q-why", "aria-live": "polite" });
      why.hidden = true;
      var item = el("div", { class: "lp-q-item" }, [btn, why]);
      btn.addEventListener("click", safe(function () { choose(i); }));
      list.appendChild(item);
      return { ch: ch, item: item, btn: btn, why: why };
    });
    var HINT0 = "보기를 하나 고르세요. 틀려도 벌점 없이 다시 고를 수 있습니다.";
    var hint = el("p", { class: "lp-q-hint", text: HINT0 });
    var again = el("button", { type: "button", class: "lp-q-again", text: "다시 풀기", hidden: "" });
    ul.parentNode.replaceChild(list, ul);
    list.parentNode.insertBefore(hint, list);
    after(list, again);

    function showWhy(it, ok) {
      it.why.innerHTML = "";
      it.why.appendChild(el("strong", { text: ok ? "맞다. " : "아니다. " }));
      var span = el("span", { html: it.ch.why });
      it.why.appendChild(span);
      it.why.hidden = false;
    }
    function setSolved() {
      q.classList.add("lp-q-solved");
      items.forEach(function (it) {
        it.btn.disabled = true;
        if (it.ch.correct) { it.item.classList.add("lp-q-right"); showWhy(it, true); }
      });
      hint.textContent = "맞혔습니다. 이 장 진도에 더했습니다.";
      again.hidden = false;
    }
    /** 처음 상태로. record 면 진도에서도 뺀다(−시각, 다른 기기의 옛 「맞힘」보다 나중 동작) */
    function reset(record) {
      var was = q.classList.contains("lp-q-solved");
      q.classList.remove("lp-q-solved");
      items.forEach(function (it) {
        it.btn.disabled = false;
        it.item.classList.remove("lp-q-right", "lp-q-wrong");
        it.why.hidden = true;
        it.why.innerHTML = "";
      });
      hint.textContent = HINT0;
      again.hidden = true;
      var t = lsGet(K.tries) || {}, k = (BOOK || "") + ":" + id;
      if (k in t) { delete t[k]; lsSet(K.tries, t); }
      if (record && was && BOOK) {
        noteChange(function (p) { bookOf(p, BOOK).quizzes[id] = -now(); });
        renderPanel();
      }
    }
    again.addEventListener("click", safe(function () { reset(true); }));
    function choose(i) {
      var it = items[i];
      if (q.classList.contains("lp-q-solved")) return;
      if (!it.ch.correct) {
        it.item.classList.add("lp-q-wrong");
        it.btn.disabled = true;
        showWhy(it, false);
        again.hidden = false;
        var t = lsGet(K.tries) || {};
        var k = (BOOK || "") + ":" + id;
        t[k] = (Number(t[k]) || 0) + 1;
        lsSet(K.tries, t);
        return;
      }
      setSolved();
      if (BOOK) {
        noteChange(function (p) { var b = bookOf(p, BOOK); if (!isRead(b.quizzes[id])) b.quizzes[id] = now(); });
        renderPanel();
      }
    }
    /** 검색으로 온 말이 어느 보기의 이유(고르기 전에는 화면에 없음) 안에 있으면 그 이유 칸을 펼쳐 돌려준다 */
    function findWhy(terms, phrase) {
      for (var i = 0; i < items.length; i++) {
        var it = items[i];
        if (!it.ch.why) continue;
        var tmp = document.createElement("div");
        tmp.innerHTML = it.ch.why;
        var t = normQuery(tmp.textContent || ""), tn = noSpace(t);
        if (!hasTerm(t, tn, phrase) && !terms.every(function (x) { return hasTerm(t, tn, x); })) continue;
        if (it.why.hidden) showWhy(it, !!it.ch.correct);
        return it.why;
      }
      return null;
    }
    var entry = { id: id, solved: function () { return q.classList.contains("lp-q-solved"); }, setSolved: setSolved, reset: reset, findWhy: findWhy };
    QUIZZES.push(entry);
    if (BOOK && PROG.books[BOOK] && PROG.books[BOOK].quizzes && isRead(PROG.books[BOOK].quizzes[id])) setSolved();
  }
  function refreshQuizzes() {
    if (!BOOK) return;
    var b = PROG.books[BOOK];
    QUIZZES.forEach(function (qz) {
      var v = b && b.quizzes ? b.quizzes[qz.id] : 0;
      if (isRead(v) && !qz.solved()) qz.setSolved();
      else if (v < 0 && qz.solved()) qz.reset(false); // 다른 탭·기기에서 다시 풀기로 되돌림
    });
  }

  // ── 절 완료(2.8절) ──────────────────────────────────────────────────────
  var NO_AUTO = {}; // 이번 방문에 손으로 안 읽음으로 돌린 절: 끝까지 내려가도 다시 읽음으로 치지 않는다
  /** 손으로 읽음/안 읽음 바꾸기. 안 읽음은 −시각으로 남겨 다른 기기의 옛 「읽음」보다 나중 동작이 되게 한다 */
  function setRead(key, read) {
    if (!read) NO_AUTO[key] = true;
    noteChange(function (p) { var b = bookOf(p, BOOK); b.pages[key] = read ? now() : -now(); });
    renderPanel();
    renderReadRow();
  }
  var READ_ROW = null;
  function renderReadRow() {
    if (!READ_ROW || !PAGE) return;
    var b = PROG.books[BOOK], read = !!(b && b.pages && isRead(b.pages[PAGE.key]));
    var undone = !read && NO_AUTO[PAGE.key];
    READ_ROW.hidden = !read && !undone;
    READ_ROW.msg.textContent = read ? "읽은 페이지" : "안 읽음으로 되돌렸습니다";
    READ_ROW.btn.textContent = read ? "안 읽음으로 되돌리기" : "다시 읽음으로";
    READ_ROW.root.classList.toggle("lp-read-on", read);
  }
  function initReadRow() {
    if (!PAGE) return;
    var chap = $("main > .chapter");
    if (!chap) return;
    var msg = el("span", { class: "lp-read-msg" });
    var btn = el("button", { type: "button", class: "lp-read-btn" });
    var root = el("div", { class: "lp-read-row" }, [msg, btn]);
    var com = $("section.lp-comments", chap);
    if (com) chap.insertBefore(root, com); else chap.appendChild(root);
    READ_ROW = { root: root, msg: msg, btn: btn };
    btn.addEventListener("click", safe(function () {
      var b = PROG.books[BOOK];
      setRead(PAGE.key, !(b && b.pages && isRead(b.pages[PAGE.key])));
    }));
    renderReadRow();
  }
  function initCompletion() {
    if (!PAGE) return;
    var chap = $("main > .chapter");
    if (!chap) return;
    var key = PAGE.key;
    var end = el("div", { class: "lp-end", "aria-hidden": "true" });
    chap.appendChild(end);
    var b0 = PROG.books[BOOK];
    if (b0 && b0.pages && isRead(b0.pages[key])) return;
    var fired = false;
    function mark() {
      if (fired) return;
      fired = true;
      setTimeout(safe(function () {
        if (NO_AUTO[key]) return;
        noteChange(function (p) { var b = bookOf(p, BOOK); if (!isRead(b.pages[key])) b.pages[key] = now(); });
        renderPanel();
        renderReadRow();
      }), Math.max(0, OPENED + 3000 - now()));
    }
    if (typeof IntersectionObserver === "function") {
      var io = new IntersectionObserver(function (ents) {
        if (ents.some(function (e) { return e.isIntersecting; })) { io.disconnect(); mark(); }
      });
      io.observe(end);
    } else {
      var check = function () {
        if (end.getBoundingClientRect().top < window.innerHeight) { window.removeEventListener("scroll", check); mark(); }
      };
      window.addEventListener("scroll", check, { passive: true });
      check();
    }
  }

  // ── 위치 기록과 복원(2.13절) ────────────────────────────────────────────
  function capturePosition() {
    if (!PAGE) return null;
    var anchor = null, offset = null;
    var hs = $$("main h2[id], main h3[id], main h4[id], main h5[id]");
    for (var i = 0; i < hs.length; i++) {
      if (!visible(hs[i])) continue; // 접힌 풀이 안의 제목
      var t = hs[i].getBoundingClientRect().top;
      if (t <= 1) { anchor = hs[i].id; offset = Math.round(-t); } else break;
    }
    var max = document.documentElement.scrollHeight - window.innerHeight;
    var ratio = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    return { page: PAGE.key, file: PAGE.file, anchor: anchor, offset: anchor ? offset : null,
      ratio: Math.round(ratio * 10000) / 10000, at: now() };
  }
  function savePosition() {
    var pos = capturePosition();
    if (!pos) return;
    noteChange(function (p) { bookOf(p, BOOK).position = pos; }, "position");
  }
  function initPositionTracking() {
    if (!PAGE) return;
    var t = null;
    window.addEventListener("scroll", function () {
      if (t) clearTimeout(t);
      t = setTimeout(safe(savePosition), 1000);
    }, { passive: true });
    var leave = safe(function () { savePosition(); flushOnLeave(); });
    window.addEventListener("pagehide", leave);
    document.addEventListener("visibilitychange", function () { if (document.visibilityState === "hidden") leave(); });
  }
  var userMoved = false;
  ["wheel", "touchstart", "keydown", "mousedown"].forEach(function (ev) {
    window.addEventListener(ev, function () { userMoved = true; }, { passive: true, capture: true });
  });
  function applyResume(r) {
    var y = null;
    if (r.anchor) {
      var h = document.getElementById(r.anchor);
      if (h && visible(h)) y = h.getBoundingClientRect().top + window.scrollY + (Number(r.offset) || 0);
    }
    if (y == null && typeof r.ratio === "number") y = r.ratio * (document.documentElement.scrollHeight - window.innerHeight);
    if (y == null || !isFinite(y)) return;
    // 책 CSS 의 scroll-behavior: smooth 를 따르지 않고 바로 간다
    try { window.scrollTo({ top: Math.max(0, y), left: 0, behavior: "instant" }); } catch (e) { window.scrollTo(0, Math.max(0, y)); }
  }
  /** 이어 읽기로 넘어온 경우에만 위치를 되살린다. 그냥 연 페이지는 건드리지 않는다 */
  function restoreResume() {
    var r = ssGet(K.resume);
    if (!r || r.book !== BOOK) return false;
    ssSet(K.resume, null);
    if (r.file !== FILE) return false;
    applyResume(r);
    // 그림·위젯이 늦게 자리를 잡으면 위치가 밀린다. 독자가 움직이지 않았으면 load 때와 그 조금 뒤에 다시 맞춘다
    var again = safe(function () { if (!userMoved) applyResume(r); });
    var settle = function () { again(); setTimeout(again, 800); };
    if (document.readyState === "complete") setTimeout(settle, 50);
    else window.addEventListener("load", settle);
    return true;
  }
  function isStandalone() {
    try {
      return window.matchMedia("(display-mode: fullscreen), (display-mode: standalone)").matches || navigator.standalone === true;
    } catch (e) { return false; }
  }
  /** 넘기기 1.5초 전에 「처음부터 보기」 띠를 띄운다 */
  function jumpWithBanner(book, base, pos, onStay) {
    if (!okBook(book) || !pos || !okFile(pos.file)) return;
    var label = el("span", { class: "lp-jump-text", text: "마지막으로 읽던 곳으로 갑니다" });
    var stay = el("button", { type: "button", class: "lp-jump-stay", text: "처음부터 보기" });
    var bar = el("div", { class: "lp-jump", role: "status" }, [label, el("span", { class: "lp-jump-sep", text: " · " }), stay]);
    document.body.appendChild(bar);
    loadIndex(book, base).then(safe(function (idx) {
      var f = findPage(idx, function (pg) { return pg.key === pos.page || pg.file === pos.file; });
      if (f && f.page.title) label.textContent = "마지막으로 읽던 곳으로 갑니다: " + f.page.title;
    }), function () { /* 제목 없이 */ });
    var timer = setTimeout(function () {
      ssSet(K.resume, { book: book, page: pos.page, file: pos.file, anchor: pos.anchor, offset: pos.offset, ratio: pos.ratio });
      location.replace(base + pos.file);
    }, 1500);
    stay.addEventListener("click", function () {
      clearTimeout(timer);
      if (onStay) safe(onStay)();
      if (bar.parentNode) bar.parentNode.removeChild(bar);
    });
  }
  function baseOfBook(b) {
    if (b === BOOK) return BASE;
    if (!okBook(b)) return null;
    var card = $('a.card[data-book="' + b + '"]');
    return card ? (card.getAttribute("data-base") || normBase(card.getAttribute("href"))) : "/" + b + "/";
  }
  function checkJump() {
    var launched = false;
    if (isStandalone() && !ssGet(K.launched)) { ssSet(K.launched, 1); launched = true; }
    if (!BOOK) {
      if (!launched || !PROG.last) return;
      var lb = PROG.last.book, lp = PROG.books[lb] && PROG.books[lb].position;
      if (lp && lp.file) jumpWithBanner(lb, baseOfBook(lb), lp, null);
      return;
    }
    if (!IS_FIRST) return;
    // 앱(홈 화면) 첫 실행은 어느 책에서 시작했든 「마지막으로 보던 책」의 마지막 페이지로 간다.
    // 책마다 매니페스트 start_url 이 그 책 첫 화면이라, 이 책 위치만 보면 다른 책을 읽던 독자가 엉뚱한 책으로 간다
    if (launched && PROG.last && PROG.last.book !== BOOK) {
      var ob = PROG.last.book, op = PROG.books[ob] && PROG.books[ob].position;
      if (op && op.file) { jumpWithBanner(ob, baseOfBook(ob), op, null); return; }
    }
    var pos = PROG.books[BOOK] && PROG.books[BOOK].position;
    if (!pos || !pos.file) return;
    var stayKey = K.stay + BOOK;
    if (!launched) {
      var ref = document.referrer || "";
      if (ref.indexOf(location.origin + BASE) === 0) return; // 같은 책 안에서 첫 화면으로 왔다
      if (ssGet(stayKey)) return;
    }
    jumpWithBanner(BOOK, BASE, pos, function () { ssSet(stayKey, 1); });
  }

  // ── 구글 로그인(2.7절) ───────────────────────────────────────────────────
  var gisPromise = null, gisInited = false;
  function loadGis() {
    if (gisPromise) return gisPromise;
    gisPromise = new Promise(function (res, rej) {
      if (window.google && window.google.accounts && window.google.accounts.id) { res(); return; }
      var s = document.createElement("script");
      s.src = "https://accounts.google.com/gsi/client";
      s.async = true;
      s.onload = function () { res(); };
      s.onerror = function () { gisPromise = null; rej(new Error("gsi")); };
      document.head.appendChild(s);
    }).then(function () {
      if (!gisInited) {
        window.google.accounts.id.initialize({
          client_id: CONFIG.googleClientId, callback: safe(onCredential), ux_mode: "popup", auto_select: false
        });
        gisInited = true;
      }
    });
    return gisPromise;
  }
  function mountGoogleButton(box) {
    box.textContent = "";
    loadGis().then(safe(function () {
      if (!box.isConnected) return;
      var w = Math.max(180, Math.min(260, box.clientWidth || 240));
      window.google.accounts.id.renderButton(box, {
        type: "standard", theme: "outline", size: "medium", text: "signin_with", shape: "rectangular", locale: "ko", width: w
      });
    }), function () { box.textContent = "구글 로그인 창을 불러오지 못했습니다."; });
  }
  /** 구글 스크립트는 단추가 쓰일 때 늦게 부른다(패널을 열 때, 댓글 칸이 보일 때) */
  function lazyGoogleButton(box, when) {
    var done = false;
    function go() { if (done) return; done = true; mountGoogleButton(box); }
    when(go);
    return box;
  }
  var loginMsgBoxes = [];
  function addLoginMsg(box) {
    loginMsgBoxes = loginMsgBoxes.filter(function (b) { return b.isConnected; });
    loginMsgBoxes.push(box);
  }
  function showLoginMsg(text) { loginMsgBoxes.forEach(function (b) { if (b.isConnected) { b.textContent = text; b.hidden = !text; } }); }
  function onCredential(resp) {
    if (!resp || !resp.credential) return;
    showLoginMsg("로그인하는 중…");
    api("POST", "/api/auth/google", { credential: resp.credential, consent: true, consentVersion: CONSENT_VER }).then(function (r) {
      if (!r.ok || !r.data || !r.data.token) {
        showLoginMsg(errMsg(r, r.status === 0 ? "로그인 서버에 닿지 않습니다." : "로그인하지 못했습니다."));
        return;
      }
      lsSet(K.session, { token: r.data.token, expiresAt: r.data.expiresAt, email: r.data.user && r.data.user.email });
      showLoginMsg("");
      authChanged();
      syncNow(true); // 브라우저의 진도 전체를 올리고 합친 전체를 받는다
    });
  }
  function logout() {
    api("POST", "/api/auth/logout", {}, { auth: true }).then(function () {
      try { if (window.google && window.google.accounts) window.google.accounts.id.disableAutoSelect(); } catch (e) { /* 없음 */ }
      clearSession(); // 진도는 이 기기의 독서 기록으로 남긴다
    });
  }
  function deleteAccount() {
    if (!window.confirm("서버에 있는 이 계정과 진도·댓글을 모두 지웁니다. 이 브라우저에 저장된 진도는 남습니다. 지울까요?")) return;
    api("DELETE", "/api/me", undefined, { auth: true }).then(function (r) {
      if (r.ok || r.status === 401) { clearSession(); return; }
      window.alert(errMsg(r, "계정을 지우지 못했습니다. 잠시 뒤 다시 해 보세요."));
    });
  }

  /** 이 책 진행률 리셋(개발용, 2026-10-29 저자 지시). 읽음·정리 문제는 −시각으로 되돌리고(다른 기기의 옛 기록보다
   *  나중 동작), 마지막 위치는 책 첫 쪽으로 옮긴다. 틀린 횟수(이 브라우저)도 지운다. 끄려면 LP_READER.reset = false */
  function resetBook() {
    if (!BOOK) return;
    if (!window.confirm("이 책의 진행률(읽음 표시·정리 문제·마지막 읽던 위치)을 모두 지웁니다. 지울까요?")) return;
    var t = now();
    var first = INDEX && INDEX.chapters && INDEX.chapters[0] && INDEX.chapters[0].pages && INDEX.chapters[0].pages[0];
    noteChange(function (p) {
      var b = bookOf(p, BOOK);
      for (var k in b.pages) if (isRead(b.pages[k])) b.pages[k] = -t;
      for (var q in b.quizzes) if (isRead(b.quizzes[q])) b.quizzes[q] = -t;
      b.position = first ? { page: first.key, file: first.file, anchor: null, offset: null, ratio: 0, at: t } : null;
    });
    var tr = lsGet(K.tries) || {}, pre = BOOK + ":", n = 0;
    for (var k2 in tr) if (k2.indexOf(pre) === 0) { delete tr[k2]; n++; }
    if (n) lsSet(K.tries, tr);
    if (PAGE) NO_AUTO[PAGE.key] = true; // 지금 보는 쪽이 리셋 직후 다시 읽음으로 잡히지 않게
    renderPanel();
    QUIZZES.forEach(function (qz) { qz.reset(false); }); // 이 쪽의 정리 문제 화면도 처음으로(틀린 표시 포함)
    renderReadRow();
  }
  function resetBtn() {
    return el("button", { type: "button", class: "lp-link-btn lp-small lp-reset", text: "진행률 리셋", title: "이 책의 진행률을 지웁니다", onclick: safe(resetBook) });
  }
  var RESET_ON = !(window.LP_READER && window.LP_READER.reset === false);

  // ── 목차 패널(2.9절) ────────────────────────────────────────────────────
  var PANEL = null; // { box, acct, bar }
  function sidebarShown(sb) {
    var r = sb.getBoundingClientRect();
    return visible(sb) && r.right > 0 && r.left < window.innerWidth;
  }
  function initPanel() {
    var sb = $("#sidebar");
    if (!sb) return;
    var acct = el("div", { class: "lp-account" });
    var fill = el("span", { class: "lp-bar-fill" });
    var label = el("span", { class: "lp-bar-label", text: "이 책 0%" });
    var bar = el("div", { class: "lp-book-progress" }, [label, el("span", { class: "lp-bar" }, [fill])]);
    var resetRow = el("div", { class: "lp-acct-actions lp-reset-row" });
    resetRow.hidden = true;
    var box = el("div", { class: "lp-reader-box" }, [acct, bar, resetRow]);
    var home = $("a.sidebar-home", sb), header = $(".sidebar-header", sb);
    if (home) after(home, box);
    else if (header) after(header, box);
    else sb.insertBefore(box, sb.firstChild);
    PANEL = { sb: sb, box: box, acct: acct, fill: fill, label: label, resetRow: resetRow };
    renderAccount();
  }
  function whenPanelOpen(go) {
    var sb = PANEL && PANEL.sb;
    if (!sb) return;
    if (sidebarShown(sb)) { go(); return; }
    var btn = $("#sidebar-open");
    if (btn) btn.addEventListener("click", function () { setTimeout(go, 0); }, { once: true });
    if (typeof MutationObserver === "function") {
      var mo = new MutationObserver(function () { if (sb.classList.contains("open")) { mo.disconnect(); go(); } });
      mo.observe(sb, { attributes: true, attributeFilter: ["class"] });
    }
  }
  function renderAccount() {
    if (!PANEL) return;
    var acct = PANEL.acct;
    acct.textContent = "";
    var s = getSession();
    var rr = PANEL.resetRow;
    rr.textContent = "";
    rr.hidden = true;
    if (s && (loginAvailable() || !CONFIG)) { // 서버가 잠깐 닿지 않아도 로그인한 사실은 보여 준다
      acct.hidden = false;
      acct.appendChild(el("div", { class: "lp-acct-email", text: s.email || "로그인함" }));
      acct.appendChild(el("div", { class: "lp-acct-actions" }, [
        el("button", { type: "button", class: "lp-link-btn", text: "로그아웃", onclick: safe(logout) }),
        el("button", { type: "button", class: "lp-link-btn lp-small", text: "계정 지우기", onclick: safe(deleteAccount) }),
        RESET_ON && BOOK ? resetBtn() : null
      ]));
      return;
    }
    if (RESET_ON && BOOK) { rr.appendChild(resetBtn()); rr.hidden = false; } // 로그인 전에도 이 브라우저의 진행률을 지울 수 있게
    if (!loginAvailable()) { acct.hidden = true; return; }
    acct.hidden = false;
    var msg = el("div", { class: "lp-login-msg", "aria-live": "polite" });
    msg.hidden = true;
    addLoginMsg(msg);
    acct.appendChild(el("p", { class: "lp-consent", text: CONSENT_TEXT }));
    acct.appendChild(lazyGoogleButton(el("div", { class: "lp-gbtn" }), whenPanelOpen));
    acct.appendChild(msg);
  }
  function renderPanel() {
    if (!PANEL || !INDEX || !BOOK) return;
    var bp = PROG.books[BOOK] ? bookOf(PROG, BOOK) : null;
    var st = statsOf(INDEX, bp);
    PANEL.label.textContent = "이 책 " + st.pct + "%";
    PANEL.fill.style.width = st.pct + "%";
    var byFirst = {};
    INDEX.chapters.forEach(function (ch) { if (ch.pages && ch.pages[0]) byFirst[ch.pages[0].file] = ch; });
    $$("#sidebar > ol > li").forEach(function (li) {
      var a = null;
      for (var c = li.firstElementChild; c; c = c.nextElementSibling) if (c.tagName === "A") { a = c; break; }
      if (!a) return; // 부(部) 머리
      var ch = byFirst[fileOfHref(a.getAttribute("href"))];
      if (!ch) return;
      var cs = st.chapters[ch.id];
      li.classList.add("lp-ch-li");
      var cnt = $(".lp-ch-count", a);
      if (!cnt) { cnt = el("span", { class: "lp-ch-count" }); a.insertBefore(cnt, a.firstChild); } // 오른쪽 띄움이 첫 줄에 오게 맨 앞에
      cnt.textContent = cs.done + "/" + cs.total;
      a.classList.toggle("lp-ch-done", cs.total > 0 && cs.done >= cs.total);
      a.classList.toggle("lp-ch-part", cs.done > 0 && cs.done < cs.total);
      var own = null, extra = null;
      for (c = li.firstElementChild; c; c = c.nextElementSibling) {
        if (c.tagName === "UL" && c.classList.contains("sidebar-toc")) { if (c.classList.contains("lp-extra")) extra = c; else own = c; }
      }
      if (own) markToc(own, ch, bp, cs);
      else if (ch.pages.length > 1 || ch.quizzes.length) {
        var tg = $(".lp-ch-toggle", li);
        if (!tg) {
          tg = el("button", { type: "button", class: "lp-ch-toggle", "aria-expanded": "false", "aria-label": "절 목록 펼치기" });
          after(a, tg);
          tg.addEventListener("click", safe(function () {
            var open = tg.getAttribute("aria-expanded") !== "true";
            tg.setAttribute("aria-expanded", open ? "true" : "false");
            var ex = $("ul.lp-extra", li);
            if (ex) ex.hidden = !open;
            else if (open) renderPanel();
          }));
        }
        if (tg.getAttribute("aria-expanded") === "true") {
          if (!extra) {
            extra = el("ul", { class: "sidebar-toc lp-extra" });
            ch.pages.forEach(function (pg) {
              extra.appendChild(el("li", null, [el("a", { href: (INDEX.base || BASE) + pg.file, "data-lp-file": pg.file, text: pg.title || pg.file })]));
            });
            li.appendChild(extra);
          }
          markToc(extra, ch, bp, cs);
        }
      }
    });
  }
  function markToc(ul, ch, bp, cs) {
    var keyOf = {};
    ch.pages.forEach(function (pg) { keyOf[pg.file] = pg.key; });
    $$("li > a", ul).forEach(function (a) {
      var k = keyOf[a.getAttribute("data-lp-file") || fileOfHref(a.getAttribute("href"))];
      var done = !!(k && bp && isRead(bp.pages[k]));
      a.classList.toggle("lp-done", done);
      // 읽은 절은 체크 표시가 단추다: 누르면 안 읽음으로 되돌린다
      var li = a.parentNode, tg = $("button.lp-unread", li);
      if (done && k && !tg) {
        tg = el("button", { type: "button", class: "lp-unread", title: "안 읽음으로 되돌리기", "aria-label": "안 읽음으로 되돌리기: " + (a.textContent || "") });
        li.insertBefore(tg, a);
        tg.addEventListener("click", safe(function (ev) { ev.preventDefault(); ev.stopPropagation(); setRead(k, false); }));
      } else if (!done && tg) tg.parentNode.removeChild(tg);
      a.classList.toggle("lp-tg", done);
    });
    if (ch.quizzes.length) {
      var ql = $("li.lp-quiz-line", ul);
      if (!ql) { ql = el("li", { class: "lp-quiz-line" }); ul.appendChild(ql); }
      ql.textContent = "정리 문제 " + cs.quizDone + "/" + cs.quizTotal;
      ql.classList.toggle("lp-done", cs.quizDone >= cs.quizTotal);
    }
  }

  // ── 댓글 칸(2.15절) ─────────────────────────────────────────────────────
  var COMMENTS = null; // { sec, title, auth, count }
  var lastSelection = "";
  function initComments() {
    if (!PAGE) return;
    var chap = $("main > .chapter");
    if (!chap) return;
    var title = el("div", { class: "lp-c-title", role: "heading", "aria-level": "2", text: "댓글" });
    var auth = el("div", { class: "lp-c-auth" });
    var sec = el("section", { class: "lp-comments", "aria-label": "댓글" }, [
      title,
      el("p", { class: "lp-c-note", text: "남긴 댓글은 저자만 읽습니다. 다른 독자에게는 개수만 보입니다." }),
      auth
    ]);
    var nav = $("main > nav.chapter-nav");
    if (nav && nav.parentNode === chap.parentNode) chap.parentNode.insertBefore(sec, nav);
    else after(chap, sec);
    COMMENTS = { sec: sec, title: title, auth: auth, count: null };
    document.addEventListener("selectionchange", function () {
      try {
        var s = window.getSelection();
        if (!s || s.isCollapsed || !s.anchorNode || !chap.contains(s.anchorNode)) return;
        var t = String(s).replace(/\s+/g, " ").trim();
        if (t) lastSelection = t;
      } catch (e) { /* 없음 */ }
    });
    loadCount();
  }
  function setCount(n) {
    if (!COMMENTS) return;
    COMMENTS.count = n;
    COMMENTS.title.textContent = "댓글 " + n + "개";
    COMMENTS.title.classList.remove("lp-c-offline");
  }
  function loadCount() {
    if (!COMMENTS) return;
    var q = "?book=" + encodeURIComponent(BOOK) + "&page=" + encodeURIComponent(PAGE.key);
    api("GET", "/api/comments/counts" + q, undefined, { timeout: 8000 }).then(function (r) {
      if (r.ok && r.data && r.data.counts) { setCount(Number(r.data.counts[PAGE.key]) || 0); return; }
      COMMENTS.title.textContent = "댓글 서버에 닿지 않습니다";
      COMMENTS.title.classList.add("lp-c-offline");
    });
  }
  function whenVisible(target) {
    return function (go) {
      if (typeof IntersectionObserver !== "function") { go(); return; }
      var io = new IntersectionObserver(function (ents) {
        if (ents.some(function (e) { return e.isIntersecting; })) { io.disconnect(); go(); }
      }, { rootMargin: "200px" });
      io.observe(target);
    };
  }
  function renderCommentAuth() {
    if (!COMMENTS) return;
    var box = COMMENTS.auth;
    box.textContent = "";
    var s = getSession();
    if (!loginAvailable()) return; // 설정을 못 받았거나 login:false 면 개수만(2.7절)
    if (!s) {
      var msg = el("div", { class: "lp-login-msg", "aria-live": "polite" });
      msg.hidden = true;
      addLoginMsg(msg);
      box.appendChild(el("p", { class: "lp-c-need", text: "댓글은 로그인한 뒤 남길 수 있습니다" }));
      box.appendChild(el("p", { class: "lp-consent", text: CONSENT_TEXT }));
      var g = el("div", { class: "lp-gbtn" });
      box.appendChild(g);
      box.appendChild(msg);
      lazyGoogleButton(g, whenVisible(COMMENTS.sec));
      return;
    }
    var max = (CONFIG && CONFIG.limits && CONFIG.limits.commentMax) || 2000;
    var qmax = (CONFIG && CONFIG.limits && CONFIG.limits.quoteMax) || 500;
    var quote = "";
    var ta = el("textarea", { class: "lp-c-text", rows: "4", maxlength: String(max), placeholder: "이 페이지에 대해 저자에게 남길 말", "aria-label": "댓글" });
    var left = el("span", { class: "lp-c-left", text: "남은 글자 " + max });
    var chipBox = el("div", { class: "lp-c-quote" });
    var send = el("button", { type: "button", class: "lp-c-send", text: "남기기" });
    var status = el("div", { class: "lp-c-status", "aria-live": "polite" });
    var mine = el("ul", { class: "lp-c-mine" });
    function setQuote(t) {
      quote = (t || "").slice(0, qmax);
      chipBox.textContent = "";
      if (!quote) return;
      var x = el("button", { type: "button", class: "lp-chip-x", "aria-label": "인용 빼기", text: "×" });
      x.addEventListener("click", function () { setQuote(""); });
      chipBox.appendChild(el("span", { class: "lp-chip" }, [el("span", { class: "lp-chip-text", text: "인용: " + quote }), x]));
    }
    ta.addEventListener("focus", function () { if (!quote && lastSelection) { setQuote(lastSelection); lastSelection = ""; } });
    ta.addEventListener("input", function () { left.textContent = "남은 글자 " + (max - ta.value.length); });
    send.addEventListener("click", safe(function () {
      var body = ta.value.trim();
      if (!body) { status.textContent = "댓글이 비어 있습니다."; return; }
      send.disabled = true;
      status.textContent = "남기는 중…";
      api("POST", "/api/comments", { book: BOOK, page: PAGE.key, file: PAGE.file, body: body, quote: quote || undefined }, { auth: true }).then(function (r) {
        send.disabled = false;
        if (!r.ok || !r.data) {
          status.textContent = errMsg(r, r.status === 0 ? "댓글 서버에 닿지 않습니다." : "남기지 못했습니다. 잠시 뒤 다시 해 보세요.");
          return;
        }
        ta.value = ""; left.textContent = "남은 글자 " + max; setQuote("");
        status.textContent = "남겼습니다. 저자가 읽고 원고에 반영합니다.";
        if (typeof r.data.count === "number") setCount(r.data.count);
        if (r.data.comment) mine.insertBefore(mineItem(r.data.comment, mine), mine.firstChild);
      });
    }));
    box.appendChild(el("div", { class: "lp-c-form" }, [chipBox, ta, el("div", { class: "lp-c-row" }, [left, send]), status]));
    box.appendChild(mine);
    var q = "?book=" + encodeURIComponent(BOOK) + "&page=" + encodeURIComponent(PAGE.key);
    api("GET", "/api/comments/mine" + q, undefined, { auth: true }).then(function (r) {
      if (!r.ok || !r.data || !Array.isArray(r.data.comments)) return;
      r.data.comments.slice().sort(function (a, b) { return (b.createdAt || 0) - (a.createdAt || 0); })
        .forEach(function (c) { mine.appendChild(mineItem(c, mine)); });
    });
  }
  function mineItem(c, list) {
    var li = el("li", { class: "lp-c-item" });
    var meta = el("div", { class: "lp-c-meta" }, [
      el("span", { text: c.createdAt ? ymd(c.createdAt) : "" }),
      el("span", { class: "lp-c-state lp-st-" + (c.status || "open"), text: STATUS_LABEL[c.status] || STATUS_LABEL.open })
    ]);
    li.appendChild(meta);
    if (c.quote) li.appendChild(el("blockquote", { class: "lp-c-q", text: c.quote }));
    li.appendChild(el("div", { class: "lp-c-body", text: c.body || "" }));
    if ((c.status || "open") === "open" && c.id != null) {
      var del = el("button", { type: "button", class: "lp-link-btn lp-small", text: "지우기" });
      del.addEventListener("click", safe(function () {
        if (!window.confirm("이 댓글을 지울까요?")) return;
        api("DELETE", "/api/comments/" + encodeURIComponent(c.id), undefined, { auth: true }).then(function (r) {
          if (!r.ok) { window.alert(errMsg(r, "지우지 못했습니다.")); return; }
          if (li.parentNode === list) list.removeChild(li);
          if (r.data && typeof r.data.count === "number") setCount(r.data.count);
        });
      }));
      meta.appendChild(del);
    }
    return li;
  }

  // ── 대문(2.13·2.14절) ───────────────────────────────────────────────────
  function initRootCards() {
    var cards = $$("a.card[data-book]");
    if (!cards.length) return;
    cards.forEach(function (card) {
      var b = card.getAttribute("data-book");
      if (!card.getAttribute("data-base")) card.setAttribute("data-base", normBase(card.getAttribute("href")));
      var base = card.getAttribute("data-base");
      card.addEventListener("click", function () {
        var pos = PROG.books[b] && PROG.books[b].position;
        if (pos && pos.file && card.getAttribute("href") === base + pos.file)
          ssSet(K.resume, { book: b, page: pos.page, file: pos.file, anchor: pos.anchor, offset: pos.offset, ratio: pos.ratio });
      });
    });
    var draw = safe(function () {
      var any = hasAny(PROG);
      cards.forEach(function (card) {
        var b = card.getAttribute("data-book"), base = card.getAttribute("data-base");
        var pos = PROG.books[b] && PROG.books[b].position;
        if (pos && okFile(pos.file)) card.setAttribute("href", base + pos.file);
        if (!any) return; // 첫 방문에는 막대를 넣지 않는다
        loadIndex(b, base).then(safe(function (idx) {
          var bp = PROG.books[b] ? bookOf(PROG, b) : null;
          var st = statsOf(idx, bp);
          var host = $(".card-text", card) || card;
          var bar = $(".lp-card-progress", host);
          if (!bar) {
            bar = el("div", { class: "lp-card-progress" }, [
              el("span", { class: "lp-bar" }, [el("span", { class: "lp-bar-fill" })]),
              el("span", { class: "lp-bar-label" })
            ]);
            host.appendChild(bar);
          }
          $(".lp-bar-fill", bar).style.width = st.pct + "%";
          $(".lp-bar-label", bar).textContent = st.pct + "% 읽음";
        }), function () { /* 그 카드는 비움 */ });
      });
    });
    afterSync.push(draw);
    if (getSession()) {
      var drawn = false;
      var once = function () { if (!drawn) { drawn = true; draw(); } };
      setTimeout(once, 3000); // 서버가 늦으면 먼저 그린다(합친 뒤 다시 그린다)
      syncNow(false).then(once, once);
    } else draw();
  }

  // ── 책 안 검색(계약서 끝 「변경 (책 안 검색)」 절) ─────────────────────────
  // 서버 없이 화면만으로: 배포 때 만든 <책>/search-index.json 을 처음 입력할 때 받아 부분 문자열로 찾는다.
  // 결과·미리보기는 글자 노드로만 만든다(innerHTML 없음). 결과를 누르면 도착한 페이지에서 찾은 말을 표시한다
  var SEARCH_MAX = 50;      // 결과 상한(넘으면 「더 있음」)
  var SEARCH_CTX = 40;      // 미리보기 앞뒤 글자 수
  var SIDX = {};            // 책 → Promise(색인)
  var BOOKS_P = null;       // Promise([{id, title, base}])
  function lowerSame(x) {
    var l = x.toLowerCase();
    if (l.length === x.length) return l;
    // 소문자로 바꾸며 길이가 달라지는 글자(드묾)는 그대로 둔다: 미리보기 자리를 원문과 맞추려고
    var out = "";
    for (var i = 0; i < x.length; i++) { var c = x.charAt(i), d = c.toLowerCase(); out += d.length === 1 ? d : c; }
    return out;
  }
  function normQuery(q) { return lowerSame(String(q || "")).replace(/\s+/g, " ").trim(); }
  /** 공백을 뺀 글자와, 그 글자마다 원래 글자에서의 자리(공백 무시 찾기: 「트위디공식」 ↔ 「트위디 공식」) */
  function spaceless(l) {
    var n = "", map = [];
    for (var i = 0; i < l.length; i++) { var c = l.charAt(i); if (!/\s/.test(c)) { n += c; map.push(i); } }
    return { n: n, map: map };
  }
  function noSpace(x) { return x.replace(/\s+/g, ""); }
  /** 글자 l(소문자) 안에서 needle 이 든 자리 [시작, 끝) 목록. 그대로 든 곳과 공백을 건너 든 곳 모두(겹치면 합친다).
   *  sp = spaceless(l)(없으면 만든다), from 이후만, max 개까지 */
  function hitRanges(l, needles, sp, from, max) {
    var out = [];
    from = from || 0; max = max || 1e9;
    needles.forEach(function (t) {
      if (!t) return;
      var i, k = 0;
      for (i = l.indexOf(t, from); i >= 0 && k < max; i = l.indexOf(t, i + t.length), k++) out.push([i, i + t.length]);
      var tn = noSpace(t);
      if (!tn) return;
      sp = sp || spaceless(l);
      var j0 = 0;
      while (j0 < sp.map.length && sp.map[j0] < from) j0++;
      k = 0;
      for (i = sp.n.indexOf(tn, j0); i >= 0 && k < max; i = sp.n.indexOf(tn, i + tn.length), k++) out.push([sp.map[i], sp.map[i + tn.length - 1] + 1]);
    });
    out.sort(function (a, b) { return a[0] - b[0] || b[1] - a[1]; });
    var merged = [];
    out.forEach(function (r) {
      var m = merged[merged.length - 1];
      if (m && r[0] <= m[1]) { if (r[1] > m[1]) m[1] = r[1]; } else merged.push([r[0], r[1]]);
    });
    return merged;
  }
  /** 낱말이 들어 있나(그대로 또는 공백 무시). n = 공백 뺀 글자 */
  function hasTerm(l, n, t) { return l.indexOf(t) >= 0 || n.indexOf(noSpace(t)) >= 0; }
  function termsOf(nq) {
    var seen = {}, out = [];
    nq.split(" ").forEach(function (t) { if (t && !seen[t]) { seen[t] = 1; out.push(t); } });
    return out;
  }
  function loadSearchIndex(book, base) {
    if (SIDX[book]) return SIDX[book];
    SIDX[book] = fetch(base + "search-index.json", { credentials: "same-origin" })
      .then(function (r) { if (!r.ok) throw new Error("search-index " + r.status); return r.json(); })
      .then(function (j) {
        if (!j || !Array.isArray(j.pages)) throw new Error("search-index 꼴");
        var pages = [];
        j.pages.forEach(function (p) {
          if (!p || !okFile(p.f) || !Array.isArray(p.c)) return;
          var t = typeof p.t === "string" ? p.t : p.f, tl = lowerSame(t);
          var subs = Array.isArray(p.s) ? p.s : []; // 소제목 목록(옛 색인에는 없다 → 페이지 제목만)
          pages.push({ f: p.f, t: t, tl: tl, tn: noSpace(tl), c: p.c.filter(function (c) { return Array.isArray(c) && typeof c[1] === "string"; })
            .map(function (c) {
              var x = c[1], l = lowerSame(x), h = typeof c[2] === "number" && typeof subs[c[2]] === "string" ? subs[c[2]] : "";
              if (h && noSpace(h) === noSpace(t)) h = "";
              return { a: typeof c[0] === "string" ? c[0] : "", x: x, l: l, n: noSpace(l), h: h };
            }) });
        });
        return { book: book, title: typeof j.title === "string" ? j.title : book, base: base, pages: pages };
      });
    return SIDX[book];
  }
  /** 「모든 책」 목록: 배포 저장소 루트 /reader/books.json. 못 받으면 대문 카드, 그것도 없으면 지금 책 하나 */
  function loadBooks() {
    if (BOOKS_P) return BOOKS_P;
    var fallback = function () {
      var out = $$("a.card[data-book]").map(function (c) {
        var h = $("h3", c);
        return { id: c.getAttribute("data-book"), title: h ? h.textContent : c.getAttribute("data-book"), base: c.getAttribute("data-base") || normBase(c.getAttribute("href")) };
      });
      if (!out.length && BOOK) out.push({ id: BOOK, title: (INDEX && INDEX.title) || BOOK, base: BASE });
      return out;
    };
    BOOKS_P = fetch("/reader/books.json", { credentials: "same-origin" })
      .then(function (r) { if (!r.ok) throw new Error("books " + r.status); return r.json(); })
      .then(function (list) {
        if (!Array.isArray(list)) throw new Error("books 꼴");
        var out = list.filter(function (b) { return b && okBook(b.id) && typeof b.base === "string" && /^\/[A-Za-z0-9._\/-]*\/$/.test(b.base) && b.base.indexOf("//") < 0; })
          .map(function (b) { return { id: b.id, title: typeof b.title === "string" ? b.title : b.id, base: b.base }; });
        if (!out.length) throw new Error("books 빔");
        return out;
      })
      .catch(fallback);
    return BOOKS_P;
  }
  /** 한 책 색인에서 찾기. 모든 낱말이 들어 있는 덩이(AND, 낱말마다 공백 무시도 맞춤).
   *  순서: 입력 그대로(공백 포함) 든 덩이 > 공백을 빼고 맞는 덩이 > 낱말 AND */
  function searchIn(idx, terms, phrase, out) {
    var pn = noSpace(phrase);
    idx.pages.forEach(function (p, pi) {
      p.c.forEach(function (c, ci) {
        for (var i = 0; i < terms.length; i++) if (!hasTerm(c.l, c.n, terms[i])) return;
        var score = 0, pp = c.l.indexOf(phrase), head = -1;
        if (pp >= 0) { score += 100; head = pp; } // 입력 그대로
        else { var q = c.n.indexOf(pn); if (q >= 0) { score += 60; head = q; } } // 공백 무시로 맞음
        if (terms.every(function (t) { return hasTerm(p.tl, p.tn, t); })) score += 20; // 페이지 제목에도 있음
        if (ci === 0 && head >= 0 && head < 80) score += 5; // 절 첫머리(제목 근처)
        out.push({ idx: idx, page: p, chunk: c, score: score, order: pi * 100000 + ci });
      });
    });
  }
  /** 미리보기: 찾은 자리 앞뒤 SEARCH_CTX 자, 찾은 말은 <b>(공백을 건너 맞은 것도 본문 글자 범위대로). 글자 노드로만 */
  function snippet(c, terms, phrase) {
    var x = c.x, l = c.l, sp = spaceless(l);
    var main = hitRanges(l, [phrase], sp, 0, 1)[0] || hitRanges(l, [terms[0]], sp, 0, 1)[0] || [0, 0];
    var s = Math.max(0, main[0] - SEARCH_CTX), e = Math.min(x.length, main[1] + SEARCH_CTX);
    var seg = x.slice(s, e), marks = [];
    hitRanges(l, [phrase].concat(terms), sp).forEach(function (r) {
      var a = Math.max(r[0], s), b = Math.min(r[1], e);
      if (a < b) marks.push([a - s, b - s]);
    });
    var span = el("span", { class: "lp-s-snip" }), cur = 0;
    if (s > 0) span.appendChild(document.createTextNode("… "));
    marks.forEach(function (m) {
      if (m[1] <= cur) return;
      var a = Math.max(m[0], cur);
      if (a > cur) span.appendChild(document.createTextNode(seg.slice(cur, a)));
      span.appendChild(el("b", { text: seg.slice(a, m[1]) }));
      cur = m[1];
    });
    if (cur < seg.length) span.appendChild(document.createTextNode(seg.slice(cur)));
    if (e < x.length) span.appendChild(document.createTextNode(" …"));
    return span;
  }
  function closeSidebarOverlay() {
    var sb = $("#sidebar");
    if (sb && sb.classList.contains("open")) sb.classList.remove("open");
  }
  function hitLink(r, q, cont) {
    var base = r.idx.base, file = r.page.f, anchor = r.chunk.a;
    var href = base + file + (anchor ? "#" + encodeURIComponent(anchor) : "");
    // 결과 제목: 「페이지 제목 › 가장 가까운 소제목」(소제목이 없거나 페이지 제목과 같으면 페이지 제목만).
    // cont = 바로 위 결과와 같은 페이지: 페이지 제목은 위 결과에 맡기고 「› 소제목」만, 조금 들여 쓴다(순위는 그대로)
    cont = cont && !!r.chunk.h;
    var title = el("span", { class: "lp-s-title" }, cont ? [] : [document.createTextNode(r.page.t)]);
    if (r.chunk.h) title.appendChild(el("span", { class: "lp-s-sub", text: (cont ? "› " : " › ") + r.chunk.h }));
    var a = el("a", { class: "lp-s-hit" + (cont ? " lp-s-cont" : ""), href: href, title: r.page.t + (r.chunk.h ? " › " + r.chunk.h : "") }, [title, snippet(r.chunk, r.terms, r.phrase)]);
    a.addEventListener("click", safe(function (ev) {
      if (ev.button || ev.ctrlKey || ev.metaKey || ev.shiftKey || ev.altKey) return; // 새 탭으로 열기는 그대로
      var hit = { book: r.idx.book, file: file, anchor: anchor, q: q, at: now() };
      ssSet(K.search, hit);
      if (BOOK === r.idx.book && FILE === file) { // 같은 페이지: 넘어가지 않고 바로 표시
        ev.preventDefault();
        closeSidebarOverlay();
        if (anchor && location.hash !== "#" + encodeURIComponent(anchor)) {
          try { history.replaceState(null, "", "#" + encodeURIComponent(anchor)); } catch (e) { /* 그대로 */ }
        }
        applySearchHit();
      }
    }));
    return a;
  }
  /** 검색 칸 하나. scopeAll 이면 「모든 책」만(대문) */
  function makeSearchBox(rootOnly) {
    var input = el("input", { type: "search", class: "lp-s-input", placeholder: rootOnly ? "모든 책에서 찾기" : "책에서 찾기", "aria-label": "책에서 낱말 찾기", title: "단축키: / 또는 Ctrl+K", autocomplete: "off", spellcheck: "false", enterkeyhint: "search" });
    var scope = null;
    if (!rootOnly) {
      scope = el("select", { class: "lp-s-scope", "aria-label": "찾을 범위" }, [el("option", { value: "book", text: "이 책" }), el("option", { value: "all", text: "모든 책" })]);
    }
    var status = el("div", { class: "lp-s-status", "aria-live": "polite" });
    var list = el("ol", { class: "lp-s-results" });
    status.hidden = true; list.hidden = true;
    var box = el("div", { class: "lp-search" + (rootOnly ? " lp-search-root" : ""), role: "search" }, [el("div", { class: "lp-s-row" }, [input, scope]), status, list]);
    var seq = 0, timer = null;
    function say(t) { status.textContent = t; status.hidden = !t; }
    function clear() { list.textContent = ""; list.hidden = true; say(""); }
    function run() {
      var my = ++seq;
      var raw = input.value, nq = normQuery(raw);
      box.removeAttribute("data-done");
      if (!nq) { clear(); return; }
      var terms = termsOf(nq), phrase = nq;
      var all = rootOnly || (scope && scope.value === "all");
      var done = function () { if (my === seq) box.setAttribute("data-done", (all ? "all:" : "book:") + nq); }; // 다 그렸음(시험이 기다리는 표지)
      var booksP = all ? loadBooks() : Promise.resolve([{ id: BOOK, title: (INDEX && INDEX.title) || "", base: BASE }]);
      say("찾는 중…");
      booksP.then(function (books) {
        return Promise.all(books.map(function (b) {
          return loadSearchIndex(b.id, b.base).then(function (ix) { ix.shelfTitle = b.title || ix.title; return ix; }, function () { return null; });
        }));
      }).then(safe(function (idxs) {
        if (my !== seq) return; // 그새 글자가 바뀌었다
        var got = idxs.filter(Boolean);
        list.textContent = "";
        if (!got.length) { list.hidden = true; say("검색 색인을 불러오지 못했습니다."); done(); return; }
        var res = [];
        got.forEach(function (ix, bi) { var part = []; searchIn(ix, terms, phrase, part); part.forEach(function (r) { r.bi = bi; r.terms = terms; r.phrase = phrase; res.push(r); }); });
        if (!res.length) { list.hidden = true; say("찾은 것이 없습니다"); done(); return; }
        res.sort(function (a, b) { return b.score - a.score || a.bi - b.bi || a.order - b.order; });
        var total = res.length, shown = res.slice(0, SEARCH_MAX);
        if (all) shown.sort(function (a, b) { return a.bi - b.bi || b.score - a.score || a.order - b.order; }); // 책 이름별로 묶는다(책 안에서는 점수 순)
        var lastBook = -1, lastPage = null;
        shown.forEach(function (r) {
          if (all && r.bi !== lastBook) { lastBook = r.bi; lastPage = null; list.appendChild(el("li", { class: "lp-s-book", text: r.idx.shelfTitle })); }
          list.appendChild(el("li", { class: "lp-s-item" }, [hitLink(r, raw, lastPage === r.page)]));
          lastPage = r.page;
        });
        if (total > SEARCH_MAX) list.appendChild(el("li", { class: "lp-s-more", text: "더 있음: 모두 " + total + "곳 가운데 " + SEARCH_MAX + "곳만 보입니다. 낱말을 더 넣어 좁혀 보세요." }));
        list.hidden = false;
        say(total > SEARCH_MAX ? "" : total + "곳");
        done();
      }));
    }
    input.addEventListener("input", function () { if (timer) clearTimeout(timer); timer = setTimeout(safe(run), 150); });
    input.addEventListener("keydown", function (ev) {
      if (ev.key === "Escape") { input.value = ""; clear(); input.blur(); }
      else if (ev.key === "Enter") { ev.preventDefault(); var a = $("a.lp-s-hit", list); if (a) a.click(); }
    });
    if (scope) scope.addEventListener("change", safe(run));
    return { box: box, input: input };
  }
  var SEARCH = null;
  function initSearch() {
    if (BOOK) {
      var sb = $("#sidebar");
      if (!sb) return;
      SEARCH = makeSearchBox(false);
      var header = $(".sidebar-header", sb);
      if (header) after(header, SEARCH.box);
      else sb.insertBefore(SEARCH.box, sb.firstChild);
    } else {
      if (!$$("a.card[data-book]").length) return;
      SEARCH = makeSearchBox(true);
      var hd = $("body > header");
      if (hd) after(hd, SEARCH.box);
      else document.body.insertBefore(SEARCH.box, document.body.firstChild);
    }
    // 「/」 또는 Ctrl+K(맥은 ⌘K) 로 검색 칸. 글을 쓰는 중이면 무시
    document.addEventListener("keydown", function (ev) {
      if (ev.defaultPrevented || ev.isComposing) return;
      var slash = ev.key === "/" && !ev.ctrlKey && !ev.metaKey && !ev.altKey;
      var ck = (ev.key === "k" || ev.key === "K") && (ev.ctrlKey || ev.metaKey) && !ev.altKey && !ev.shiftKey;
      if (!slash && !ck) return;
      var t = ev.target;
      if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
      ev.preventDefault();
      var sb = $("#sidebar");
      if (BOOK && sb && !sidebarShown(sb)) { var ob = $("#sidebar-open"); if (ob) ob.click(); else sb.classList.add("open"); }
      setTimeout(function () { try { SEARCH.input.focus({ preventScroll: !BOOK }); SEARCH.input.select(); } catch (e) { SEARCH.input.focus(); } }, 0);
    });
  }

  // 도착한 페이지에서 찾은 말 표시
  var HIT_SKIP = ".katex, script, style, svg, figure.cast, figure.dlg-cast, .lp-search, .lp-fold-bar, .lp-q-hint";
  /** root 아래 글자 노드를 이어 공백 정리·소문자로 만든 문자열과, 글자마다의 (노드, 자리) */
  function textMap(root) {
    var nodes = [], s = "", map = [], prevSpace = true;
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) { var p = n.parentElement; return p && p.closest(HIT_SKIP) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT; }
    });
    for (var n = w.nextNode(); n; n = w.nextNode()) {
      var v = n.nodeValue;
      for (var i = 0; i < v.length; i++) {
        var c = v.charAt(i);
        if (/\s/.test(c)) { if (prevSpace) continue; c = " "; prevSpace = true; } else prevSpace = false;
        var d = c.toLowerCase();
        s += d.length === 1 ? d : c;
        map.push([n, i]);
      }
      nodes.push(n);
    }
    return { s: s, map: map };
  }
  /** [from, to) 자리의 글자를 <mark class="lp-hit"> 로 감싼다(노드가 여럿이면 노드마다). 첫 mark 를 돌려준다 */
  function wrapRange(tm, from, to) {
    var parts = [], i = from;
    while (i < to) {
      var n = tm.map[i][0], a = tm.map[i][1], b = a, j = i;
      while (j < to && tm.map[j][0] === n) { b = tm.map[j][1]; j++; }
      parts.push([n, a, b + 1]);
      i = j;
    }
    var first = null;
    parts.reverse().forEach(function (p) { // 뒤에서부터 잘라야 앞 자리가 어긋나지 않는다
      var n = p[0];
      try {
        var r = document.createRange();
        r.setStart(n, p[1]); r.setEnd(n, p[2]);
        var m = el("mark", { class: "lp-hit" });
        r.surroundContents(m);
        first = m;
      } catch (e) { /* 그 조각은 건너뜀 */ }
    });
    return first;
  }
  function clearHits() {
    $$("mark.lp-hit").forEach(function (m) {
      var p = m.parentNode;
      while (m.firstChild) p.insertBefore(m.firstChild, m);
      p.removeChild(m);
      p.normalize();
    });
  }
  /** 정리 문제 이유(고르기 전에는 화면에 없음)에서 찾는다. 찾으면 그 보기의 이유 칸을 펼친다 */
  function peekQuiz(terms, phrase) {
    for (var i = 0; i < QUIZZES.length; i++) {
      var w = QUIZZES[i].findWhy(terms, phrase);
      if (w) return w;
    }
    return null;
  }
  function applySearchHit() {
    var hit = ssGet(K.search);
    if (!hit || hit.book !== BOOK || hit.file !== FILE) return false;
    ssSet(K.search, null);
    if (typeof hit.at !== "number" || now() - hit.at > 60000) return false; // 오래된 것은 버린다
    var root = $("main > .chapter") || $("main");
    if (!root) return false;
    clearHits();
    var nq = normQuery(hit.q), terms = termsOf(nq);
    if (!terms.length) return false;
    var anchorEl = hit.anchor ? document.getElementById(hit.anchor) : null;
    // 그대로 든 곳을 먼저, 없으면 공백을 건너 든 곳(본문 「트위디 공식」 ↔ 검색어 「트위디공식」): 둘 다 본문 글자 범위로
    function locate(tm, needle, start) {
      var sp = spaceless(tm.s);
      return hitRanges(tm.s, [needle], sp, start, 1).filter(function (r) { return tm.s.slice(r[0], r[1]) === needle; })[0]
        || hitRanges(tm.s, [needle], sp, start, 1)[0]
        || (start ? locate(tm, needle, 0) : null);
    }
    function find(scope, phraseOnly) {
      var tm = textMap(scope);
      var start = 0;
      if (anchorEl && scope.contains(anchorEl)) { // 앵커 뒤에서부터 찾고, 없으면 처음부터
        for (var k = 0; k < tm.map.length; k++) {
          var nd = tm.map[k][0];
          if (nd === anchorEl || anchorEl.contains(nd) || (anchorEl.compareDocumentPosition(nd) & Node.DOCUMENT_POSITION_FOLLOWING)) { start = k; break; }
        }
      }
      var at = locate(tm, nq, start);
      if (at) return wrapRange(tm, at[0], at[1]);
      if (phraseOnly || terms.length < 2) return null;
      // 구가 그대로는(공백 무시로도) 없으면 낱말마다 앵커 뒤 첫 자리
      var first = null;
      terms.forEach(function (t) {
        var tm2 = textMap(scope);
        var r2 = locate(tm2, t, Math.min(start, tm2.s.length));
        if (r2) { var m = wrapRange(tm2, r2[0], r2[1]); if (m && !first) first = m; }
      });
      return first;
    }
    // 구 그대로 본문 → 정리 문제 이유 → 낱말마다 본문 차례(이유 칸은 구나 낱말이 모두 들어 있을 때만 펼친다)
    var mark = find(root, true), why = null;
    if (!mark) { why = peekQuiz(terms, nq); if (why) mark = find(why, false); }
    if (!mark) mark = find(root, false);
    if (!mark) return false;
    // 접힌 함께 풀기 칸 안이면 그 묶음을 편다
    GROUPS.forEach(function (g) { if (g.contains(mark)) g.revealAll(); });
    var moved = false;
    var stop = function () { moved = true; };
    ["wheel", "touchstart"].forEach(function (ev) { window.addEventListener(ev, stop, { passive: true, once: true }); });
    var go = safe(function () {
      if (moved || !mark.isConnected) return;
      var r = mark.getBoundingClientRect();
      var y = window.scrollY + r.top - Math.max(80, window.innerHeight / 3);
      try { window.scrollTo({ top: Math.max(0, y), left: 0, behavior: "instant" }); } catch (e) { window.scrollTo(0, Math.max(0, y)); }
    });
    go();
    if (document.readyState === "complete") setTimeout(go, 300);
    else window.addEventListener("load", function () { go(); setTimeout(go, 800); });
    document.documentElement.classList.add("lp-hit-on");
    setTimeout(function () { $$("mark.lp-hit").forEach(function (m) { m.classList.add("lp-hit-fade"); }); }, 4000);
    setTimeout(function () { if ($$("mark.lp-hit-fade").length) clearHits(); }, 9000);
    return true;
  }

  // ── 시작 ────────────────────────────────────────────────────────────────
  function start() {
    document.documentElement.classList.add("lp-reader-on");
    if (!BOOK) {
      safe(checkJump)();
      safe(initRootCards)();
      safe(initSearch)();
      return;
    }
    safe(foldAll)();
    safe(initQuizzes)();
    var resumed = false;
    resumed = !!safe(restoreResume)();
    if (!resumed) {
      safe(revealForHash)(false);
      if (hashTarget()) {
        var t = hashTarget();
        // 접기로 위쪽 길이가 바뀌었으니 해시 대상으로 다시 맞춘다
        if (t) { try { t.scrollIntoView(); } catch (e) { /* 없음 */ } }
      }
    }
    safe(applySearchHit)(); // 검색 결과를 눌러 왔으면 찾은 말을 표시(접힌 칸이면 편다)
    window.addEventListener("hashchange", safe(function () { revealForHash(true); }));
    safe(checkJump)();
    safe(initSearch)();
    safe(initPanel)();
    onAuthChange.push(renderAccount, renderCommentAuth);
    afterSync.push(renderPanel, refreshQuizzes, renderReadRow);

    loadIndex(BOOK, BASE).then(safe(function (idx) {
      INDEX = idx;
      var f = findPage(idx, function (pg) { return pg.file === FILE; });
      if (f) { PAGE = f.page; CHAPTER = f.chapter; }
      safe(initCompletion)();
      safe(initPositionTracking)();
      safe(initComments)();
      safe(initReadRow)();
      safe(renderCommentAuth)();
      safe(renderPanel)();
    }), warn);

    loadConfig().then(safe(function (cfg) {
      CONFIG = cfg;
      renderAccount();
      renderCommentAuth();
      if (getSession()) syncNow(false); // 다른 기기의 진도를 받는다(보낼 것이 없으면 빈 books)
    }));
  }

  // 다른 탭에서 진도·로그인이 바뀌면 따라간다
  window.addEventListener("storage", safe(function (e) {
    if (e.key === K.progress) { PROG = loadProg(); renderPanel(); refreshQuizzes(); renderReadRow(); }
    else if (e.key === K.session) authChanged();
  }));

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", safe(start));
  else safe(start)();
})();
