import {
  Component,
  ChangeDetectionStrategy,
  Input,
  CUSTOM_ELEMENTS_SCHEMA,
} from "@angular/core";

@Component({
  selector: "pl-icon-angular",
  standalone: true,
  template: ` <pl-icon [alt]="alt" [iconName]="iconName"></pl-icon> `,
  styles: [":host { display: inline-block; }"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PLIconAngular {
  @Input() alt: string = "Global Icon";
  @Input() iconName: string = "globe";
}
