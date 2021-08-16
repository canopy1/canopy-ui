import { html, LitElement, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { paymentDetailsCSS } from "./acount_overview.css";

interface AccountOverviewPropObject {
  value: number;
  label?: string;
}

type RenderStatParam = number | AccountOverviewPropObject;

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
  pending_charges_cents?: RenderStatParam;
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
    pending_charges_cents: undefined,
    open_to_buy_cents: undefined,
    total_payoff_cents: undefined,
  };

  private _renderStat(
    placeholder: string,
    currency: boolean,
    position: "primary" | "secondary",
    prop?: RenderStatParam
  ) {
    if (typeof prop === "number") {
      return html`
        <cui-stat
          size=${position === "primary" ? "large" : "small"}
          label=${placeholder}
          value="${prop}"
          ?currency=${currency}
        ></cui-stat>
      `;
    } else if (prop === Object(prop) && prop !== null && prop !== undefined) {
      return html`
        <cui-stat
          size=${position === "primary" ? "large" : "small"}
          label=${prop.label ? prop.label : placeholder}
          value="${prop.value}"
          ?currency=${currency}
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
    const pending_charges_cents = this.details?.pending_charges_cents;
    const open_to_buy_cents = this.details?.open_to_buy_cents;
    const total_payoff_cents = this.details?.total_payoff_cents;

    // Appears if no element with attr slot "top" given.

    const defaultTop = html`
      ${this._renderStat("Current Balance", true, "primary", total_balance_cents)}
      ${this._renderStat("Available Credit", true, "primary", available_credit_cents)}
      ${this._renderStat("Credit Limit", true, "primary", credit_limit_cents)}
      ${this._renderStat("Principal Balance", true, "primary", principal_cents)}
      ${this._renderStat("Total Paid to Date", true, "primary", total_paid_to_date_cents)}
    `;

    // Appears if no element with attr slot "bottom" given.

    const defaultBottom = html`
      ${this._renderStat("Pending Charges", true, "secondary", pending_charges_cents)}
      ${this._renderStat("Interest Paid to Date", true, "secondary", total_interest_paid_to_date_cents)}
      ${this._renderStat("Interest Balance", true, "secondary", interest_balance_cents)}
      ${this._renderStat("Interest Balance", true, "secondary", am_interest_balance_cents)}
      ${this._renderStat("Deferred Int. Balance", true, "secondary", deferred_interest_balance_cents)}
      ${this._renderStat("Deferred Int. Balance", true, "secondary", am_deferred_interest_balance_cents)}
      ${this._renderStat("Max Approved Limit", true, "secondary", max_approved_credit_limit_cents)}
      ${this._renderStat("Interest Rate", false, "secondary", interest_rate_percent)}
      ${this._renderStat("Interest Rate", false, "secondary", open_to_buy_cents)}
      ${this._renderStat("Interest Rate", false, "secondary", total_payoff_cents)}
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
