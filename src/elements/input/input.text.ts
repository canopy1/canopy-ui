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

  @property({ attribute: 'error', type: String })
  public error = '';

  @property({ attribute: 'id', type: String })
  public id = '';

  @property({ attribute: 'placeholder', type: String })
  public placeholder = '';

  @property({ attribute: 'required', type: Boolean })
  public required = false;

  @property({ attribute: 'disabled', type: Boolean })
  public disabled = false;

  constructor() {
    super()
    this._handleChange = this._handleChange.bind(this);
  }

  private _handleChange(e: { target: HTMLInputElement }) {
    this.dispatchEvent(new CustomEvent("change", { detail: { value: e.target.value } }))
  }

  render(): TemplateResult<1> {
    return html`
      ${this.error && html`<div>${this.error}</div>`}
      <input class="${this.class}" type="${this.type}" name="${this.name}" placeholder="${this.placeholder}"
        @keyup=${this._handleChange} ${this.required && 'required' } ${this.disabled && 'disabled' } </input>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "cui-input-text": inputText;
  }
}
