import { html } from "lit";
import "./external_fields";
import { ExternalFieldsFormatProp, ExternalFieldsProp } from "./external_fields";

export default {
  title: "Components/ExternalFields",
};

const externalFields: ExternalFieldsProp = [
  { key: "Disbursement Fee", value: 12_00 },
  { key: "Origination Date", value: "6/14/2020" },
  { key: "Origination Fee", value: 54_38 },
  { key: "Discount Amount", value: 939_00 },
  { key: "Discount Date", value: "9/29/2020" },
  { key: "Loan Amount", value: 1000_00 },
]

const format: ExternalFieldsFormatProp = {
  "Disbursement Fee": "centsToDollars",
  "Origination Fee": "centsToDollars",
  "Discount Amount": "centsToDollars",
  "Loan Amount": "centsToDollars"
}


const Story = ({ fields, format}) => html`
  <cui-external-fields
    fields=${JSON.stringify(fields)}
    format=${JSON.stringify(format)}>
  </cui-external-fields>
`
export const Default = Story.bind({});

Default.args = {
  fields: externalFields,
  format
}
