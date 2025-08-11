import { css, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { PlBase } from '../base/pl-base';
import { iconMap } from './icon-map';
import iconStyles from './pl-icon.scss?raw';

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
    const src = iconMap[this.iconName] || iconMap.default;

    return html`<img src=${src} alt=${this.alt} />`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'pl-icon': PlIcon;
  }
}
