import { linkTo } from "@storybook/addon-links";
import { html, css } from "lit";
import { dashboardLogoSVG } from "../icons/inline";

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
  title: "Demos/Register",
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
    Logo: {
      control: { type: "file" },
    },
  },
};

const Template = ({
  PrimaryColor,
  ContainerBorderRadius,
  AltBackgroundColor,
  ButtonBorderRadius,
  ButtonHoverColor,
  Logo = dashboardLogoSVG,
}) => {
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
          ${Logo}
        </div>
        <cui-card>
          <h4>Register</h4>
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
          <cui-btn data-sb-kind="Demos" data-sb-story="Login">Register</cui-btn>
        </cui-card>
      </div>
    </div>
  `;
};

export const Register = Template.bind({});
Register.args = {
  PrimaryColor: "#4867FF",
  ButtonHoverColor: "#443CF8",
  AltBackgroundColor: "#F2F5FD",
  ContainerBorderRadius: 16,
  ButtonBorderRadius: 8,
};
