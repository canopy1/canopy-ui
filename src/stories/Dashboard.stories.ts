import { html, css } from "lit";
import { dashboardLogoSVG } from "../icons/inline"
import { defaults } from './defaults';

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
    background-color: #F2F5FD;
  }

  .sidebar .content {
    padding: 12px 12px 24px;
  }

  .main .header {
    padding: 0 12px;
  }

  .main .content {
    padding: 48px 12px;
  }

  .header {
    align-items: center;
    border-bottom: 1px solid #E1E4F2;
    display: flex;
    height: 48px;
    padding: 0 16px;
  }

  cui-payment {
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
`

export default {
  title: 'Demos/Dashboard',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    PrimaryColor: {
      control: { type: 'color' }
    },
    ButtonHoverColor: {
      control: { type: 'color' }
    },
    AltBackgroundColor: {
      control: { type: 'color' }
    },
    ContainerBorderRadius: {
      control: { type: 'number' }
    },
    ButtonBorderRadius: {
      control: { type: 'number' }
    },
    Logo: {
      control: { type: 'file' }
    }
  }
};

const Template = ({ PrimaryColor, ContainerBorderRadius, AltBackgroundColor, ButtonBorderRadius, ButtonHoverColor, Logo }) => {

  const paymentMeta = {
    due_by: "8/20/2021",
    past_due: 0,
    fees_due: 45363
  };
  const paymentMethods = [
    { value: "card1", text: "Visa ending 4222", default: true },
    { value: "card2", text: "Visa ending 4221" }
  ];
  const paymentAmounts = [
    { value: "45363", text: "Minimum Payment Due - $453.63" },
    { value: "422083", text: "Entire Balance - $4,220.83", default: true }
  ];
  const autopayEnabled = false;
  const autopayEnabledConfirmBody = "<p style='text-align: center;'>Your <strong>Visa ending 4222</strong> will be charged <strong>$128.03</strong> on the <strong>3rd of each month</strong>.</p>"
  const autopayDisabledConfirmBody = "<p style='text-align: center;'><strong>Are you sure you want disable autopay?</strong><br /> You may be charged fees for late or missed payments without autopay.</p>"

  const externalFields = [
    { key: "Origination Date", value: "5/20/2020" },
    { key: "Origination Fee", value: 0 },
    { key: "Discount Amount", value: 939_00 },
    { key: "Loan Amount", value: 5000_00 },
    { key: "Interest Rate", value: "15.99%" },
  ];
  const externalFormat = {
    "Origination Fee": "centsToDollars",
    "Discount Amount": "centsToDollars",
    "Discount Date": "M/d/yy",
    "Loan Amount": "centsToDollars"
  };

  const statements = [
    {
      "statement_id": 1,
      "cycle_inclusive_start": "2021-05-01T09:42:00+00:00",
      "cycle_exclusive_end": "2021-05-08T09:42:00+00:00",
      "statement_pdf_url": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    },
    {
      "statement_id": 2,
      "cycle_inclusive_start": "2021-05-08T09:42:00+00:00",
      "cycle_exclusive_end": "2021-05-15T09:42:00+00:00",
      "statement_pdf_url": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    },
    {
      "statement_id": 3,
      "cycle_inclusive_start": "2021-05-15T09:42:00+00:00",
      "cycle_exclusive_end": "2021-05-22T09:42:00+00:00",
      "statement_pdf_url": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    },
    {
      "statement_id": 4,
      "cycle_inclusive_start": "2021-05-22T09:42:00+00:00",
      "cycle_exclusive_end": "2021-05-29T09:42:00+00:00",
      "statement_pdf_url": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    },
    {
      "statement_id": 5,
      "cycle_inclusive_start": "2021-05-29T09:42:00+00:00",
      "cycle_exclusive_end": "2021-06-05T09:42:00+00:00",
      "statement_pdf_url": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    },
    {
      "statement_id": 6,
      "cycle_inclusive_start": "2021-06-05T09:42:00+00:00",
      "cycle_exclusive_end": "2021-06-12T09:42:00+00:00",
      "statement_pdf_url": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    },
    {
      "statement_id": 7,
      "cycle_inclusive_start": "2021-06-12T09:42:00+00:00",
      "cycle_exclusive_end": "2021-06-19T09:42:00+00:00",
      "statement_pdf_url": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    }
  ];

  const AmItems = [
    {
      "min_pay_due_at": "2021-06-20T09:10:14+00:00",
      "am_min_pay_cents": 45363,
      "am_cycle_payment_cents": 45363,
      "am_interest_cents": 6662,
      "am_principal_cents": 38701,
      "am_end_principal_balance_cents": 461299,
    },
    {
      "min_pay_due_at": "2021-07-20T09:10:14+00:00",
      "am_min_pay_cents": 45363,
      "am_cycle_payment_cents": 45363,
      "am_interest_cents": 6147,
      "am_principal_cents": 39216,
      "am_end_principal_balance_cents": 422083,
    },
    {
      "min_pay_due_at": "2021-08-20T09:10:14+00:00",
      "am_min_pay_cents": 45363,
      "am_cycle_payment_cents": 0,
      "am_interest_cents": 5624,
      "am_principal_cents": 39739,
      "am_end_principal_balance_cents": 382344,
    },
    {
      "min_pay_due_at": "2021-09-20T09:10:14+00:00",
      "am_min_pay_cents": 45363,
      "am_cycle_payment_cents": 0,
      "am_interest_cents": 5095,
      "am_principal_cents": 40268,
      "am_end_principal_balance_cents": 342076,
    },
    {
      "min_pay_due_at": "2021-10-20T09:10:14+00:00",
      "am_min_pay_cents": 45363,
      "am_cycle_payment_cents": 0,
      "am_interest_cents": 4558,
      "am_principal_cents": 40805,
      "am_end_principal_balance_cents": 301271,
    },
    {
      "min_pay_due_at": "2021-11-20T09:10:14+00:00",
      "am_min_pay_cents": 45363,
      "am_cycle_payment_cents": 0,
      "am_interest_cents": 4014,
      "am_principal_cents": 41349,
      "am_end_principal_balance_cents": 259923,
    },
    {
      "min_pay_due_at": "2021-12-20T09:10:14+00:00",
      "am_min_pay_cents": 45363,
      "am_cycle_payment_cents": 0,
      "am_interest_cents": 3463,
      "am_principal_cents": 41900,
      "am_end_principal_balance_cents": 218023,
    },
    {
      "min_pay_due_at": "2022-01-20T09:10:14+00:00",
      "am_min_pay_cents": 45363,
      "am_cycle_payment_cents": 0,
      "am_interest_cents": 2905,
      "am_principal_cents": 42458,
      "am_end_principal_balance_cents": 175565,
    },
    {
      "min_pay_due_at": "2022-02-20T09:10:14+00:00",
      "am_min_pay_cents": 45363,
      "am_cycle_payment_cents": 0,
      "am_interest_cents": 2339,
      "am_principal_cents": 43024,
      "am_end_principal_balance_cents": 132541,
    },
    {
      "min_pay_due_at": "2022-03-20T09:10:14+00:00",
      "am_min_pay_cents": 45363,
      "am_cycle_payment_cents": 0,
      "am_interest_cents": 1766,
      "am_principal_cents": 43597,
      "am_end_principal_balance_cents": 88944,
    },
    {
      "min_pay_due_at": "2022-04-20T09:10:14+00:00",
      "am_min_pay_cents": 45363,
      "am_cycle_payment_cents": 0,
      "am_interest_cents": 1185,
      "am_principal_cents": 44178,
      "am_end_principal_balance_cents": 44767,
    },
    {
      "min_pay_due_at": "2022-05-20T09:10:14+00:00",
      "am_min_pay_cents": 45363,
      "am_cycle_payment_cents": 0,
      "am_interest_cents": 597,
      "am_principal_cents": 44766,
      "am_end_principal_balance_cents": 0,
    }
  ];

  return html`
    <style>${demoDashboardCSS}</style>
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
    <div id="DashboardDemo">
      <div class="sidebar">
        <div class="header">
          ${dashboardLogoSVG}
        </div>
        <div class="content">
          <cui-payment
            payment-meta=${JSON.stringify(paymentMeta)}
            payment-methods=${JSON.stringify(paymentMethods)}
            payment-amounts=${JSON.stringify(paymentAmounts)}
            ${autopayEnabled ? "autopay-enabled" : ""}
            autopay-enabled-confirm-body=${autopayEnabledConfirmBody}
            autopay-disabled-confirm-body=${autopayDisabledConfirmBody}
          >
          </cui-payment>
          <cui-external-fields
            fields=${JSON.stringify(externalFields)}
            format=${JSON.stringify(externalFormat)}
          >
          </cui-external-fields>
          <cui-statements
            statements=${JSON.stringify(statements)}
          >
          </cui-statements>
        </div>
      </div>
      <div class="main">
        <div class="header">
          <span>Account #0293874032</span>
        </div>
        <div class="content">
          <cui-account-overview
            details='{
              "principal_cents": 422083,
              "am_interest_balance_cents": 41293,
              "total_paid_to_date_cents": 90726,
              "total_interest_paid_to_date_cents": 12809,
              "interest_rate_percent": 15.99
            }'
            class="cui-no-card"
          >
          </cui-account-overview>
          <h4>Amortization Schedule</h4>
          <cui-am-schedule items=${JSON.stringify(AmItems)}>
          </cui-am-schedule>
        </div>
      </div>
    </div>
  `
};

export const InstallmentLoan = Template.bind({});
InstallmentLoan.args = {
  ...defaults,
};
