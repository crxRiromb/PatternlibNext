import { Component, ChangeDetectionStrategy, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import '@liebherr2/plnext/button/pl-button.js';

@Component({
  selector: 'pl-button-angular',
  standalone: true,
  template: ` <pl-button [label]="label" [type]="type" [disabled]="disabled"></pl-button> `,
  styles: [':host { display: inline-block; }'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PLButtonAngular {
  @Input() label: string = 'Button';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled: boolean = false;
}
