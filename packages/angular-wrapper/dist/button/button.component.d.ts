import { EventEmitter, ElementRef, AfterViewInit } from "@angular/core";
import type { PlButton as PlButtonWC } from "@liebherr2/plnext";
import * as i0 from "@angular/core";
export declare class PLButtonAngular implements AfterViewInit {
    buttonRef: ElementRef<PlButtonWC>;
    label: string;
    type: "button" | "submit" | "reset";
    disabled: boolean;
    plClick: EventEmitter<CustomEvent<any>>;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PLButtonAngular, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PLButtonAngular, "pl-button-angular", never, { "label": { "alias": "label"; "required": false; }; "type": { "alias": "type"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, { "plClick": "plClick"; }, never, ["*"], true, never>;
    static ngAcceptInputType_disabled: unknown;
}
