import { html, LitElement, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { centsToDollars } from "../../utils";
import { loansListCSS } from "./loans_list.css";

interface ExternalField {
  key: string;
  value: number
}

export type LoansListProp = Array<ExternalField>

type Formatters = "centsToDollars" | "M/d/yy";
export interface LoansListFormatProp {
  [key: string]: Formatters
}

@customElement("cui-loans-list")

export class LoansList extends LitElement {
  static styles = loansListCSS;

  @property({ attribute: 'fields', type: Array })
  public fields: LoansListProp = []

  render(): TemplateResult<1> {
    return html`
      <cui-card>
        <cui-card-header title="My Loans">Balance</cui-card-header>
        <ul>
          ${this.fields.map(f => html`
            <cui-list-item label="${f.key}" clickable>
              ${centsToDollars(f.value)}
            </cui-list-item>
          `)}
        </ul>
      </cui-card>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "cui-loans-list": LoansList;
  }
}
