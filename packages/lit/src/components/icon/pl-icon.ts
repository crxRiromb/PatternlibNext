import { css, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { until } from 'lit/directives/until.js';
import { PlBase } from '../base/pl-base';
import { iconService } from './icon-service';
import iconStyles from './pl-icon.scss?raw';

/**
 * The `pl-icon` component is used to display icons from a predefined set.
 * You can specify the icon to display using the `icon-name` property, and provide alternative
 * text for accessibility using the `alt` property.
 *
 * @csspart wrapper - The wrapper `<div>` around the SVG icon.
 */
@customElement('pl-icon')
export class PlIcon extends PlBase {
  /**
   * If true, the icon is marked as decorative for accessibility purposes.
   * Useful when the icon is purely decorative (e.g. next to visible text).
   */
  @property({ type: Boolean })
  decorative = false;

  /**
   * The name of the icon to display.
   */
  @property({ type: String, reflect: true })
  iconName = '';

  /**
   * The alternative text for the icon, used for accessibility.
   * Will be ignored if `decorative` is true.
   */
  @property({ type: String })
  label = '';

  static styles = css`
    ${unsafeCSS(iconStyles)}
  `;

  /*
   * Content taken from LiMAM,
   * Cross-Site-Scripting is not an issue here
   */
  render() {
    const svgContentPromise = iconService.getSvgContent(this.iconName);

    let accessibleLabel: string | undefined;
    if (!this.decorative) {
      if (this.label) {
        accessibleLabel = this.label;
      } else {
        accessibleLabel = this.iconName;
      }
    }

    const interactive = !this.decorative;

    return html`
      <div
        aria-label=${ifDefined(accessibleLabel)}
        aria-hidden=${ifDefined(this.decorative ? 'true' : undefined)}
        role=${interactive ? 'button' : 'img'}
        part="wrapper"
        tabindex=${ifDefined(interactive ? '0' : undefined)}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @keyup=${this.handleKeyUp}
      >
        ${until(
          svgContentPromise.then(svgContent => unsafeHTML(svgContent)),
          html`<span></span>`
        )}
      </div>
    `;
  }

  private handleClick = (event: MouseEvent) => {
    if (this.decorative) return;
    event.stopPropagation();
    this._emitEvent('pl-icon-click', { iconName: this.iconName });
  };

  /*
   * Handle keyboard interactions for accessibility:
   * - Enter on keydown
   * - Space on keyup (to match button behavior)
   */
  private handleKeyDown = (event: KeyboardEvent) => {
    if (this.decorative) return;
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      this._emitEvent('pl-icon-click', { iconName: this.iconName });
    }
    if (event.key === ' ') {
      // prevent default, trigger on keyup
      event.preventDefault();
      event.stopPropagation();
    }
  };

  private handleKeyUp = (event: KeyboardEvent) => {
    if (this.decorative) return;
    if (event.key === ' ') {
      event.preventDefault();
      event.stopPropagation();
      this._emitEvent('pl-icon-click', { iconName: this.iconName });
    }
  };
}

declare global {
  interface HTMLElementTagNameMap {
    'pl-icon': PlIcon;
  }
}
