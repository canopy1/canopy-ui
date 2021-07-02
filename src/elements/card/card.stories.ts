import { html } from "lit";
import { CSSTemplateVars } from "../../variables.css";
import "./card";

export default {
  title: "Elements/Card",
};

export const Default = () => html`
  ${CSSTemplateVars}

  <cui-card style="padding: 32px;">
    Hello it's me, Card.
  </cui-card>
`