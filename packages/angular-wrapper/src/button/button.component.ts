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

  /* --- sanitized state --- */
  protected _label: string = "Label";
  protected _type: "button" | "submit" | "reset" = "button";

  /* --- string getter/setter with save guard ---- */
  @Input()
  set label(value: string | null | undefined) {
    this._label = value ?? "";
  }
  get label(): string {
    return this._label;
  }

  @Input()
  set type(value: "button" | "submit" | "reset" | null | undefined) {
    this._type = value ?? "button";
  }
  get type(): "button" | "submit" | "reset" {
    return this._type;
  }

  /* --- boolean inputs --- */
  @Input({ transform: booleanAttribute }) disabled: boolean = false;

  /* --- events --- */
  @Output() plClick = new EventEmitter<CustomEvent>();

  /* --- lifecycle hooks --- */
  ngAfterViewInit() {
    const nativeElement = this.buttonRef.nativeElement;
    nativeElement.addEventListener("pl-button-click", (event: Event) => {
      this.plClick.emit(event as CustomEvent);
    });
  }
}
