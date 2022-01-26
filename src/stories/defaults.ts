import { css } from "lit";

export const flexportVars = {
  BaseFontSize: 16,
  PrimaryColor: "#45DABE",
  ButtonHeight: 56,
  ButtonHoverColor: "#27C5A7",
  AltBackgroundColor: "#24303E",
  TextBody: "#4D5563",
  TextDark: "#24303E",
  InputPlaceholderTextColor: "#bac1ca",
  InputBorderColor: "#6A768B",
  InputBorderFocusColor: "#24303E",
  InputBorderWidth: 2,
  InputHeight: 53,
  InputPaddingHorizontal: 20,
  InputPaddingVertical: 13,
  MobileHeaderColor: "68ADFF",
  ContainerBorderRadius: 0,
  ButtonBorderRadius: 5,
  logoUrl: "http://retinab2.com/wp-content/uploads/2020/06/flexport-logow-r.png",
  AuthBgImgUrl: "https://www.flexport.com/static/signup-flow-background-decoration-a381d1e4863be9471489267b3a88c92f.png",
}

export const defaultControls = {
  PrimaryColor: {
    control: { type: "color" },
  },
  BaseFontSize: {
    control: { type: "number" },
  },
  ButtonHeight: {
    control: { type: "number" },
  },
  ButtonHoverColor: {
    control: { type: "color" },
  },
  AltBackgroundColor: {
    control: { type: "color" },
  },
  TextBody: {
    control: { type: "color" },
  },
  TextDark: {
    control: { type: "color" },
  },
  InputBorderColor: {
    control: { type: "color" },
  },
  InputBorderFocusColor: {
    control: { type: "color" },
  },
  InputBorderWidth: {
    control: { type: "number" },
  },
  InputHeight: {
    control: { type: "number" },
  },
  InputPaddingHorizontal: {
    control: { type: "number" },
  },
  InputPlaceholderTextColor: {
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
  AuthBgImgUrl: {
    control: { type: "string" },
  },
};

export const demoDashboardCSS = css`
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
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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
    margin-bottom: 40px;
    margin-top: 0;
  }

  .auth-container {
    max-width: 400px;
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
    .auth-container cui-card {
      margin-bottom: 24px;
      padding: 40px 60px 60px;
      width: calc(100% - 120px);
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