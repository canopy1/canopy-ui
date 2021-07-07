import { html, LitElement, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { paymentDetailsCSS } from "./acount_overview.css";

export interface AccountOverviewPropDetails {
  amount: number;
  credit_limit: number;
  available_credit: number;
  pending_charges: number;
  promo_exp: string
}

@customElement("cui-account-overview")
export class AccountOverview extends LitElement {
  static styles = paymentDetailsCSS

  @property({ attribute: 'details', type: Object })
  public details: AccountOverviewPropDetails = {
    amount: 0,
    credit_limit: 0,
    available_credit: 0,
    pending_charges: 0,
    promo_exp: "-"
  }

  render(): TemplateResult<1> {

    // Appears if no element with attr slot "top" given.
    const defaultTop = html`
      <cui-stat size="large" label="Amount" value="${this.details?.amount}" currency=true></cui-stat>
      <cui-stat size="large" label="Credit Limit" value="${this.details?.credit_limit}" currency=true></cui-stat>
    `;

    // Appears if no element with attr slot "bottom" given.
    const defaultBottom = html`
      <cui-stat size="small" label="Available Credit" value="${this.details?.available_credit}" currency=true></cui-stat>
      <cui-stat size="small" label="Pending Charges" value="${this.details?.pending_charges}" currency=true></cui-stat>
      <cui-stat size="small" label="Promo Period Expiration" value="${this.details?.promo_exp}"></cui-stat>
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
    "cui-account-overview": AccountOverview;
  }
}
