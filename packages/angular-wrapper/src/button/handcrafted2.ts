import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  CUSTOM_ELEMENTS_SCHEMA,
  booleanAttribute,
} from "@angular/core";

// Side-effect import: registers this web component once at runtime
import "@liebherr2/plnext/components/button/pl-button.js";

@Component({
  selector: "pl-button-angular",
  standalone: true,
  template: `
    <pl-button
      #elementRef
      [attr.disabled]="disabled ? '' : null"
      [attr.label]="_label"
      [attr.type]="_type"
      [attr.variant]="_variant"
      (pl-button-click)="plButtonClick.emit($event)"
    >
      <ng-content></ng-content>
    </pl-button>
  `,
  styles: [":host { display: inline-block; }"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PlButtonAngular {
  // --- Inputs (simple attributes) ---

  /** Maps to the "disabled" boolean attribute (present if true, absent if false). */
  @Input({ transform: booleanAttribute }) disabled: boolean = false;

  protected _label: string = "";
  /** Maps to the "label" string attribute. */
  @Input()
  set label(value: string | null | undefined) {
    this._label = (value ?? "") as string;
  }
  get label(): string {
    return this._label;
  }

  protected _type: string = "button";
  /** Maps to the "type" string attribute. */
  @Input()
  set type(value: string | null | undefined) {
    this._type = (value ?? "button") as string;
  }
  get type(): string {
    return this._type;
  }

  protected _variant: string = "primary";
  /** Maps to the "variant" string attribute. */
  @Input()
  set variant(value: string | null | undefined) {
    this._variant = (value ?? "primary") as string;
  }
  get variant(): string {
    return this._variant;
  }

  // --- Inputs (complex properties) ---

  // --- Outputs ---

  /** Emits when the "pl-button-click" event is fired by the web component. */
  @Output() plButtonClick = new EventEmitter<CustomEvent<any>>();
}
