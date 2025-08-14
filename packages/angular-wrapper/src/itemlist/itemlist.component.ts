import {
  Component,
  ChangeDetectionStrategy,
  Input,
  CUSTOM_ELEMENTS_SCHEMA,
} from "@angular/core";
import "@liebherr2/plnext/components/itemlist/pl-itemlist.js";

/**
 * Angular component wrapper for the `pl-itemlist` web component.
 * This component allows you to display a list of items with a headline.
 */
@Component({
  selector: "pl-itemlist-angular",
  standalone: true,
  // Since headline-label is an HTML attribute, we use attr.headline-label to bind it safely.
  // Since data is an array (i.e., a complex object), it is bound to the web component as a property.
  template: `
    <pl-itemlist
      [attr.headline-label]="headlineLabel"
      [data]="data"
    ></pl-itemlist>
  `,
  styles: [":host { display: block; }"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PlItemlistAngular {
  /**
   * The headline for the list. Passed as an attribute.
   */
  @Input() headlineLabel: string = "";

  /**
   * The array of items to display. Passed as a property.
   */
  @Input() data: { key: string; value: string }[] = [];
}
