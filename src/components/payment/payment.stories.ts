import { html } from "lit";
import "./payment";
import { CSSTemplateVars } from "../../variables.css";

export default {
  title: "Components/cui-payment",
};

const paymentMethods = JSON.stringify([
  { value: "card1", text: "Visa ending 4222", default: true },
  { value: "card2", text: "Visa ending 4221" }
]);
const paymentAmounts = JSON.stringify([
  { value: "32349", text: "Minimum Payment Due - $323.49" },
  { value: "50000", text: "Entire Balance - $500.00", default: true}
]);

export const Default = () => html`
  ${CSSTemplateVars}

  <cui-payment
    payment-methods=${paymentMethods}
    payment-amounts=${paymentAmounts}
  >
  </cui-payment>
`
