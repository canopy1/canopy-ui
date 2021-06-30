import { html, LitElement, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { externalFieldsCSS } from "./external_fields.css";

interface ExternalField {
  key: string;
  value: string | number | boolean
}

export type ExternalFieldsProp = Array<ExternalField>

// TODO: Support formatters
// type Formatters = "cents2dollars";
// export interface ExternalFieldsFormatProp {
//   [key: string]: Formatters
// }

@customElement("cui-external-fields")
export class ExternalFields extends LitElement {
  static styles = externalFieldsCSS;

  @property({ attribute: 'fields', type: Array })
  public fields: ExternalFieldsProp = []

  // @property({ attribute: 'format', type: Object })
  // public format: ExternalFieldsFormatProp = {}

  render(): TemplateResult<1> {

    return html`
      <ul>
        ${this.fields.map(f => html`<li>${f.key} : ${f.value}</li>`)}
      </ul>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "cui-external-fields": ExternalFields;
  }
}
