import * as i0 from '@angular/core';

declare class PLButtonAngular {
    label: string;
    type: 'button' | 'submit' | 'reset';
    disabled: boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<PLButtonAngular, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PLButtonAngular, "pl-button-angular", never, { "label": { "alias": "label"; "required": false; }; "type": { "alias": "type"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, true, never>;
}

declare class PLIconAngular {
    alt: string;
    iconName: string;
    static ɵfac: i0.ɵɵFactoryDeclaration<PLIconAngular, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PLIconAngular, "pl-icon-angular", never, { "alt": { "alias": "alt"; "required": false; }; "iconName": { "alias": "iconName"; "required": false; }; }, {}, never, never, true, never>;
}

/**
 * Angular component wrapper for the `pl-itemlist` web component.
 * This component allows you to display a list of items with a headline.
 */
declare class PlItemlistAngular {
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

export { PLButtonAngular, PLIconAngular, PlItemlistAngular };
