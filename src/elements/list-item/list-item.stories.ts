import { html } from "lit";
import { CSSTemplateVars } from "../../variables.css";
import "./list-item";
import "../card/card";

export default {
  title: "Elements/List Item",
};

export const Default = () => html`
  ${CSSTemplateVars}

  <cui-card style="width: 320px;">
    <ul style="padding: 0; margin: 0;">
      <cui-list-item label="Balance">$2,394.39</cui-list-item>
      <cui-list-item alt label="Due By">9/12/21</cui-list-item>
      <cui-list-item label="Interest Rate">9.25%</cui-list-item>
    <ul>
  </cui-card>
`