import { html, LitElement, TemplateResult } from "lit";
import { customElement, state, property } from "lit/decorators.js";
import { closeIconSVG, rightArrowSVG, fileSVG, leftArrowSVG, downloadSVG } from "../../icons/inline";
import { fromISO } from "../../utils";
import { statementsCSS } from "./statements.css";

interface StatementsItem {
  statement_id: string,
  cycle_inclusive_start: string,
  cycle_exclusive_end: string,
  statement_pdf_url: string
}

type StatementsProp = StatementsItem[];

@customElement("cui-statements")
export class Statements extends LitElement {
  static styles = statementsCSS;

  @property({ attribute: 'statements', type: Array })
  public statements: StatementsProp = [];

  @state()
  private _selectedStatement: StatementsItem["statement_id"] | null = null;

  @state()
  private _currentPage = 0; // 0-indexed

  private _pageSize = 6;

  private _openPreview(statementID: StatementsItem["statement_id"]) {
    this._selectedStatement = statementID;
    this.requestUpdate();
  }

  private _closePreview() {
    this._selectedStatement = null;
    this.requestUpdate();
  }

  private _setPage(page: number)  {
    this._currentPage = page;
    this.requestUpdate();
  }

  private _decrementPage() {
    this._setPage(Math.max(this._currentPage - 1, 0))
  }

  private _incrementPage() {
    this._setPage(Math.min(this._currentPage + 1, this._pageLimit))
  }

  private get _pageLimit(): number {
    return Math.ceil(this.statements.length / this._pageSize)
  }

  private get _pdfModalPreview(): TemplateResult<1> {
    const selectedStatementObj = this.statements.find(s => s.statement_id === this._selectedStatement)
    const pdfUrl = selectedStatementObj?.statement_pdf_url
    const startDate = (
      selectedStatementObj && (
        fromISO(selectedStatementObj.cycle_inclusive_start)
          .minus({ seconds: 1 })
          .toFormat("LLL d, yyyy"))
      ) || "_";
    const endDate = (
      selectedStatementObj && (
        fromISO(selectedStatementObj.cycle_exclusive_end)
          .minus({ seconds: 1 })
          .toFormat("LLL d, yyyy"))
      ) || "_";
    return html`
      <div class="modal">
        <div class="modal-header">
          <strong>Account Statement: ${startDate} - ${endDate}</strong>
          <span class="modal-header-btns">
            <a href=${pdfUrl} target="_blank" download>
              <cui-btn size="small" color="secondary">${downloadSVG} Download PDF</cui-btn>
            </a>
            <button class="close-icon" @click=${this._closePreview}>
              ${closeIconSVG}
            </button>
          </span>
        </div>
        <iframe src=${pdfUrl}></iframe>
      </div>
      <div class="modal-overlay" @click=${this._closePreview}></div>
    `
  }

  private get _pagination(): TemplateResult<1> {
    return html`
      <div class="pagination-btn-set">
        <button
          class="icon-btn"
          @click=${this._decrementPage }
          ?disabled=${this._currentPage + 1 === 1}
        >
          ${leftArrowSVG}
        </button>
        <span class="page-state">${this._currentPage + 1}/${this._pageLimit}</span>
        <button
          class="icon-btn" 
          @click=${this._incrementPage}
          ?disabled=${this._currentPage + 1 === this._pageLimit}
        >
          ${rightArrowSVG}
        </button>
      </div>
    `;
  }

  render(): TemplateResult<1> {
    return html`
      <cui-card>
        <cui-card-header title="Account Statements">
          ${this._pagination}
        </cui-card-header>
        <ul>
          ${this.statements.slice((this._currentPage * 6), (this._currentPage + 1) * 6).map((s, index) => {
            const startDate = (
              fromISO(s.cycle_inclusive_start)
                .minus({ seconds: 1 })
                .toFormat("LLL d, yyyy")
            ) || "_";
            const endDate = (
              fromISO(s.cycle_exclusive_end)
                .minus({ seconds: 1 })
                .toFormat("LLL d, yyyy")
            ) || "_";
            return html`
              <cui-list-item
                @click=${() => this._openPreview(s.statement_id)}
                clickable
              >
                <div><span class="cui-list-row-icon">${fileSVG}</span>${startDate} - ${endDate}</div>
              </cui-list-item>
            `;
          })}
        </ul>
      </cui-card>

      ${this._selectedStatement ? this._pdfModalPreview : null}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "cui-statements": Statements;
  }
}
