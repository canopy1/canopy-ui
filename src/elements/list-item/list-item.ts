import { html, css, LitElement, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";

export const ListItemCSS = css`
  :host {
    color: var(--cui-text-color-body);
    font-family: var(--cui-font-family-base);
    font-size: var(--cui-font-size-base);
  }

  li {
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding: var(--cui-li-padding-vertical) var(--cui-li-padding-horizontal);
  }

  li.cui-li-alt-row {
    background-color: var(--cui-li-even-row-background-color);
  }

  li > strong {
    font-weight: var(--cui-li-label-font-weight);
    padding-left: var(--cui-spacing-2);
  } 
`

@customElement('cui-list-item')

export class ListItem extends LitElement {
  static styles = ListItemCSS;

  @property({ attribute: 'label', type: String })
  public label = '';

  @property({ attribute: 'alt', type: Boolean })
  public alt = null;

  render(): TemplateResult<1> {
    return html`
      <li class="${this.alt && 'cui-li-alt-row'}">
        <label>${this.label}</label>
        <strong><slot></slot></strong>
      </li>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "cui-list-item": ListItem;
  }
}
