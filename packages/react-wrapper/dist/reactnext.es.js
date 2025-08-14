import mt from "react";
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const $t = /* @__PURE__ */ new Set(["children", "localName", "ref", "style", "className"]), tt = /* @__PURE__ */ new WeakMap(), et = (n, t, e, r, o) => {
  const s = o?.[t];
  s === void 0 ? (n[t] = e, e == null && t in HTMLElement.prototype && n.removeAttribute(t)) : e !== r && ((i, l, a) => {
    let c = tt.get(i);
    c === void 0 && tt.set(i, c = /* @__PURE__ */ new Map());
    let d = c.get(l);
    a !== void 0 ? d === void 0 ? (c.set(l, d = { handleEvent: a }), i.addEventListener(l, d)) : d.handleEvent = a : d !== void 0 && (c.delete(l), i.removeEventListener(l, d));
  })(n, s, e);
}, _t = ({ react: n, tagName: t, elementClass: e, events: r, displayName: o }) => {
  const s = new Set(Object.keys(r ?? {})), i = n.forwardRef(((l, a) => {
    const c = n.useRef(/* @__PURE__ */ new Map()), d = n.useRef(null), u = {}, f = {};
    for (const [p, h] of Object.entries(l)) $t.has(p) ? u[p === "className" ? "class" : p] = h : s.has(p) || p in e.prototype ? f[p] = h : u[p] = h;
    return n.useLayoutEffect((() => {
      if (d.current === null) return;
      const p = /* @__PURE__ */ new Map();
      for (const h in f) et(d.current, h, l[h], c.current.get(h), r), c.current.delete(h), p.set(h, l[h]);
      for (const [h, gt] of c.current) et(d.current, h, void 0, gt, r);
      c.current = p;
    })), n.useLayoutEffect((() => {
      d.current?.removeAttribute("defer-hydration");
    }), []), u.suppressHydrationWarning = !0, n.createElement(t, { ...u, ref: n.useCallback(((p) => {
      d.current = p, typeof a == "function" ? a(p) : a !== null && (a.current = p);
    }), [a]) });
  }));
  return i.displayName = o ?? e.name, i;
};
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const R = globalThis, W = R.ShadowRoot && (R.ShadyCSS === void 0 || R.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, q = Symbol(), rt = /* @__PURE__ */ new WeakMap();
let bt = class {
  constructor(t, e, r) {
    if (this._$cssResult$ = !0, r !== q) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (W && t === void 0) {
      const r = e !== void 0 && e.length === 1;
      r && (t = rt.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), r && rt.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const O = (n) => new bt(typeof n == "string" ? n : n + "", void 0, q), V = (n, ...t) => {
  const e = n.length === 1 ? n[0] : t.reduce(((r, o, s) => r + ((i) => {
    if (i._$cssResult$ === !0) return i.cssText;
    if (typeof i == "number") return i;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + i + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + n[s + 1]), n[0]);
  return new bt(e, n, q);
}, xt = (n, t) => {
  if (W) n.adoptedStyleSheets = t.map(((e) => e instanceof CSSStyleSheet ? e : e.styleSheet));
  else for (const e of t) {
    const r = document.createElement("style"), o = R.litNonce;
    o !== void 0 && r.setAttribute("nonce", o), r.textContent = e.cssText, n.appendChild(r);
  }
}, ot = W ? (n) => n : (n) => n instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const r of t.cssRules) e += r.cssText;
  return O(e);
})(n) : n;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: At, defineProperty: kt, getOwnPropertyDescriptor: wt, getOwnPropertyNames: Et, getOwnPropertySymbols: St, getPrototypeOf: Ct } = Object, B = globalThis, nt = B.trustedTypes, Pt = nt ? nt.emptyScript : "", Ot = B.reactiveElementPolyfillSupport, C = (n, t) => n, j = { toAttribute(n, t) {
  switch (t) {
    case Boolean:
      n = n ? Pt : null;
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
} }, F = (n, t) => !At(n, t), st = { attribute: !0, type: String, converter: j, reflect: !1, useDefault: !1, hasChanged: F };
Symbol.metadata ??= Symbol("metadata"), B.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
let A = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ??= []).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = st) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const r = Symbol(), o = this.getPropertyDescriptor(t, r, e);
      o !== void 0 && kt(this.prototype, t, o);
    }
  }
  static getPropertyDescriptor(t, e, r) {
    const { get: o, set: s } = wt(this.prototype, t) ?? { get() {
      return this[e];
    }, set(i) {
      this[e] = i;
    } };
    return { get: o, set(i) {
      const l = o?.call(this);
      s?.call(this, i), this.requestUpdate(t, l, r);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? st;
  }
  static _$Ei() {
    if (this.hasOwnProperty(C("elementProperties"))) return;
    const t = Ct(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(C("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(C("properties"))) {
      const e = this.properties, r = [...Et(e), ...St(e)];
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
      for (const o of r) e.unshift(ot(o));
    } else t !== void 0 && e.push(ot(t));
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
    return xt(t, this.constructor.elementStyles), t;
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
      const s = (r.converter?.toAttribute !== void 0 ? r.converter : j).toAttribute(e, r.type);
      this._$Em = t, s == null ? this.removeAttribute(o) : this.setAttribute(o, s), this._$Em = null;
    }
  }
  _$AK(t, e) {
    const r = this.constructor, o = r._$Eh.get(t);
    if (o !== void 0 && this._$Em !== o) {
      const s = r.getPropertyOptions(o), i = typeof s.converter == "function" ? { fromAttribute: s.converter } : s.converter?.fromAttribute !== void 0 ? s.converter : j;
      this._$Em = o;
      const l = i.fromAttribute(e, s.type);
      this[o] = l ?? this._$Ej?.get(o) ?? l, this._$Em = null;
    }
  }
  requestUpdate(t, e, r) {
    if (t !== void 0) {
      const o = this.constructor, s = this[t];
      if (r ??= o.getPropertyOptions(t), !((r.hasChanged ?? F)(s, e) || r.useDefault && r.reflect && s === this._$Ej?.get(t) && !this.hasAttribute(o._$Eu(t, r)))) return;
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
        const { wrapped: i } = s, l = this[o];
        i !== !0 || this._$AL.has(o) || l === void 0 || this.C(o, void 0, s, l);
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
A.elementStyles = [], A.shadowRootOptions = { mode: "open" }, A[C("elementProperties")] = /* @__PURE__ */ new Map(), A[C("finalized")] = /* @__PURE__ */ new Map(), Ot?.({ ReactiveElement: A }), (B.reactiveElementVersions ??= []).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const J = globalThis, D = J.trustedTypes, it = D ? D.createPolicy("lit-html", { createHTML: (n) => n }) : void 0, ht = "$lit$", g = `lit$${Math.random().toFixed(9).slice(2)}$`, ft = "?" + g, Mt = `<${ft}>`, x = document, M = () => x.createComment(""), T = (n) => n === null || typeof n != "object" && typeof n != "function", K = Array.isArray, Tt = (n) => K(n) || typeof n?.[Symbol.iterator] == "function", I = `[ 	
\f\r]`, S = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, at = /-->/g, lt = />/g, m = RegExp(`>|${I}(?:([^\\s"'>=/]+)(${I}*=${I}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), ct = /'/g, dt = /"/g, vt = /^(?:script|style|textarea|title)$/i, Ut = (n) => (t, ...e) => ({ _$litType$: n, strings: t, values: e }), _ = Ut(1), k = Symbol.for("lit-noChange"), b = Symbol.for("lit-nothing"), ut = /* @__PURE__ */ new WeakMap(), $ = x.createTreeWalker(x, 129);
function yt(n, t) {
  if (!K(n) || !n.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return it !== void 0 ? it.createHTML(t) : t;
}
const Lt = (n, t) => {
  const e = n.length - 1, r = [];
  let o, s = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", i = S;
  for (let l = 0; l < e; l++) {
    const a = n[l];
    let c, d, u = -1, f = 0;
    for (; f < a.length && (i.lastIndex = f, d = i.exec(a), d !== null); ) f = i.lastIndex, i === S ? d[1] === "!--" ? i = at : d[1] !== void 0 ? i = lt : d[2] !== void 0 ? (vt.test(d[2]) && (o = RegExp("</" + d[2], "g")), i = m) : d[3] !== void 0 && (i = m) : i === m ? d[0] === ">" ? (i = o ?? S, u = -1) : d[1] === void 0 ? u = -2 : (u = i.lastIndex - d[2].length, c = d[1], i = d[3] === void 0 ? m : d[3] === '"' ? dt : ct) : i === dt || i === ct ? i = m : i === at || i === lt ? i = S : (i = m, o = void 0);
    const p = i === m && n[l + 1].startsWith("/>") ? " " : "";
    s += i === S ? a + Mt : u >= 0 ? (r.push(c), a.slice(0, u) + ht + a.slice(u) + g + p) : a + g + (u === -2 ? l : p);
  }
  return [yt(n, s + (n[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), r];
};
class U {
  constructor({ strings: t, _$litType$: e }, r) {
    let o;
    this.parts = [];
    let s = 0, i = 0;
    const l = t.length - 1, a = this.parts, [c, d] = Lt(t, e);
    if (this.el = U.createElement(c, r), $.currentNode = this.el.content, e === 2 || e === 3) {
      const u = this.el.content.firstChild;
      u.replaceWith(...u.childNodes);
    }
    for (; (o = $.nextNode()) !== null && a.length < l; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const u of o.getAttributeNames()) if (u.endsWith(ht)) {
          const f = d[i++], p = o.getAttribute(u).split(g), h = /([.?@])?(.*)/.exec(f);
          a.push({ type: 1, index: s, name: h[2], strings: p, ctor: h[1] === "." ? Nt : h[1] === "?" ? Rt : h[1] === "@" ? jt : z }), o.removeAttribute(u);
        } else u.startsWith(g) && (a.push({ type: 6, index: s }), o.removeAttribute(u));
        if (vt.test(o.tagName)) {
          const u = o.textContent.split(g), f = u.length - 1;
          if (f > 0) {
            o.textContent = D ? D.emptyScript : "";
            for (let p = 0; p < f; p++) o.append(u[p], M()), $.nextNode(), a.push({ type: 2, index: ++s });
            o.append(u[f], M());
          }
        }
      } else if (o.nodeType === 8) if (o.data === ft) a.push({ type: 2, index: s });
      else {
        let u = -1;
        for (; (u = o.data.indexOf(g, u + 1)) !== -1; ) a.push({ type: 7, index: s }), u += g.length - 1;
      }
      s++;
    }
  }
  static createElement(t, e) {
    const r = x.createElement("template");
    return r.innerHTML = t, r;
  }
}
function w(n, t, e = n, r) {
  if (t === k) return t;
  let o = r !== void 0 ? e._$Co?.[r] : e._$Cl;
  const s = T(t) ? void 0 : t._$litDirective$;
  return o?.constructor !== s && (o?._$AO?.(!1), s === void 0 ? o = void 0 : (o = new s(n), o._$AT(n, e, r)), r !== void 0 ? (e._$Co ??= [])[r] = o : e._$Cl = o), o !== void 0 && (t = w(n, o._$AS(n, t.values), o, r)), t;
}
class Ht {
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
    const { el: { content: e }, parts: r } = this._$AD, o = (t?.creationScope ?? x).importNode(e, !0);
    $.currentNode = o;
    let s = $.nextNode(), i = 0, l = 0, a = r[0];
    for (; a !== void 0; ) {
      if (i === a.index) {
        let c;
        a.type === 2 ? c = new N(s, s.nextSibling, this, t) : a.type === 1 ? c = new a.ctor(s, a.name, a.strings, this, t) : a.type === 6 && (c = new Dt(s, this, t)), this._$AV.push(c), a = r[++l];
      }
      i !== a?.index && (s = $.nextNode(), i++);
    }
    return $.currentNode = x, o;
  }
  p(t) {
    let e = 0;
    for (const r of this._$AV) r !== void 0 && (r.strings !== void 0 ? (r._$AI(t, r, e), e += r.strings.length - 2) : r._$AI(t[e])), e++;
  }
}
class N {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(t, e, r, o) {
    this.type = 2, this._$AH = b, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = r, this.options = o, this._$Cv = o?.isConnected ?? !0;
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
    t = w(this, t, e), T(t) ? t === b || t == null || t === "" ? (this._$AH !== b && this._$AR(), this._$AH = b) : t !== this._$AH && t !== k && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : Tt(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== b && T(this._$AH) ? this._$AA.nextSibling.data = t : this.T(x.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    const { values: e, _$litType$: r } = t, o = typeof r == "number" ? this._$AC(t) : (r.el === void 0 && (r.el = U.createElement(yt(r.h, r.h[0]), this.options)), r);
    if (this._$AH?._$AD === o) this._$AH.p(e);
    else {
      const s = new Ht(o, this), i = s.u(this.options);
      s.p(e), this.T(i), this._$AH = s;
    }
  }
  _$AC(t) {
    let e = ut.get(t.strings);
    return e === void 0 && ut.set(t.strings, e = new U(t)), e;
  }
  k(t) {
    K(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let r, o = 0;
    for (const s of t) o === e.length ? e.push(r = new N(this.O(M()), this.O(M()), this, this.options)) : r = e[o], r._$AI(s), o++;
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
class z {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, r, o, s) {
    this.type = 1, this._$AH = b, this._$AN = void 0, this.element = t, this.name = e, this._$AM = o, this.options = s, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = b;
  }
  _$AI(t, e = this, r, o) {
    const s = this.strings;
    let i = !1;
    if (s === void 0) t = w(this, t, e, 0), i = !T(t) || t !== this._$AH && t !== k, i && (this._$AH = t);
    else {
      const l = t;
      let a, c;
      for (t = s[0], a = 0; a < s.length - 1; a++) c = w(this, l[r + a], e, a), c === k && (c = this._$AH[a]), i ||= !T(c) || c !== this._$AH[a], c === b ? t = b : t !== b && (t += (c ?? "") + s[a + 1]), this._$AH[a] = c;
    }
    i && !o && this.j(t);
  }
  j(t) {
    t === b ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class Nt extends z {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === b ? void 0 : t;
  }
}
class Rt extends z {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== b);
  }
}
class jt extends z {
  constructor(t, e, r, o, s) {
    super(t, e, r, o, s), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = w(this, t, e, 0) ?? b) === k) return;
    const r = this._$AH, o = t === b && r !== b || t.capture !== r.capture || t.once !== r.once || t.passive !== r.passive, s = t !== b && (r === b || o);
    o && this.element.removeEventListener(this.name, this, r), s && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class Dt {
  constructor(t, e, r) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = r;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    w(this, t);
  }
}
const Bt = J.litHtmlPolyfillSupport;
Bt?.(U, N), (J.litHtmlVersions ??= []).push("3.3.1");
const zt = (n, t, e) => {
  const r = e?.renderBefore ?? t;
  let o = r._$litPart$;
  if (o === void 0) {
    const s = e?.renderBefore ?? null;
    r._$litPart$ = o = new N(t.insertBefore(M(), s), s, void 0, e ?? {});
  }
  return o._$AI(n), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Z = globalThis;
class P extends A {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    const t = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= t.firstChild, t;
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = zt(e, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(!0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(!1);
  }
  render() {
    return k;
  }
}
P._$litElement$ = !0, P.finalized = !0, Z.litElementHydrateSupport?.({ LitElement: P });
const It = Z.litElementPolyfillSupport;
It?.({ LitElement: P });
(Z.litElementVersions ??= []).push("4.2.1");
let G = class extends P {
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
}, Wt = class {
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
const Q = (n) => (t, e) => {
  e !== void 0 ? e.addInitializer((() => {
    customElements.define(n, t);
  })) : customElements.define(n, t);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const qt = { attribute: !0, type: String, converter: j, reflect: !1, hasChanged: F }, Vt = (n = qt, t, e) => {
  const { kind: r, metadata: o } = e;
  let s = globalThis.litPropertyMetadata.get(o);
  if (s === void 0 && globalThis.litPropertyMetadata.set(o, s = /* @__PURE__ */ new Map()), r === "setter" && ((n = Object.create(n)).wrapped = !0), s.set(e.name, n), r === "accessor") {
    const { name: i } = e;
    return { set(l) {
      const a = t.get.call(this);
      t.set.call(this, l), this.requestUpdate(i, a, n);
    }, init(l) {
      return l !== void 0 && this.C(i, void 0, n, l), l;
    } };
  }
  if (r === "setter") {
    const { name: i } = e;
    return function(l) {
      const a = this[i];
      t.call(this, l), this.requestUpdate(i, a, n);
    };
  }
  throw Error("Unsupported decorator location: " + r);
};
function y(n) {
  return (t, e) => typeof e == "object" ? Vt(n, t, e) : ((r, o, s) => {
    const i = o.hasOwnProperty(s);
    return o.constructor.createProperty(s, r), i ? Object.getOwnPropertyDescriptor(o, s) : void 0;
  })(n, t, e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function Ft(n) {
  return y({ ...n, state: !0, attribute: !1 });
}
const Jt = "*,*:before,*:after{box-sizing:border-box;margin:0;padding:0}img,picture,video,canvas,svg{display:block;max-width:100%}ol,ul{list-style:none}a{text-decoration:none;color:inherit}h1,h2,h3,h4,h5,h6{font-weight:400}:host{display:inline-block;--color-pl-button-primary-background: #ffd000;--color-pl-button-primary-background-hover: #eb6f24;--color-pl-button-primary-background-active: #000000;--color-pl-button-primary-background-disabled: #e5e8ed;--color-pl-button-primary-border: #ffd000;--color-pl-button-primary-border-hover: #eb6f24;--color-pl-button-primary-border-active: #000000;--color-pl-button-primary-border-disabled: #bdc4ca;--color-pl-button-primary-border-focus: #000000;--color-pl-button-primary-text: #000000;--color-pl-button-primary-text-hover: #000000;--color-pl-button-primary-text-active: #ffffff;--color-pl-button-primary-text-disabled: #51585d;--color-pl-button-primary-loading: #000000;--color-pl-button-secondary-background: transparent;--color-pl-button-secondary-background-hover: transparent;--color-pl-button-secondary-background-active: transparent;--color-pl-button-secondary-background-disabled: transparent;--color-pl-button-secondary-border: #000000;--color-pl-button-secondary-border-hover: #6b7278;--color-pl-button-secondary-border-active: #000000;--color-pl-button-secondary-border-disabled: #bdc4ca;--color-pl-button-secondary-border-focus: #000000;--color-pl-button-secondary-text: #000000;--color-pl-button-secondary-text-hover: #6b7278;--color-pl-button-secondary-text-active: #000000;--color-pl-button-secondary-text-disabled: #51585d;--color-pl-button-secondary-loading: #000000;--color-pl-button-error-background: #e52828;--color-pl-button-error-background-hover: #ad0b37;--color-pl-button-error-background-active: #000000;--color-pl-button-error-background-disabled: #e5e8ed;--color-pl-button-error-border: #e52828;--color-pl-button-error-border-hover: #ad0b37;--color-pl-button-error-border-active: #000000;--color-pl-button-error-border-disabled: #bdc4ca;--color-pl-button-error-border-focus: #000000;--color-pl-button-error-text: #ffffff;--color-pl-button-error-text-hover: #ffffff;--color-pl-button-error-text-active: #ffffff;--color-pl-button-error-text-disabled: #51585d;--color-pl-button-error-loading: #ffffff}:host-context([data-theme=corporate][data-mode=dark]){--color-pl-button-primary-background: #ffd000;--color-pl-button-primary-background-hover: #f89939;--color-pl-button-primary-background-active: #ffffff;--color-pl-button-primary-background-disabled: #353a40;--color-pl-button-primary-border: #ffd000;--color-pl-button-primary-border-hover: #f89939;--color-pl-button-primary-border-active: #ffffff;--color-pl-button-primary-border-disabled: #888e94;--color-pl-button-primary-border-focus: #ffffff;--color-pl-button-primary-text: #000000;--color-pl-button-primary-text-hover: #000000;--color-pl-button-primary-text-active: #000000;--color-pl-button-primary-text-disabled: #e5e8ed;--color-pl-button-primary-loading: #000000;--color-pl-button-secondary-background: transparent;--color-pl-button-secondary-background-hover: transparent;--color-pl-button-secondary-background-active: transparent;--color-pl-button-secondary-background-disabled: transparent;--color-pl-button-secondary-border: #ffffff;--color-pl-button-secondary-border-hover: #bdc4ca;--color-pl-button-secondary-border-active: #000000;--color-pl-button-secondary-border-disabled: #888e94;--color-pl-button-secondary-border-focus: #ffffff;--color-pl-button-secondary-text: #ffffff;--color-pl-button-secondary-text-hover: #bdc4ca;--color-pl-button-secondary-text-active: #ffffff;--color-pl-button-secondary-text-disabled: #e5e8ed;--color-pl-button-secondary-loading: #000000;--color-pl-button-error-background: #ff7070;--color-pl-button-error-background-hover: #ffa3a3;--color-pl-button-error-background-active: #ffffff;--color-pl-button-error-background-disabled: #353a40;--color-pl-button-error-border: #ff7070;--color-pl-button-error-border-hover: #ffa3a3;--color-pl-button-error-border-active: #ffffff;--color-pl-button-error-border-disabled: #888e94;--color-pl-button-error-border-focus: #ffffff;--color-pl-button-error-text: #000000;--color-pl-button-error-text-hover: #000000;--color-pl-button-error-text-active: #000000;--color-pl-button-error-text-disabled: #e5e8ed;--color-pl-button-error-loading: #ffffff}:host-context([data-theme=hau][data-mode=light]){--color-pl-button-primary-background: #2779c4;--color-pl-button-primary-background-hover: #003057;--color-pl-button-primary-background-active: #000000;--color-pl-button-primary-background-disabled: #e5e8ed;--color-pl-button-primary-border: #2779c4;--color-pl-button-primary-border-hover: #003057;--color-pl-button-primary-border-active: #000000;--color-pl-button-primary-border-disabled: #bdc4ca;--color-pl-button-primary-border-focus: #000000;--color-pl-button-primary-text: #ffffff;--color-pl-button-primary-text-hover: #ffffff;--color-pl-button-primary-text-active: #ffffff;--color-pl-button-primary-text-disabled: #51585d;--color-pl-button-primary-loading: #000000;--color-pl-button-secondary-background: transparent;--color-pl-button-secondary-background-hover: transparent;--color-pl-button-secondary-background-active: transparent;--color-pl-button-secondary-background-disabled: transparent;--color-pl-button-secondary-border: #003057;--color-pl-button-secondary-border-hover: #6b7278;--color-pl-button-secondary-border-active: #000000;--color-pl-button-secondary-border-disabled: #bdc4ca;--color-pl-button-secondary-border-focus: #000000;--color-pl-button-secondary-text: #003057;--color-pl-button-secondary-text-hover: #6b7278;--color-pl-button-secondary-text-active: #003057;--color-pl-button-secondary-text-disabled: #51585d;--color-pl-button-secondary-loading: #000000;--color-pl-button-error-background: #e52828;--color-pl-button-error-background-hover: #ad0b37;--color-pl-button-error-background-active: #000000;--color-pl-button-error-background-disabled: #e5e8ed;--color-pl-button-error-border: #e52828;--color-pl-button-error-border-hover: #ad0b37;--color-pl-button-error-border-active: #000000;--color-pl-button-error-border-disabled: #bdc4ca;--color-pl-button-error-border-focus: #000000;--color-pl-button-error-text: #ffffff;--color-pl-button-error-text-hover: #ffffff;--color-pl-button-error-text-active: #ffffff;--color-pl-button-error-text-disabled: #51585d;--color-pl-button-error-loading: #ffffff}:host-context([data-theme=hau][data-mode=dark]){--color-pl-button-primary-background: #2779c4;--color-pl-button-primary-background-hover: #164870;--color-pl-button-primary-background-active: #ffffff;--color-pl-button-primary-background-disabled: #353a40;--color-pl-button-primary-border: #2779c4;--color-pl-button-primary-border-hover: #164870;--color-pl-button-primary-border-active: #ffffff;--color-pl-button-primary-border-disabled: #888e94;--color-pl-button-primary-border-focus: #ffffff;--color-pl-button-primary-text: #ffffff;--color-pl-button-primary-text-hover: #ffffff;--color-pl-button-primary-text-active: #000000;--color-pl-button-primary-text-disabled: #e5e8ed;--color-pl-button-primary-loading: #000000;--color-pl-button-secondary-background: transparent;--color-pl-button-secondary-background-hover: transparent;--color-pl-button-secondary-background-active: transparent;--color-pl-button-secondary-background-disabled: transparent;--color-pl-button-secondary-border: #ffffff;--color-pl-button-secondary-border-hover: #bdc4ca;--color-pl-button-secondary-border-active: #000000;--color-pl-button-secondary-border-disabled: #888e94;--color-pl-button-secondary-border-focus: #ffffff;--color-pl-button-secondary-text: #ffffff;--color-pl-button-secondary-text-hover: #bdc4ca;--color-pl-button-secondary-text-active: #ffffff;--color-pl-button-secondary-text-disabled: #e5e8ed;--color-pl-button-secondary-loading: #000000;--color-pl-button-error-background: #ff7070;--color-pl-button-error-background-hover: #ffa3a3;--color-pl-button-error-background-active: #ffffff;--color-pl-button-error-background-disabled: #353a40;--color-pl-button-error-border: #ff7070;--color-pl-button-error-border-hover: #ffa3a3;--color-pl-button-error-border-active: #ffffff;--color-pl-button-error-border-disabled: #888e94;--color-pl-button-error-border-focus: #ffffff;--color-pl-button-error-text: #000000;--color-pl-button-error-text-hover: #000000;--color-pl-button-error-text-active: #000000;--color-pl-button-error-text-disabled: #e5e8ed;--color-pl-button-error-loading: #ffffff}button{--current-bg: var(--color-pl-button-primary-background);--current-border: var(--color-pl-button-primary-border);--current-text: var(--color-pl-button-primary-text);--current-bg-hover: var(--color-pl-button-primary-background-hover);--current-border-hover: var(--color-pl-button-primary-border-hover);--current-text-hover: var(--color-pl-button-primary-text-hover);--current-bg-active: var(--color-pl-button-primary-background-active);--current-border-active: var(--color-pl-button-primary-border-active);--current-text-active: var(--color-pl-button-primary-text-active);--current-border-focus: var(--color-pl-button-primary-border-focus);font-family:LiebherrText-Bold,-apple-system,BlinkMacSystemFont,Arial,Helvetica,sans-serif;font-size:14px;font-weight:700;line-height:20px;text-transform:uppercase;display:flex;justify-content:center;align-items:center;height:48px;padding-inline:36px;border:1px solid transparent;border-radius:0;color:#000;cursor:pointer;background-color:var(--current-bg);border:1px solid var(--current-border);color:var(--current-text)}button:dir(rtl){font-family:Arial,sans-serif;font-size:16px}button:hover{background-color:var(--current-bg-hover);border-color:var(--current-border-hover);color:var(--current-text-hover)}button:active{background-color:var(--current-bg-active);border-color:var(--current-border-active);color:var(--current-text-active)}button:focus-visible{outline:3px solid var(--current-border-focus);outline-offset:-3px}:host([variant=secondary]) button{--current-bg: var(--color-pl-button-secondary-background);--current-border: var(--color-pl-button-secondary-border);--current-text: var(--color-pl-button-secondary-text);--current-bg-hover: var(--color-pl-button-secondary-background-hover);--current-border-hover: var(--color-pl-button-secondary-border-hover);--current-text-hover: var(--color-pl-button-secondary-text-hover);--current-bg-active: var(--color-pl-button-secondary-background-active);--current-border-active: var(--color-pl-button-secondary-border-active);--current-text-active: var(--color-pl-button-secondary-text-active);--current-border-focus: var(--color-pl-button-secondary-border-focus)}:host([variant=secondary]) button:hover{background-color:var(--current-bg-hover);border-color:var(--current-border-hover);color:var(--current-text-hover)}:host([variant=secondary]) button:active{background-color:var(--current-bg-active);border-color:var(--current-border-active);color:var(--current-text-active)}:host([variant=secondary]) button:focus-visible{outline:3px solid var(--current-border-focus);outline-offset:-3px}:host([variant=error]) button{--current-bg: var(--color-pl-button-error-background);--current-border: var(--color-pl-button-error-border);--current-text: var(--color-pl-button-error-text);--current-bg-hover: var(--color-pl-button-error-background-hover);--current-border-hover: var(--color-pl-button-error-border-hover);--current-text-hover: var(--color-pl-button-error-text-hover);--current-bg-active: var(--color-pl-button-error-background-active);--current-border-active: var(--color-pl-button-error-border-active);--current-text-active: var(--color-pl-button-error-text-active);--current-border-focus: var(--color-pl-button-error-border-focus)}:host([variant=error]) button:hover{background-color:var(--current-bg-hover);border-color:var(--current-border-hover);color:var(--current-text-hover)}:host([variant=error]) button:active{background-color:var(--current-bg-active);border-color:var(--current-border-active);color:var(--current-text-active)}:host([variant=error]) button:focus-visible{outline:3px solid var(--current-border-focus);outline-offset:-3px}:host([disabled][variant=primary]) button{background-color:var(--color-pl-button-primary-background-disabled);border-color:var(--color-pl-button-primary-border-disabled);color:var(--color-pl-button-primary-text-disabled);cursor:not-allowed}:host([disabled][variant=secondary]) button{background-color:var(--color-pl-button-secondary-background-disabled);border-color:var(--color-pl-button-secondary-border-disabled);color:var(--color-pl-button-secondary-text-disabled);cursor:not-allowed}:host([disabled][variant=error]) button{background-color:var(--color-pl-button-error-background-disabled);border-color:var(--color-pl-button-error-border-disabled);color:var(--color-pl-button-error-text-disabled);cursor:not-allowed}", Kt = '@font-face{font-family:LiebherrText-Regular;font-weight:400;font-display:swap;src:url(https://assets-cdn.liebherr.com/assets/api/cbef770b-7eef-4164-8dc7-a304a545b01f/original/LiebherrText-Regular_Web.woff2) format("woff2")}@font-face{font-family:LiebherrText-Medium;font-weight:400;font-display:swap;src:url(https://assets-cdn.liebherr.com/assets/api/d726fec5-dd05-4133-a47c-77d7900263f6/original/LiebherrText-Medium_Web.woff2) format("woff2")}@font-face{font-family:LiebherrText-Bold;font-weight:400;font-display:swap;src:url(https://assets-cdn.liebherr.com/assets/api/53da5b14-5565-4436-8d08-3bf3cf0262ae/original/LiebherrText-Bold_Web.woff2) format("woff2")}@font-face{font-family:LiebherrHead-Regular;font-weight:400;font-display:swap;src:url(https://assets-cdn.liebherr.com/assets/api/bfb44747-d200-4af8-a756-fab6de288b32/original/LiebherrHead-Regular_Web.woff2) format("woff2")}@font-face{font-family:LiebherrHead-Black;font-weight:400;font-display:swap;src:url(https://assets-cdn.liebherr.com/assets/api/3c3d21f7-2747-4a07-bb1b-f9f4598c21df/original/LiebherrHead-Black_Web.woff2) format("woff2")}';
var Zt = Object.defineProperty, Gt = Object.getOwnPropertyDescriptor, E = (n, t, e, r) => {
  for (var o = r > 1 ? void 0 : r ? Gt(t, e) : t, s = n.length - 1, i; s >= 0; s--)
    (i = n[s]) && (o = (r ? i(t, e, o) : i(o)) || o);
  return r && o && Zt(t, e, o), o;
};
let v = class extends G {
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
      Wt.generateId()
    ), _`
      <button
        data-testid="button"
        part="button"
        type=${this._state.type}
        ?disabled=${this._state.disabled || this._state.isLoading}
        @click=${this._handleClick}
      >
        ${this._state.label ? _`${this._state.label}` : _`<slot></slot>`}
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
v.styles = V`
    ${O(Kt)}
    ${O(Jt)}
  `;
E([
  Ft()
], v.prototype, "_state", 2);
E([
  y({ type: Boolean, reflect: !0 })
], v.prototype, "disabled", 2);
E([
  y({ type: String, reflect: !0 })
], v.prototype, "label", 2);
E([
  y({ type: String, reflect: !0 })
], v.prototype, "type", 2);
E([
  y({ type: String, reflect: !0 })
], v.prototype, "variant", 2);
v = E([
  Q("pl-button")
], v);
const pt = {
  globe: "https://assets-cdn.liebherr.com/assets/api/6d184430-2e1f-4ba6-9d2f-8c2f973f01e6/original/test-globe-icon.svg",
  search: "https://assets-cdn.liebherr.com/assets/api/313d8c9e-622d-4ab8-984d-4d1bf88ec9ab/original/test-search-icon.svg",
  // fallback icon
  default: "https://assets-cdn.liebherr.com/assets/api/313d8c9e-622d-4ab8-984d-4d1bf88ec9ab/original/test-search-icon.svg"
}, Qt = `@use '@styles/styles/flex-mixins' as flex;

:host {
  display: inline-block;
  color: black;
  width: 24px;
  height: 24px;
}

img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
`;
var Xt = Object.defineProperty, Yt = Object.getOwnPropertyDescriptor, X = (n, t, e, r) => {
  for (var o = r > 1 ? void 0 : r ? Yt(t, e) : t, s = n.length - 1, i; s >= 0; s--)
    (i = n[s]) && (o = (r ? i(t, e, o) : i(o)) || o);
  return r && o && Xt(t, e, o), o;
};
let L = class extends G {
  constructor() {
    super(...arguments), this.alt = "", this.iconName = "globe";
  }
  render() {
    const n = pt[this.iconName] || pt.default;
    return _`<img src=${n} alt=${this.alt} />`;
  }
};
L.styles = V`
    ${O(Qt)}
  `;
X([
  y({ type: String, reflect: !0 })
], L.prototype, "alt", 2);
X([
  y({ type: String, reflect: !0 })
], L.prototype, "iconName", 2);
L = X([
  Q("pl-icon")
], L);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function* te(n, t) {
  if (n !== void 0) {
    let e = 0;
    for (const r of n) yield t(r, e++);
  }
}
const ee = `:host {
  display: block;
}
`;
var re = Object.defineProperty, oe = Object.getOwnPropertyDescriptor, Y = (n, t, e, r) => {
  for (var o = r > 1 ? void 0 : r ? oe(t, e) : t, s = n.length - 1, i; s >= 0; s--)
    (i = n[s]) && (o = (r ? i(t, e, o) : i(o)) || o);
  return r && o && re(t, e, o), o;
};
let H = class extends G {
  constructor() {
    super(...arguments), this.headlineLabel = "", this.data = [];
  }
  render() {
    return _`
      <div class="item-list">
        ${this.headlineLabel ? _`<h3 class="headline">${this.headlineLabel}</h3>` : ""}

        <ul>
          ${te(this.data, (n) => _`<li>${n.value}</li>`)}
        </ul>
      </div>
    `;
  }
};
H.styles = V`
    ${O(ee)}
  `;
Y([
  y({ type: String, attribute: "headline-label" })
], H.prototype, "headlineLabel", 2);
Y([
  y({ type: Array, attribute: !1 })
], H.prototype, "data", 2);
H = Y([
  Q("pl-itemlist")
], H);
const de = _t({
  react: mt,
  tagName: "pl-button",
  elementClass: v,
  events: {
    onClick: "pl-button-click"
  }
});
export {
  de as PlButton
};
