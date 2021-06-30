import { html } from "lit";
import "./am_schedule";
import { AmItemsProp } from "./am_schedule";
import { CSSTemplateVars } from "../payment_details/payment_details.css";

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

const amInput = JSON.stringify(someAmItems);

export default {
  title: "Components/cui-am-schedule",
};

export const Default = () => html`
  ${CSSTemplateVars}

  <cui-am-schedule items=${amInput}></cui-am-schedule>
`
