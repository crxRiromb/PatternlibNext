import { IdUtils } from '@src/utils/id';
import { css, html, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { PlBase } from '../base/pl-base';
import buttonStyles from './pl-button.scss?inline';
import fontStyles from '/src/styles/fonts.css?inline';

export type PlButtonClickEvent = CustomEvent<void>;
interface PlButtonState {
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
 * @event pl-button-click - Fired when the user clicks the button. Contains no `detail` data.
 *
 * @csspart button - The native `<button>` element inside the component.
 */
@customElement('pl-button')
export class PlButton extends PlBase {
  /** @internal */
  @state()
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
  disabled?: boolean;

  /**
   * The label for the button.
   * @type {string}
   */
  @property({ type: String, reflect: true })
  label?: string;

  /**
   * The type of the button.
   * @type {'button' | 'submit'}
   */
  @property({ type: String, reflect: true })
  type?: 'button' | 'submit';

  /**
   * The variant of the button.
   * Can be 'primary', 'secondary', or 'error'.
   * @type {string}
   */
  @property({ type: String, reflect: true })
  variant?: 'primary' | 'secondary' | 'error';

  static styles = css`
    ${unsafeCSS(fontStyles)}
    ${unsafeCSS(buttonStyles)}
  `;

  /*
   * Called between changes with attributes and render()
   */
  willUpdate(changedProperties: Map<string, unknown>) {
    const newState: Partial<PlButtonState> = {};

    // update for the internal state.
    if (changedProperties.has('disabled')) {
      newState.disabled = this.disabled ?? this._state.disabled;
    }
    if (changedProperties.has('label')) {
      newState.label = this.label ?? this._state.label;
    }
    if (changedProperties.has('type')) {
      newState.type = this.type ?? this._state.type;
    }
    if (changedProperties.has('variant')) {
      newState.variant = this.variant ?? this._state.variant;
    }

    // trigger change detection
    if (Object.keys(newState).length > 0) {
      this._state = { ...this._state, ...newState };
    }
  }

  render() {
    // console.log(
    //   'Rendering PlButton with RTL/Light/Dark/Id:',
    //   this.isRTL(),
    //   this.isLightMode(),
    //   this.isDarkMode(),
    //   IdUtils.generateId()
    // );

    return html`
      <button
        data-testid="button"
        part="button"
        type=${this._state.type}
        ?disabled=${this._state.disabled || this._state.isLoading}
        @click=${this._handleClick}
      >
        ${this._state.label ? html`${this._state.label}` : html`<slot></slot>`}
      </button>
    `;
  }

  private _handleClick(event: MouseEvent) {
    if (this._state.disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    this._emitEvent('pl-button-click');
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'pl-button': PlButton;
  }
  interface HTMLElementEventMap {
    'pl-button-click': PlButtonClickEvent;
  }
}
