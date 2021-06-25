// demo-button.stories.js

import { html } from "lit";

import "./paymentDetails";

export default {
  title: "Components/payment-details",
};

export const Primary = () => html`
  <payment-details 
    amount="349392"
    credit-limit="800000"
    available-credit="450608"
    pending-charges="0"
    promo-exp="10/15/2021"
  >
  </payment-details>
`;
