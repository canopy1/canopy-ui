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

export interface PaymentDetailsProp {
  amount: number;
  credit_limit: number;
  available_credit: number;
  pending_charges: number;
  promo_exp: string
}

@customElement("cui-payment-details")
export class PaymentDetails extends LitElement {
  static styles = paymentDetailsCSS

  @property({ attribute: 'details', type: Object })
  public details: PaymentDetailsProp = {
    amount: 0,
    credit_limit: 0,
    available_credit: 0,
    pending_charges: 0,
    promo_exp: "-"
  }

  render(): TemplateResult<1> {

    // Appears if no element with attr slot "top" given.
    const defaultTop = html`
      <cui-stat label="Amount" value="${this.details.amount}" currency=true></cui-stat>
      <cui-stat label="Credit Limit" value="${this.details.credit_limit}" currency=true></cui-stat>
    `;

    // Appears if no element with attr slot "bottom" given.
    const defaultBottom = html`
      <cui-stat-sm label="Available Credit" value="${this.details.available_credit}" currency=true></cui-stat-sm>
      <cui-stat-sm label="Pending Charges" value="${this.details.pending_charges}" currency=true></cui-stat-sm>
      <cui-stat-sm label="Promo Period Expiration" value="${this.details.promo_exp}"></cui-stat-sm>
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
