import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import buttonStyles from './pl-button.scss?inline';
import fontStyles from '/src/styles/fonts.css?inline';

@customElement('pl-button')
export class PlButton extends LitElement {
  /**
   * The label for the button.
   */
  @property({ type: String, reflect: true })
  label = '';

  /**
   * The type of the button.
   */
  @property({ type: String, reflect: true })
  type: 'button' | 'submit' | 'reset' = 'button';

  /**
   * Whether the button is disabled.
   */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  static styles = css`
    ${unsafeCSS(fontStyles)}
    ${unsafeCSS(buttonStyles)}
  `;

  render() {
    return html`
      <button type=${this.type} ?disabled=${this.disabled} @click=${this._handleClick}>
        ${this.label ? html`${this.label}` : html`<slot></slot>`}
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
