import { html } from "lit";
import { CSSTemplateVars } from "../../variables.css";
import "./input.text";

export default {
  title: "Elements/Inputs",
};

export const Text = () => html`
  ${CSSTemplateVars}

  <cui-input-text
    name="cui-input-text"
    value="Hello World"
    placeholder="Placeholder Text"
  >
  </cui-input-text>
`