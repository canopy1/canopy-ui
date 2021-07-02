import { html, LitElement, TemplateResult } from "lit";
import { customElement, state, property } from "lit/decorators.js";
import { centsToDollars } from "../../utils";
import { paymentCSS } from "./payment.css";

// Props
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

// UI Steps
type PaymentSteps = "initial" | MakePaymentModalSteps | ToggleAutopayModalSteps;
type MakePaymentModalSteps = "payment-form" | "payment-confirm" | "payment-success";
type ToggleAutopayModalSteps = "autopay-confirm" | "autopay-success";

export type PaymentEvents = PaymentStepEvents | "click-submit";
export type PaymentStepEvents = `step-${PaymentSteps}`;

// Internal State
export type PaymentFormState = {
  paymentAmount: string;
  paymentMethod: string;
  paymentDate: string;
  autopayEnabled: boolean;
}

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
        paymentDate: getToday(),
        autopayEnabled: this.autopayEnabled
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

  @property({ attribute: "autopay-enabled", type: Boolean })
  public autopayEnabled = false;

  @property({ attribute: "autopay-enabled-confirm-text" })
  public autopayEnabledConfirmText = "-";

  @property({ attribute: "autopay-disabled-confirm-text" })
  public autopayDisabledConfirmText = "-";

  @property({ attribute: "autopay-enabled-success-text" })
  public autopayEnabledSuccessText = "-";

  @property({ attribute: "autopay-disabled-success-text" })
  public autopayDisabledSuccessText = "-";

  @property({ type: Function })
  public onSubmitPayment: (input: PaymentFormState) => Promise<any>
    = (i) => new Promise((resolve) => resolve(i));

  @property({ type: Function })
  public onSubmitAutopay: (input: PaymentFormState) => Promise<any>
    = (i) => new Promise((resolve) => resolve(i));

  @state()
  private _step: PaymentSteps = "initial";

  @state()
  private _form: PaymentFormState = {
    paymentAmount: "",
    paymentMethod: "",
    paymentDate: "",
    autopayEnabled: false
  }

  @state()
  private _hasPaymentError = false;

  @state()
  private _hasAutopayError = false;

  private async _handleSubmitPayment() {
    try {
      await this.onSubmitPayment(this._form);
      this._transition("payment-success");
    } catch(e) {
      console.warn(e);
      this._hasPaymentError = true;
      this._transition("payment-form");
    }
  }

  private async _handleSubmitAutopay() {
    try {
      await this.onSubmitAutopay(this._form);
      this._transition("autopay-success");
    } catch(e) {
      console.warn(e);
      this._hasAutopayError = true;
      // revert upon failure
      this._form = { 
        ...this._form,
        autopayEnabled: !this._form.autopayEnabled
      }
      console.log(this._form);
      this._transition("initial");
    }
  }

  private _handleChangePaymentAmount() {
    const fieldEl = this.shadowRoot?.getElementById('payment-amount') as HTMLSelectElement
    this._form = { 
      ...this._form,
      paymentAmount: fieldEl?.value
    }
    this.requestUpdate();
    console.log(this._form)
  }

  private _handleChangePaymentMethod() {
    const fieldEl = this.shadowRoot?.getElementById('payment-method') as HTMLSelectElement
    this._form = { 
      ...this._form,
      paymentMethod: fieldEl?.value
    }
    this.requestUpdate();
  }

  private _handleInputPaymentDate() {
    const fieldEl = this.shadowRoot?.getElementById('payment-date') as HTMLInputElement
    this._form = { 
      ...this._form,
      paymentDate: fieldEl?.value
    }
    this.requestUpdate();
  }

  private _handleToggleAutopay() {
    this._form = { 
      ...this._form,
      autopayEnabled: !this._form.autopayEnabled
    }
    this._transition("autopay-confirm");
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
      "payment-amount": this._handleChangePaymentAmount,
      "payment-method": this._handleChangePaymentMethod
    }
    const fieldVal = idToInternalField[id];
    const handler = idToHandler[id];

    return html`
      <div class="field">
        <label for="${id}">
          ${label}<span class="required-symbol">*</span>
        </label>
        <select
          id="${id}"
          name="${id}"
          @change=${handler}
        >
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

  private get _paymentErrorMessage(): TemplateResult<1> {
    return html`
      <div>
        <p>We were unable to process your payment. Please try again or contact us.</p>
      </div>
    `
  }

  private get _autopayErrorMessage(): TemplateResult<1> {
    // NOTE: autopayEnabled state is reverted on failure so the opposite verb is used.
    return html`
      <div>
        <p>We were unable to ${!this._form.autopayEnabled ? "enable" : "disable"} autopay. Please try again or contact us.</p>
      </div>
    `
  }
  
  private _paymentFormContent(): TemplateResult<1> {
    return html`
      ${this._hasPaymentError ? this._paymentErrorMessage : null}
      <form>
        ${this._renderDropdown("payment-amount", "Payment Amount", this.paymentAmounts)}
        ${this._renderDropdown("payment-method", "Pay From", this.paymentMethods)}
        <div class="field">
          <label for="payment-date">
            Payment Date<span class="required-symbol">*</span>
          </label>
          <cui-input-text
            id="payment-date"
            name="payment-date"
            @input=${this._handleInputPaymentDate}
            value=${this._form.paymentDate}
          >
          </cui-input-text>
        </div>
        <p class="payment-due-notice">
          Payment due by <span class="payment-due-date">${this.meta.due_by}</span>
        </p>
      </form>
      <cui-btn @click=${() => this._transition("payment-confirm")}>
        Next: Verify Payment Details
      </cui-btn>
    `
  }

  private _paymentConfirmContent(): TemplateResult<1> {
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

  private _paymentSuccessContent(): TemplateResult<1> {
    return html`
      <span>✓</span>
      <p>Your payment has been submitted!</p>
      <p>Please allow 1-3 days for your payment to post to your account.</p>
      <cui-btn @click=${this._reset}>
        Close
      </cui-btn>
    `
  }

  private _autopayConfirmContent(): TemplateResult<1> {
    return html`
      <p>${this._form.autopayEnabled ? this.autopayEnabledConfirmText : this.autopayDisabledConfirmText}</p>
      <div class="btn-set">
        <cui-btn @click=${this._handleSubmitAutopay}>Confirm</cui-btn>
        <cui-btn @click=${this._reset}>Close</cui-btn>
      </div>
    `;
  }

  private _autopaySuccessContent(): TemplateResult<1> {
    return html`
      <p>${this._form.autopayEnabled ? this.autopayEnabledSuccessText : this.autopayDisabledSuccessText}</p>
      <cui-btn @click=${this._reset}>Close</cui-btn>
    `
  }

  private get _modalContent(): TemplateResult<1> {
    switch (this._step) {
      case "payment-form": 
        return this._paymentFormContent();
      case "payment-confirm":
        return this._paymentConfirmContent();
      case "payment-success":
        return this._paymentSuccessContent();
      case "autopay-confirm":
        return this._autopayConfirmContent();
      case "autopay-success":
        return this._autopaySuccessContent();
      default:
        return html``;
    }
  }

  private get _flowType(): "payment" | "autopay" {
    if (["payment-form", "payment-confirm", "payment-success"].includes(this._step)) {
      return "payment";
    } else {
      return "autopay";
    }
  }

  get _modalTitle(): TemplateResult<1> {
    const title = this._flowType === "payment"
      ? "Make A Payment"
      : this._form.autopayEnabled === true
        ? "Enable Autopay"
        : "Disable Autopay";

    return html`
      <div class="modal-title">
        <span>${title}</span>
        <button class="close-icon" @click=${this._reset}>X</button>
      </div>
    `
  }

  private get _modal(): TemplateResult<1> {
    return html`
      <div class="modal ${this._step}">
        ${this._modalTitle}
        <hr />
        <div class="modal-content">
          ${this._modalContent}
        </div>
      </div>
      <div class="modal-overlay"></div>
    `
  }

  private get _paymentMeta(): TemplateResult<1> {
    return html`
      <dl>
        ${Object.keys(this.meta).map(k => html`
          <dt>${prettyMeta[k]}</dt>
          <dd>${this.meta[k]}</dd>
        `)}
      </dl>
    `
  }

  private _renderAutopayToggle(): TemplateResult<1> {
    console.log("renderAutopayToggle", this._form);
    return html`
      <div>
        <label for="autopay">Toggle Autopay</label>
        <input
          type="checkbox"
          id="autopay"
          name="autopay"
          ?checked=${this._form.autopayEnabled}
          @change=${this._handleToggleAutopay}
        >
        </input>
      </div>
    `;
  }

  protected render(): TemplateResult<1> {
    return html`
      <div class="container">
        ${this._hasAutopayError ? this._autopayErrorMessage : null}
        <div class="payment-due">
          <span class="payment-due-label">Min. Payment Due</span>
          <span class="payment-due-value">${centsToDollars(this.meta.fees_due)}</span>
        </div>
        <cui-btn @click=${() => this._transition("payment-form")}>Make A Payment</cui-btn>
        ${this._paymentMeta}
        ${this._renderAutopayToggle()}
      </div>

      ${this._step === "initial" ? null : this._modal}
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
