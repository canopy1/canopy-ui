import { html, LitElement, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { centsToDollars } from "../../utils";
import { statCSS, statSmCSS, paymentDetailsCSS } from "./paymentDetails.css";
@customElement('cnpy-stat')
export class Stat extends LitElement {
  static styles = statCSS;

  @property({ attribute: 'label', type: String })
  public label = '';

  @property({ attribute: 'value', type: String })
  public value = '';

  @property({ attribute: 'currency', type: Boolean })
  public currency = false;

  render(): TemplateResult<1> {
    return html`
      <span part="label">${this.label}</span>
      <span part="value">${this.currency ? centsToDollars(Number(this.value)) : this.value}</span>
    `
  }
}

@customElement('cnpy-stat-sm')
export class StatSm extends Stat {
  static styles = statSmCSS
}

@customElement("cnpy-payment-details")
export class PaymentDetails extends LitElement {
  static styles = paymentDetailsCSS

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

    // Appears if no element with attr slot "top" given.
    const defaultTop = html`
      <cnpy-stat label="Amount" value="${this.amount}" currency=true></cnpy-stat>
      <cnpy-stat label="Credit Limit" value="${this.creditLimit}" currency=true></cnpy-stat>
    `;

    // Appears if no element with attr slot "bottom" given.
    const defaultBottom = html`
      <cnpy-stat-sm label="Available Credit" value="${this.availableCredit}" currency=true></cnpy-stat-sm>
      <cnpy-stat-sm label="Pending Charges" value="${this.pendingCharges}" currency=true></cnpy-stat-sm>
      <cnpy-stat-sm label="Promo Period Expiration" value="${this.promoExp}"></cnpy-stat-sm>
    `

    return html`
      <div>
        <slot name="top">${defaultTop}</slot>
        <slot name="bottom">${defaultBottom}</slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "cnpy-payment-details": PaymentDetails;
    "cnpy-stat": Stat,
    "cnpy-stat-sm": StatSm
  }
}
