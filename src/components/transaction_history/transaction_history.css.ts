import { css } from "lit";

// TODO: Styling, Responsiveness
export const transactionHistoryCSS = css`
  :host {
    color: var(--cui-text-color-body);
    font-family: var(--cui-font-family-base);
    font-size: var(--cui-font-size-base);
  }

  table {
    background-color: var(--cui-table-background-color);
    border: var(--cui-table-border-width) var(--cui-table-border-style) var(--cui-table-border-color);
    border-radius: var(--cui-table-border-radius);
    border-spacing: 0;
    box-shadow: var(--cui-table-box-shadow);
    overflow: hidden;
    padding: 0;
    width: 100%;
  }

  th, td {
    border: 0;
    text-align: right;
  }

  th:first-of-type,
  th:nth-child(2),
  td:first-of-type,
  td:nth-child(2) {
    text-align: left;
  }

  th {
    background-color: var(--cui-table-header-background-color);
    border-bottom: var(--cui-table-header-border-bottom);
    font-size: var(--cui-table-header-font-size);
    font-weight: var(--cui-table-header-font-weight);
    padding: var(--cui-table-header-cell-padding-vertical) var(--cui-table-cell-padding-horizontal);
  }

  td {
    padding: var(--cui-table-cell-padding-vertical) var(--cui-table-cell-padding-horizontal);
  }

  tr:nth-child(even) td {
    background-color: var(--cui-table-even-row-background-color);
  }

  .cui-transaction-history--line-item-status {
    color: var(--cui-transaction-history--line-item-status--pending-color);
    font-size: var(--cui-font-size-sm);
  }

  .cui-transaction-history--cell-paid {
    color: var(--cui-transaction-history--cell-paid-text-color);
    font-weight: 600;
  }
`
