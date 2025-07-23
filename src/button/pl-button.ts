import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import buttonStyles from './pl-button.scss?raw';

@customElement('pl-button')
export class PlButton extends LitElement {
  @property({ type: String })
  label = '';

  @property({ type: String })
  type: 'button' | 'submit' | 'reset' = 'button';

  @property({ type: Boolean, reflect: true })
  disabled = false;

  static styles = css`
    ${unsafeCSS(buttonStyles)}
  `;

  render() {
    return html`
      <button type=${this.type} ?disabled=${this.disabled} @click=${this._handleClick}>
        ${this.label ? html`<strong>${this.label}</strong>` : html`<slot></slot>`}
      </button>
    `;
  }

  private _handleClick(event: MouseEvent) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    const customClickEvent = new CustomEvent('pl-click', { bubbles: true, composed: true });
    this.dispatchEvent(customClickEvent);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'pl-button': PlButton;
  }
}
