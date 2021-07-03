import { html } from "lit";
import "./external_fields";
// import { ExternalFieldsFormatProp, ExternalFieldsProp } from "./external_fields";

export default {
  title: "Components/ExternalFields",
};


const Story = () => {
  const fields = [
    { key: "Disbursement Fee", value: 12_00 },
    { key: "Origination Date", value: "6/14/2020" },
    { key: "Origination Fee", value: 54_38 },
    { key: "Discount Amount", value: 939_00 },
    { key: "Discount Date", value: "2020-08-03T09:10:14+00:00" },
    { key: "Loan Amount", value: 1000_00 },
  ]
  
  const format = {
    "Disbursement Fee": "centsToDollars",
    "Origination Fee": "centsToDollars",
    "Discount Amount": "centsToDollars",
    "Discount Date": "M/d/yy",
    "Loan Amount": "centsToDollars"
  }

  html`
    <cui-external-fields
      fields=${JSON.stringify(fields)}
      format=${JSON.stringify(format)}
      style="width: 320px">
    </cui-external-fields>
  `
}

export const Default = Story.bind({});

Default.args = {}
