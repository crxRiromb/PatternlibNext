import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild,
  AfterViewInit,
  CUSTOM_ELEMENTS_SCHEMA,
  booleanAttribute,
} from "@angular/core";
import type { PlButton } from "@liebherr2/plnext";

@Component({
  selector: "pl-button-angular",
  standalone: true,
  template: `
    <pl-button
      #elementRef
      [disabled]="disabled"
      [label]="_label"
      [type]="_type"
      [variant]="_variant"
    >
      <ng-content></ng-content>
    </pl-button>
  `,
  styles: [":host { display: inline-block; }"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PLButtonAngular implements AfterViewInit {
  @ViewChild("elementRef") elementRef!: ElementRef<PlButton>;

  // --- Inputs ---

  // Maps to the "disabled" attribute of the web component.
  @Input({ transform: booleanAttribute }) disabled: boolean = false;

  protected _label: string = "";
  // Maps to the "label" attribute of the web component.
  @Input()
  set label(value: string | null | undefined) {
    this._label = value ?? "";
  }
  get label(): string {
    return this._label;
  }

  protected _type: "button" | "submit" = "button";
  // Maps to the "type" attribute of the web component.
  @Input()
  set type(value: "button" | "submit" | null | undefined) {
    this._type = value ?? "button";
  }
  get type(): "button" | "submit" {
    return this._type;
  }

  protected _variant: "primary" | "secondary" | "error" = "primary";
  // Maps to the "variant" attribute of the web component.
  @Input()
  set variant(value: "primary" | "secondary" | "error" | null | undefined) {
    this._variant = value ?? "primary";
  }
  get variant(): "primary" | "secondary" | "error" {
    return this._variant;
  }

  // --- Outputs ---

  // Emits when the "pl-button-click" event is fired by the web component.
  @Output() plButtonClick = new EventEmitter<CustomEvent>();

  // --- Lifecycle hooks ---
  ngAfterViewInit() {
    const nativeElement = this.elementRef.nativeElement;

    nativeElement.addEventListener("pl-button-click", (event: Event) => {
      this.plButtonClick.emit(event as CustomEvent);
    });
  }
}
