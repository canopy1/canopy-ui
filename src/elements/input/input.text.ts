import { html, css, LitElement, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";

const inputTextCSS = css`
  :host {
    display: flex;
  }

  input {
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

  input:active,
  input:focus,
  input:focus-visible {
    border-color: var(--cui-input-border-color-active);
    box-shadow: var(--cui-input-box-shadow-active);
    outline: none;
  }

  input::placeholder {
    color: var(--cui-input-placeholder-color);
  }
`

@customElement('cui-input-text')

export class inputText extends LitElement {
  static styles = inputTextCSS;

  @property({ attribute: 'class', type: String })
  public class = '';

  @property({ attribute: 'type', type: String })
  public type = 'text';

  @property({ attribute: 'name', type: String })
  public name = '';

  @property({ attribute: 'value', type: String })
  public value = '';

  @property({ attribute: 'id', type: String })
  public id = '';

  @property({ attribute: 'placeholder', type: String })
  public placeholder = '';

  @property({ attribute: 'required', type: Boolean })
  public required = null;

  @property({ attribute: 'disabled', type: Boolean })
  public disabled = null;

  render(): TemplateResult<1> {
    return html`
      <input
        class="${this.class}"
        type="${this.type}"
        name="${this.name}"
        value="${this.value}"
        placeholder="${this.placeholder}"
        ${this.required && 'required'}
        ${this.disabled && 'disabled'}
      </input>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "cui-input-text": inputText;
  }
}
