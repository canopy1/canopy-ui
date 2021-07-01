import { html } from "lit";
import "./am_schedule";
import { AmItemsProp } from "./am_schedule";
import { CSSTemplateVars } from "../../variables.css";

export default {
  title: "Components/AmSchedule",
};

const someAmItems: AmItemsProp = [
    {
      date: "5/19/21",
      due: 18325,
      paid: 100,
      interest: 2663,
      principal: 15663,
      end_balance: 152602
    }
]

const Template = ({ amItems }) => html`
  ${CSSTemplateVars}
  <cui-am-schedule
    items=${JSON.stringify(amItems)}
  >
  </cui-am-schedule>
`

export const Default = Template.bind({});

Default.args = {
  amItems: someAmItems
}


