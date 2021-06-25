import { html, LitElement, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { paymentDetailsCSS } from "./paymentDetails.css";
@customElement('cnpy-stat')
export class Stat extends LitElement {
  @property({ attribute: 'label', type: String })
  public label = '';

  @property({ attribute: 'value', type: String })
  public value = '';

  @property({ attribute: 'currency', type: Boolean })
  public currency = false;

  // avoid rendering shadow root
  createRenderRoot(): StatSm {
    return this;
  }

  render(): TemplateResult<1> {
    return html`
      <span part="label">${this.label}</span>
      <span part="value">${this.currency ? centsToDollars(Number(this.value)) : this.value}</span>
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

  // avoid rendering shadow root
  createRenderRoot(): StatSm {
    return this;
  }

  render(): TemplateResult<1> {
    return html`
        <span part="label">${this.label}</span>
        <span part="value">${this.currency ? centsToDollars(Number(this.value)) : this.value}</span>
    `
  }
}

@customElement("cnpy-payment-details")
export class PaymentDetails extends LitElement {
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

  // avoid rendering shadow root
  createRenderRoot(): PaymentDetails {
    return this;
  }

  render(): TemplateResult<1> {

    // Appears if no element with attr slot "top" given.
    const defaultTop = html`
      <cnpy-stat label="Amount" value="${this.amount}" currency=true></cnpy-stat>
      <cnpy-stat label="Credit Limit" value="${this.creditLimit}" currency=true></cnpy-stat>
    `;

    // Appears if no element with attr slot "bottom" given.
    const defaultBottom = html`
      <cnpy-stat-sm label="Available Credit" value="${this.availableCredit}" currency=true></cnpy-stat-sm>
      <cnpy-stat-sm label="Pending Charges" value="${this.pendingCharges}" currency=true></cnpy-stat-sm>
      <cnpy-stat-sm label="Promo Period Expiration" value="${this.promoExp}"></cnpy-stat-sm>
    `

    return html`
      ${paymentDetailsCSS}

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
