import { PlBase } from '../base/pl-base';
export declare class PlIcon extends PlBase {
    /**
     * The alternative text for the icon.
     */
    alt: string;
    /**
     * The name of the icon to display.
     */
    iconName: string;
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'pl-icon': PlIcon;
    }
}
//# sourceMappingURL=pl-icon.d.ts.map