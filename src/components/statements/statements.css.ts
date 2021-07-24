import { css } from "lit";
import { modalCSS } from "../../elements/modal/modal";

const paginationCSS = css`
  .pagination-btn-set {
    align-items: center;
    display: flex;
    margin-right: -16px;
  }

  .page-state {
    font-weight: normal;
    margin: 0 var(--cui-spacing-1);
    letter-spacing: 0.25rem;
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
    transition: var(--cui-btn-transition);
  }

  .icon-btn:hover {
    background-color: var(--cui-background-color-hover);
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
    line-height: var(--cui-line-height-base);
    width: 100%;
  }

  ul {
    padding: 0;
    margin: 0;
    min-height: calc(calc(var(--cui-li-padding-vertical) * 2 + 20px)* 6);
  }

  cui-list-item div {
    display: flex;
  }

  cui-list-item:nth-of-type(2n) {
    background-color: var(--cui-li-even-row-background-color);
  }

  .cui-list-row-icon {
    align-items: center;
    display: flex;
    height: 20px;
    justify-content: center;
    margin-left: -4px;
    margin-right: var(--cui-spacing-2);
    width: 20px;
  }

  .cui-list-row-icon svg path {
    fill: var(--cui-li-row-icon-color);
  }

  ${paginationCSS}
  ${modalCSS}

  .modal {
    height: 100%;
    max-height: 90vh;
    max-width: var(--cui-modal-max-width-lg);
    overflow: hidden;
    width: 90%;
  }

  .modal-header-btns {
    align-items: center;
    display: inline-flex;
    margin: -4px 0;
  }

  .modal-header-btns > *:first-child {
    margin-right: var(--cui-spacing-3);
  }

  a[download] {
    text-decoration: none;
    cursor: pointer;
  }

  a[download] svg {
    margin-right: var(--cui-spacing-1);
  }

  iframe {
    width: 100%;
    height: calc(100% - 48px);
    border: none;
  }
`
