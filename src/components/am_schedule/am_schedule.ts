import { html, LitElement, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { amScheduleCSS } from "./am_schedule.css";
import { centsToDollars } from "../../utils";

import checkIcon from "../../icons/check-light.svg";

// NOTE: First column is unlabeled but contains status symbols
const headerLabels = ["", "Date", "Amount Due", "Paid", "Interest", "Principal", "End Balance"];

interface AmScheduleItem {
  "line_item_id": number,
  "cycle_exclusive_end": string,
  "min_pay_due_at": string,
  "am_min_pay_cents": number,
  "am_cycle_payment_cents": number,
  "am_interest_cents": number,
  "am_deferred_cents": number,
  "am_principal_cents": number,
  "am_start_principal_balance_cents": number,
  "am_end_principal_balance_cents": number,
  "am_start_total_balance_cents": number,
  "am_end_total_balance_cents": number,
  "paid_on_time": boolean
}

export type AmScheduleItemsProp = AmScheduleItem[];

@customElement("cui-am-schedule")
export class AmSchedule extends LitElement {
  static styles = amScheduleCSS;

  @property({ attribute: 'items', type: Array })
  public items: AmScheduleItemsProp = [];

  renderTableBody(): TemplateResult<1> {
    return html`
      <tbody>
        ${this.items.map(i => html`
          <tr class="${(i.am_cycle_payment_cents >= i.am_min_pay_cents) ? 'cui-am-schedule--row-paid' : ''}">
            <td><div class="cui-am-schedule--status-icon"><img src="${checkIcon}" alt="Status" /></div></td>
            <td>${i.min_pay_due_at}</td>
            <td>${centsToDollars(i.am_min_pay_cents)}</td>
            <td class="cui-am-schedule--cell-paid">${(i.am_cycle_payment_cents > 0) ? centsToDollars(i.am_cycle_payment_cents) : '–'}</td>
            <td>${centsToDollars(i.am_interest_cents)}</td>
            <td>${centsToDollars(i.am_principal_cents)}</td>
            <td>${centsToDollars(i.am_end_principal_balance_cents)}</td>
          </tr>
        `)}
      </tbody>
    `;
  }

  renderTableHeader(): TemplateResult<1> {
    return html`
      <thead>
        <tr>
          ${headerLabels.map(hl => html`<th scope="col">${hl}</th>`)}
        </tr>
      </thead>
    `;
  }

  render(): TemplateResult<1> {

    return html`
      <table>
        ${this.renderTableHeader()}
        ${this.renderTableBody()}
      </table>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "cui-am-schedule": AmSchedule;
  }
}
