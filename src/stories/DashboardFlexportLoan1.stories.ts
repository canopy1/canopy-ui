import { html } from "lit";
import { flexportVars, defaultControls } from "./defaults";
import "../organisms/dashboard/dashboard";

export default {
  title: "Flexport Demo/Dashboard",
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    ...defaultControls
  },
};

const Template = ({
  AltBackgroundColor,
  BaseFontSize,
  ButtonBorderRadius,
  ButtonFontSize,
  ButtonHeight,
  ButtonHoverColor,
  ContainerBorderRadius,
  DangerColor,
  InputBorderColor,
  InputBorderWidth,
  InputHeight,
  InputPaddingHorizontal,
  InputPlaceholderTextColor,
  InputBorderFocusColor,
  logoUrl,
  PrimaryColor,
  SuccessColor,
  TextBody,
  TextDark,
}) => {
  return html`
    <style>
      :root {
        --cui-text-color-body: ${TextBody};
        --cui-color-primary: ${PrimaryColor};
        --cui-color-danger: ${DangerColor};
        --cui-color-success: ${SuccessColor};
        --cui-background-color-alt: ${AltBackgroundColor};
        --cui-btn-background-color-hover: ${ButtonHoverColor};
        --cui-border-radius: ${ContainerBorderRadius}px;
        --cui-btn-border-radius: ${ButtonBorderRadius}px;
        --cui-btn-font-size: ${ButtonFontSize}px;
        --cui-btn-height: ${ButtonHeight}px;
        --cui-input-border-radius: var(--cui-btn-border-radius);
        --cui-color-black: ${TextDark};
        --cui-text-color-headers: var(--cui-color-black);
        --cui-btn-text-color: var(--cui-color-black);
        --cui-input-border-color: ${InputBorderColor};
        --cui-input-border-color-active: ${InputBorderFocusColor};
        --cui-input-border-width: ${InputBorderWidth}px;
        --cui-input-font-size: ${ButtonFontSize}px;
        --cui-font-size-base: ${BaseFontSize}px;
        --cui-input-padding-horizontal: ${InputPaddingHorizontal}px;
        --cui-input-height: ${InputHeight}px;
        --cui-input-placeholder-color: ${InputPlaceholderTextColor};
      }
    </style>
    <cui-dashboard selected-loan-index=${1} logo-url=${logoUrl}></cui-dashboard>
  `;
};

export const Loan1 = Template.bind({});
Loan1.args = {
  ...flexportVars,
};
