import { css } from "lit";

const zIndex = 100;

// TODO: Styling, Responsiveness
export const paymentCSS = css`
  :host {
    font-family: var(--cui-font-family-base);
    font-size: var(--cui-font-size-base);
    color: var(--cui-text-color-body);
  }

  .container {
    background-color: var(--cui-background-color-light);
    border-radius: var(--cui-border-radius);
    padding: var(--cui-spacing-5);
    width: 300px;
  }

  .payment-due {
    display: flex;
    flex-flow: column nowrap;
    margin-bottom: var(--cui-spacing-4);
  }

  .payment-due-label {
    font-weight: var(--cui-font-weight-semibold);
    margin-bottom: var(--cui-spacing-2);
  }
  
  .payment-due-value {
    font-size: var(--cui-font-size-xl);
    font-weight: var(--cui-font-weight-bold);
    color: var(--cui-color-primary-darken);
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

  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: ${zIndex+1};
    width: 400px;
    background-color: var(--cui-background-color-light);
    border-radius: var(--cui-border-radius);
  }

  .modal-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--cui-spacing-3) var(--cui-spacing-4);
    color: var(--cui-color-black);
  }

  .modal-content {
    padding: var(--cui-spacing-4);
  }

  .modal-overlay {
    z-index: ${zIndex};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #3e4e7a;
  }

  .modal.success {
    text-align: center;
  }

  .close-icon {
    background: none;
    border: none;
    cursor: pointer;
    font-size: var(--cui-font-size-lg);
    color: var(--cui-text-color-light);
  }

  hr {
    margin: 0;
  }
`
