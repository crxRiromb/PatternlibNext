import * as i0 from '@angular/core';
import { Input, CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy, Component } from '@angular/core';

// import "@liebherr2/plnext/components/button/pl-button.js";
class PLButtonAngular {
    label = "Button";
    type = "button";
    disabled = false;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PLButtonAngular, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: PLButtonAngular, isStandalone: true, selector: "pl-button-angular", inputs: { label: "label", type: "type", disabled: "disabled" }, ngImport: i0, template: `
    <pl-button [label]="label" [type]="type" [disabled]="disabled"></pl-button>
  `, isInline: true, styles: [":host{display:inline-block}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PLButtonAngular, decorators: [{
            type: Component,
            args: [{ selector: "pl-button-angular", standalone: true, template: `
    <pl-button [label]="label" [type]="type" [disabled]="disabled"></pl-button>
  `, changeDetection: ChangeDetectionStrategy.OnPush, schemas: [CUSTOM_ELEMENTS_SCHEMA], styles: [":host{display:inline-block}\n"] }]
        }], propDecorators: { label: [{
                type: Input
            }], type: [{
                type: Input
            }], disabled: [{
                type: Input
            }] } });

// import "@liebherr2/plnext/components/icon/pl-icon.js";
class PLIconAngular {
    alt = "Global Icon";
    iconName = "globe";
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PLIconAngular, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: PLIconAngular, isStandalone: true, selector: "pl-icon-angular", inputs: { alt: "alt", iconName: "iconName" }, ngImport: i0, template: ` <pl-icon [alt]="alt" [iconName]="iconName"></pl-icon> `, isInline: true, styles: [":host{display:inline-block}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PLIconAngular, decorators: [{
            type: Component,
            args: [{ selector: "pl-icon-angular", standalone: true, template: ` <pl-icon [alt]="alt" [iconName]="iconName"></pl-icon> `, changeDetection: ChangeDetectionStrategy.OnPush, schemas: [CUSTOM_ELEMENTS_SCHEMA], styles: [":host{display:inline-block}\n"] }]
        }], propDecorators: { alt: [{
                type: Input
            }], iconName: [{
                type: Input
            }] } });

// import "@liebherr2/plnext/components/itemlist/pl-itemlist.js";
/**
 * Angular component wrapper for the `pl-itemlist` web component.
 * This component allows you to display a list of items with a headline.
 */
class PlItemlistAngular {
    /**
     * The headline for the list. Passed as an attribute.
     */
    headlineLabel = "";
    /**
     * The array of items to display. Passed as a property.
     */
    data = [];
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlItemlistAngular, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: PlItemlistAngular, isStandalone: true, selector: "pl-itemlist-angular", inputs: { headlineLabel: "headlineLabel", data: "data" }, ngImport: i0, template: `
    <pl-itemlist
      [attr.headline-label]="headlineLabel"
      [data]="data"
    ></pl-itemlist>
  `, isInline: true, styles: [":host{display:block}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PlItemlistAngular, decorators: [{
            type: Component,
            args: [{ selector: "pl-itemlist-angular", standalone: true, template: `
    <pl-itemlist
      [attr.headline-label]="headlineLabel"
      [data]="data"
    ></pl-itemlist>
  `, changeDetection: ChangeDetectionStrategy.OnPush, schemas: [CUSTOM_ELEMENTS_SCHEMA], styles: [":host{display:block}\n"] }]
        }], propDecorators: { headlineLabel: [{
                type: Input
            }], data: [{
                type: Input
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { PLButtonAngular, PLIconAngular, PlItemlistAngular };
//# sourceMappingURL=liebherr2-angularnext.mjs.map
