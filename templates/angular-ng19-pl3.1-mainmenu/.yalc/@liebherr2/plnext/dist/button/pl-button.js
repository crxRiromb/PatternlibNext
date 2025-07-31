import "../node_modules/@lit/reactive-element/reactive-element.js";
import { html as a } from "../node_modules/lit-html/lit-html.js";
import { LitElement as c } from "../node_modules/lit-element/lit-element.js";
import { customElement as m } from "../node_modules/@lit/reactive-element/decorators/custom-element.js";
import { property as u } from "../node_modules/@lit/reactive-element/decorators/property.js";
import b from "./pl-button.scss.js";
import { unsafeCSS as f, css as h } from "../node_modules/@lit/reactive-element/css-tag.js";
var d = Object.defineProperty, y = Object.getOwnPropertyDescriptor, l = (s, e, p, o) => {
  for (var t = o > 1 ? void 0 : o ? y(e, p) : e, i = s.length - 1, n; i >= 0; i--)
    (n = s[i]) && (t = (o ? n(e, p, t) : n(t)) || t);
  return o && t && d(e, p, t), t;
};
let r = class extends c {
  constructor() {
    super(...arguments), this.label = "", this.type = "button", this.disabled = !1;
  }
  render() {
    return a`
      <button type=${this.type} ?disabled=${this.disabled} @click=${this._handleClick}>
        ${this.label ? a`${this.label}` : a`<slot></slot>`}
      </button>
    `;
  }
  _handleClick(s) {
    if (this.disabled) {
      s.preventDefault(), s.stopPropagation();
      return;
    }
    const e = new CustomEvent("pl-click", { bubbles: !0, composed: !0 });
    this.dispatchEvent(e);
  }
};
r.styles = h`
    ${f(b)}
  `;
l([
  u({ type: String, reflect: !0 })
], r.prototype, "label", 2);
l([
  u({ type: String, reflect: !0 })
], r.prototype, "type", 2);
l([
  u({ type: Boolean, reflect: !0 })
], r.prototype, "disabled", 2);
r = l([
  m("pl-button")
], r);
export {
  r as PlButton
};
