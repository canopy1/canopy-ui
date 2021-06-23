import { html, css, LitElement, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement("payment-details")
export class PaymentDetails extends LitElement {
  static styles = css`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `;

  /**
   * The name to say "Hello" to.
   */
  @property()
  public name = "Dave Arel";

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  public count = 0;

  render(): TemplateResult<1> {
    return html`
      <h1>Hello, ${this.name}!</h1>
      <button @click=${this._onClick} part="button">Click Count: ${this.count}</button>
      <slot></slot>
    `;
  }

  private _onClick() {
    this.count++;
  }

  foo(): string {
    return "foo";
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "payment-details": PaymentDetails;
  }
}
