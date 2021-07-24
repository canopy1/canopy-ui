import { css } from "lit";

export const externalFieldsCSS = css`
  :host {
    display: block;
    width: 100%;
  }

  ul {
    list-style-type: none;
    padding-left: 0;
    margin: 0;
    width: 100%;
  }

  cui-list-item:nth-of-type(2n) {
    background-color: var(--cui-li-even-row-background-color);
  }
`
