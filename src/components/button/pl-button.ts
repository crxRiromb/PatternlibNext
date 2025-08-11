import { IdUtils } from '@src/utils/id';
import { css, html, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { PlBase } from '../base/pl-base';
import buttonStyles from './pl-button.scss?inline';
import fontStyles from '/src/styles/fonts.css?inline';

export interface PlButtonState {
  isLoading: boolean;
  disabled: boolean;
  label: string;
  type: 'button' | 'submit';
  variant: 'primary' | 'secondary' | 'error';
}

/**
 * The pl-button is the standard button for all interactive actions
 * in the library. It supports various visual variants and states.
 *
 * @slot - The default slot for the button's text (an alternative to the `label` attribute).
 *
 * @event pl-click - Fired when the user clicks the button. Contains no `detail` data.
 *
 * @csspart button - The native `<button>` element inside the component.
 */
@customElement('pl-button')
export class PlButton extends PlBase {
  /** @internal */
  private _state: PlButtonState = {
    isLoading: false,
    disabled: false,
    label: '',
    type: 'button',
    variant: 'primary',
  };

  /**
   * Whether the button is disabled.
   * @type {boolean}
   */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  /**
   * The label for the button.
   * @type {string}
   */
  @property({ type: String, reflect: true })
  label = '';

  /**
   * The type of the button.
   * @type {'button' | 'submit'}
   */
  @property({ type: String, reflect: true })
  type: 'button' | 'submit' = 'button';

  /**
   * The variant of the button.
   * Can be 'primary', 'secondary', or 'error'.
   * @type {string}
   */
  @property({ type: String, reflect: true })
  variant: 'primary' | 'secondary' | 'error' = 'primary';

  static styles = css`
    ${unsafeCSS(fontStyles)}
    ${unsafeCSS(buttonStyles)}
  `;

  render() {
    console.log(
      'Rendering PlButton with RTL/Light/Dark/Id:',
      this.isRTL(),
      this.isLightMode(),
      this.isDarkMode(),
      IdUtils.generateId()
    );

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
