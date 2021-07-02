import { html } from "lit";
import "./input.text";
import "./input.select";

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

export const Select = () => html`
  <cui-input-select
    name="cui-input-select"
    id="demo-select"
    items='["Dropdown Option 1", "Dropdown Option 2", "Dropdown Option 3"]'
  >
  </cui-input-select>
`
