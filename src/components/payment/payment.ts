import { html, LitElement, TemplateResult } from "lit";
import { customElement, state, property, query } from "lit/decorators.js";
import { centsToDollars } from "../../utils";
import { paymentCSS } from "./payment.css";

export interface PaymentProp {
  due_by: string;
  past_due: number;
  fees_due: number;
  [key: string]: string | number;
}

interface Option { text: string; value: string; default: boolean; }
export type DropdownProp = Option[];

const data1: PaymentProp = {
  due_by: "7/15/2021",
  past_due: 0,
  fees_due: 32349
}

export type PaymentEvents = PaymentStepEvents | "click-submit";
type PaymentStepEvents = `step-${PaymentSteps}`;
type PaymentSteps = "initial" | "form" | "verify-details" | "success";

export type PaymentFormState = {
  paymentAmount: string;
  paymentMethod: string;
  paymentDate: string
}

// TODO: OnSubmitPayment gets relevant JS
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
  private _dueBy = data1.due_by;

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
      <label for="${id}">${label}</label>
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
        <label for="payment-date">Payment Date</label>
        <input id="payment-date" @input=${this._handleInputPaymentDate}></input>
        <p>Payment due by ${this._dueBy}</p>
      </form>
      <button @click=${() => this._transition("verify-details")}>
        Next: Verify Payment Details
      </button>
    `
  }

  private _verifyDetailsContent(): TemplateResult<1> {
    return html`
      <span>Payment Amount</span>
      <span>${centsToDollars(32349)}</span>
      <dl>
        <dt>Pay From</dt>
        <dd>Visa ending 4222</dd>
        <dt>Payment Date</dt>
        <dd>7/5/2021</dd>
      <dl>
      <button @click=${this._handleSubmitPayment}>
        Submit Payment
      </button>
    `
  }

  private _successContent(): TemplateResult<1> {
    return html`
      <span>✓</span>
      <p>Your payment has been submitted!</p>
      <p>Please allow 1-3 days for your payment to post to your account.</p>
      <button @click=${this._reset}>
        Close
      </button>
    `
  }

  private _renderModal(): TemplateResult<1> {
    const content = this._step === "form" ? this._formContent() :
      this._step === "verify-details" ? this._verifyDetailsContent() :
        this._successContent();
    
    return html`
      <div class="modal">
        <div class="title">
          <span>Make A Payment</span>
          <button @click=${this._reset}>X</button>
        </div>
        ${content}
      </div>
      <div class="modal-overlay"></div>
    `
  }

  private renderPaymentMeta(): TemplateResult<1> {
    return html`
      <dl>
        ${Object.keys(data1).map(k => html`
          <dt>${k}</dt>
          <dd>${data1[k]}</dd>
        `)}
      </dl>
    `
  }

  protected render(): TemplateResult<1> {
    return html`
      <div>
        <div>
          <span>Min. Payment Due</span>
          <span>${centsToDollars(data1.fees_due)}</span>
        </div>
        <button @click=${() => this._transition("form")}>Make A Payment</button>
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
