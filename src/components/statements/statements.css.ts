import { css } from "lit";
import { modalCSS } from "../payment/payment.css";

const paginationCSS = css`
  .pagination-btn-set {
    display: flex;
    align-items: center;
  }

  .page-state {
    margin: 0 var(--cui-spacing-1);
  }

  .icon-btn {
    position: relative;
    display: flex;
    width: 24px;
    height: 24px;
    border: none;
    border-radius: var(--cui-border-radius-sm);
    cursor: pointer;
    background-color: var(--cui-background-color-faded);
  }

  .icon-btn[disabled] {
    cursor: default;
  }

  .icon-btn > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    fill: var(--cui-color-black);
  }

  .icon-btn[disabled] > svg {
    fill: var(--cui-text-color-light);
  }
`

export const statementsCSS = css`
  :host {
    font-family: var(--cui-font-family-base);
    font-size: var(--cui-font-size-base);
    color: var(--cui-text-color-body);
    display: block;
    width: 100%;
  }

  .card-header {
    align-items: center;
    border-bottom: var(--cui-modal-header-border);
    color: var(--cui-text-color-headers);
    display: flex;
    font-weight: var(--cui-font-weight-semibold);
    justify-content: space-between;
    padding: var(--cui-modal-header-padding);
  }

  ${paginationCSS}

  ul {
    padding: 0;
    margin: 0;
    min-height: calc(calc(var(--cui-li-padding-vertical) * 2 + 20px)* 6);
  }

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    padding: var(--cui-li-padding-vertical) var(--cui-li-padding-horizontal);
  }

  li > span {
    display: flex;
    align-items: center;
  }

  li > span:nth-child(2) {
    cursor: pointer;
  }

  .date-line > svg {
    margin-right: var(--cui-spacing-2);
  }

  li:nth-child(2n+1) {
    background-color: var(--cui-li-even-row-background-color);
  }

  ${modalCSS}

  .modal {
    height: calc(100% - 80px);
    min-width: 960px;
    transform: translate(-50%, -50%);
  }

  .modal-header-btns {
    display: inline-flex;
    align-items: center;
  }

  .modal-header-btns > *:first-child {
    margin-right: var(--cui-spacing-3);
  }

  a[download] {
    text-decoration: none;
    cursor: pointer;
  }

  .download-btn {
    padding: var(--cui-spacing-2) var(--cui-spacing-3);
    border-radius: var(--cui-border-radius-sm);
    border: 2px solid var(--cui-text-color-light);
    background-color: var(--cui-color-white);
    font-weight: var(--cui-font-weight-bold);
    color: var(--cui-text-color-body);
    display: inline-flex;
    align-items: center;
    cursor: pointer;
  }

  .download-btn svg {
    margin-right: var(--cui-spacing-2);
  }

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`
