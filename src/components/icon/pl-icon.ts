import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import iconStyles from './pl-icon.scss?raw';
import { iconMap } from './icon-map';

@customElement('pl-icon')
export class PlIcon extends LitElement {
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
