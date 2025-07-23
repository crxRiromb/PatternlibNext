import "../node_modules/@lit/reactive-element/reactive-element.js";
import { html as a } from "../node_modules/lit-html/lit-html.js";
import { LitElement as m } from "../node_modules/lit-element/lit-element.js";
import { customElement as b } from "../node_modules/@lit/reactive-element/decorators/custom-element.js";
import { property as u } from "../node_modules/@lit/reactive-element/decorators/property.js";
import c from "./pl-button.scss.js";
import { unsafeCSS as f, css as h } from "../node_modules/@lit/reactive-element/css-tag.js";
var d = Object.defineProperty, y = Object.getOwnPropertyDescriptor, l = (r, e, p, o) => {
  for (var t = o > 1 ? void 0 : o ? y(e, p) : e, i = r.length - 1, n; i >= 0; i--)
    (n = r[i]) && (t = (o ? n(e, p, t) : n(t)) || t);
  return o && t && d(e, p, t), t;
};
let s = class extends m {
  constructor() {
    super(...arguments), this.label = "", this.type = "button", this.disabled = !1;
  }
  render() {
    return a`
      <button type=${this.type} ?disabled=${this.disabled} @click=${this._handleClick}>
        ${this.label ? a`<strong>${this.label}</strong>` : a`<slot></slot>`}
      </button>
    `;
  }
  _handleClick(r) {
    if (this.disabled) {
      r.preventDefault(), r.stopPropagation();
      return;
    }
    const e = new CustomEvent("pl-click", { bubbles: !0, composed: !0 });
    this.dispatchEvent(e);
  }
};
s.styles = h`
    ${f(c)}
  `;
l([
  u({ type: String })
], s.prototype, "label", 2);
l([
  u({ type: String })
], s.prototype, "type", 2);
l([
  u({ type: Boolean, reflect: !0 })
], s.prototype, "disabled", 2);
s = l([
  b("pl-button")
], s);
export {
  s as PlButton
};
