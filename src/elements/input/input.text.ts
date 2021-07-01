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

  @property({ attribute: 'name', type: String })
  public name = '';

  @property({ attribute: 'value', type: String })
  public value = '';

  @property({ attribute: 'placeholder', type: String })
  public placeholder = '';

  render(): TemplateResult<1> {
    return html`
      <input
        class="cui-input-text ${this.class}"
        type="text"
        name="${this.name}"
        value="${this.value}"
        placeholder="${this.placeholder}"
      </input>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "cui-input-text": inputText;
  }
}
