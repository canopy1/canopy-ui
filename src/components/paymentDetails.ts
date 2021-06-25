import { html, css, LitElement, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement('cnpy-stat')
export class Stat extends LitElement {
  @property({ attribute: 'label', type: String })
  public label = '';

  @property({ attribute: 'value', type: String })
  public value = '';

  @property({ attribute: 'currency', type: Boolean })
  public currency = false;

  render(): TemplateResult<1> {
    return html`
      <div>
        <span>${this.label}</span>
        <span>${this.currency ? centsToDollars(Number(this.value)) : this.value}</span>
      </div>
    `
  }
}

// Could consolidate with {Stat} but may be premature
@customElement('cnpy-stat-sm')
export class StatSm extends LitElement {
  @property({ attribute: 'label', type: String })
  public label = '';

  @property({ attribute: 'value', type: String })
  public value = '';

  @property({ attribute: 'currency', type: Boolean })
  public currency = false;

  render(): TemplateResult<1> {
    return html`
      <div>
        <span>${this.label}</span>
        <span>${this.currency ? centsToDollars(Number(this.value)) : this.value}</span>
      </div>
    `
  }
}

@customElement("cnpy-payment-details")
export class PaymentDetails extends LitElement {
  static styles = css`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `;

  @property({ attribute: 'amount', type: Number })
  public amount = 0;

  @property({ attribute: 'credit-limit', type: Number })
  public creditLimit = 0;

  @property({ attribute: 'available-credit', type: Number })
  public availableCredit = 0;

  @property({ attribute: 'pending-charges', type: Number })
  public pendingCharges = 0;

  @property({ attribute: 'promo-exp', type: String })
  public promoExp = '';

  render(): TemplateResult<1> {

    // Appears if no element with attr slot "top" given.
    const defaultTop = html`
      <div>
        <cnpy-stat label="Amount" value="${this.amount}" currency=true></cnpy-stat>
        <cnpy-stat label="Credit Limit" value="${this.creditLimit}" currency=true></cnpy-stat>
      </div>
    `;

    // Appears if no element with attr slot "bottom" given.
    const defaultBottom = html`
      <div>
        <cnpy-stat-sm label="Available Credit" value="${this.availableCredit}" currency=true></cnpy-stat-sm>
        <cnpy-stat-sm label="Pending Charges" value="${this.pendingCharges}" currency=true></cnpy-stat-sm>
        <cnpy-stat-sm label="Promo Period Expiration" value="${this.promoExp}"></cnpy-stat-sm>
      </div>
    `

    return html`
      <div class="cnpy-ui">
        <slot name="top">${defaultTop}</slot>
        <slot name="bottom">${defaultBottom}</slot>
      </div>
    `;
  }
}

function centsToDollars(amount: number) {
  return `$${parseFloat(String(amount / 100)).toFixed(2)}`;
}

declare global {
  interface HTMLElementTagNameMap {
    "cnpy-payment-details": PaymentDetails;
    "cnpy-stat": Stat,
    "cnpy-stat-sm": StatSm
  }
}
