import { unsafeCSS as h, css as u, html as o } from "lit";
import { property as n, customElement as f } from "lit/decorators.js";
import { map as d } from "lit/directives/map.js";
import { PlBase as b } from "../base/pl-base.js";
import c from "./pl-itemlist.scss.js";
var v = Object.defineProperty, y = Object.getOwnPropertyDescriptor, m = (r, l, a, s) => {
  for (var e = s > 1 ? void 0 : s ? y(l, a) : l, i = r.length - 1, p; i >= 0; i--)
    (p = r[i]) && (e = (s ? p(l, a, e) : p(e)) || e);
  return s && e && v(l, a, e), e;
};
let t = class extends b {
  constructor() {
    super(...arguments), this.headlineLabel = "", this.data = [];
  }
  render() {
    return o`
      <div class="item-list">
        ${this.headlineLabel ? o`<h3 class="headline">${this.headlineLabel}</h3>` : ""}

        <ul>
          ${d(this.data, (r) => o`<li>${r.value}</li>`)}
        </ul>
      </div>
    `;
  }
};
t.styles = u`
    ${h(c)}
  `;
m([
  n({ type: String, attribute: "headline-label" })
], t.prototype, "headlineLabel", 2);
m([
  n({ type: Array, attribute: !1 })
], t.prototype, "data", 2);
t = m([
  f("pl-itemlist")
], t);
export {
  t as PlItemlist
};
//# sourceMappingURL=pl-itemlist.js.map
