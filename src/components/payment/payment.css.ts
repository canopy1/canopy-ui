import { css } from "lit";

const zIndex = 100;

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

  .modal {
    background-color: var(--cui-modal-background-color);
    border-radius: var(--cui-modal-border-radius);
    box-shadow: var(--cui-modal-box-shadow);
    position: fixed;
    top: 50%;
    left: 50%;
    margin-left: -160px;
    max-width: var(--cui-modal-max-width);
    width: 100%;
    z-index: ${zIndex+1};
    -webkit-animation: slide-in-bottom 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: slide-in-bottom 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }

  .modal p {
    line-height: var(--cui-line-height-base);
    margin-bottom: var(--cui-spacing-4);
  }

  .modal-header {
    align-items: center;
    border-bottom: var(--cui-modal-header-border);
    color: var(--cui-text-color-headers);
    display: flex;
    font-weight: var(--cui-font-weight-semibold);
    justify-content: space-between;
    padding: var(--cui-modal-header-padding);
  }
  .modal-header strong {
    font-weight: var(--cui-modal-header-font-weight);
  }

  .modal-content {
    padding: var(--cui-spacing-4);
  }
  .modal-content.bg-faded {
    background-color: var(--cui-background-color-faded);
  }

  .modal-overlay {
    background-color: var(--cui-modal-overlay-background);
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: ${zIndex};
    -webkit-animation: fade-in .3s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	  animation: fade-in .3s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  }

  .modal .payment-confirmation {
    text-align: center;
  }

  .close-icon {
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    height: 20px;
    justify-content: center;
    margin-right: -12px;
    padding: 0;
    transition: all 0.2s linear;
    width: 20px;
  }
  .close-icon img {
    width: 14px;
  }
  .close-icon:hover {
    filter: brightness(40%);
  }

  .btn-set {
    display: flex;
    flex-flow: row nowrap;
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

  @-webkit-keyframes slide-in-bottom {
    0% {
      -webkit-transform: translateY(0%);
              transform: translateY(0%);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(-50%);
              transform: translateY(-50%);
      opacity: 1;
    }
  }
  @keyframes slide-in-bottom {
    0% {
      -webkit-transform: translateY(0%);
              transform: translateY(0%);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(-50%);
              transform: translateY(-50%);
      opacity: 1;
    }
  }

  @-webkit-keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`
