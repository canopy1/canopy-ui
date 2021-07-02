import { html, css, LitElement, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";

const inputTextCSS = css`
  :host {
    display: flex;
  }

  select {
    background-color: var(--cui-input-background-color);
    border-color: var(--cui-input-border-color);
    border-style: var(--cui-input-border-style);
    border-width: var(--cui-input-border-width);
    border-radius: var(--cui-input-border-radius);
    box-shadow: var(--cui-input-box-shadow);
    color: var(--cui-input-text-color);
    font-size: var(--cui-btn-font-size);
    min-height: var(--cui-input-height);
    height: var(--cui-input-height);
    line-height: var(--cui-input-line-height);
    padding: var(--cui-input-padding-vertical) var(--cui-input-padding-horizontal);
    transition: var(--cui-input-transition);
    width: 100%;
  }

  select:active,
  select:focus,
  select:focus-visible {
    border-color: var(--cui-input-border-color-active);
    box-shadow: var(--cui-input-box-shadow-active);
    outline: none;
  }
`

@customElement('cui-input-select')

export class inputSelect extends LitElement {
  static styles = inputTextCSS;

  @property({ attribute: 'class', type: String })
  public class = '';

  @property({ attribute: 'name', type: String })
  public name = '';

  @property({ attribute: 'value', type: String })
  public value = '';

  @property({ attribute: 'id', type: String })
  public id = '';

  @property({ attribute: 'required', type: Boolean })
  public required = null;

  @property({ attribute: 'disabled', type: Boolean })
  public disabled = null;

  @property({ attribute: 'items', type : Array }) 
  public items = [];

  private renderItem(item: string) {
    return html`
      <option>${item}</option>
    `;
  }

  render(): TemplateResult<1> {
    return html`
      <select
        class="${this.class}"
        name="${this.name}"
        id="${this.id}"
        ${this.required && 'required'}
        ${this.disabled && 'disabled'}
      >
        ${this.items.map(item => this.renderItem(item))}
      </select>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "cui-input-select": inputSelect;
  }
}
