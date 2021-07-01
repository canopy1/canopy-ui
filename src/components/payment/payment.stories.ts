import { html } from "lit";
import "./payment";
import { CSSTemplateVars } from "../../variables.css";

export default {
  title: "Components/Payment",
};

const paymentMethods = [
  { value: "card1", text: "Visa ending 4222", default: true },
  { value: "card2", text: "Visa ending 4221" }
];
const paymentAmounts = [
  { value: "32349", text: "Minimum Payment Due - $323.49" },
  { value: "50000", text: "Entire Balance - $500.00", default: true}
];

const Story = ({ paymentMethods, paymentAmounts }) => html`
  ${CSSTemplateVars}

  <cui-payment
    payment-methods=${JSON.stringify(paymentMethods)}
    payment-amounts=${JSON.stringify(paymentAmounts)}
  >
  </cui-payment>
`

export const Default = Story.bind({});

Default.args = {
  paymentAmounts,
  paymentMethods
}
