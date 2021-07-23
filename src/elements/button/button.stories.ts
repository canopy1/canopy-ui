import { html } from "lit";
import "./button";

export default {
  title: "Elements/Button",
};

export const Primary = () => html`
  <cui-btn>
    Hello World
  </cui-btn>
`

export const Small = () => html`
  <cui-btn
    color="secondary"
    size="small"
  >
    Hello World
  </cui-btn>
`
