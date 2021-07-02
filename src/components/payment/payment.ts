import { html, LitElement, TemplateResult } from "lit";
import { customElement, state, property } from "lit/decorators.js";
import { centsToDollars } from "../../utils";
import { paymentCSS } from "./payment.css";

export interface PaymentMetaProp {
  due_by: string;
  past_due: number;
  fees_due: number;
  [key: string]: string | number;
}

const prettyMeta: Record<keyof PaymentMetaProp, string> = {
  due_by: "Due By",
  past_due: "Past Due",
  fees_due: "Fees Due"
};

interface Option { text: string; value: string; default?: boolean; }
export type DropdownProp = Option[];

export type PaymentEvents = PaymentStepEvents | "click-submit";
type PaymentStepEvents = `step-${PaymentSteps}`;
type PaymentSteps = "initial" | "form" | "verify-details" | "success";

export type PaymentFormState = {
  paymentAmount: string;
  paymentMethod: string;
  paymentDate: string
}

// TODO: Use elements
@customElement("cui-payment")
export class Payment extends LitElement {
  static styles = paymentCSS;
  
  constructor() {
    super();

    // Push task to update form state from public props. Could not do so on initial render.
    setTimeout(() => {
      this._form = {
        paymentAmount: (this.paymentAmounts.find(isDefaultOption) ?? this.paymentAmounts[0])?.value,
        paymentMethod: (this.paymentMethods.find(isDefaultOption) ?? this.paymentMethods[0])?.value,
        paymentDate: getToday()
      }
      this.requestUpdate();
    }, 0)
  }

  @property({ attribute: "payment-meta", type: Object })
  public meta: PaymentMetaProp = {
    due_by: "-",
    past_due: 0,
    fees_due: 0
  }

  @property({ attribute: "payment-amounts", type: Array })
  public paymentAmounts: DropdownProp = [];

  @property({ attribute: "payment-methods", type: Array })
  public paymentMethods: DropdownProp = [];

  @property({ type: Object })
  public onSubmitPayment: (input: PaymentFormState) => Promise<any>
    = (i) => new Promise((resolve) => setTimeout(() => resolve(i), 1000));

  @state()
  private _step: PaymentSteps = "initial";

  @state()
  private _form: { paymentAmount: string; paymentMethod: string; paymentDate: string } = {
    paymentAmount: "",
    paymentMethod: "",
    paymentDate: ""
  }

  @state()
  private _hasError = false;

  private async _handleSubmitPayment() {
    try {
      this._transition("success");
    } catch(e) {
      console.warn(e);
      this._hasError = true;
      this._transition("form");
    }
  }

  private _handleInputPaymentAmount() {
    // @ts-ignore - @query decorator did not work well for dynamic template
    const nextVal = this.shadowRoot?.getElementById('payment-amount')?.value;
    this._form = { 
      ...this._form,
      paymentAmount: nextVal
    }
    this.requestUpdate();
  }

  private _handleInputPaymentMethod() {
    // @ts-ignore - @query decorator did not work well for dynamic template
    const nextVal = this.shadowRoot?.getElementById('payment-method')?.value;
    this._form = { 
      ...this._form,
      paymentMethod: nextVal
    }
    this.requestUpdate();
  }

  private _handleInputPaymentDate() {
    // @ts-ignore - @query decorator did not work well for dynamic template
    const nextVal = this.shadowRoot?.getElementById('payment-date')?.value;
    this._form = { 
      ...this._form,
      paymentDate: nextVal
    }
    this.requestUpdate();
  }

  private _transition(step: PaymentSteps) {
    this._step = step;
    const eventName: PaymentStepEvents = `step-${step}`;
    this.dispatchEvent(new Event(eventName, { bubbles: true, composed: true }));
    this.requestUpdate();
  }

  private _reset() {
    this._transition("initial");
  }

  private _renderDropdown(id: "payment-amount" | "payment-method", label: string, prop: DropdownProp): TemplateResult<1> {
    const idToInternalField: { [key: string]: keyof PaymentFormState } = {
      "payment-amount": "paymentAmount",
      "payment-method": "paymentMethod"
    }
    const idToHandler = {
      "payment-amount": this._handleInputPaymentAmount,
      "payment-method": this._handleInputPaymentMethod
    }
    const fieldVal = idToInternalField[id];
    const handler = idToHandler[id];

    return html`
      <div class="field">
        <label for="${id}">
          ${label}<span class="required-symbol">*</span>
        </label>
        <select id="${id}" @input=${handler}>
          ${prop.map(p => html`
            <option
              value=${p.value} 
              ?selected=${p.value === this._form[fieldVal]}
            >
              ${p.text}
            </option>
          `)}
        </select>
      <div>
    `
  }

  private _renderError(): TemplateResult<1> {
    return html`
      <div>
        <p>We were unable to process your payment. Please try again or contact us.</p>
      </div>
    `
  }
  
  private _formContent(): TemplateResult<1> {
    return html`
      ${this._hasError ? this._renderError() : null}
      <form>
        ${this._renderDropdown("payment-amount", "Payment Amount", this.paymentAmounts)}
        ${this._renderDropdown("payment-method", "Pay From", this.paymentMethods)}
        <div class="field">
          <label for="payment-date">
            Payment Date<span class="required-symbol">*</span>
          </label>
          <cui-input-text id="payment-date" @input=${this._handleInputPaymentDate} value=${this._form.paymentDate}></cui-input-text>
        </div>
        <p class="payment-due-notice">
          Payment due by <span class="payment-due-date">${this.meta.due_by}</span>
        </p>
      </form>
      <cui-btn @click=${() => this._transition("verify-details")}>
        Next: Verify Payment Details
      </cui-btn>
    `
  }

  private _verifyDetailsContent(): TemplateResult<1> {
    return html`
      <span>Payment Amount</span>
      <span>${centsToDollars(Number(this._form.paymentAmount))}</span>
      <dl>
        <dt>Pay From</dt>
        <dd>Visa ending 4222</dd>
        <dt>Payment Date</dt>
        <dd>7/5/2021</dd>
      </dl>
      <cui-btn @click=${this._handleSubmitPayment}>
        Submit Payment
      </cui-btn>
    `
  }

  private _successContent(): TemplateResult<1> {
    return html`
      <span>✓</span>
      <p>Your payment has been submitted!</p>
      <p>Please allow 1-3 days for your payment to post to your account.</p>
      <cui-btn @click=${this._reset}>
        Close
      </cui-btn>
    `
  }

  private _renderModal(): TemplateResult<1> {
    const content = this._step === "form" ? this._formContent() :
      this._step === "verify-details" ? this._verifyDetailsContent() :
        this._successContent();
    
    return html`
      <div class="modal ${this._step}">
        <div class="modal-title">
          <span>Make A Payment</span>
          <button class="close-icon" @click=${this._reset}>X</button>
        </div>
        <hr />
        <div class="modal-content">
          ${content}
        </div>
      </div>
      <div class="modal-overlay"></div>
    `
  }

  private renderPaymentMeta(): TemplateResult<1> {
    return html`
      <dl>
        ${Object.keys(this.meta).map(k => html`
          <dt>${prettyMeta[k]}</dt>
          <dd>${this.meta[k]}</dd>
        `)}
      </dl>
    `
  }

  protected render(): TemplateResult<1> {
    return html`
      <div class="container">
        <div class="payment-due">
          <span class="payment-due-label">Min. Payment Due</span>
          <span class="payment-due-value">${centsToDollars(this.meta.fees_due)}</span>
        </div>
        <cui-btn @click=${() => this._transition("form")}>Make A Payment</cui-btn>
        ${this.renderPaymentMeta()}
        ${this._step === "initial" ? null : this._renderModal()}
      </div>
    `;
  }
}

const isDefaultOption = (a: Option) => a.default === true;

// format: mm/dd/yyyy
const getToday = () => {
  const today = new Date();
  // @ts-ignore
  const dd = String(today.getDate()).padStart(2, '0');
  // @ts-ignore
  const mm = String(today.getMonth()+1).padStart(2, '0');
  const yyyy = String(today.getFullYear());
  return `${mm}/${dd}/${yyyy}`;
}

declare global {
  interface HTMLElementTagNameMap {
    "cui-payment": Payment;
  }
}
