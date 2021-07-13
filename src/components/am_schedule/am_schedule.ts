import { html, LitElement, TemplateResult, svg } from "lit";
import { customElement, property } from "lit/decorators.js";
import { DateTime } from "luxon";
import { amScheduleCSS } from "./am_schedule.css";
import { centsToDollars } from "../../utils";

// TODO: SVG build pipeline
// import checkIcon from "../../icons/check-light.svg";

// NOTE: First column is unlabeled but contains status symbols
const headerLabels = ["", "Date", "Amount Due", "Paid", "Interest", "Principal", "End Balance"];

interface AmScheduleItem {
  "min_pay_due_at": string,
  "am_min_pay_cents": number,
  "am_cycle_payment_cents": number,
  "am_interest_cents": number,
  "am_principal_cents": number,
  "am_end_principal_balance_cents": number,
}

export type AmScheduleItemsProp = AmScheduleItem[];

const checkIconSVG = svg`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path d="M34.1 5.1h-2.8c-.4 0-.8.2-1 .5l-16.6 21-8-10.1c-.1-.2-.3-.3-.4-.4-.2-.1-.4-.1-.6-.1H1.9c-.3 0-.4.3-.3.5l11 13.9c.5.7 1.5.7 2 0L34.3 5.6c.2-.2 0-.5-.2-.5z" fill="#fff"/></svg>
`

@customElement("cui-am-schedule")
export class AmSchedule extends LitElement {
  static styles = amScheduleCSS;

  @property({ attribute: 'items', type: Array })
  public items: AmScheduleItemsProp = [];

  renderTableBody(): TemplateResult<1> {
    return html`
      <tbody>
        ${this.items.map(i => {
          const {
            am_cycle_payment_cents = 0,
            am_min_pay_cents = 0,
            am_interest_cents = 0,
            am_principal_cents = 0,
            am_end_principal_balance_cents = 0
          } = i 
          
          return html`
            <tr class="${(am_cycle_payment_cents >= (am_min_pay_cents)) ? 'cui-am-schedule--row-paid' : ''}">
              <td>
                <div class="cui-am-schedule--status-icon">
                  ${checkIconSVG}         
                </div>
              </td>
              <td>${DateTime.fromISO(i.min_pay_due_at).toFormat("M/d/yy")}</td>
              <td>${centsToDollars(am_min_pay_cents)}</td>
              <td class="cui-am-schedule--cell-paid">${(am_cycle_payment_cents > 0) ? centsToDollars(am_cycle_payment_cents) : '–'}</td>
              <td>${centsToDollars(am_interest_cents)}</td>
              <td>${centsToDollars(am_principal_cents)}</td>
              <td>${centsToDollars(am_end_principal_balance_cents)}</td>
            </tr>
          `
        })}
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
