import { html, LitElement, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { amScheduleCSS } from "./am_schedule.css";
import { centsToDollars } from "../../utils";

import checkIcon from "../../icons/check-light.svg";

// NOTE: First column is unlabeled but contains status symbols
const headerLabels = ["", "Date", "Amount Due", "Paid", "Interest", "Principal", "End Balance"];

interface AmItem {
  date: string;
  due: number;
  paid: number;
  interest: number;
  principal: number;
  end_balance: number
}

export type AmItemsProp = AmItem[];

@customElement("cui-am-schedule")
export class AmSchedule extends LitElement {
  static styles = amScheduleCSS;

  @property({ attribute: 'items', type: Array })
  public items: AmItemsProp = [];

  renderTableBody(): TemplateResult<1> {
    return html`
      <tbody>
        ${this.items.map(i => html`
          <tr class="${(i.paid >= i.due) ? 'cui-am-schedule--row-paid' : ''}">
            <td><div class="cui-am-schedule--status-icon"><img src="${checkIcon}" alt="Status" /></div></td>
            <td>${i.date}</td>
            <td>${centsToDollars(i.due)}</td>
            <td class="cui-am-schedule--cell-paid">${(i.paid > 0) ? centsToDollars(i.paid) : '–'}</td>
            <td>${centsToDollars(i.interest)}</td>
            <td>${centsToDollars(i.principal)}</td>
            <td>${centsToDollars(i.end_balance)}</td>
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
