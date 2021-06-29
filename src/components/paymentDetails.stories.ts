// demo-button.stories.js

import { html } from "lit";
import { CSSTemplateVars } from "../components/paymentDetails.css";

import "./paymentDetails";

export default {
  title: "Components/cnpy-payment-details",
};

export const Default = () => html`
  ${CSSTemplateVars}

  <cnpy-payment-details 
      amount="349392"
      credit-limit="800000"
      available-credit="450608"
      pending-charges="0"
      promo-exp="10/15/2021"
  >
  </cnpy-payment-details>
`

export const withColorPrimaryOverride = () => html`
  ${CSSTemplateVars}
  <style>
    cnpy-payment-details {
      --cui-color-primary: darkblue;
    }
  </style>
  <cnpy-payment-details 
    amount="349392"
    credit-limit="800000"
    available-credit="450608"
    pending-charges="0"
    promo-exp="10/15/2021"
  >
  </cnpy-payment-details>
`
