import "../node_modules/@lit/reactive-element/reactive-element.js";
import { html as m } from "../node_modules/lit-html/lit-html.js";
import { LitElement as h } from "../node_modules/lit-element/lit-element.js";
import { customElement as f } from "../node_modules/@lit/reactive-element/decorators/custom-element.js";
import { property as n } from "../node_modules/@lit/reactive-element/decorators/property.js";
import { map as u } from "../node_modules/lit-html/directives/map.js";
import d from "./pl-itemlist.scss.js";
import { unsafeCSS as b, css as c } from "../node_modules/@lit/reactive-element/css-tag.js";
var v = Object.defineProperty, y = Object.getOwnPropertyDescriptor, p = (r, s, i, a) => {
  for (var t = a > 1 ? void 0 : a ? y(s, i) : s, l = r.length - 1, o; l >= 0; l--)
    (o = r[l]) && (t = (a ? o(s, i, t) : o(t)) || t);
  return a && t && v(s, i, t), t;
};
let e = class extends h {
  constructor() {
    super(...arguments), this.headlineLabel = "", this.data = [];
  }
  render() {
    return m`
      <div class="item-list">
        ${this.headlineLabel ? m`<h3 class="headline">${this.headlineLabel}</h3>` : ""}

        <ul>
          ${u(this.data, (r) => m`<li>${r.value}</li>`)}
        </ul>
      </div>
    `;
  }
};
e.styles = c`
    ${b(d)}
  `;
p([
  n({ type: String, attribute: "headline-label" })
], e.prototype, "headlineLabel", 2);
p([
  n({ type: Array, attribute: !1 })
], e.prototype, "data", 2);
e = p([
  f("pl-itemlist")
], e);
export {
  e as PlItemlist
};
