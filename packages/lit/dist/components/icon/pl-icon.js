import { unsafeCSS as a, css as f, html as u } from "lit";
import { property as m, customElement as y } from "lit/decorators.js";
import { PlBase as h } from "../base/pl-base.js";
import { iconMap as i } from "./icon-map.js";
import v from "./pl-icon.scss.js";
var P = Object.defineProperty, _ = Object.getOwnPropertyDescriptor, n = (e, o, p, s) => {
  for (var t = s > 1 ? void 0 : s ? _(o, p) : o, l = e.length - 1, c; l >= 0; l--)
    (c = e[l]) && (t = (s ? c(o, p, t) : c(t)) || t);
  return s && t && P(o, p, t), t;
};
let r = class extends h {
  constructor() {
    super(...arguments), this.alt = "", this.iconName = "globe";
  }
  render() {
    const e = i[this.iconName] || i.default;
    return u`<img src=${e} alt=${this.alt} />`;
  }
};
r.styles = f`
    ${a(v)}
  `;
n([
  m({ type: String, reflect: !0 })
], r.prototype, "alt", 2);
n([
  m({ type: String, reflect: !0 })
], r.prototype, "iconName", 2);
r = n([
  y("pl-icon")
], r);
export {
  r as PlIcon
};
