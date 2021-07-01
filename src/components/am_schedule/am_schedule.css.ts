import { css } from "lit";

// TODO: Styling, Responsiveness
export const amScheduleCSS = css`
  table {
    background-color: var(--cui-background-color-light);
    font-family: var(--cui-font-family-base);
    font-size: var(--cui-font-size-base);
    border: var(--cui-border-width) var(--cui-border-style) var(--cui-border-color);
    border-radius: var(--cui-border-radius);
    width: 840px;
  }

  th, td {
    width: calc(100% / 7);
    padding: var(--cui-spacing-3) 0;
    text-align: right;
  }
`
