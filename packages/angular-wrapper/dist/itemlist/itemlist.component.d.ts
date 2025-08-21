import * as i0 from "@angular/core";
export declare class PlItemlistAngular {
    /**
     * The headline for the list. Passed as an attribute.
     */
    headlineLabel: string;
    /**
     * The array of items to display. Passed as a property.
     */
    data: {
        key: string;
        value: string;
    }[];
    static ɵfac: i0.ɵɵFactoryDeclaration<PlItemlistAngular, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PlItemlistAngular, "pl-itemlist-angular", never, { "headlineLabel": { "alias": "headlineLabel"; "required": false; }; "data": { "alias": "data"; "required": false; }; }, {}, never, never, true, never>;
}
