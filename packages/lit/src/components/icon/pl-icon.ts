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
        accessibleLabel = `Icon of ${this.iconName}`;
      }
    }

    return html`
      <div
        aria-label=${ifDefined(accessibleLabel)}
        aria-hidden=${ifDefined(this.decorative ? 'true' : undefined)}
        role=${this.decorative ? 'presentation' : 'img'}
        part="wrapper"
      >
        ${until(
          svgContentPromise.then(svgContent => unsafeHTML(svgContent)),
          html`<span></span>`
        )}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'pl-icon': PlIcon;
  }
}
