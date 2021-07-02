import { html } from "lit";
import { PaymentMetaProp, DropdownProp } from "./payment";
import { CSSTemplateVars } from "../../variables.css";
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
  { value: "50000", text: "Entire Balance - $500.00", default: true}
];

const autopayEnabled = false;
const autopayEnabledConfirmText = "Please confirm you would like to enable autopay."
const autopayDisabledConfirmText = "Are you sure you want disable autopay? You may be charged fees for late or missed payments."
const autopayEnabledSuccessText = "Autopay has been successfully enabled.";
const autopayDisabledSuccessText = "Autopay has been successfully disabled.";

const Story = ({
  paymentMeta,
  paymentMethods,
  paymentAmounts,
  autopayEnabledConfirmText,
  autopayDisabledConfirmText,
  autopayEnabledSuccessText,
  autopayDisabledSuccessText
}) => html`
  ${CSSTemplateVars}

  <cui-payment
    payment-meta=${JSON.stringify(paymentMeta)}
    payment-methods=${JSON.stringify(paymentMethods)}
    payment-amounts=${JSON.stringify(paymentAmounts)}
    ${autopayEnabled ? "autopay-enabled" : ""}
    autopay-enabled-confirm-text=${autopayEnabledConfirmText}
    autopay-disabled-confirm-text=${autopayDisabledConfirmText}
    autopay-enabled-success-text=${autopayEnabledSuccessText}
    autopay-disabled-success-text=${autopayDisabledSuccessText}
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
  autopayDisabledConfirmText,
  autopayEnabledSuccessText,
  autopayDisabledSuccessText
}

// TODO:
//
// const ErrorStory = ({
//   paymentMeta,
//   paymentMethods,
//   paymentAmounts,
//   autopayEnabledConfirmText,
//   autopayDisabledConfirmText,
//   autopayEnabledSuccessText,
//   autopayDisabledSuccessText
// }) => html`
//   ${CSSTemplateVars}
//   <div id="err-story"></div>
//   <script>
//     const el = document.createElement('cui-payment');
//     el.setAttribute('payment-meta', ${JSON.stringify(paymentMeta)});
//     el.setAttribute('payment-methods', ${JSON.stringify(paymentMethods)});
//     el.setAttribute('payment-amounts', ${JSON.stringify(paymentAmounts)});
//     el.setAttribute('autopay-enabled-confirm-text', ${autopayEnabledConfirmText});
//     el.setAttribute('autopay-disabled-confirm-text',${autopayDisabledConfirmText});
//     el.setAttribute('autopay-enabled-success-text', ${autopayEnabledSuccessText});
//     el.setAttribute('autopay-disabled-success-text', ${autopayDisabledSuccessText});
//     document.getElementById("err-story").appendChild(el);
//   </script>
// `

// export const PaymentError = ErrorStory.bind({});

// PaymentError.args = {
//   ...Default.args
// }
