import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('my-element')
export class MyElement extends LitElement {
  @property({ type: String, attribute: 'component-id' })
  public componentId = 'default-id';

  @property({ type: Object, attribute: false })
  public data = { name: 'Default', value: 0 };

  render() {
    return html`<div>Hello, ${this.data.name}! ID: ${this.componentId}</div>`;
  }
}






import { Component, Input, ElementRef, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-my-component-wrapper',
  template: '<my-component [attr.component-id]="componentId"></my-component>',
})
export class MyComponentWrapper implements OnChanges {
  @Input() data: any;
  @Input() componentId: string;

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges) {
    const nativeElement = this.el.nativeElement.querySelector('my-component');

    if (nativeElement && changes['data']) {
      nativeElement.data = this.data;
    }
  }
}






import React, { useEffect, useRef } from 'react';

const MyComponentWrapper = ({ data, componentId }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.data = data;
    }
  }, [data]);

  return <my-component ref={ref} component-id={componentId}></my-component>;
};
