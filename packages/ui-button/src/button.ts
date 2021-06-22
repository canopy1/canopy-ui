import {
  html,
  LitElement,
  customElement,
  property
} from '@canopyinc/ui-core';

/**
 * ui-button
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement("ui-button")
export class Button extends LitElement {
  // import button styles
  static styles = styles

  // Define reactive properties--updating a reactive property causes
  // the component to update.
  @property() greeting = "Hello";
  @property() planet = "World";

  // The render() method is called any time reactive properties change.
  // Return HTML in a string template literal tagged with the `html`
  // tag function to describe the component's internal DOM.
  // Expressions can set attribute values, proeprty values, event handlers,
  // and child nodes/text.
  render() {
    return html`
      <span @click=${this.togglePlanet}
        >${this.greeting}
        <span class="planet">${this.planet}</span>
      </span>
    `;
  }

  // Event handlers can update the state of @properties on the element
  // instance, causing it to re-render
  togglePlanet() {
    this.planet = this.planet === "World" ? "Mars" : "World";
  }
}
