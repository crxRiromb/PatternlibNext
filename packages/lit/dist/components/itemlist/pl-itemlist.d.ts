import { PlBase } from '../base/pl-base';
export declare class PlItemlist extends PlBase {
    /**
     * The label for the item list headline.
     */
    headlineLabel: string;
    /**
     * An array of objects to be rendered as a list.
     */
    data: {
        key: string;
        value: string;
    }[];
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'pl-itemlist': PlItemlist;
    }
}
//# sourceMappingURL=pl-itemlist.d.ts.map