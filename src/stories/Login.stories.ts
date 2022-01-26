import { linkTo } from "@storybook/addon-links";
import { html } from "lit";
import { flexportVars, defaultControls, demoDashboardCSS } from './defaults';

export default {
  title: "Flexport Demo",
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

  let email = "";
  let password = "";

  const handleClick = (e) => {
    console.log(email, password)

    if (email === "hello@flexport.com" && password === "password") {
      linkTo("Flexport Demo", "Dashboard")();
      console.log('logging in...')
      return;
    }

    console.log('invalid credentials...')
    linkTo("Flexport Demo", "Invalid Login")();
  }

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
          <img src="${logoUrl}" />
        </div>
        <cui-card>
          <h4>Account Login</h4>
          <cui-input-text
            name="email"
            value="${email}"
            placeholder="Email Address"
            @change="${e => { email = e.detail.value; }}"
            required
          >
          </cui-input-text>
          <cui-input-text
            type="password"
            name="password"
            value="${password}"
            @change="${e => { password = e.detail.value; }}"
            placeholder="Password"
            required
          >
          </cui-input-text>
          <cui-btn @click=${(e) => handleClick(e)} >Login</cui-btn>
        </cui-card>
        <a data-sb-kind="Flexport Demo" data-sb-story="Register" href="#">Register New Account</a><br />
        <a data-sb-kind="Flexport Demo" data-sb-story="Forgot Password"href="#">Forgot Password?</a>
      </div>
    </div>
  `;
};

export const Login = Template.bind({});
Login.args = {
  ...flexportVars,
};
