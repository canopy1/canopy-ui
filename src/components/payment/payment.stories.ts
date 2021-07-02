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
const autopayEnabledConfirmBody = "<p style='text-align: center;'>Your <strong>Visa ending 4222</strong> will be charged <strong>$128.03</strong> on the <strong>3rd of each month</strong>.</p>"
const autopayDisabledConfirmBody = "<p style='text-align: center;'><strong>Are you sure you want disable autopay?</strong><br /> You may be charged fees for late or missed payments without autopay.</p>"

const Story = ({
  paymentMeta,
  paymentMethods,
  paymentAmounts,
  autopayEnabledConfirmBody,
  autopayDisabledConfirmBody,
}) => html`
  <cui-payment
    payment-meta=${JSON.stringify(paymentMeta)}
    payment-methods=${JSON.stringify(paymentMethods)}
    payment-amounts=${JSON.stringify(paymentAmounts)}
    ${autopayEnabled ? "autopay-enabled" : ""}
    autopay-enabled-confirm-body=${autopayEnabledConfirmBody}
    autopay-disabled-confirm-body=${autopayDisabledConfirmBody}
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
  autopayEnabledConfirmBody,
  autopayDisabledConfirmBody
}

export const SubmitError = () => {
  const el = document.createElement('cui-payment');
  el.setAttribute('payment-meta', JSON.stringify(paymentMeta));
  el.setAttribute('payment-methods', JSON.stringify(paymentMethods));
  el.setAttribute('payment-amounts', JSON.stringify(paymentAmounts));
  el.setAttribute('autopay-enabled-confirm-body', autopayEnabledConfirmBody);
  el.setAttribute('autopay-disabled-confirm-body',autopayDisabledConfirmBody);
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
