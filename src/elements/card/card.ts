import { html, css, LitElement, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";

export const cardCSS = css`
  :host {
    background-color: var(--cui-card-background-color);
    border-radius: var(--cui-card-border-radius);
    box-shadow: var(--cui-card-box-shadow);
    display: block;
    font-family: var(--cui-font-family-base);
    font-size: var(--cui-font-size-base);
    line-height: var(--cui-line-height-base);
    overflow: hidden;
    width: 100%;
  }
`

export const cardHeaderCSS = css`
  :host {
    align-items: center;
    border-bottom: var(--cui-card-header-border);
    color: var(--cui-text-color-headers);
    display: flex;
    font-size: var(--cui-card-header-font-size);
    font-weight: var(--cui-font-weight-semibold);
    justify-content: space-between;
    padding: var(--cui-card-header-padding);
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

@customElement('cui-card-header')
export class CardHeader extends LitElement {
  static styles = cardHeaderCSS;

  @property({ attribute: 'title', type: String })
<<<<<<< HEAD
  public title = '';
=======
  public name = '';
>>>>>>> 27d99b76c19490ffd6436ebef7a68c41cb6d12a3

  render(): TemplateResult<1> {
    return html`
      <strong>${this.title}</strong>
      <slot></slot>      
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "cui-card": Card;
    "cui-card-header": CardHeader;
  }
}
