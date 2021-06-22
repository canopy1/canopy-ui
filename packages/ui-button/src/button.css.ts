import { css } from "lit";

css`
  /* :host selects the host element. */
  :host {
    display: block;
    background-color: lightgray;
    padding: 8px;
  }

  /* :host(selector) selects the host element,
     but only if the host element matches selector. */
  :host(.blue) {
    /* --canopy-ui* prefix for theme variables */
    background-color: var(--canopy-ui-bg-color, blue);
    color: var(--canopy-ui-text-color, blue);
  }
`;
