import {
  Component,
  ChangeDetectionStrategy,
  Input,
  CUSTOM_ELEMENTS_SCHEMA,
  booleanAttribute,
} from "@angular/core";

@Component({
  selector: "pl-icon-angular",
  standalone: true,
  template: `
    <pl-icon
      [decorative]="decorative"
      [iconName]="_iconName"
      [label]="_label"
    ></pl-icon>
  `,
  styles: [":host { display: inline-block; }"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PLIconAngular {
  protected _iconName: string = "";
  protected _label: string = "";

  @Input({ transform: booleanAttribute }) decorative: boolean = false;

  @Input()
  set iconName(value: string | null | undefined) {
    this._iconName = value ?? "";
  }
  get iconName(): string {
    return this._iconName;
  }

  @Input()
  set label(value: string | null | undefined) {
    this._label = value ?? "";
  }
  get label(): string {
    return this._label;
  }
}
