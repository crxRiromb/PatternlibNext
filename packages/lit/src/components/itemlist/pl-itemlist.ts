import { css, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';
import { PlBase } from '../base/pl-base';
import itemlistStyles from './pl-itemlist.scss?raw';

@customElement('pl-itemlist')
export class PlItemlist extends PlBase {
  /**
   * The label for the item list headline.
   */
  @property({ type: String, attribute: 'headline-label' })
  headlineLabel = '';

  /**
   * An array of objects to be rendered as a list.
   */
  @property({ type: Array, attribute: false })
  public data: { key: string; value: string }[] = [];

  static styles = css`
    ${unsafeCSS(itemlistStyles)}
  `;

  render() {
    return html`
      <div class="item-list">
        ${this.headlineLabel ? html`<h3 class="headline">${this.headlineLabel}</h3>` : ''}

        <ul>
          ${map(this.data, item => html`<li>${item.value}</li>`)}
        </ul>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'pl-itemlist': PlItemlist;
  }
}
