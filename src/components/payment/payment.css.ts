import { css } from "lit";

const zIndex = 100;

// TODO: Styling, Responsiveness
export const paymentCSS = css`
  :host {
    font-family: var(--cui-font-family-base);
    font-size: var(--cui-font-size-base);
  }

  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: ${zIndex+1};
    background-color: var(--cui-background-color-light);
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
`
