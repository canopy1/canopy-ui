import { css } from "lit";

// TODO: Styling, Responsiveness
export const amScheduleCSS = css`
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

  th:nth-child(2),
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

  th:first-of-type {
    padding-right: 0;
    width: 12px;
  }

  td {
    padding: var(--cui-table-cell-padding-vertical) var(--cui-table-cell-padding-horizontal);
  }

  td:first-of-type {
    padding-right: 0;
  }

  tr:nth-child(even) td {
    background-color: var(--cui-table-even-row-background-color);
  }

  .cui-am-schedule--status-icon {
    align-items: center;
    background-color: var(--cui-am-schedule-status-color-default);
    border-radius: 50%;
    display: flex;
    height: var(--cui-am-schedule-status-icon-size);
    justify-content: center;
    width: var(--cui-am-schedule-status-icon-size);
  }

  .cui-am-schedule--status-icon svg {
    display: none;
    width: 50%;
  }

  tr.cui-am-schedule--row-paid .cui-am-schedule--status-icon {
    background-color: var(--cui-am-schedule-status-color-success);
  }
  tr.cui-am-schedule--row-paid .cui-am-schedule--status-icon svg {
    display: block;
  }

  tr.cui-am-schedule--row-paid .cui-am-schedule--cell-paid {
    color: var(--cui-am-schedule-status-color-success);
  }
`
