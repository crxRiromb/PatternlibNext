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
    <pl-button #buttonRef [label]="label" [type]="type" [disabled]="disabled">
      <ng-content></ng-content>
    </pl-button>
  `,
  styles: [":host { display: inline-block; }"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PLButtonAngular implements AfterViewInit {
  @ViewChild("buttonRef") buttonRef!: ElementRef<PlButtonWC>;

  @Input() label: string = "Button";
  @Input() type: "button" | "submit" | "reset" = "button";
  @Input({ transform: booleanAttribute }) disabled: boolean = false; // disabled in <pl-button-angular disabled> is correctly interpreted as true

  @Output() plClick = new EventEmitter<CustomEvent>();

  ngAfterViewInit() {
    const nativeElement = this.buttonRef.nativeElement;
    nativeElement.addEventListener("pl-button-click", (event: Event) => {
      this.plClick.emit(event as CustomEvent);
    });
  }
}
