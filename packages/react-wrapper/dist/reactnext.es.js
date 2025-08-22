import zt from "react";
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ae = /* @__PURE__ */ new Set(["children", "localName", "ref", "style", "className"]), Et = /* @__PURE__ */ new WeakMap(), kt = (n, t, e, r, o) => {
  const s = o?.[t];
  s === void 0 ? (n[t] = e, e == null && t in HTMLElement.prototype && n.removeAttribute(t)) : e !== r && ((i, c, l) => {
    let p = Et.get(i);
    p === void 0 && Et.set(i, p = /* @__PURE__ */ new Map());
    let u = p.get(c);
    l !== void 0 ? u === void 0 ? (p.set(c, u = { handleEvent: l }), i.addEventListener(c, u)) : u.handleEvent = l : u !== void 0 && (p.delete(c), i.removeEventListener(c, u));
  })(n, s, e);
}, ie = ({ react: n, tagName: t, elementClass: e, events: r, displayName: o }) => {
  const s = new Set(Object.keys(r ?? {})), i = n.forwardRef(((c, l) => {
    const p = n.useRef(/* @__PURE__ */ new Map()), u = n.useRef(null), b = {}, m = {};
    for (const [f, v] of Object.entries(c)) ae.has(f) ? b[f === "className" ? "class" : f] = v : s.has(f) || f in e.prototype ? m[f] = v : b[f] = v;
    return n.useLayoutEffect((() => {
      if (u.current === null) return;
      const f = /* @__PURE__ */ new Map();
      for (const v in m) kt(u.current, v, c[v], p.current.get(v), r), p.current.delete(v), f.set(v, c[v]);
      for (const [v, M] of p.current) kt(u.current, v, void 0, M, r);
      p.current = f;
    })), n.useLayoutEffect((() => {
      u.current?.removeAttribute("defer-hydration");
    }), []), b.suppressHydrationWarning = !0, n.createElement(t, { ...b, ref: n.useCallback(((f) => {
      u.current = f, typeof l == "function" ? l(f) : l !== null && (l.current = f);
    }), [l]) });
  }));
  return i.displayName = o ?? e.name, i;
};
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const G = globalThis, at = G.ShadowRoot && (G.ShadyCSS === void 0 || G.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, it = Symbol(), wt = /* @__PURE__ */ new WeakMap();
let Bt = class {
  constructor(t, e, r) {
    if (this._$cssResult$ = !0, r !== it) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (at && t === void 0) {
      const r = e !== void 0 && e.length === 1;
      r && (t = wt.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), r && wt.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const W = (n) => new Bt(typeof n == "string" ? n : n + "", void 0, it), lt = (n, ...t) => {
  const e = n.length === 1 ? n[0] : t.reduce(((r, o, s) => r + ((i) => {
    if (i._$cssResult$ === !0) return i.cssText;
    if (typeof i == "number") return i;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + i + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + n[s + 1]), n[0]);
  return new Bt(e, n, it);
}, le = (n, t) => {
  if (at) n.adoptedStyleSheets = t.map(((e) => e instanceof CSSStyleSheet ? e : e.styleSheet));
  else for (const e of t) {
    const r = document.createElement("style"), o = G.litNonce;
    o !== void 0 && r.setAttribute("nonce", o), r.textContent = e.cssText, n.appendChild(r);
  }
}, St = at ? (n) => n : (n) => n instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const r of t.cssRules) e += r.cssText;
  return W(e);
})(n) : n;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: ce, defineProperty: de, getOwnPropertyDescriptor: ue, getOwnPropertyNames: be, getOwnPropertySymbols: pe, getPrototypeOf: fe } = Object, Q = globalThis, Rt = Q.trustedTypes, he = Rt ? Rt.emptyScript : "", ve = Q.reactiveElementPolyfillSupport, D = (n, t) => n, X = { toAttribute(n, t) {
  switch (t) {
    case Boolean:
      n = n ? he : null;
      break;
    case Object:
    case Array:
      n = n == null ? n : JSON.stringify(n);
  }
  return n;
}, fromAttribute(n, t) {
  let e = n;
  switch (t) {
    case Boolean:
      e = n !== null;
      break;
    case Number:
      e = n === null ? null : Number(n);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(n);
      } catch {
        e = null;
      }
  }
  return e;
} }, ct = (n, t) => !ce(n, t), Tt = { attribute: !0, type: String, converter: X, reflect: !1, useDefault: !1, hasChanged: ct };
Symbol.metadata ??= Symbol("metadata"), Q.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
let O = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ??= []).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = Tt) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const r = Symbol(), o = this.getPropertyDescriptor(t, r, e);
      o !== void 0 && de(this.prototype, t, o);
    }
  }
  static getPropertyDescriptor(t, e, r) {
    const { get: o, set: s } = ue(this.prototype, t) ?? { get() {
      return this[e];
    }, set(i) {
      this[e] = i;
    } };
    return { get: o, set(i) {
      const c = o?.call(this);
      s?.call(this, i), this.requestUpdate(t, c, r);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Tt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(D("elementProperties"))) return;
    const t = fe(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(D("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(D("properties"))) {
      const e = this.properties, r = [...be(e), ...pe(e)];
      for (const o of r) this.createProperty(o, e[o]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [r, o] of e) this.elementProperties.set(r, o);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, r] of this.elementProperties) {
      const o = this._$Eu(e, r);
      o !== void 0 && this._$Eh.set(o, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const r = new Set(t.flat(1 / 0).reverse());
      for (const o of r) e.unshift(St(o));
    } else t !== void 0 && e.push(St(t));
    return e;
  }
  static _$Eu(t, e) {
    const r = e.attribute;
    return r === !1 ? void 0 : typeof r == "string" ? r : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise(((t) => this.enableUpdating = t)), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach(((t) => t(this)));
  }
  addController(t) {
    (this._$EO ??= /* @__PURE__ */ new Set()).add(t), this.renderRoot !== void 0 && this.isConnected && t.hostConnected?.();
  }
  removeController(t) {
    this._$EO?.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), e = this.constructor.elementProperties;
    for (const r of e.keys()) this.hasOwnProperty(r) && (t.set(r, this[r]), delete this[r]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return le(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach(((t) => t.hostConnected?.()));
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    this._$EO?.forEach(((t) => t.hostDisconnected?.()));
  }
  attributeChangedCallback(t, e, r) {
    this._$AK(t, r);
  }
  _$ET(t, e) {
    const r = this.constructor.elementProperties.get(t), o = this.constructor._$Eu(t, r);
    if (o !== void 0 && r.reflect === !0) {
      const s = (r.converter?.toAttribute !== void 0 ? r.converter : X).toAttribute(e, r.type);
      this._$Em = t, s == null ? this.removeAttribute(o) : this.setAttribute(o, s), this._$Em = null;
    }
  }
  _$AK(t, e) {
    const r = this.constructor, o = r._$Eh.get(t);
    if (o !== void 0 && this._$Em !== o) {
      const s = r.getPropertyOptions(o), i = typeof s.converter == "function" ? { fromAttribute: s.converter } : s.converter?.fromAttribute !== void 0 ? s.converter : X;
      this._$Em = o;
      const c = i.fromAttribute(e, s.type);
      this[o] = c ?? this._$Ej?.get(o) ?? c, this._$Em = null;
    }
  }
  requestUpdate(t, e, r) {
    if (t !== void 0) {
      const o = this.constructor, s = this[t];
      if (r ??= o.getPropertyOptions(t), !((r.hasChanged ?? ct)(s, e) || r.useDefault && r.reflect && s === this._$Ej?.get(t) && !this.hasAttribute(o._$Eu(t, r)))) return;
      this.C(t, e, r);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: r, reflect: o, wrapped: s }, i) {
    r && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(t) && (this._$Ej.set(t, i ?? e ?? this[t]), s !== !0 || i !== void 0) || (this._$AL.has(t) || (this.hasUpdated || r || (e = void 0), this._$AL.set(t, e)), o === !0 && this._$Em !== t && (this._$Eq ??= /* @__PURE__ */ new Set()).add(t));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
        for (const [o, s] of this._$Ep) this[o] = s;
        this._$Ep = void 0;
      }
      const r = this.constructor.elementProperties;
      if (r.size > 0) for (const [o, s] of r) {
        const { wrapped: i } = s, c = this[o];
        i !== !0 || this._$AL.has(o) || c === void 0 || this.C(o, void 0, s, c);
      }
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), this._$EO?.forEach(((r) => r.hostUpdate?.())), this.update(e)) : this._$EM();
    } catch (r) {
      throw t = !1, this._$EM(), r;
    }
    t && this._$AE(e);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    this._$EO?.forEach(((e) => e.hostUpdated?.())), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Eq &&= this._$Eq.forEach(((e) => this._$ET(e, this[e]))), this._$EM();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
O.elementStyles = [], O.shadowRootOptions = { mode: "open" }, O[D("elementProperties")] = /* @__PURE__ */ new Map(), O[D("finalized")] = /* @__PURE__ */ new Map(), ve?.({ ReactiveElement: O }), (Q.reactiveElementVersions ??= []).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dt = globalThis, Z = dt.trustedTypes, Pt = Z ? Z.createPolicy("lit-html", { createHTML: (n) => n }) : void 0, Yt = "$lit$", k = `lit$${Math.random().toFixed(9).slice(2)}$`, Ft = "?" + k, ye = `<${Ft}>`, T = document, z = () => T.createComment(""), B = (n) => n === null || typeof n != "object" && typeof n != "function", ut = Array.isArray, me = (n) => ut(n) || typeof n?.[Symbol.iterator] == "function", st = `[ 	
\f\r]`, L = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Ot = /-->/g, Ct = />/g, w = RegExp(`>|${st}(?:([^\\s"'>=/]+)(${st}*=${st}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Nt = /'/g, jt = /"/g, qt = /^(?:script|style|textarea|title)$/i, ge = (n) => (t, ...e) => ({ _$litType$: n, strings: t, values: e }), R = ge(1), C = Symbol.for("lit-noChange"), y = Symbol.for("lit-nothing"), Mt = /* @__PURE__ */ new WeakMap(), S = T.createTreeWalker(T, 129);
function Vt(n, t) {
  if (!ut(n) || !n.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Pt !== void 0 ? Pt.createHTML(t) : t;
}
const $e = (n, t) => {
  const e = n.length - 1, r = [];
  let o, s = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", i = L;
  for (let c = 0; c < e; c++) {
    const l = n[c];
    let p, u, b = -1, m = 0;
    for (; m < l.length && (i.lastIndex = m, u = i.exec(l), u !== null); ) m = i.lastIndex, i === L ? u[1] === "!--" ? i = Ot : u[1] !== void 0 ? i = Ct : u[2] !== void 0 ? (qt.test(u[2]) && (o = RegExp("</" + u[2], "g")), i = w) : u[3] !== void 0 && (i = w) : i === w ? u[0] === ">" ? (i = o ?? L, b = -1) : u[1] === void 0 ? b = -2 : (b = i.lastIndex - u[2].length, p = u[1], i = u[3] === void 0 ? w : u[3] === '"' ? jt : Nt) : i === jt || i === Nt ? i = w : i === Ot || i === Ct ? i = L : (i = w, o = void 0);
    const f = i === w && n[c + 1].startsWith("/>") ? " " : "";
    s += i === L ? l + ye : b >= 0 ? (r.push(p), l.slice(0, b) + Yt + l.slice(b) + k + f) : l + k + (b === -2 ? c : f);
  }
  return [Vt(n, s + (n[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), r];
};
class Y {
  constructor({ strings: t, _$litType$: e }, r) {
    let o;
    this.parts = [];
    let s = 0, i = 0;
    const c = t.length - 1, l = this.parts, [p, u] = $e(t, e);
    if (this.el = Y.createElement(p, r), S.currentNode = this.el.content, e === 2 || e === 3) {
      const b = this.el.content.firstChild;
      b.replaceWith(...b.childNodes);
    }
    for (; (o = S.nextNode()) !== null && l.length < c; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const b of o.getAttributeNames()) if (b.endsWith(Yt)) {
          const m = u[i++], f = o.getAttribute(b).split(k), v = /([.?@])?(.*)/.exec(m);
          l.push({ type: 1, index: s, name: v[2], strings: f, ctor: v[1] === "." ? xe : v[1] === "?" ? Ae : v[1] === "@" ? Ee : K }), o.removeAttribute(b);
        } else b.startsWith(k) && (l.push({ type: 6, index: s }), o.removeAttribute(b));
        if (qt.test(o.tagName)) {
          const b = o.textContent.split(k), m = b.length - 1;
          if (m > 0) {
            o.textContent = Z ? Z.emptyScript : "";
            for (let f = 0; f < m; f++) o.append(b[f], z()), S.nextNode(), l.push({ type: 2, index: ++s });
            o.append(b[m], z());
          }
        }
      } else if (o.nodeType === 8) if (o.data === Ft) l.push({ type: 2, index: s });
      else {
        let b = -1;
        for (; (b = o.data.indexOf(k, b + 1)) !== -1; ) l.push({ type: 7, index: s }), b += k.length - 1;
      }
      s++;
    }
  }
  static createElement(t, e) {
    const r = T.createElement("template");
    return r.innerHTML = t, r;
  }
}
function N(n, t, e = n, r) {
  if (t === C) return t;
  let o = r !== void 0 ? e._$Co?.[r] : e._$Cl;
  const s = B(t) ? void 0 : t._$litDirective$;
  return o?.constructor !== s && (o?._$AO?.(!1), s === void 0 ? o = void 0 : (o = new s(n), o._$AT(n, e, r)), r !== void 0 ? (e._$Co ??= [])[r] = o : e._$Cl = o), o !== void 0 && (t = N(n, o._$AS(n, t.values), o, r)), t;
}
class _e {
  constructor(t, e) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: e }, parts: r } = this._$AD, o = (t?.creationScope ?? T).importNode(e, !0);
    S.currentNode = o;
    let s = S.nextNode(), i = 0, c = 0, l = r[0];
    for (; l !== void 0; ) {
      if (i === l.index) {
        let p;
        l.type === 2 ? p = new V(s, s.nextSibling, this, t) : l.type === 1 ? p = new l.ctor(s, l.name, l.strings, this, t) : l.type === 6 && (p = new ke(s, this, t)), this._$AV.push(p), l = r[++c];
      }
      i !== l?.index && (s = S.nextNode(), i++);
    }
    return S.currentNode = T, o;
  }
  p(t) {
    let e = 0;
    for (const r of this._$AV) r !== void 0 && (r.strings !== void 0 ? (r._$AI(t, r, e), e += r.strings.length - 2) : r._$AI(t[e])), e++;
  }
}
class V {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(t, e, r, o) {
    this.type = 2, this._$AH = y, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = r, this.options = o, this._$Cv = o?.isConnected ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return e !== void 0 && t?.nodeType === 11 && (t = e.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    t = N(this, t, e), B(t) ? t === y || t == null || t === "" ? (this._$AH !== y && this._$AR(), this._$AH = y) : t !== this._$AH && t !== C && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : me(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== y && B(this._$AH) ? this._$AA.nextSibling.data = t : this.T(T.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    const { values: e, _$litType$: r } = t, o = typeof r == "number" ? this._$AC(t) : (r.el === void 0 && (r.el = Y.createElement(Vt(r.h, r.h[0]), this.options)), r);
    if (this._$AH?._$AD === o) this._$AH.p(e);
    else {
      const s = new _e(o, this), i = s.u(this.options);
      s.p(e), this.T(i), this._$AH = s;
    }
  }
  _$AC(t) {
    let e = Mt.get(t.strings);
    return e === void 0 && Mt.set(t.strings, e = new Y(t)), e;
  }
  k(t) {
    ut(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let r, o = 0;
    for (const s of t) o === e.length ? e.push(r = new V(this.O(z()), this.O(z()), this, this.options)) : r = e[o], r._$AI(s), o++;
    o < e.length && (this._$AR(r && r._$AB.nextSibling, o), e.length = o);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    for (this._$AP?.(!1, !0, e); t !== this._$AB; ) {
      const r = t.nextSibling;
      t.remove(), t = r;
    }
  }
  setConnected(t) {
    this._$AM === void 0 && (this._$Cv = t, this._$AP?.(t));
  }
}
class K {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, r, o, s) {
    this.type = 1, this._$AH = y, this._$AN = void 0, this.element = t, this.name = e, this._$AM = o, this.options = s, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = y;
  }
  _$AI(t, e = this, r, o) {
    const s = this.strings;
    let i = !1;
    if (s === void 0) t = N(this, t, e, 0), i = !B(t) || t !== this._$AH && t !== C, i && (this._$AH = t);
    else {
      const c = t;
      let l, p;
      for (t = s[0], l = 0; l < s.length - 1; l++) p = N(this, c[r + l], e, l), p === C && (p = this._$AH[l]), i ||= !B(p) || p !== this._$AH[l], p === y ? t = y : t !== y && (t += (p ?? "") + s[l + 1]), this._$AH[l] = p;
    }
    i && !o && this.j(t);
  }
  j(t) {
    t === y ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class xe extends K {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === y ? void 0 : t;
  }
}
class Ae extends K {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== y);
  }
}
class Ee extends K {
  constructor(t, e, r, o, s) {
    super(t, e, r, o, s), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = N(this, t, e, 0) ?? y) === C) return;
    const r = this._$AH, o = t === y && r !== y || t.capture !== r.capture || t.once !== r.once || t.passive !== r.passive, s = t !== y && (r === y || o);
    o && this.element.removeEventListener(this.name, this, r), s && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class ke {
  constructor(t, e, r) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = r;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    N(this, t);
  }
}
const we = dt.litHtmlPolyfillSupport;
we?.(Y, V), (dt.litHtmlVersions ??= []).push("3.3.1");
const Se = (n, t, e) => {
  const r = e?.renderBefore ?? t;
  let o = r._$litPart$;
  if (o === void 0) {
    const s = e?.renderBefore ?? null;
    r._$litPart$ = o = new V(t.insertBefore(z(), s), s, void 0, e ?? {});
  }
  return o._$AI(n), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const bt = globalThis;
class I extends O {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    const t = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= t.firstChild, t;
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = Se(e, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(!0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(!1);
  }
  render() {
    return C;
  }
}
I._$litElement$ = !0, I.finalized = !0, bt.litElementHydrateSupport?.({ LitElement: I });
const Re = bt.litElementPolyfillSupport;
Re?.({ LitElement: I });
(bt.litElementVersions ??= []).push("4.2.1");
let pt = class extends I {
  /**
   * Checks if the current element is in light mode.
   * @returns True if the mode is light, false if dark.
   */
  isLightMode() {
    const t = this.closest("[data-mode]");
    return t ? t.getAttribute("data-mode") !== "dark" : !0;
  }
  /**
   * Checks if the current element is in dark mode.
   * @returns True if the mode is dark, false if light.
   */
  isDarkMode() {
    return !this.isLightMode();
  }
  /**
   * Checks if the current element is in a right-to-left (RTL) layout.
   * @returns True if the element is in RTL layout, false otherwise.
   */
  isRTL() {
    return getComputedStyle(this).direction === "rtl";
  }
  /**
   * Emits a custom event from the component.
   * @param eventName - The name of the event to emit.
   * @param detail - Optional detail object to include with the event.
   */
  _emitEvent(t, e) {
    const r = new CustomEvent(t, {
      detail: e,
      bubbles: !0,
      composed: !0
    });
    this.dispatchEvent(r);
  }
}, Te = class {
  /**
   * Generates a unique ID string.
   * With a length of 12, e.g. "5f4dcc3b5aa7".
   *
   * @param length The length of the ID string to generate.
   * @returns A unique ID string.
   */
  static generateId(t = 12) {
    return Math.floor(Math.random() * Date.now()).toString(t);
  }
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ft = (n) => (t, e) => {
  e !== void 0 ? e.addInitializer((() => {
    customElements.define(n, t);
  })) : customElements.define(n, t);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Pe = { attribute: !0, type: String, converter: X, reflect: !1, hasChanged: ct }, Oe = (n = Pe, t, e) => {
  const { kind: r, metadata: o } = e;
  let s = globalThis.litPropertyMetadata.get(o);
  if (s === void 0 && globalThis.litPropertyMetadata.set(o, s = /* @__PURE__ */ new Map()), r === "setter" && ((n = Object.create(n)).wrapped = !0), s.set(e.name, n), r === "accessor") {
    const { name: i } = e;
    return { set(c) {
      const l = t.get.call(this);
      t.set.call(this, c), this.requestUpdate(i, l, n);
    }, init(c) {
      return c !== void 0 && this.C(i, void 0, n, c), c;
    } };
  }
  if (r === "setter") {
    const { name: i } = e;
    return function(c) {
      const l = this[i];
      t.call(this, c), this.requestUpdate(i, l, n);
    };
  }
  throw Error("Unsupported decorator location: " + r);
};
function A(n) {
  return (t, e) => typeof e == "object" ? Oe(n, t, e) : ((r, o, s) => {
    const i = o.hasOwnProperty(s);
    return o.constructor.createProperty(s, r), i ? Object.getOwnPropertyDescriptor(o, s) : void 0;
  })(n, t, e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function Ce(n) {
  return A({ ...n, state: !0, attribute: !1 });
}
const Ne = "*,*:before,*:after{box-sizing:border-box;margin:0;padding:0}img,picture,video,canvas,svg{display:block;max-width:100%}ol,ul{list-style:none}a{text-decoration:none;color:inherit}h1,h2,h3,h4,h5,h6{font-weight:400}:host{display:inline-block;--color-pl-button-primary-background: #ffd000;--color-pl-button-primary-background-hover: #eb6f24;--color-pl-button-primary-background-active: #000000;--color-pl-button-primary-background-disabled: #e5e8ed;--color-pl-button-primary-border: #ffd000;--color-pl-button-primary-border-hover: #eb6f24;--color-pl-button-primary-border-active: #000000;--color-pl-button-primary-border-disabled: #bdc4ca;--color-pl-button-primary-border-focus: #000000;--color-pl-button-primary-text: #000000;--color-pl-button-primary-text-hover: #000000;--color-pl-button-primary-text-active: #ffffff;--color-pl-button-primary-text-disabled: #51585d;--color-pl-button-primary-loading: #000000;--color-pl-button-secondary-background: transparent;--color-pl-button-secondary-background-hover: transparent;--color-pl-button-secondary-background-active: transparent;--color-pl-button-secondary-background-disabled: transparent;--color-pl-button-secondary-border: #000000;--color-pl-button-secondary-border-hover: #6b7278;--color-pl-button-secondary-border-active: #000000;--color-pl-button-secondary-border-disabled: #bdc4ca;--color-pl-button-secondary-border-focus: #000000;--color-pl-button-secondary-text: #000000;--color-pl-button-secondary-text-hover: #6b7278;--color-pl-button-secondary-text-active: #000000;--color-pl-button-secondary-text-disabled: #51585d;--color-pl-button-secondary-loading: #000000;--color-pl-button-error-background: #e52828;--color-pl-button-error-background-hover: #ad0b37;--color-pl-button-error-background-active: #000000;--color-pl-button-error-background-disabled: #e5e8ed;--color-pl-button-error-border: #e52828;--color-pl-button-error-border-hover: #ad0b37;--color-pl-button-error-border-active: #000000;--color-pl-button-error-border-disabled: #bdc4ca;--color-pl-button-error-border-focus: #000000;--color-pl-button-error-text: #ffffff;--color-pl-button-error-text-hover: #ffffff;--color-pl-button-error-text-active: #ffffff;--color-pl-button-error-text-disabled: #51585d;--color-pl-button-error-loading: #ffffff}:host-context([data-theme=corporate][data-mode=dark]){--color-pl-button-primary-background: #ffd000;--color-pl-button-primary-background-hover: #f89939;--color-pl-button-primary-background-active: #ffffff;--color-pl-button-primary-background-disabled: #353a40;--color-pl-button-primary-border: #ffd000;--color-pl-button-primary-border-hover: #f89939;--color-pl-button-primary-border-active: #ffffff;--color-pl-button-primary-border-disabled: #888e94;--color-pl-button-primary-border-focus: #ffffff;--color-pl-button-primary-text: #000000;--color-pl-button-primary-text-hover: #000000;--color-pl-button-primary-text-active: #000000;--color-pl-button-primary-text-disabled: #e5e8ed;--color-pl-button-primary-loading: #000000;--color-pl-button-secondary-background: transparent;--color-pl-button-secondary-background-hover: transparent;--color-pl-button-secondary-background-active: transparent;--color-pl-button-secondary-background-disabled: transparent;--color-pl-button-secondary-border: #ffffff;--color-pl-button-secondary-border-hover: #bdc4ca;--color-pl-button-secondary-border-active: #000000;--color-pl-button-secondary-border-disabled: #888e94;--color-pl-button-secondary-border-focus: #ffffff;--color-pl-button-secondary-text: #ffffff;--color-pl-button-secondary-text-hover: #bdc4ca;--color-pl-button-secondary-text-active: #ffffff;--color-pl-button-secondary-text-disabled: #e5e8ed;--color-pl-button-secondary-loading: #000000;--color-pl-button-error-background: #ff7070;--color-pl-button-error-background-hover: #ffa3a3;--color-pl-button-error-background-active: #ffffff;--color-pl-button-error-background-disabled: #353a40;--color-pl-button-error-border: #ff7070;--color-pl-button-error-border-hover: #ffa3a3;--color-pl-button-error-border-active: #ffffff;--color-pl-button-error-border-disabled: #888e94;--color-pl-button-error-border-focus: #ffffff;--color-pl-button-error-text: #000000;--color-pl-button-error-text-hover: #000000;--color-pl-button-error-text-active: #000000;--color-pl-button-error-text-disabled: #e5e8ed;--color-pl-button-error-loading: #ffffff}:host-context([data-theme=hau][data-mode=light]){--color-pl-button-primary-background: #2779c4;--color-pl-button-primary-background-hover: #003057;--color-pl-button-primary-background-active: #000000;--color-pl-button-primary-background-disabled: #e5e8ed;--color-pl-button-primary-border: #2779c4;--color-pl-button-primary-border-hover: #003057;--color-pl-button-primary-border-active: #000000;--color-pl-button-primary-border-disabled: #bdc4ca;--color-pl-button-primary-border-focus: #000000;--color-pl-button-primary-text: #ffffff;--color-pl-button-primary-text-hover: #ffffff;--color-pl-button-primary-text-active: #ffffff;--color-pl-button-primary-text-disabled: #51585d;--color-pl-button-primary-loading: #000000;--color-pl-button-secondary-background: transparent;--color-pl-button-secondary-background-hover: transparent;--color-pl-button-secondary-background-active: transparent;--color-pl-button-secondary-background-disabled: transparent;--color-pl-button-secondary-border: #003057;--color-pl-button-secondary-border-hover: #6b7278;--color-pl-button-secondary-border-active: #000000;--color-pl-button-secondary-border-disabled: #bdc4ca;--color-pl-button-secondary-border-focus: #000000;--color-pl-button-secondary-text: #003057;--color-pl-button-secondary-text-hover: #6b7278;--color-pl-button-secondary-text-active: #003057;--color-pl-button-secondary-text-disabled: #51585d;--color-pl-button-secondary-loading: #000000;--color-pl-button-error-background: #e52828;--color-pl-button-error-background-hover: #ad0b37;--color-pl-button-error-background-active: #000000;--color-pl-button-error-background-disabled: #e5e8ed;--color-pl-button-error-border: #e52828;--color-pl-button-error-border-hover: #ad0b37;--color-pl-button-error-border-active: #000000;--color-pl-button-error-border-disabled: #bdc4ca;--color-pl-button-error-border-focus: #000000;--color-pl-button-error-text: #ffffff;--color-pl-button-error-text-hover: #ffffff;--color-pl-button-error-text-active: #ffffff;--color-pl-button-error-text-disabled: #51585d;--color-pl-button-error-loading: #ffffff}:host-context([data-theme=hau][data-mode=dark]){--color-pl-button-primary-background: #2779c4;--color-pl-button-primary-background-hover: #164870;--color-pl-button-primary-background-active: #ffffff;--color-pl-button-primary-background-disabled: #353a40;--color-pl-button-primary-border: #2779c4;--color-pl-button-primary-border-hover: #164870;--color-pl-button-primary-border-active: #ffffff;--color-pl-button-primary-border-disabled: #888e94;--color-pl-button-primary-border-focus: #ffffff;--color-pl-button-primary-text: #ffffff;--color-pl-button-primary-text-hover: #ffffff;--color-pl-button-primary-text-active: #000000;--color-pl-button-primary-text-disabled: #e5e8ed;--color-pl-button-primary-loading: #000000;--color-pl-button-secondary-background: transparent;--color-pl-button-secondary-background-hover: transparent;--color-pl-button-secondary-background-active: transparent;--color-pl-button-secondary-background-disabled: transparent;--color-pl-button-secondary-border: #ffffff;--color-pl-button-secondary-border-hover: #bdc4ca;--color-pl-button-secondary-border-active: #000000;--color-pl-button-secondary-border-disabled: #888e94;--color-pl-button-secondary-border-focus: #ffffff;--color-pl-button-secondary-text: #ffffff;--color-pl-button-secondary-text-hover: #bdc4ca;--color-pl-button-secondary-text-active: #ffffff;--color-pl-button-secondary-text-disabled: #e5e8ed;--color-pl-button-secondary-loading: #000000;--color-pl-button-error-background: #ff7070;--color-pl-button-error-background-hover: #ffa3a3;--color-pl-button-error-background-active: #ffffff;--color-pl-button-error-background-disabled: #353a40;--color-pl-button-error-border: #ff7070;--color-pl-button-error-border-hover: #ffa3a3;--color-pl-button-error-border-active: #ffffff;--color-pl-button-error-border-disabled: #888e94;--color-pl-button-error-border-focus: #ffffff;--color-pl-button-error-text: #000000;--color-pl-button-error-text-hover: #000000;--color-pl-button-error-text-active: #000000;--color-pl-button-error-text-disabled: #e5e8ed;--color-pl-button-error-loading: #ffffff}button{--current-bg: var(--color-pl-button-primary-background);--current-border: var(--color-pl-button-primary-border);--current-text: var(--color-pl-button-primary-text);--current-bg-hover: var(--color-pl-button-primary-background-hover);--current-border-hover: var(--color-pl-button-primary-border-hover);--current-text-hover: var(--color-pl-button-primary-text-hover);--current-bg-active: var(--color-pl-button-primary-background-active);--current-border-active: var(--color-pl-button-primary-border-active);--current-text-active: var(--color-pl-button-primary-text-active);--current-border-focus: var(--color-pl-button-primary-border-focus);font-family:LiebherrText-Bold,-apple-system,BlinkMacSystemFont,Arial,Helvetica,sans-serif;font-size:14px;font-weight:700;line-height:20px;text-transform:uppercase;display:flex;justify-content:center;align-items:center;height:48px;padding-inline:36px;border:1px solid transparent;border-radius:0;color:#000;cursor:pointer;background-color:var(--current-bg);border:1px solid var(--current-border);color:var(--current-text)}button:dir(rtl){font-family:Arial,sans-serif;font-size:16px}button:hover{background-color:var(--current-bg-hover);border-color:var(--current-border-hover);color:var(--current-text-hover)}button:active{background-color:var(--current-bg-active);border-color:var(--current-border-active);color:var(--current-text-active)}button:focus-visible{outline:3px solid var(--current-border-focus);outline-offset:-3px}:host([variant=secondary]) button{--current-bg: var(--color-pl-button-secondary-background);--current-border: var(--color-pl-button-secondary-border);--current-text: var(--color-pl-button-secondary-text);--current-bg-hover: var(--color-pl-button-secondary-background-hover);--current-border-hover: var(--color-pl-button-secondary-border-hover);--current-text-hover: var(--color-pl-button-secondary-text-hover);--current-bg-active: var(--color-pl-button-secondary-background-active);--current-border-active: var(--color-pl-button-secondary-border-active);--current-text-active: var(--color-pl-button-secondary-text-active);--current-border-focus: var(--color-pl-button-secondary-border-focus)}:host([variant=secondary]) button:hover{background-color:var(--current-bg-hover);border-color:var(--current-border-hover);color:var(--current-text-hover)}:host([variant=secondary]) button:active{background-color:var(--current-bg-active);border-color:var(--current-border-active);color:var(--current-text-active)}:host([variant=secondary]) button:focus-visible{outline:3px solid var(--current-border-focus);outline-offset:-3px}:host([variant=error]) button{--current-bg: var(--color-pl-button-error-background);--current-border: var(--color-pl-button-error-border);--current-text: var(--color-pl-button-error-text);--current-bg-hover: var(--color-pl-button-error-background-hover);--current-border-hover: var(--color-pl-button-error-border-hover);--current-text-hover: var(--color-pl-button-error-text-hover);--current-bg-active: var(--color-pl-button-error-background-active);--current-border-active: var(--color-pl-button-error-border-active);--current-text-active: var(--color-pl-button-error-text-active);--current-border-focus: var(--color-pl-button-error-border-focus)}:host([variant=error]) button:hover{background-color:var(--current-bg-hover);border-color:var(--current-border-hover);color:var(--current-text-hover)}:host([variant=error]) button:active{background-color:var(--current-bg-active);border-color:var(--current-border-active);color:var(--current-text-active)}:host([variant=error]) button:focus-visible{outline:3px solid var(--current-border-focus);outline-offset:-3px}:host([disabled][variant=primary]) button{background-color:var(--color-pl-button-primary-background-disabled);border-color:var(--color-pl-button-primary-border-disabled);color:var(--color-pl-button-primary-text-disabled);cursor:not-allowed}:host([disabled][variant=secondary]) button{background-color:var(--color-pl-button-secondary-background-disabled);border-color:var(--color-pl-button-secondary-border-disabled);color:var(--color-pl-button-secondary-text-disabled);cursor:not-allowed}:host([disabled][variant=error]) button{background-color:var(--color-pl-button-error-background-disabled);border-color:var(--color-pl-button-error-border-disabled);color:var(--color-pl-button-error-text-disabled);cursor:not-allowed}", je = '@font-face{font-family:LiebherrText-Regular;font-weight:400;font-display:swap;src:url(https://assets-cdn.liebherr.com/assets/api/cbef770b-7eef-4164-8dc7-a304a545b01f/original/LiebherrText-Regular_Web.woff2) format("woff2")}@font-face{font-family:LiebherrText-Medium;font-weight:400;font-display:swap;src:url(https://assets-cdn.liebherr.com/assets/api/d726fec5-dd05-4133-a47c-77d7900263f6/original/LiebherrText-Medium_Web.woff2) format("woff2")}@font-face{font-family:LiebherrText-Bold;font-weight:400;font-display:swap;src:url(https://assets-cdn.liebherr.com/assets/api/53da5b14-5565-4436-8d08-3bf3cf0262ae/original/LiebherrText-Bold_Web.woff2) format("woff2")}@font-face{font-family:LiebherrHead-Regular;font-weight:400;font-display:swap;src:url(https://assets-cdn.liebherr.com/assets/api/bfb44747-d200-4af8-a756-fab6de288b32/original/LiebherrHead-Regular_Web.woff2) format("woff2")}@font-face{font-family:LiebherrHead-Black;font-weight:400;font-display:swap;src:url(https://assets-cdn.liebherr.com/assets/api/3c3d21f7-2747-4a07-bb1b-f9f4598c21df/original/LiebherrHead-Black_Web.woff2) format("woff2")}';
var Me = Object.defineProperty, Le = Object.getOwnPropertyDescriptor, j = (n, t, e, r) => {
  for (var o = r > 1 ? void 0 : r ? Le(t, e) : t, s = n.length - 1, i; s >= 0; s--)
    (i = n[s]) && (o = (r ? i(t, e, o) : i(o)) || o);
  return r && o && Me(t, e, o), o;
};
let x = class extends pt {
  constructor() {
    super(...arguments), this._state = {
      isLoading: !1,
      disabled: !1,
      label: "",
      type: "button",
      variant: "primary"
    };
  }
  /*
   * Called between changes with attributes and render()
   */
  willUpdate(t) {
    const e = {};
    t.has("disabled") && (e.disabled = this.disabled ?? this._state.disabled), t.has("label") && (e.label = this.label ?? this._state.label), t.has("type") && (e.type = this.type ?? this._state.type), t.has("variant") && (e.variant = this.variant ?? this._state.variant), Object.keys(e).length > 0 && (this._state = { ...this._state, ...e });
  }
  render() {
    return console.log(
      "Rendering PlButton with RTL/Light/Dark/Id:",
      this.isRTL(),
      this.isLightMode(),
      this.isDarkMode(),
      Te.generateId()
    ), R`
      <button
        data-testid="button"
        part="button"
        type=${this._state.type}
        ?disabled=${this._state.disabled || this._state.isLoading}
        @click=${this._handleClick}
      >
        ${this._state.label ? R`${this._state.label}` : R`<slot></slot>`}
      </button>
    `;
  }
  _handleClick(t) {
    if (this._state.disabled) {
      t.preventDefault(), t.stopPropagation();
      return;
    }
    this._emitEvent("pl-button-click");
  }
};
x.styles = lt`
    ${W(je)}
    ${W(Ne)}
  `;
j([
  Ce()
], x.prototype, "_state", 2);
j([
  A({ type: Boolean, reflect: !0 })
], x.prototype, "disabled", 2);
j([
  A({ type: String, reflect: !0 })
], x.prototype, "label", 2);
j([
  A({ type: String, reflect: !0 })
], x.prototype, "type", 2);
j([
  A({ type: String, reflect: !0 })
], x.prototype, "variant", 2);
x = j([
  ft("pl-button")
], x);
const Lt = {
  globe: "https://assets-cdn.liebherr.com/assets/api/6d184430-2e1f-4ba6-9d2f-8c2f973f01e6/original/test-globe-icon.svg",
  search: "https://assets-cdn.liebherr.com/assets/api/313d8c9e-622d-4ab8-984d-4d1bf88ec9ab/original/test-search-icon.svg",
  // fallback icon
  default: "https://assets-cdn.liebherr.com/assets/api/313d8c9e-622d-4ab8-984d-4d1bf88ec9ab/original/test-search-icon.svg"
}, Ue = `@use '@styles/styles/flex-mixins' as flex;\r
\r
:host {\r
  display: inline-block;\r
  color: black;\r
  width: 24px;\r
  height: 24px;\r
}\r
\r
img {\r
  width: 100%;\r
  height: 100%;\r
  object-fit: contain;\r
}\r
`;
var He = Object.defineProperty, De = Object.getOwnPropertyDescriptor, ht = (n, t, e, r) => {
  for (var o = r > 1 ? void 0 : r ? De(t, e) : t, s = n.length - 1, i; s >= 0; s--)
    (i = n[s]) && (o = (r ? i(t, e, o) : i(o)) || o);
  return r && o && He(t, e, o), o;
};
let F = class extends pt {
  constructor() {
    super(...arguments), this.alt = "", this.iconName = "globe";
  }
  render() {
    const n = Lt[this.iconName] || Lt.default;
    return R`<img src=${n} alt=${this.alt} />`;
  }
};
F.styles = lt`
    ${W(Ue)}
  `;
ht([
  A({ type: String, reflect: !0 })
], F.prototype, "alt", 2);
ht([
  A({ type: String, reflect: !0 })
], F.prototype, "iconName", 2);
F = ht([
  ft("pl-icon")
], F);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function* Ie(n, t) {
  if (n !== void 0) {
    let e = 0;
    for (const r of n) yield t(r, e++);
  }
}
const We = `:host {\r
  display: block;\r
}\r
`;
var ze = Object.defineProperty, Be = Object.getOwnPropertyDescriptor, vt = (n, t, e, r) => {
  for (var o = r > 1 ? void 0 : r ? Be(t, e) : t, s = n.length - 1, i; s >= 0; s--)
    (i = n[s]) && (o = (r ? i(t, e, o) : i(o)) || o);
  return r && o && ze(t, e, o), o;
};
let q = class extends pt {
  constructor() {
    super(...arguments), this.headlineLabel = "", this.data = [];
  }
  render() {
    return R`
      <div class="item-list">
        ${this.headlineLabel ? R`<h3 class="headline">${this.headlineLabel}</h3>` : ""}

        <ul>
          ${Ie(this.data, (n) => R`<li>${n.value}</li>`)}
        </ul>
      </div>
    `;
  }
};
q.styles = lt`
    ${W(We)}
  `;
vt([
  A({ type: String, attribute: "headline-label" })
], q.prototype, "headlineLabel", 2);
vt([
  A({ type: Array, attribute: !1 })
], q.prototype, "data", 2);
q = vt([
  ft("pl-itemlist")
], q);
const er = ie({
  react: zt,
  tagName: "pl-button",
  elementClass: x,
  events: {
    onClick: "pl-button-click"
  }
});
var J = { exports: {} }, U = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ut;
function Ye() {
  if (Ut) return U;
  Ut = 1;
  var n = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function e(r, o, s) {
    var i = null;
    if (s !== void 0 && (i = "" + s), o.key !== void 0 && (i = "" + o.key), "key" in o) {
      s = {};
      for (var c in o)
        c !== "key" && (s[c] = o[c]);
    } else s = o;
    return o = s.ref, {
      $$typeof: n,
      type: r,
      key: i,
      ref: o !== void 0 ? o : null,
      props: s
    };
  }
  return U.Fragment = t, U.jsx = e, U.jsxs = e, U;
}
var H = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ht;
function Fe() {
  return Ht || (Ht = 1, process.env.NODE_ENV !== "production" && (function() {
    function n(a) {
      if (a == null) return null;
      if (typeof a == "function")
        return a.$$typeof === oe ? null : a.displayName || a.name || null;
      if (typeof a == "string") return a;
      switch (a) {
        case M:
          return "Fragment";
        case Gt:
          return "Profiler";
        case Jt:
          return "StrictMode";
        case Kt:
          return "Suspense";
        case te:
          return "SuspenseList";
        case re:
          return "Activity";
      }
      if (typeof a == "object")
        switch (typeof a.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), a.$$typeof) {
          case v:
            return "Portal";
          case Zt:
            return (a.displayName || "Context") + ".Provider";
          case Xt:
            return (a._context.displayName || "Context") + ".Consumer";
          case Qt:
            var d = a.render;
            return a = a.displayName, a || (a = d.displayName || d.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
          case ee:
            return d = a.displayName || null, d !== null ? d : n(a.type) || "Memo";
          case yt:
            d = a._payload, a = a._init;
            try {
              return n(a(d));
            } catch {
            }
        }
      return null;
    }
    function t(a) {
      return "" + a;
    }
    function e(a) {
      try {
        t(a);
        var d = !1;
      } catch {
        d = !0;
      }
      if (d) {
        d = console;
        var h = d.error, g = typeof Symbol == "function" && Symbol.toStringTag && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return h.call(
          d,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          g
        ), t(a);
      }
    }
    function r(a) {
      if (a === M) return "<>";
      if (typeof a == "object" && a !== null && a.$$typeof === yt)
        return "<...>";
      try {
        var d = n(a);
        return d ? "<" + d + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var a = tt.A;
      return a === null ? null : a.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function i(a) {
      if (mt.call(a, "key")) {
        var d = Object.getOwnPropertyDescriptor(a, "key").get;
        if (d && d.isReactWarning) return !1;
      }
      return a.key !== void 0;
    }
    function c(a, d) {
      function h() {
        gt || (gt = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          d
        ));
      }
      h.isReactWarning = !0, Object.defineProperty(a, "key", {
        get: h,
        configurable: !0
      });
    }
    function l() {
      var a = n(this.type);
      return $t[a] || ($t[a] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), a = this.props.ref, a !== void 0 ? a : null;
    }
    function p(a, d, h, g, E, _, rt, ot) {
      return h = _.ref, a = {
        $$typeof: f,
        type: a,
        key: d,
        props: _,
        _owner: E
      }, (h !== void 0 ? h : null) !== null ? Object.defineProperty(a, "ref", {
        enumerable: !1,
        get: l
      }) : Object.defineProperty(a, "ref", { enumerable: !1, value: null }), a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(a, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(a, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: rt
      }), Object.defineProperty(a, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ot
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    }
    function u(a, d, h, g, E, _, rt, ot) {
      var $ = d.children;
      if ($ !== void 0)
        if (g)
          if (ne($)) {
            for (g = 0; g < $.length; g++)
              b($[g]);
            Object.freeze && Object.freeze($);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else b($);
      if (mt.call(d, "key")) {
        $ = n(a);
        var P = Object.keys(d).filter(function(se) {
          return se !== "key";
        });
        g = 0 < P.length ? "{key: someKey, " + P.join(": ..., ") + ": ...}" : "{key: someKey}", At[$ + g] || (P = 0 < P.length ? "{" + P.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          g,
          $,
          P,
          $
        ), At[$ + g] = !0);
      }
      if ($ = null, h !== void 0 && (e(h), $ = "" + h), i(d) && (e(d.key), $ = "" + d.key), "key" in d) {
        h = {};
        for (var nt in d)
          nt !== "key" && (h[nt] = d[nt]);
      } else h = d;
      return $ && c(
        h,
        typeof a == "function" ? a.displayName || a.name || "Unknown" : a
      ), p(
        a,
        $,
        _,
        E,
        o(),
        h,
        rt,
        ot
      );
    }
    function b(a) {
      typeof a == "object" && a !== null && a.$$typeof === f && a._store && (a._store.validated = 1);
    }
    var m = zt, f = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), M = Symbol.for("react.fragment"), Jt = Symbol.for("react.strict_mode"), Gt = Symbol.for("react.profiler"), Xt = Symbol.for("react.consumer"), Zt = Symbol.for("react.context"), Qt = Symbol.for("react.forward_ref"), Kt = Symbol.for("react.suspense"), te = Symbol.for("react.suspense_list"), ee = Symbol.for("react.memo"), yt = Symbol.for("react.lazy"), re = Symbol.for("react.activity"), oe = Symbol.for("react.client.reference"), tt = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, mt = Object.prototype.hasOwnProperty, ne = Array.isArray, et = console.createTask ? console.createTask : function() {
      return null;
    };
    m = {
      react_stack_bottom_frame: function(a) {
        return a();
      }
    };
    var gt, $t = {}, _t = m.react_stack_bottom_frame.bind(
      m,
      s
    )(), xt = et(r(s)), At = {};
    H.Fragment = M, H.jsx = function(a, d, h, g, E) {
      var _ = 1e4 > tt.recentlyCreatedOwnerStacks++;
      return u(
        a,
        d,
        h,
        !1,
        g,
        E,
        _ ? Error("react-stack-top-frame") : _t,
        _ ? et(r(a)) : xt
      );
    }, H.jsxs = function(a, d, h, g, E) {
      var _ = 1e4 > tt.recentlyCreatedOwnerStacks++;
      return u(
        a,
        d,
        h,
        !0,
        g,
        E,
        _ ? Error("react-stack-top-frame") : _t,
        _ ? et(r(a)) : xt
      );
    };
  })()), H;
}
var Dt;
function qe() {
  return Dt || (Dt = 1, process.env.NODE_ENV === "production" ? J.exports = Ye() : J.exports = Fe()), J.exports;
}
var It = qe();
const Wt = {
  globe: "https://assets-cdn.liebherr.com/assets/api/6d184430-2e1f-4ba6-9d2f-8c2f973f01e6/original/test-globe-icon.svg",
  search: "https://assets-cdn.liebherr.com/assets/api/313d8c9e-622d-4ab8-984d-4d1bf88ec9ab/original/test-search-icon.svg",
  // fallback icon
  default: "https://assets-cdn.liebherr.com/assets/api/313d8c9e-622d-4ab8-984d-4d1bf88ec9ab/original/test-search-icon.svg"
}, Ve = "_iconWrapper_1w38i_1", Je = {
  iconWrapper: Ve
}, rr = ({
  iconName: n = "globe",
  alt: t = "",
  className: e = "",
  ...r
}) => {
  const o = Wt[n] || Wt.default, s = `${Je.iconWrapper} ${e}`.trim();
  return /* @__PURE__ */ It.jsx("span", { className: s, ...r, children: /* @__PURE__ */ It.jsx("img", { src: o, alt: t }) });
};
export {
  er as PlButton,
  rr as PlIcon
};
