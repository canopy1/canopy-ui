import { html, LitElement, TemplateResult } from "lit";
import { customElement, property, eventOptions } from "lit/decorators.js";
import { centsToDollars } from "../../utils";
import { loansListCSS } from "./loans_list.css";

interface ExternalField {
  key: string;
  value: number;
}

export type LoansListProp = Array<ExternalField>;

type Formatters = "centsToDollars" | "M/d/yy";
export interface LoansListFormatProp {
  [key: string]: Formatters;
}

@customElement("cui-loans-list")
export class LoansList extends LitElement {
  static styles = loansListCSS;

  @property({ attribute: "fields", type: Array })
  public fields: LoansListProp = [];

  private onClick(idx: number) {
    const event = new CustomEvent("onItemClick", {
      detail: {
        itemIndex: idx,
      },
    });
    this.dispatchEvent(event);
  }

  render(): TemplateResult<1> {
    return html`
      <cui-card>
        <cui-card-header title="My Loans">Balance</cui-card-header>
        <ul>
          ${this.fields.map(
            (f, idx) =>
              html`
                <cui-list-item
                  label="${f.key}"
                  clickable
                  @click=${() => {
                    this.onClick(idx);
                  }}
                >
                  ${centsToDollars(f.value)}
                </cui-list-item>
              `
          )}
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
