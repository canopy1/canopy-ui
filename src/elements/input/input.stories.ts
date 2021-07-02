import { html } from "lit";
import "./input.text";

export default {
  title: "Elements/Inputs",
};

export const Text = () => html`
  <cui-input-text
    name="cui-input-text"
    value="Hello World"
    placeholder="Placeholder Text"
  >
  </cui-input-text>
`
