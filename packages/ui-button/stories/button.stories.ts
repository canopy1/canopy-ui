import { html, TemplateResult } from "@canopyinc/ui-core";
import "../ui-button.js";

export default {
  title: "Button",
  component: "ui-button",
};

export const Default = (): TemplateResult => {
  return html`<ui-button></ui-button>`;
};
