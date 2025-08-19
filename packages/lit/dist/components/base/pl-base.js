import { LitElement as r } from "lit";
class n extends r {
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
    const s = new CustomEvent(t, {
      detail: e,
      bubbles: !0,
      composed: !0
    });
    this.dispatchEvent(s);
  }
}
export {
  n as PlBase
};
//# sourceMappingURL=pl-base.js.map
