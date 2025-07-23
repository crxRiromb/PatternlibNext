import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import iconStyles from './pl-icon.scss?raw';
import { iconMap } from './icon-map';

@customElement('pl-icon')
export class PlIcon extends LitElement {
  @property({ type: String })
  alt = '';

  @property({ type: String })
  iconName = 'globe';

  static styles = css`
    ${unsafeCSS(iconStyles)}
  `;

  render() {
    const src = iconMap[this.iconName] || iconMap.default;

    return html` <img src=${src} alt=${this.alt} /> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'pl-icon': PlIcon;
  }
}
