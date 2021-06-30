import { css } from "lit";

// TODO: Styling, Responsiveness
export const externalFieldsCSS = css`
  ul {
    width: 300px;
    font-family: var(--cui-font-family-base);
    font-size: var(--cui-font-size-base);
    padding-left: 0;
    border-radius: var(--cui-border-radius);
    background-color: var(--cui-background-color-light);
    list-style-type: none;
  }

  li {
    display: flex;
    justify-content: space-between;
    padding: var(--cui-spacing-2) var(--cui-spacing-4);
  }

  li:first-child {
    border-top-left-radius: var(--cui-border-radius);
    border-top-right-radius: var(--cui-border-radius);
  }

  li:last-child {
    border-bottom-left-radius: var(--cui-border-radius);
    border-bottom-right-radius: var(--cui-border-radius);
  }

  li:nth-child(2n+1) {
    background-color: var(--cui-background-color-faded);
  }

  span[part="value"] {
    font-weight: var(--cui-font-weight-semibold);
  }
`
