import { html, css, LitElement, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { centsToDollars } from "../../utils";

export const statCSS = css`
  :host {
    display: flex;
    flex-direction: column;
    font-family: var(--cui-font-family-base);
    font-size: var(--cui-font-size-base);
  }

  h5 {
    color: var(--cui-stat-label-text-color);
    font-size: var(--cui-stat-label-font-size);
    font-weight: var(--cui-stat-label-font-weight);
    margin: 0 0 var(--cui-spacing-1);
  }

  data {
    color: var(--cui-stat-data-text-color);
    font-size: var(--cui-stat-data-font-size);
    font-weight: var(--cui-stat-data-font-weight);
  }

  .large data {
    font-size: var(--cui-stat-data-font-size-large);
  }

  .small h5 {
    font-size: var(--cui-stat-label-font-size-small);
    font-weight: var(--cui-stat-data-font-weight-small);
  }

  .small data {
    color: var(--cui-stat-data-text-color-small);
    font-size: var(--cui-stat-data-font-size-small);
  }
`;

@customElement("cui-stat")
export class Stat extends LitElement {
  static styles = statCSS;

  @property({ attribute: "label", type: String })
  public label = "";

  @property({ attribute: "value", type: String })
  public value = "$123.45";

  @property({ attribute: "currency", type: Boolean })
  public currency = false;

  @property({ attribute: "size", type: ["default", "large", "small"] })
  public size = "default";

  render(): TemplateResult<1> {
    return html`
      <div class="${this.size === "large" ? "large" : null} ${this.size === "small" ? "small" : null}">
        <h5>${this.label}</h5>
        <data value="${this.value}">${this.currency ? centsToDollars(Number(this.value)) : this.value}</data>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "cui-stat": Stat;
  }
}
