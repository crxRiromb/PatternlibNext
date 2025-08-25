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
import type { PlButton as PlButtonWC } from "@liebherr2/plnext";

@Component({
  selector: "pl-button-angular",
  standalone: true,
  template: `
    <pl-button #buttonRef [label]="_label" [type]="_type" [disabled]="disabled">
      <ng-content></ng-content>
    </pl-button>
  `,
  styles: [":host { display: inline-block; }"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PLButtonAngular implements AfterViewInit {
  @ViewChild("buttonRef") buttonRef!: ElementRef<PlButtonWC>;

  // --- Inputs ---

  protected _label: string = "Label";
  // Maps to the 'disabled' attribute of the web component.
  @Input({ transform: booleanAttribute }) disabled: boolean = false;

  // Maps to the 'label' attribute of the web component.
  @Input()
  set label(value: string | null | undefined) {
    this._label = value ?? "";
  }
  get label(): string {
    return this._label;
  }

  protected _type: "button" | "submit" = "button";
  // Maps to the 'type' attribute of the web component.
  @Input()
  set type(value: "button" | "submit" | null | undefined) {
    this._type = value ?? "button";
  }
  get type(): "button" | "submit" {
    return this._type;
  }

  // --- Outputs ---

  // Emits when the 'pl-button-click' event is fired by the web component.
  @Output() plClick = new EventEmitter<CustomEvent>();

  /* --- lifecycle hooks --- */
  ngAfterViewInit() {
    const nativeElement = this.buttonRef.nativeElement;
    nativeElement.addEventListener("pl-button-click", (event: Event) => {
      this.plClick.emit(event as CustomEvent);
    });
  }
}
