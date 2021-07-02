import { html, css, LitElement, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";

export const buttonCSS = css`
  :host {
    display: block;
    overflow: hidden;
  }

  button {
    background-color: var(--cui-btn-background-color);
    border-color: var(--cui-btn-border-color);
    border-style: var(--cui-btn-border-style);
    border-width: var(--cui-btn-border-width);
    border-radius: var(--cui-border-radius-sm);
    box-shadow: var(--cui-btn-box-shadow);
    color: var(--cui-btn-text-color);
    cursor: pointer;
    display: block;
    font-size: var(--cui-btn-font-size);
    font-weight: var(--cui-font-weight-bold);
    min-height: var(--cui-btn-height);
    outline: var(--cui-btn-outline);
    transition: var(--cui-btn-transition);
    width: 100%;
  }

  button span {
    display: block;
    padding: var(--cui-btn-padding-vertical) var(--cui-btn-padding-horizontal);
  }

  button:hover {
    background-color: var(--cui-btn-background-color-hover);
  }

  button:active,
  button:focus,
  button:focus-visible {
    box-shadow: var(--cui-btn-box-shadow-active);
  }
`

@customElement('cui-btn')

export class Button extends LitElement {
  static styles = buttonCSS;

  @property({ attribute: 'type', type: String })
  public type = 'button';

  @property({ attribute: 'name', type: String })
  public name = '';

  @property({ attribute: 'value', type: String })
  public value = '';

  @property({ attribute: 'class', type: String })
  public class = '';

  @property({ attribute: 'disabled', type: String })
  public disabled = 'false';

  @property({ attribute: 'icon', type: String })
  public icon = '';

  render(): TemplateResult<1> {
    return html`
      <button
        class="cui-btn ${this.class}"
        icon="${this.icon}"
        name="${this.name}"
        value="${this.value}"
        type="${this.type}"
        disabled="${this.disabled}"
      >
          <span><slot></slot></span>
      </button>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "cui-btn": Button;
  }
}
