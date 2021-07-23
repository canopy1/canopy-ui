import { css } from "lit";

const zIndex = 100;

export const modalCSS = css`
  .modal {
    background-color: var(--cui-modal-background-color);
    border-radius: var(--cui-modal-border-radius);
    box-shadow: var(--cui-modal-box-shadow);
    position: fixed;
    top: 50%;
    left: 50%;
    max-width: var(--cui-modal-max-width-sm);
    transform: translate(-50%, -50%);
    width: 100%;
    z-index: ${zIndex+1};
    -webkit-animation: slide-in-bottom 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: slide-in-bottom 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }

  .modal p {
    line-height: var(--cui-line-height-base);
    margin-bottom: var(--cui-spacing-4);
    margin-top: 0;
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
    display: inline-flex;
    height: 20px;
    justify-content: center;
    margin-right: -10px;
    padding: 0;
    transition: all 0.2s linear;
    width: 20px;
  }
  .close-icon svg {
    width: 14px;
  }
  .close-icon:hover {
    filter: brightness(40%);
  }

  @-webkit-keyframes slide-in-bottom {
    0% {
      transform: translate(-50%, 0%);
      opacity: 0;
    }
    100% {
      transform: translate(-50%, -50%);
      opacity: 1;
    }
  }
  @keyframes slide-in-bottom {
    0% {
      transform: translate(-50%, 0%);
      opacity: 0;
    }
    100% {
      transform: translate(-50%, -50%);
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
`;