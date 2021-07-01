import { css } from "lit";

export const paymentDetailsCSS = css`
  :host {
    background-color: var(--cui-background-color-light);
    border-radius: var(--cui-border-radius);
    box-shadow: var(--cui-box-shadow-lg);
    color: var(--cui-text-color-body);
    display: block;
    font-family: var(--cui-font-family-base);
    font-size: var(--cui-font-size-base);
    width: 900px; /* TODO: Make Responsive */
  }

  slot[name="top"] {
    border-bottom: var(--cui-border-width) var(--cui-border-color) var(--cui-border-style);
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    grid-template-rows: auto; 
    column-gap: var(--cui-spacing-4);
    padding: var(--cui-spacing-5);
  }

  slot[name="bottom"] {
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    grid-template-rows: auto; 
    column-gap: var(--cui-spacing-4);
    padding: var(--cui-spacing-4) var(--cui-spacing-5);
  }
`;

export const statCSS = css`
  :host {
    display: flex;
    flex-flow: column nowrap;
  }

  span[part="label"] {
    font-size: var(--cui-font-size-sm);
    margin-bottom: var(--cui-spacing-1);
  }

  span[part="value"] {
    color: var(--cui-color-primary) !important;
    font-size: var(--cui-font-size-h4);
    font-weight: var(--cui-font-weight-bold);
    color: var(--cui-primary-color);
  }
`

export const statSmCSS = css`
  :host {
    display: flex;
    flex-flow: column nowrap;
  }

  span[part="label"] {
    font-size: var(--cui-font-size-xs);
    margin-bottom: var(--cui-spacing-1);
  }

  span[part="value"] {
    color: var(--cui-text-color-headers);
    font-weight: var(--cui-font-weight-semibold);
  }
`
