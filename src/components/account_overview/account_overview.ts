import { html, LitElement, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { paymentDetailsCSS } from "./acount_overview.css";

export interface AccountOverviewPropDetails {
  total_balance_cents: number;
  credit_limit_cents: number;
  available_credit_cents: number;
  pending_charges: number;
  promo_exclusive_end: string
}

@customElement("cui-account-overview")
export class AccountOverview extends LitElement {
  static styles = paymentDetailsCSS

  @property({ attribute: 'details', type: Object })
  public details: AccountOverviewPropDetails = {
    total_balance_cents: 0,
    credit_limit_cents: 0,
    available_credit_cents: 0,
    pending_charges: 0,
    promo_exclusive_end: "-"
  }

  render(): TemplateResult<1> {

    // Appears if no element with attr slot "top" given.
    const defaultTop = html`
      <cui-stat size="large" label="Current Balance" value="${this.details?.total_balance_cents}" currency=true></cui-stat>
      <cui-stat size="large" label="Credit Limit" value="${this.details?.credit_limit_cents}" currency=true></cui-stat>
    `;

    // Appears if no element with attr slot "bottom" given.
    const defaultBottom = html`
      <cui-stat size="small" label="Available Credit" value="${this.details?.available_credit_cents}" currency=true></cui-stat>
      <cui-stat size="small" label="Pending Charges" value="${this.details?.pending_charges}" currency=true></cui-stat>
      <cui-stat size="small" label="Promo Period Expiration" value="${this.details?.promo_exclusive_end}"></cui-stat>
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
