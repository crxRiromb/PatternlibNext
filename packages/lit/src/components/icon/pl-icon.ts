import { css, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { until } from 'lit/directives/until.js';
import { PlBase } from '../base/pl-base';
import { iconService } from './icon-service';
import iconStyles from './pl-icon.scss?raw';

/**
 * The `pl-icon` component is used to display icons from a predefined set.
 * You can specify the icon to display using the `icon-name` property, and provide alternative
 * text for accessibility using the `alt` property.
 *
 * @slot - This component has no slots.
 *
 * @csspart img - The image element displaying the icon.
 */
@customElement('pl-icon')
export class PlIcon extends PlBase {
  /**
   * The alternative text for the icon.
   */
  @property({ type: String, reflect: true })
  alt = '';

  /**
   * The name of the icon to display.
   */
  @property({ type: String, reflect: true })
  iconName = 'globe';

  static styles = css`
    ${unsafeCSS(iconStyles)}
  `;

  render() {
    const imageUrlPromise = iconService.getUrl(this.iconName);

    return html`${until(
      imageUrlPromise.then(src => html`<img src=${src} alt=${this.alt} />`),

      // Placeholder while loading
      html`<span></span>`
    )}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'pl-icon': PlIcon;
  }
}
