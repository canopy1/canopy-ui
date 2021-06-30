import { html } from "lit";
import { CSSTemplateVars } from "../../variables.css";
import "./payment_details";
import { PaymentDetailsProp } from "./payment_details";

export default {
  title: "Components/cui-payment-details",
};

const paymentDetails: PaymentDetailsProp = {
  amount: 349392,
  credit_limit: 800000,
  available_credit: 450608,
  pending_charges: 0,
  promo_exp: "10/15/2021"
}

const paymentDetailsInput = JSON.stringify(paymentDetails);

export const Default = () => html`
  ${CSSTemplateVars}

  <cui-payment-details details=${paymentDetailsInput}></cui-payment-details>
`

export const withColorPrimaryOverride = () => html`
  ${CSSTemplateVars}

  <style>
    cui-payment-details {
      --cui-color-primary: darkblue;
    }
  </style>

  <cui-payment-details details=${paymentDetailsInput}></cui-payment-details>
`
