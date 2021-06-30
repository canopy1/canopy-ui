import { html } from "lit";
import { CSSTemplateVars } from "./payment_details.css";
import "./payment_details";

export default {
  title: "Components/cui-payment-details",
};

export const Default = () => html`
  ${CSSTemplateVars}

  <cui-payment-details 
      amount="349392"
      credit-limit="800000"
      available-credit="450608"
      pending-charges="0"
      promo-exp="10/15/2021"
  >
  </cui-payment-details>
`

export const withColorPrimaryOverride = () => html`
  ${CSSTemplateVars}
  <style>
    cui-payment-details {
      --cui-color-primary: darkblue;
    }
  </style>
  <cui-payment-details 
    amount="349392"
    credit-limit="800000"
    available-credit="450608"
    pending-charges="0"
    promo-exp="10/15/2021"
  >
  </cui-payment-details>
`
