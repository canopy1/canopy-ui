import { html, css, LitElement, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { rightArrowSVG } from "../../icons/inline";

export const ListItemCSS = css`
  :host {
    color: var(--cui-text-color-body);
    display: block;
    font-family: var(--cui-font-family-base);
    font-size: var(--cui-font-size-base);
    line-height: var(--cui-line-height-base);
  }

  li {
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding: var(--cui-li-padding-vertical) var(--cui-li-padding-horizontal);
  }

  li > strong {
    font-weight: var(--cui-li-label-font-weight);
    padding-left: var(--cui-spacing-2);
  }

  span.cui-list-item-arrow {
    align-items: center;
    display: flex;
    opacity: var(--cui-li-arrow-opacity);
    position: relative;
    right: -10px;
    transition: var(--cui-li-transition);
  }

  span.cui-list-item-arrow svg path {
    fill: var(--cui-li-arrow-color);
  }

  li.cui-li-clickable {
    cursor: pointer;
    transition: var(--cui-li-transition);
  }

  li.cui-li-clickable:hover {
    background-color: var(--cui-li-hover-background-color);
  }

  li.cui-li-clickable:hover span.cui-list-item-arrow {
    opacity: var(--cui-li-arrow-opacity-hover);
  }
`

@customElement('cui-list-item')

export class ListItem extends LitElement {
  static styles = ListItemCSS;

  @property({ attribute: 'label', type: String })
  public label = '';

  @property({ attribute: 'alt', type: Boolean })
  public alt = null;

  @property({ attribute: 'clickable', type: Boolean })
  public clickable = null;

  render(): TemplateResult<1> {
    return html`
      <li class="${this.clickable && 'cui-li-clickable'}">
        ${this.label && html`<label>${this.label}</label>`}
        ${this.label && html`<strong>`}<slot></slot>${this.label && html`</strong>`}
        ${this.clickable && html`<span class="cui-list-item-arrow">${rightArrowSVG}</span>`}
      </li>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "cui-list-item": ListItem;
  }
}
