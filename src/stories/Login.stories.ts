import { linkTo } from "@storybook/addon-links";
import { html, css, render } from "lit";
import { defaults } from './defaults';

const demoDashboardCSS = css`
  #DashboardDemo {
    align-items: center;
    background-color: #fff;
    color: var(--cui-text-color-body);
    display: flex;
    font-family: var(--cui-font-family-base);
    font-size: var(--cui-font-size-base);
    justify-content: center;
    line-height: var(--cui-line-height-base);
    min-height: calc(100vh - 64px);
    padding: 32px 16px;
    width: calc(100% - 32px);
  }

  a {
    color: var(--cui-color-primary);
    display: inline-block;
    padding: 4px;
    text-decoration: none;
  }

  img {
    width: 150px;
  }

  h4 {
    color: var(--cui-text-color-headers);
    font-size: var(--cui-font-size-h4);
    margin-bottom: 16px;
    margin-top: 0;
  }

  .auth-container {
    max-width: 320px;
    text-align: center;
    width: 100%;
  }

  .auth-container cui-card {
    margin-bottom: 24px;
    padding: 16px 24px 24px;
    width: calc(100% - 48px);
  }

  .logo-container {
    text-align: center;
    margin-bottom: 32px;
  }

  cui-input-text {
    margin-bottom: 16px;
  }

  @media only screen and (min-width: 768px) {
    #DashboardDemo {
    }
  }

  @media only screen and (min-width: 992px) {
    #DashboardDemo {
      grid-template-columns: 1fr 2fr;
    }

    .main .header {
      padding: 0 48px;
    }

    .main .content {
      padding: 48px;
    }
  }

  @media only screen and (min-width: 1400px) {
    #DashboardDemo {
      grid-template-columns: 1fr 3fr;
    }
  }
`;

export default {
  title: "Demos/Login",
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
  logoUrl = dashboardLogoSVG,
}) => {

  let email = "";
  let password = "";

  const handleClick = (e) => {
    console.log(email, password)

    if (email === "hello@flexport.com" && password === "password") {
      linkTo("Demos/Dashboard", "Multiloan Account V 2")();
      console.log('logging in...')
      return;
    }

    console.log('invalid credentials...')
    linkTo("Demos/InvalidLogin", "Invalid Login")();
  }

  return html`
    <style>${demoDashboardCSS}</style>
    <style>
      :root {
        --cui-color-primary: ${PrimaryColor};
        --cui-btn-background-color-hover: ${ButtonHoverColor};
        --cui-border-radius: ${ContainerBorderRadius}px;
        --cui-btn-border-radius: ${ButtonBorderRadius}px;
      }

      #DashboardDemo {
        background-color: ${AltBackgroundColor};
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
        <a data-sb-kind="Demos" data-sb-story="Register" href="#">Register New Account</a><br />
        <a data-sb-kind="Demos" data-sb-story="Password Reminder"href="#">Forgot Password?</a>
      </div>
    </div>
  `;
};

export const Login = Template.bind({});
Login.args = {
  ...defaults,
};
