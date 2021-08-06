import { html, LitElement, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { paymentDetailsCSS } from "./acount_overview.css";

interface AccountOverviewPropObject {
  value: number;
  label?: string;
  size?: "small" | "large";
}

type RenderStatParam = number | AccountOverviewPropObject | undefined;

export interface AccountOverviewPropDetails {
  total_balance_cents?: RenderStatParam;
  principal_cents?: RenderStatParam;
  interest_balance_cents?: RenderStatParam;
  am_interest_balance_cents?: RenderStatParam;
  deferred_interest_balance_cents?: RenderStatParam;
  am_deferred_interest_balance_cents?: RenderStatParam;
  total_paid_to_date_cents?: RenderStatParam;
  total_interest_paid_to_date_cents?: RenderStatParam;
  credit_limit_cents?: RenderStatParam;
  max_approved_credit_limit_cents?: RenderStatParam;
  interest_rate_percent?: RenderStatParam;
  available_credit_cents?: RenderStatParam;
  pending_charges?: RenderStatParam;
  open_to_buy_cents?: RenderStatParam;
  total_payoff_cents?: RenderStatParam;
}

@customElement("cui-account-overview")
export class AccountOverview extends LitElement {
  static styles = paymentDetailsCSS;

  @property({ attribute: "card", type: Boolean })
  public card = false;

  @property({ attribute: "details", type: Object })
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
    total_payoff_cents: undefined,
  };

  private _renderStat(prop: RenderStatParam, placeholder: string) {
    if (typeof prop === "number") {
      return html` <cui-stat size="small" label=${placeholder} value="${prop}" currency="true"></cui-stat> `;
    } else if (prop === Object(prop) && prop !== null && prop !== undefined) {
      return html`
        <cui-stat
          size=${!prop.size ? "small" : prop.size}
          label=${prop.label ? prop.label : placeholder}
          value="${prop.value}"
          currency="true"
        ></cui-stat>
      `;
    } else {
      return null;
    }
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
      ${this._renderStat(total_balance_cents, "Current Balance")}
      ${this._renderStat(available_credit_cents, "Available Credit")}
      ${this._renderStat(credit_limit_cents, "Credit Limit")} ${this._renderStat(principal_cents, "Principal Balance")}
      ${this._renderStat(total_paid_to_date_cents, "Total Paid to Date")}
    `;

    // Appears if no element with attr slot "bottom" given.

    const defaultBottom = html`
      ${this._renderStat(pending_charges, "Pending Charges")}
      ${this._renderStat(total_interest_paid_to_date_cents, "Interest Paid to Date")}
      ${this._renderStat(interest_balance_cents, "Interest Balance")}
      ${this._renderStat(am_interest_balance_cents, "Interest Balance")}
      ${this._renderStat(deferred_interest_balance_cents, "Deferred Int. Balance")}
      ${this._renderStat(am_deferred_interest_balance_cents, "Deferred Int. Balance")}
      ${this._renderStat(max_approved_credit_limit_cents, "Max Approved Limit")}
      ${this._renderStat(interest_rate_percent, "Interest Rate")}
      ${this._renderStat(open_to_buy_cents, "Interest Rate")} ${this._renderStat(total_payoff_cents, "Interest Rate")}
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
