import { html } from "lit";
// import { AccountOverviewPropDetails } from "./account_overview";
import "./account_overview";

export default {
  title: "Components/AccountOverview",
};

const Story = () => {
  const details = {
    amount: 349392,
    credit_limit: 800000,
    available_credit: 450608,
    pending_charges: 0,
    promo_exp: "10/15/2021"
  }

  return html`
    <cui-account-overview
      details=${JSON.stringify(details)}
    >
    </cui-account-overview>
  `
}

export const Default = Story.bind({});

Default.args = {}
