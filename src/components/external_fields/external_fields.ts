import { html, LitElement, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { centsToDollars } from "../../utils";
import { externalFieldsCSS } from "./external_fields.css";

interface ExternalField {
  key: string;
  value: string | number | boolean
}

export type ExternalFieldsProp = Array<ExternalField>

type Formatters = "centsToDollars";
export interface ExternalFieldsFormatProp {
  [key: string]: Formatters
}

@customElement("cui-external-fields")

export class ExternalFields extends LitElement {
  static styles = externalFieldsCSS;

  @property({ attribute: 'fields', type: Array })
  public fields: ExternalFieldsProp = []

  @property({ attribute: 'format', type: Object })
  public format: ExternalFieldsFormatProp = {}

  formatVal(key: ExternalField["key"], value: ExternalField["value"]): ExternalField["value"] {
    if (this.format[key]) {
      if (this.format[key] === "centsToDollars" && typeof value === "number") {
        return centsToDollars(value);
      }
    }
    return value;
  }

  render(): TemplateResult<1> {
    return html`
      <cui-card style="width: 100%;">
        <ul>
          ${this.fields.map(f => html`
            <cui-list-item label="${f.key}">
              ${this.formatVal(f.key, f.value)}
            </cui-list-item>
          `)}
        </ul>
      </cui-card>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "cui-external-fields": ExternalFields;
  }
}
