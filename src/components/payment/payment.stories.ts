import { html } from "lit";
import { PaymentMetaProp, DropdownProp } from "./payment";
import "./payment";

export default {
  title: "Components/Payment",
};

const paymentMeta: PaymentMetaProp = {
  due_by: "7/15/2021",
  past_due: 0,
  fees_due: 32349
}

const paymentMethods = [
  { value: "card1", text: "Visa ending 4222", default: true },
  { value: "card2", text: "Visa ending 4221" }
];

const paymentAmounts: DropdownProp = [
  { value: "32349", text: "Minimum Payment Due - $323.49" },
  { value: "50000", text: "Entire Balance - $500.00", default: true }
];

const autopayEnabled = false;
const autopayEnabledConfirmText = "Please confirm you would like to enable autopay."
const autopayDisabledConfirmText = "Are you sure you want disable autopay? You may be charged fees for late or missed payments."

const Story = ({
  paymentMeta,
  paymentMethods,
  paymentAmounts,
  autopayEnabledConfirmText,
  autopayDisabledConfirmText,
}) => html`
  <cui-payment
    payment-meta=${JSON.stringify(paymentMeta)}
    payment-methods=${JSON.stringify(paymentMethods)}
    payment-amounts=${JSON.stringify(paymentAmounts)}
    ${autopayEnabled ? "autopay-enabled" : ""}
    autopay-enabled-confirm-text=${autopayEnabledConfirmText}
    autopay-disabled-confirm-text=${autopayDisabledConfirmText}
    style="width: 280px"
  >
  </cui-payment>
`

export const Default = Story.bind({});

Default.args = {
  paymentMeta,
  paymentAmounts,
  paymentMethods,
  autopayEnabled,
  autopayEnabledConfirmText,
  autopayDisabledConfirmText
}

export const SubmitError = () => {
  const el = document.createElement('cui-payment');
  el.setAttribute('payment-meta', JSON.stringify(paymentMeta));
  el.setAttribute('payment-methods', JSON.stringify(paymentMethods));
  el.setAttribute('payment-amounts', JSON.stringify(paymentAmounts));
  el.setAttribute('autopay-enabled-confirm-text', autopayEnabledConfirmText);
  el.setAttribute('autopay-disabled-confirm-text',autopayDisabledConfirmText);
  el.onSubmitPayment = form => new Promise((_, reject) => setTimeout(() => {
    // alert(`[onSubmitPayment] rejected with value ${JSON.stringify(form)}`); 
    reject(form);
  }, 800))
  el.onSubmitAutopay = form => new Promise((_, reject) => setTimeout(() => {
    // alert(`[onSubmitAutopay] rejected with value ${JSON.stringify(form)}`); 
    reject(form);
  }, 800))
  return el;
}
