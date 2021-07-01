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

const Story = ({ paymentMeta, paymentMethods, paymentAmounts }) => html`
  ${CSSTemplateVars}

  <cui-payment
    payment-meta=${JSON.stringify(paymentMeta)}
    payment-methods=${JSON.stringify(paymentMethods)}
    payment-amounts=${JSON.stringify(paymentAmounts)}
  >
  </cui-payment>
`

export const Default = Story.bind({});

Default.args = {
  paymentMeta,
  paymentAmounts,
  paymentMethods
}
