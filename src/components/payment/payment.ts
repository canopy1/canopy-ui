import { html, LitElement, TemplateResult } from "lit";
import { customElement, state, property } from "lit/decorators.js";
import { centsToDollars } from "../../utils";
import { paymentCSS } from "./payment.css";

import closeIcon from "../../icons/close-grey.svg";

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
      <div class="payment-confirmation">
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
          <path d="M36 4.5C18.6047 4.5 4.5 18.6047 4.5 36C4.5 53.3953 18.6047 67.5 36 67.5C53.3953 67.5 67.5 53.3953 67.5 36C67.5 18.6047 53.3953 4.5 36 4.5ZM36 62.1562C21.5578 62.1562 9.84375 50.4422 9.84375 36C9.84375 21.5578 21.5578 9.84375 36 9.84375C50.4422 9.84375 62.1562 21.5578 62.1562 36C62.1562 50.4422 50.4422 62.1562 36 62.1562Z" fill="#4867FF"/>
          <path d="M36 9.84375C21.5578 9.84375 9.84375 21.5578 9.84375 36C9.84375 50.4422 21.5578 62.1562 36 62.1562C50.4422 62.1562 62.1562 50.4422 62.1562 36C62.1562 21.5578 50.4422 9.84375 36 9.84375ZM49.5984 25.7133L34.7906 46.2445C34.5837 46.5334 34.3108 46.7688 33.9947 46.9312C33.6786 47.0935 33.3284 47.1782 32.973 47.1782C32.6177 47.1782 32.2674 47.0935 31.9514 46.9312C31.6353 46.7688 31.3624 46.5334 31.1555 46.2445L22.3945 34.0945C22.1273 33.7219 22.3945 33.2016 22.8516 33.2016H26.1492C26.8734 33.2016 27.5484 33.5531 27.9703 34.1367L32.9766 41.0836L44.0297 25.7555C44.4516 25.1648 45.1336 24.8203 45.8508 24.8203H49.1484C49.6055 24.8203 49.8727 25.3406 49.5984 25.7133V25.7133Z" fill="#E6F7FF"/>
          <path d="M49.1487 24.8203H45.851C45.1338 24.8203 44.4518 25.1648 44.0299 25.7555L32.9767 41.0836L27.9705 34.1367C27.5486 33.5531 26.8736 33.2016 26.1494 33.2016H22.8517C22.3947 33.2016 22.1275 33.7219 22.3947 34.0945L31.1556 46.2445C31.3626 46.5334 31.6354 46.7688 31.9515 46.9312C32.2676 47.0935 32.6179 47.1782 32.9732 47.1782C33.3286 47.1782 33.6788 47.0935 33.9949 46.9312C34.311 46.7688 34.5838 46.5334 34.7908 46.2445L49.5987 25.7133C49.8729 25.3406 49.6057 24.8203 49.1487 24.8203V24.8203Z" fill="#4867FF"/>
        </svg>    
        <br />
        <p><strong>Your payment has been submitted!</strong><br />
        Please allow 1-3 days for your payment to post to your account.</p>
        <cui-btn @click=${this._reset}>
          Close
        </cui-btn>
      </div>
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
      <div class="modal-header">
        <strong>${title}</strong>
        <button class="close-icon" @click=${this._reset}>
          <img src="${closeIcon}" alt="Close" />
        </button>
      </div>
    `
  }

  private get _modal(): TemplateResult<1> {
    return html`
      <div class="modal ${this._step}">
        ${this._modalTitle}
        <div class="modal-content">
          ${this._modalContent}
        </div>
      </div>
      <div class="modal-overlay"></div>
    `
  }

  private get _paymentMeta(): TemplateResult<1> {
    const currencyFields = ["past_due", "fees_due"];
    return html`
      <ul class="cui-payment--meta">
        ${Object.keys(this.meta).map(k => html`
          <cui-list-item label="${prettyMeta[k]}" alt>
            ${(currencyFields.includes(k)
                ? centsToDollars(Number(this.meta[k]))
                : this.meta[k])
              }
          </cui-list-item>
        `)}
      </ul>
    `
  }

  private _renderAutopayToggle(): TemplateResult<1> {
    console.log("renderAutopayToggle", this._form);
    return html`
      <cui-list-item label="Autopay">
        <div class="autopay-toggle">
          <span>${this._form.autopayEnabled ? 'On' : 'Off'}</span>
          <input
            type="checkbox"
            class="toggle"
            id="autopay"
            name="autopay"
            ?checked=${this._form.autopayEnabled}
            @change=${this._handleToggleAutopay}
          />
        </div>
      </cui-list-item>
    `;
  }

  protected render(): TemplateResult<1> {
    return html`
      <cui-card>
        ${this._hasAutopayError ? this._autopayErrorMessage : null}
        <div class="payment-due">
          <span class="payment-due-label">Min. Payment Due</span>
          <span class="payment-due-value">${centsToDollars(this.meta.fees_due)}</span>
          <cui-btn @click=${() => this._transition("payment-form")}>Make A Payment</cui-btn>
        </div>
        ${this._paymentMeta}
        ${this._renderAutopayToggle()}
      </cui-card>

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
