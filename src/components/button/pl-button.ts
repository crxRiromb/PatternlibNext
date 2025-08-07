import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import buttonStyles from './pl-button.scss?inline';
import fontStyles from '/src/styles/fonts.css?inline';

/**
 * A button component that can be themed.
 * @csspart button - The styleable native button element inside the component.
 */
@customElement('pl-button')
export class PlButton extends LitElement {
  /**
   * Whether the button is disabled.
   */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  /**
   * The label for the button.
   */
  @property({ type: String, reflect: true })
  label = '';

  /**
   * The type of the button.
   */
  @property({ type: String, reflect: true })
  type: 'button' | 'submit' = 'button';

  /**
   * The variant of the button.
   * Can be 'primary', 'secondary', or 'error'.
   */
  @property({ type: String, reflect: true })
  variant: 'primary' | 'secondary' | 'error' = 'primary';

  static styles = css`
    ${unsafeCSS(fontStyles)}
    ${unsafeCSS(buttonStyles)}
  `;

  render() {
    return html`
      <button
        data-testid="button"
        part="button"
        type=${this.type}
        ?disabled=${this.disabled}
        @click=${this._handleClick}
      >
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
