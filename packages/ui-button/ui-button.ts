import { Button } from './src/Button.js';

customElements.define('ui-button', Button);

declare global {
  interface HTMLElementTagNameMap {
    "ui-button": Button;
  }

}
