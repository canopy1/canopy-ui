import { html, LitElement, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { paymentDetailsCSS } from "./acount_overview.css";

export interface AccountOverviewPropDetails {
  total_balance_cents?: number;
  principal_cents?: number;
  interest_balance_cents?: number;
  am_interest_balance_cents?: number;
  deferred_interest_balance_cents?: number;
  am_deferred_interest_balance_cents?: number;
  total_paid_to_date_cents?: number;
  total_interest_paid_to_date_cents?: number;
  credit_limit_cents?: number;
  max_approved_credit_limit_cents?: number;
  interest_rate_percent?: number;
  available_credit_cents?: number;
  pending_charges?: number;
  open_to_buy_cents?: number;
  total_payoff_cents?: number;
}

@customElement("cui-account-overview")
export class AccountOverview extends LitElement {
  static styles = paymentDetailsCSS

  @property({ attribute: 'card', type: Boolean })
  public card = false;

  @property({ attribute: 'details', type: Object })
  public details: AccountOverviewPropDetails = {
    total_balance_cents: undefined,
    principal_cents: undefined,
    interest_balance_cents: undefined,
    am_interest_balance_cents: undefined,
    deferred_interest_balance_cents: undefined,
    am_deferred_interest_balance_cents: undefined,
    total_paid_to_date_cents: undefined,
    total_interest_paid_to_date_cents: undefined,
    credit_limit_cents: undefined,
    max_approved_credit_limit_cents: undefined,
    interest_rate_percent: undefined,
    available_credit_cents: undefined,
    pending_charges: undefined,
    open_to_buy_cents: undefined,
    total_payoff_cents: undefined
  }

  render(): TemplateResult<1> {
    const total_balance_cents = this.details?.total_balance_cents;
    const principal_cents = this.details?.principal_cents;
    const interest_balance_cents = this.details?.interest_balance_cents;
    const am_interest_balance_cents = this.details?.am_interest_balance_cents;
    const deferred_interest_balance_cents = this.details?.deferred_interest_balance_cents;
    const am_deferred_interest_balance_cents = this.details?.am_deferred_interest_balance_cents;
    const total_paid_to_date_cents = this.details?.total_paid_to_date_cents;
    const total_interest_paid_to_date_cents = this.details?.total_interest_paid_to_date_cents;
    const credit_limit_cents = this.details?.credit_limit_cents;
    const max_approved_credit_limit_cents = this.details?.max_approved_credit_limit_cents;
    const interest_rate_percent = this.details?.interest_rate_percent;
    const available_credit_cents = this.details?.available_credit_cents;
    const pending_charges = this.details?.pending_charges;
    const open_to_buy_cents = this.details?.open_to_buy_cents;
    const total_payoff_cents = this.details?.total_payoff_cents;

    // Appears if no element with attr slot "top" given.
    const defaultTop = html`
      ${ total_balance_cents !== undefined ? html`<cui-stat size="large" label="Current Balance" value="${total_balance_cents}" currency=true></cui-stat>` : null }
      ${ available_credit_cents !== undefined ? html`<cui-stat size="large" label="Available Credit" value="${available_credit_cents}" currency=true ></cui-stat>` : null }
      ${ credit_limit_cents !== undefined ? html`<cui-stat size="large" label="Credit Limit" value="${credit_limit_cents}" currency=true></cui-stat>` : null }
      ${ principal_cents !== undefined ? html`<cui-stat size="large" label="Principal Balance" value="${principal_cents}" currency=true></cui-stat>` : null }
      ${ total_paid_to_date_cents !== undefined ? html`<cui-stat size="large" label="Total Paid to Date" value="${total_paid_to_date_cents}" currency=true ></cui-stat>` : null }
    `;

    // Appears if no element with attr slot "bottom" given.
    const defaultBottom = html`
      ${ pending_charges !== undefined ? html`<cui-stat size="small" label="Pending Charges" value="${pending_charges}" currency=true ></cui-stat>` : null }
      ${ total_interest_paid_to_date_cents !== undefined ? html`<cui-stat size="small" label="Interest Paid to Date" value="${total_interest_paid_to_date_cents}" currency=true ></cui-stat>` : null }
      ${ interest_balance_cents !== undefined ? html`<cui-stat size="small" label="Interest Balance" value="${interest_balance_cents}" currency=true ></cui-stat>` : null }
      ${ am_interest_balance_cents !== undefined ? html`<cui-stat size="small" label="Interest Balance" value="${am_interest_balance_cents}" currency=true ></cui-stat>` : null }
      ${ deferred_interest_balance_cents !== undefined ? html`<cui-stat size="small" label="Deferred Int. Balance" value="${deferred_interest_balance_cents}" currency=true ></cui-stat>` : null }
      ${ am_deferred_interest_balance_cents !== undefined ? html`<cui-stat size="small" label="Deferred Int. Balance" value="${am_deferred_interest_balance_cents}" currency=true ></cui-stat>` : null }
      ${ max_approved_credit_limit_cents !== undefined ? html`<cui-stat size="small" label="Max Approved Limit" value="${max_approved_credit_limit_cents}" currency=true ></cui-stat>` : null }
      ${ interest_rate_percent !== undefined ? html`<cui-stat size="small" label="Interest Rate" value="${interest_rate_percent}%" ></cui-stat>` : null }
      ${ open_to_buy_cents !== undefined ? html`<cui-stat size="small" label="Interest Rate" value="${open_to_buy_cents}" currency=true ></cui-stat>` : null }
      ${ total_payoff_cents !== undefined ? html`<cui-stat size="small" label="Interest Rate" value="${total_payoff_cents}" currency=true ></cui-stat>` : null }
    `;

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
