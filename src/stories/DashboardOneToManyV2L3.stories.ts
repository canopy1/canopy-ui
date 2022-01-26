import { html } from "lit";
import { flexportVars } from "./defaults";
import "../organisms/dashboard/dashboard";

export default {
  title: "Demos/Dashboard",
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    PrimaryColor: {
      control: { type: "color" },
    },
    ButtonHoverColor: {
      control: { type: "color" },
    },
    AltBackgroundColor: {
      control: { type: "color" },
    },
    ContainerBorderRadius: {
      control: { type: "number" },
    },
    ButtonBorderRadius: {
      control: { type: "number" },
    },
    logoUrl: {
      control: { type: "string" },
    },
  },
};

const Template = ({
  PrimaryColor,
  ContainerBorderRadius,
  AltBackgroundColor,
  ButtonBorderRadius,
  ButtonHoverColor,
  logoUrl,
}) => {
  return html`
    <style>
      :root {
        --cui-color-primary: ${PrimaryColor};
        --cui-btn-background-color-hover: ${ButtonHoverColor};
        --cui-border-radius: ${ContainerBorderRadius}px;
        --cui-btn-border-radius: ${ButtonBorderRadius}px;
      }

      .sidebar {
        background-color: ${AltBackgroundColor};
      }
    </style>
    <cui-dashboard selected-loan-index=${2} logo-url=${logoUrl}></cui-dashboard>
  `;
};

export const MultiloanAccountV2L3 = Template.bind({});
MultiloanAccountV2L3.args = {
  ...flexportVars,
};
