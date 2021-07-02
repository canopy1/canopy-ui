import { html, css, LitElement, TemplateResult } from "lit";
import { customElement } from "lit/decorators.js";

export const cardCSS = css`
  :host {
    background-color: var(--cui-background-color-light);
    border-radius: var(--cui-border-radius);
    box-shadow: var(--cui-box-shadow);
    display: block;
    font-family: var(--cui-font-family-base);
    font-size: var(--cui-font-size-base);
    overflow: hidden;
  }
`

@customElement('cui-card')

export class Card extends LitElement {
  static styles = cardCSS;

  render(): TemplateResult<1> {
    return html`
      <slot></slot>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "cui-card": Card;
  }
}
