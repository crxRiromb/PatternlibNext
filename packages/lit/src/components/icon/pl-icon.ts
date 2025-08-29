import { css, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { until } from 'lit/directives/until.js';
import { PlBase } from '../base/pl-base';
import { iconService } from './icon-service';
import iconStyles from './pl-icon.scss?raw';

/**
 * The `pl-icon` component displays icons from a predefined set.
 *
 * ## Accessibility & Behavior Modes
 *
 * The combination of `decorative` and `interactive` defines one of three modes:
 * 1. **Decorative** (`decorative=true`)
 *    - Icon is hidden from assistive technologies (`aria-hidden="true"`, `role="presentation"`).
 *    - No accessible label.
 *    - No interactivity.
 * 2. **Informative (non-interactive)** (`decorative=false`, `interactive=false`)
 *    - Icon is exposed as an image (`role="img"`).
 *    - Requires an accessible label via `label` (or falls back to `iconName`).
 *    - No click or keyboard interaction.
 * 3. **Interactive** (`decorative=false`, `interactive=true`)
 *    - Icon is exposed as a button (`role="button"`, `tabindex="0"`).
 *    - Requires an accessible label via `label` (or falls back to `iconName`).
 *    - Emits `pl-icon-click` on click, Enter, or Space.
 *
 * ## Events
 * - `pl-icon-click` — fired when the icon is activated in interactive mode.
 *
 * @csspart wrapper - The wrapper <div> around the SVG icon. Can be used to pierce the shadow DOM and override styling (color, size, etc.).
 * @fires pl-icon-click - Emitted when the icon is activated (click, Enter/Space) while interactive.
 */
@customElement('pl-icon')
export class PlIcon extends PlBase {
  /**
   * Marks the icon as purely decorative (hidden from assistive tech).
   * When true: aria-hidden="true", role="presentation", no interactivity.
   */
  @property({ type: Boolean, reflect: true })
  decorative = false;

  /**
   * The name of the icon to display.
   */
  @property({ type: String, reflect: true })
  iconName = '';

  /**
   * Enables interactive behavior (keyboard + click) when not decorative.
   * When true (and decorative is false): role="button", tabindex="0".
   */
  @property({ type: Boolean, reflect: true })
  interactive = false;

  /**
   * The accessible label when not decorative.
   * If empty, falls back to iconName.
   */
  @property({ type: String })
  label = '';

  static styles = css`
    ${unsafeCSS(iconStyles)}
  `;

  render() {
    const svgContentPromise = iconService.getSvgContent(this.iconName);

    // Effective state resolution
    const isDecorative = this.decorative === true;
    const isInteractive = !isDecorative && this.interactive === true;

    // Accessible label only when not decorative
    const accessibleLabel = !isDecorative ? this.label?.trim() || this.iconName : undefined;

    // Role & focusability matrix
    const role = isDecorative ? 'presentation' : isInteractive ? 'button' : 'img';
    const tabIndex = isInteractive ? '0' : undefined;

    return html`
      <div
        aria-label=${ifDefined(accessibleLabel)}
        aria-hidden=${ifDefined(isDecorative ? 'true' : undefined)}
        class="wrapper"
        data-testid="wrapper"
        part="wrapper"
        role=${role}
        tabindex=${ifDefined(tabIndex)}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @keyup=${this.handleKeyUp}
      >
        ${until(
          svgContentPromise.then(svg => unsafeHTML(svg)),
          html`<span class="placeholder"></span>`
        )}
      </div>
    `;
  }

  /** @internal */
  private handleClick = (event: MouseEvent) => {
    // Only emit when interactive (and thus not decorative)
    if (!this.interactive || this.decorative) return;
    event.stopPropagation();
    this._emitEvent('pl-icon-click', { iconName: this.iconName });
  };

  /**
   * @internal
   * Keyboard: Enter on keydown, Space on keyup (button-like behavior).
   */
  private handleKeyDown = (event: KeyboardEvent) => {
    if (!this.interactive || this.decorative) return;

    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      this._emitEvent('pl-icon-click', { iconName: this.iconName });
    }
    if (event.key === ' ') {
      // Prevent page scroll; actual activation on keyup (Space)
      event.preventDefault();
      event.stopPropagation();
    }
  };

  /** @internal */
  private handleKeyUp = (event: KeyboardEvent) => {
    if (!this.interactive || this.decorative) return;

    if (event.key === ' ') {
      event.preventDefault();
      event.stopPropagation();
      this._emitEvent('pl-icon-click', { iconName: this.iconName });
    }
  };
}

declare global {
  interface HTMLElementTagNameMap {
    'pl-icon': PlIcon;
  }
  interface GlobalEventHandlersEventMap {
    'pl-icon-click': CustomEvent<{ iconName: string }>;
  }
}
