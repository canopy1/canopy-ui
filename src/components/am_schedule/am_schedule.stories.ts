import { html } from "lit";
import "./am_schedule";
import { AmItemsProp } from "./am_schedule";
import { CSSTemplateVars } from "../../variables.css";

const someAmItems: AmItemsProp = [
  {
    date: "4/19/21",
    due: 18325,
    paid: 18325,
    interest: 2663,
    principal: 15663,
    end_balance: 152602
  },
  {
    date: "5/19/21",
    due: 18325,
    paid: 18325,
    interest: 2663,
    principal: 15663,
    end_balance: 152602
  },
  {
    date: "6/19/21",
    due: 18325,
    paid: null,
    interest: 2663,
    principal: 15663,
    end_balance: 152602
  },
  {
    date: "7/19/21",
    due: 18325,
    paid: null,
    interest: 2663,
    principal: 15663,
    end_balance: 152602
  },
  {
    date: "8/19/21",
    due: 18325,
    paid: null,
    interest: 2663,
    principal: 15663,
    end_balance: 152602
  },
  {
    date: "9/19/21",
    due: 18325,
    paid: null,
    interest: 2663,
    principal: 15663,
    end_balance: 152602
  }
]

const amInput = JSON.stringify(someAmItems);

export default {
  title: "Components/cui-am-schedule",
  parameters:{
    layout: 'padded',
  },
};

export const Default = () => html`
  ${CSSTemplateVars}

  <cui-am-schedule items=${amInput}></cui-am-schedule>
`
