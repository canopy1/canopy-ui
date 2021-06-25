// demo-button.stories.js

import { html } from "lit";

import "./paymentDetails";

export default {
  title: "Components/cnpy-payment-details",
};

export const Default = () => html`
  <cnpy-payment-details 
      amount="349392"
      credit-limit="800000"
      available-credit="450608"
      pending-charges="0"
      promo-exp="10/15/2021"
  >
  </cnpy-payment-details>
`

// Similar to default but more flexible
export const WithSlottedStats = () => html`
  <cnpy-payment-details>
    <cnpy-stat slot="top" label="Amount" value="349392" currency=true></cnpy-stat>
    <cnpy-stat slot="top" label="Available Credit" value="450608" currency=true></cnpy-stat>
    <cnpy-stat-sm slot="bottom" label="Credit Limit" value="800000" currency=true></cnpy-stat-sm>
    <cnpy-stat-sm slot="bottom" label="Pending Charges" value="0" currency=true></cnpy-stat-sm>
    <cnpy-stat-sm slot="bottom" label="Promo Period Expiration" value="10/15/2021"></cnpy-stat-sm>
  </cnpy-payment-details>
`;
