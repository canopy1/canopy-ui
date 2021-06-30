import { html, LitElement, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { centsToDollars } from "../../utils";
import { statCSS, statSmCSS, paymentDetailsCSS } from "./payment_details.css";

@customElement('cui-stat')
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

@customElement('cui-stat-sm')
export class StatSm extends Stat {
  static styles = statSmCSS
}

@customElement("cui-payment-details")
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
      <cui-stat label="Amount" value="${this.amount}" currency=true></cui-stat>
      <cui-stat label="Credit Limit" value="${this.creditLimit}" currency=true></cui-stat>
    `;

    // Appears if no element with attr slot "bottom" given.
    const defaultBottom = html`
      <cui-stat-sm label="Available Credit" value="${this.availableCredit}" currency=true></cui-stat-sm>
      <cui-stat-sm label="Pending Charges" value="${this.pendingCharges}" currency=true></cui-stat-sm>
      <cui-stat-sm label="Promo Period Expiration" value="${this.promoExp}"></cui-stat-sm>
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
    "cui-payment-details": PaymentDetails;
    "cui-stat": Stat,
    "cui-stat-sm": StatSm
  }
}
