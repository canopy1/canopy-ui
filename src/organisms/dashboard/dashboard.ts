import { html, LitElement, TemplateResult, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { paymentDetailsCSS } from "./dashboard.css";

const demoDashboardCSS = css`
  #DashboardDemo {
    background-color: #fff;
    color: var(--cui-text-color-body);
    font-family: var(--cui-font-family-base);
    font-size: var(--cui-font-size-base);
    line-height: var(--cui-line-height-base);
    min-height: 100vh;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    color: var(--cui-text-color-headers);
    margin-top: 0;
  }

  h1 {
    font-size: var(--cui-font-size-h4);
    margin-bottom: 20px;
  }

  h4 {
    font-size: var(--cui-font-size-h4);
    margin-bottom: 24px;
  }

  img {
    width: 150px;
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
    padding: 24px 12px 48px;
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
    h1 {
      font-size: var(--cui-font-size-h3);
      margin-bottom: 28px;
    }

    #DashboardDemo {
      grid-template-columns: 1fr 2fr;
    }

    .main .header {
      padding: 0 48px;
    }

    .main .content {
      padding: 24px 48px 48px;
    }
  }

  @media only screen and (min-width: 1400px) {
    #DashboardDemo {
      grid-template-columns: 1fr 3fr;
    }
  }
`;

@customElement("cui-dashboard")
export class Dashboard extends LitElement {
  static styles = paymentDetailsCSS;

  @property({ attribute: "logoURL", type: String })
  public logoUrl =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flexport_logo.svg/440px-Flexport_logo.svg.png";

  render(): TemplateResult<1> {
    const loansList = [
      { id: 1, key: "All Loans", value: 27615 },
      { id: 2, key: "BNPL Loan #02938", value: 18238 },
      { id: 3, key: "BNPL Loan #02945", value: 9377 },
    ];

    const {
      autopayDisabledConfirmBody,
      autopayEnabled,
      autopayEnabledConfirmBody,
      paymentAmounts,
      paymentMeta,
      paymentMethods,
      statements,
      transactionItems,
    } = mockLoan();

    return html`
      <style>${demoDashboardCSS}</style>
      <div id="DashboardDemo">
        <div class="sidebar">
          <div class="header">
            <img src="${this.logoUrl}" />
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
            <cui-loans-list
              fields=${JSON.stringify(loansList)}
            >
            </cui-loans-list>
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
            <h1>All Loans</h1>
            <cui-account-overview
              details='{
                "principal_cents": 27615,
                "total_paid_to_date_cents": 38390,
                "total_interest_paid_to_date_cents": 2809,
                "interest_rate_percent": 15.99
              }'
              class="cui-no-card"
            >
            </cui-account-overview>
            <h4>All Transactions</h4>
            <cui-transaction-history items=${JSON.stringify(transactionItems)}></cui-transaction-history>
            </cui-am-schedule>
          </div>
        </div>
      </div>
      `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "cui-dashboard": Dashboard;
  }
}

function mockLoan() {
  const paymentMeta = {
    due_by: "1/15/2022",
    past_due: 0,
    fees_due: 0,
  };
  const paymentMethods = [
    { value: "card1", text: "Visa ending 4222", default: true },
    { value: "card2", text: "Visa ending 4221" },
  ];
  const paymentAmounts = [
    { value: "5678", text: "Minimum Payment Due - $56.78" },
    { value: "422083", text: "Entire Balance - $4,220.83", default: true },
  ];
  const autopayEnabled = false;
  const autopayEnabledConfirmBody =
    "<p style='text-align: center;'>Your <strong>Visa ending 4222</strong> will be charged <strong>$56.78</strong> on the <strong>3rd of each month</strong>.</p>";
  const autopayDisabledConfirmBody =
    "<p style='text-align: center;'><strong>Are you sure you want disable autopay?</strong><br /> You may be charged fees for late or missed payments without autopay.</p>";

  const statements = [
    {
      statement_id: 1,
      cycle_inclusive_start: "2022-01-02T09:42:00+00:00",
      cycle_exclusive_end: "2022-01-08T09:42:00+00:00",
      statement_pdf_url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    },
    {
      statement_id: 2,
      cycle_inclusive_start: "2021-12-26T09:42:00+00:00",
      cycle_exclusive_end: "2022-01-01T09:42:00+00:00",
      statement_pdf_url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    },
    {
      statement_id: 3,
      cycle_inclusive_start: "2021-12-19T09:42:00+00:00",
      cycle_exclusive_end: "2021-12-25T09:42:00+00:00",
      statement_pdf_url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    },
    {
      statement_id: 4,
      cycle_inclusive_start: "2021-12-12T09:42:00+00:00",
      cycle_exclusive_end: "2021-12-18T09:42:00+00:00",
      statement_pdf_url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    },
    {
      statement_id: 5,
      cycle_inclusive_start: "2021-12-05T09:42:00+00:00",
      cycle_exclusive_end: "2021-12-11T09:42:00+00:00",
      statement_pdf_url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    },
    {
      statement_id: 6,
      cycle_inclusive_start: "2021-11-28T09:42:00+00:00",
      cycle_exclusive_end: "2021-12-04T09:42:00+00:00",
      statement_pdf_url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    },
    {
      statement_id: 7,
      cycle_inclusive_start: "2021-11-21T09:42:00+00:00",
      cycle_exclusive_end: "2021-11-27T09:42:00+00:00",
      statement_pdf_url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    },
  ];

  const transactionItems = [
    {
      created_at: "2022-01-08T09:10:14+00:00",
      description: "Autopay",
      line_item_status: "POSTED",
      line_item_type: "PAYMENT",
      original_amount_cents: -5678,
    },
    {
      created_at: "2022-01-01T09:10:14+00:00",
      description: "Autopay",
      line_item_status: "POSTED",
      line_item_type: "PAYMENT",
      original_amount_cents: -5678,
    },
    {
      created_at: "2021-12-27T09:10:14+00:00",
      description: "Autopay",
      line_item_status: "POSTED",
      line_item_type: "PAYMENT",
      original_amount_cents: -5678,
    },
    {
      created_at: "2021-12-18T09:10:14+00:00",
      description: "BNPL Loan #02945",
      line_item_status: "VALID",
      line_item_type: "CHARGE",
      original_amount_cents: 12500,
    },
    {
      created_at: "2021-12-11T09:10:14+00:00",
      description: "Autopay",
      line_item_status: "POSTED",
      line_item_type: "PAYMENT",
      original_amount_cents: -5678,
    },
    {
      created_at: "2021-12-04T09:10:14+00:00",
      description: "Autopay",
      line_item_status: "POSTED",
      line_item_type: "PAYMENT",
      original_amount_cents: -5678,
    },
    {
      created_at: "2021-11-29T09:10:14+00:00",
      description: "One-time Payment",
      line_item_status: "POSTED",
      line_item_type: "PAYMENT",
      original_amount_cents: -10000,
    },
    {
      created_at: "2021-11-28T09:10:14+00:00",
      description: "BNPL Loan #02990",
      line_item_status: "VALID",
      line_item_type: "CHARGE",
      original_amount_cents: 55000,
    },
  ];

  return {
    paymentMeta,
    paymentMethods,
    paymentAmounts,
    statements,
    transactionItems,
    autopayEnabled,
    autopayEnabledConfirmBody,
    autopayDisabledConfirmBody,
  };
}
