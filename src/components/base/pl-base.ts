import { LitElement } from 'lit';

/**
 * A base class for all components in the application.
 */
export class PlBase extends LitElement {
  /**
   * Checks if the current element is in light mode.
   * @returns True if the mode is light, false if dark.
   */
  public isLightMode(): boolean {
    // Closest ancestor with a data-mode attribute
    // Hint: closest() is the direct programmatic counterpart to your :host-context selector.
    const modeElement = this.closest('[data-mode]');

    // If no mode element is found, default to light mode
    if (!modeElement) {
      return true;
    }

    return modeElement.getAttribute('data-mode') !== 'dark';
  }

  /**
   * Checks if the current element is in dark mode.
   * @returns True if the mode is dark, false if light.
   */
  public isDarkMode(): boolean {
    return !this.isLightMode();
  }

  /**
   * Checks if the current element is in a right-to-left (RTL) layout.
   * @returns True if the element is in RTL layout, false otherwise.
   */
  public isRTL(): boolean {
    return getComputedStyle(this).direction === 'rtl';
  }
}
