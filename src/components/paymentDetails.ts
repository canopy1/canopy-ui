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

  @property({ attribute: 'amount', type: Number })
  public amount = 0;

  @property({ attribute: 'credit-limit', type: Number })
  public creditLimit = 0;

  @property({ attribute: 'available-credit', type: Number })
  public availableCredit = 0;

  @property({ attribute: 'pending-charges', type: Number })
  public pendingCharges = 0;

  @property({ attribute: 'promo-exp', type: String })
  public promoExp = '';

  render(): TemplateResult<1> {
    return html`
      <div>
        <div>
          <div>
            <span>Current Balance</span>
            <span>${centsToDollars(this.amount)}</span>
          </div>
          <div>
            <span>Credit Limit</span>
            <span>${centsToDollars(this.creditLimit)}</span>
          </div>
        </div>
        <div>
          <div>
            <span>Available Credit</span>
            <span>${centsToDollars(this.availableCredit)}</span>
          </div>
          <div>
            <span>Pending Charges</span>
            <span>${centsToDollars(this.pendingCharges)}</span>
          </div>
          <div>
            <span>Promo Period Expiration</span>
            <span>${this.promoExp}</span>
          </div>
        </div>
      </div>
    `;
  }
}

function centsToDollars(amount: number) {
  return `$${parseFloat(String(amount / 100)).toFixed(2)}`;
}

declare global {
  interface HTMLElementTagNameMap {
    "payment-details": PaymentDetails;
  }
}
