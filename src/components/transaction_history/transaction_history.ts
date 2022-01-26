import { html, LitElement, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { DateTime } from "luxon";
import { transactionHistoryCSS } from "./transaction_history.css";
import { centsToDollars } from "../../utils";

const headerLabels = ["Date", "Description", "Amount"];

interface TransactionHistoryItem {
  "created_at": string,
  "line_item_status": "VALID" |  "INVALID" | "OFFSET" | "PENDING" | "AUTHORIZED" | "DECLINED" | "VOID" | "POSTED"
  "line_item_type": "CHARGE" |  "PAYMENT" | "CREDIT_OFFSET" | "DEBIT_OFFSET" | "MANUAL_FEE" | "REFUND" | ""
  "description": string,
  "original_amount_cents": number,
}

export type TransactionHistoryItemsProp = TransactionHistoryItem[];

@customElement("cui-transaction-history")
export class TransactionHistory extends LitElement {
  static styles = transactionHistoryCSS;

  @property({ attribute: 'items', type: Array })
  public items: TransactionHistoryItemsProp = [];

  renderTableBody(): TemplateResult<1> {
    return html`
      <tbody>
        ${this.items.map(i => {
          const {
            original_amount_cents = 0,
            description = "No Description",
          } = i 
          
          return html`
            <tr>
              <td>${DateTime.fromISO(i.created_at).toFormat("M/d/yy")}</td>
              <td>
                <strong>
                  ${i.line_item_type === "PAYMENT" ? "Payment - " : null }
                </strong>
                ${description}
                <div class="cui-transaction-history--line-item-status">
                  ${i.line_item_status === "PENDING" ? "Pending" : null }
                </div>
              </td>
              <td
                class="${i.line_item_type === "PAYMENT" && "cui-transaction-history--cell-paid"}"
              >
                ${centsToDollars(original_amount_cents)}
              </td>
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
    "cui-transaction-history": TransactionHistory;
  }
}
