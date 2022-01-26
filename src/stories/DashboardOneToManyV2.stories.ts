import { html } from "lit";
import { defaults } from "./defaults";
import "../organisms/dashboard/dashboard"

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
    <cui-dashboard logoUrl=${logoUrl}></cui-dashboard>
  `;
};

export const MultiloanAccountV2 = Template.bind({});
MultiloanAccountV2.args = {
  ...defaults,
};
