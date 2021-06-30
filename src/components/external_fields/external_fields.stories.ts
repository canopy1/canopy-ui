import { html } from "lit";
import "./external_fields";
import { ExternalFieldsProp } from "./external_fields";
import { CSSTemplateVars } from "../payment_details/payment_details.css";

const externalFields: ExternalFieldsProp = [
  { key: "Disbursement Fee", value: 12_00 },
  { key: "Origination Date", value: "6/14/2020" },
  { key: "Origination Fee", value: 54_38 },
  { key: "Discount Amount", value: 939_00 },
  { key: "Discount Date", value: "9/29/2020" },
  { key: "Loan Amount", value: 1000_00 },
]

const externalFieldsInput = JSON.stringify(externalFields);

export default {
  title: "Components/cui-external-fields",
};

export const Default = () => html`
  ${CSSTemplateVars}

  <cui-external-fields fields=${externalFieldsInput}></cui-external-fields>
`
