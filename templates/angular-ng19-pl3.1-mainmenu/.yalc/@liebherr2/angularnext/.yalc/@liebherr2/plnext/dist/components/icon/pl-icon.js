import "../../node_modules/@lit/reactive-element/reactive-element.js";
import { html as c } from "../../node_modules/lit-html/lit-html.js";
import { LitElement as f } from "../../node_modules/lit-element/lit-element.js";
import { customElement as u } from "../../node_modules/@lit/reactive-element/decorators/custom-element.js";
import { property as a } from "../../node_modules/@lit/reactive-element/decorators/property.js";
import y from "./pl-icon.scss.js";
import { iconMap as l } from "./icon-map.js";
import { unsafeCSS as h, css as v } from "../../node_modules/@lit/reactive-element/css-tag.js";
var _ = Object.defineProperty, g = Object.getOwnPropertyDescriptor, n = (e, o, p, s) => {
  for (var t = s > 1 ? void 0 : s ? g(o, p) : o, i = e.length - 1, m; i >= 0; i--)
    (m = e[i]) && (t = (s ? m(o, p, t) : m(t)) || t);
  return s && t && _(o, p, t), t;
};
let r = class extends f {
  constructor() {
    super(...arguments), this.alt = "", this.iconName = "globe";
  }
  render() {
    const e = l[this.iconName] || l.default;
    return c` <img src=${e} alt=${this.alt} /> `;
  }
};
r.styles = v`
    ${h(y)}
  `;
n([
  a({ type: String, reflect: !0 })
], r.prototype, "alt", 2);
n([
  a({ type: String, reflect: !0 })
], r.prototype, "iconName", 2);
r = n([
  u("pl-icon")
], r);
export {
  r as PlIcon
};
