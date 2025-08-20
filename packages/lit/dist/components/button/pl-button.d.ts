import { PlBase } from '../base/pl-base';
export type PlButtonClickEvent = CustomEvent<void>;
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
export declare class PlButton extends PlBase {
    /** @internal */
    private _state;
    /**
     * Whether the button is disabled.
     * @type {boolean}
     */
    disabled?: boolean;
    /**
     * The label for the button.
     * @type {string}
     */
    label?: string;
    /**
     * The type of the button.
     * @type {'button' | 'submit'}
     */
    type?: 'button' | 'submit';
    /**
     * The variant of the button.
     * Can be 'primary', 'secondary', or 'error'.
     * @type {string}
     */
    variant?: 'primary' | 'secondary' | 'error';
    static styles: import("lit").CSSResult;
    willUpdate(changedProperties: Map<string, unknown>): void;
    render(): import("lit-html").TemplateResult<1>;
    private _handleClick;
}
declare global {
    interface HTMLElementTagNameMap {
        'pl-button': PlButton;
    }
    interface HTMLElementEventMap {
        'pl-button-click': PlButtonClickEvent;
    }
}
//# sourceMappingURL=pl-button.d.ts.map