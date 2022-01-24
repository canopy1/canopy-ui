import { linkTo } from "@storybook/addon-links";
import { html, css } from "lit";
import { dashboardLogoSVG } from "../icons/inline";

const demoDashboardCSS = css`
  #DashboardDemo {
    background-color: #fff;
    color: var(--cui-text-color-body);
    font-family: var(--cui-font-family-base);
    font-size: var(--cui-font-size-base);
    line-height: var(--cui-line-height-base);
    min-height: 100vh;
  }

  h4 {
    color: var(--cui-text-color-headers);
    font-size: var(--cui-font-size-h4);
    margin-bottom: 24px;
  }

  .sidebar {
    background-color: #f2f5fd;
  }

  .sidebar .header {
    background-color: var(--cui-color-primary);
    justify-content: center;
  }

  .sidebar .content {
    padding: 24px 12px;
  }

  .main .header {
    padding: 0 12px;
  }

  .main .content {
    padding: 48px 12px;
  }

  .header {
    align-items: center;
    border-bottom: 1px solid #e1e4f2;
    display: flex;
    height: 56px;
    padding: 0 16px;
  }

  cui-payment {
    margin-bottom: 24px;
  }

  cui-loans-list {
    margin-bottom: 24px;
  }

  cui-external-fields {
    margin-bottom: 24px;
  }

  cui-account-overview {
    margin-bottom: 48px;
  }

  @media only screen and (min-width: 768px) {
    #DashboardDemo {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    .sidebar .header {
      background-color: transparent;
      justify-content: start;
    }

    .header {
      height: 64px;
      padding: 0 24px;
    }

    .sidebar .content {
      padding: 24px;
    }

    .main .header {
      padding: 0 24px;
    }

    .main .content {
      padding: 24px;
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
  Logo,
}) => {
  return html`<button data-sb-kind="Demos/Dashboard" data-sb-story="Multiloan Account V 2">Login</button>`;
};

export const Login = Template.bind({});
Login.args = {
  PrimaryColor: "#4867FF",
  ButtonHoverColor: "#443CF8",
  AltBackgroundColor: "#F2F5FD",
  ContainerBorderRadius: 16,
  ButtonBorderRadius: 8,
};
