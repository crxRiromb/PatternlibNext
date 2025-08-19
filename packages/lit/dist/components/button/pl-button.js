import { IdUtils as d } from "../../utils/id.js";
import { html as h, unsafeCSS as b, css as f } from "lit";
import { state as u, property as r, customElement as y } from "lit/decorators.js";
import { PlBase as _ } from "../base/pl-base.js";
import m from "./pl-button.scss.js";
import c from "../../styles/fonts.css.js";
var v = Object.defineProperty, g = Object.getOwnPropertyDescriptor, a = (e, t, o, l) => {
  for (var i = l > 1 ? void 0 : l ? g(t, o) : t, p = e.length - 1, n; p >= 0; p--)
    (n = e[p]) && (i = (l ? n(t, o, i) : n(i)) || i);
  return l && i && v(t, o, i), i;
};
let s = class extends _ {
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
  willUpdate(e) {
    const t = {};
    e.has("disabled") && (t.disabled = this.disabled ?? this._state.disabled), e.has("label") && (t.label = this.label ?? this._state.label), e.has("type") && (t.type = this.type ?? this._state.type), e.has("variant") && (t.variant = this.variant ?? this._state.variant), Object.keys(t).length > 0 && (this._state = { ...this._state, ...t });
  }
  render() {
    return console.log(
      "Rendering PlButton with RTL/Light/Dark/Id:",
      this.isRTL(),
      this.isLightMode(),
      this.isDarkMode(),
      d.generateId()
    ), h`
      <button
        data-testid="button"
        part="button"
        type=${this._state.type}
        ?disabled=${this._state.disabled || this._state.isLoading}
        @click=${this._handleClick}
      >
        ${this._state.label ? h`${this._state.label}` : h`<slot></slot>`}
      </button>
    `;
  }
  _handleClick(e) {
    if (this._state.disabled) {
      e.preventDefault(), e.stopPropagation();
      return;
    }
    this._emitEvent("pl-button-click");
  }
};
s.styles = f`
    ${b(c)}
    ${b(m)}
  `;
a([
  u()
], s.prototype, "_state", 2);
a([
  r({ type: Boolean, reflect: !0 })
], s.prototype, "disabled", 2);
a([
  r({ type: String, reflect: !0 })
], s.prototype, "label", 2);
a([
  r({ type: String, reflect: !0 })
], s.prototype, "type", 2);
a([
  r({ type: String, reflect: !0 })
], s.prototype, "variant", 2);
s = a([
  y("pl-button")
], s);
export {
  s as PlButton
};
//# sourceMappingURL=pl-button.js.map
