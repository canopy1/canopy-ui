import { html } from "lit";
import { CSSTemplateVars } from "../../variables.css";
import "./account_overview";
import { AccountOverviewPropDetails } from "./account_overview";

export default {
  title: "Components/cui-account-overview",
};

const paymentDetails: AccountOverviewPropDetails = {
  amount: 349392,
  credit_limit: 800000,
  available_credit: 450608,
  pending_charges: 0,
  promo_exp: "10/15/2021"
}

const paymentDetailsInput = JSON.stringify(paymentDetails);

export const Default = () => html`
  ${CSSTemplateVars}

  <cui-account-overview details=${paymentDetailsInput}></cui-account-overview>
`

export const withColorPrimaryOverride = () => html`
  ${CSSTemplateVars}

  <style>
    cui-account-overview {
      --cui-color-primary: darkblue;
    }
  </style>

  <cui-account-overview details=${paymentDetailsInput}></cui-account-overview>
`
