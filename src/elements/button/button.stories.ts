import { html } from "lit";
import { CSSTemplateVars } from "../../variables.css";
import "./button";

export default {
  title: "Elements/Button",
};

export const Default = () => html`
  ${CSSTemplateVars}

  <cui-btn
    icon=""
    disabled="false"
    onClick=""
  >
    Hello World
  </cui-btn>
`