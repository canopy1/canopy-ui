import { css } from "lit";
import { modalCSS } from "../../elements/modal/modal";

// TODO: Styling, Responsiveness
export const paymentCSS = css`
  :host {
    font-family: var(--cui-font-family-base);
    font-size: var(--cui-font-size-base);
    color: var(--cui-text-color-body);
    display: block;
    width: 100%;
  }

  .payment-due {
    display: flex;
    flex-flow: column nowrap;
    margin: var(--cui-spacing-4);
  }

  .payment-due cui-stat {
    margin-bottom: var(--cui-spacing-4);
  }

  .cui-payment--meta {
    margin: 0;
    padding: 0;
  }

  .cui-payment--meta cui-list-item:nth-of-type(2n - 1) {
    background-color: var(--cui-li-even-row-background-color);
  }

  .field {
    display: flex;
    flex-flow: column nowrap;
    margin-bottom: var(--cui-spacing-3);
  }
  
  .field:last-of-type {
    margin-bottom: 0;
  }

  .field label {
    margin-bottom: var(--cui-spacing-2);
    font-weight: var(--cui-font-weight-semibold);
    color: var(--cui-color-black);
  }

  .required-symbol {
    color: var(--cui-text-color-light);
  }

  .payment-due-notice {
    font-size: var(--cui-font-size-sm);
    margin-bottom: var(--cui-spacing-4);
  }
  
  .payment-due-date {
    font-weight: var(--cui-font-weight-semibold);
  }

  .confirm-payment-details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: var(--cui-spacing-3);
  }

  .cui-alert {
    color: var(--cui-text-color-headers);
    background-color: var(--cui-text-color-light);
    border-radius: var(--cui-border-radius-sm);
    margin-bottom: var(--cui-spacing-4);
    padding: var(--cui-spacing-2) var(--cui-spacing-3);
  }

  .cui-alert p {
    margin: 0 !important;
  }

  .cui-alert-danger {
    background-color: var(--cui-color-danger-lighten);
  }

  ${modalCSS}

  .btn-set {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-column-gap: var(--cui-spacing-2);
  }

  .btn-set cui-btn {
    flex: 1 0 auto;
  }  

  .autopay-toggle span {
    font-weight: normal;
    padding-right: 4px;
  }

  .toggle {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
    height: 20px;
    width: 32px;
    border-radius: 16px;
    display: inline-block;
    position: relative;
    margin: -4px 0;
    border: 2px solid var(--cui-text-color-light);
    background-color: var(--cui-background-color-light);
    transition: all .2s ease;
  }
  .toggle:focus {
    outline: 0;
  }
  .toggle:after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--cui-text-color-light);
    transition: all .2s cubic-bezier(.5,.1,.75,1.35);
  }
  .toggle.is-on {
    border-color: var(--cui-color-success);
  }
  .toggle.is-on:after {
    background: var(--cui-color-success);
    transform: translateX(12px);
  }

  /* Borrow styles from input.select. Reuse source CSS later. */
  select {
    background-color: var(--cui-input-background-color);
    border-color: var(--cui-input-border-color);
    border-style: var(--cui-input-border-style);
    border-width: var(--cui-input-border-width);
    border-radius: var(--cui-input-border-radius);
    box-shadow: var(--cui-input-box-shadow);
    color: var(--cui-input-text-color);
    font-size: var(--cui-btn-font-size);
    min-height: var(--cui-input-height);
    height: var(--cui-input-height);
    line-height: var(--cui-input-line-height);
    padding: var(--cui-input-padding-vertical) var(--cui-input-padding-horizontal);
    transition: var(--cui-input-transition);
    width: 100%;
  }

  select:active,
  select:focus,
  select:focus-visible {
    border-color: var(--cui-input-border-color-active);
    box-shadow: var(--cui-input-box-shadow-active);
    outline: none;
  }
`
