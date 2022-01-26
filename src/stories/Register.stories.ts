import { html } from "lit";
import { flexportVars, defaultControls, demoDashboardCSS } from './defaults';

export default {
  title: "Flexport Demo/Auth",
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    ...defaultControls
  },
};

const Template = ({
  AltBackgroundColor,
  AuthBgImgUrl,
  BaseFontSize,
  ButtonBorderRadius,
  ButtonFontSize,
  ButtonHeight,
  ButtonHoverColor,
  ContainerBorderRadius,
  InputBorderColor,
  InputBorderWidth,
  InputHeight,
  InputPaddingHorizontal,
  InputPlaceholderTextColor,
  InputBorderFocusColor,
  logoUrl,
  PrimaryColor,
  TextBody,
  TextDark,
}) => {
  return html`
    <style>${demoDashboardCSS}</style>
    <style>
      :root {
        --cui-text-color-body: ${TextBody};
        --cui-color-primary: ${PrimaryColor};
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

      #DashboardDemo {
        background-color: ${AltBackgroundColor};
        background-image: url(${AuthBgImgUrl});
        background-size: 80%;
        background-position: bottom right;
        background-repeat: no-repeat;
      }
    </style>
    <div id="DashboardDemo">
      <div class="auth-container">
        <div class="logo-container">
          <img src="${logoUrl}"/>
        </div>
        <cui-card>
          <h4>Register New Account</h4>
          <cui-input-text
            name="email"
            value=""
            placeholder="Email Address"
            required
          >
          </cui-input-text>
          <cui-input-text
            type="password"
            name="password"
            value=""
            placeholder="Password"
            required
          >
          </cui-input-text>
          <cui-input-text
            name="account-number"
            value=""
            placeholder="Account Number"
            required
          >
          </cui-input-text>
          <cui-input-text
            type="password"
            name="ssn"
            value=""
            placeholder="SSN"
            required
          >
          </cui-input-text>
          <cui-btn data-sb-kind="Demos" data-sb-story="Login">Register Account</cui-btn>
        </cui-card>
      </div>
    </div>
  `;
};

export const Register = Template.bind({});
Register.args = {
  ...flexportVars,
};
