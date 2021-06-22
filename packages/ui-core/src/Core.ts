import { LitElement, UpdatingElement} from './index';

type Constructor<T = Record<string, unknown>> = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    new (...args: any[]): T;
    prototype: T;
};

export interface ICanopyElement {
    shadowRoot: ShadowRoot;
}

export function CanopyMixin<T extends Constructor<typeof UpdatingElement>>(
    constructor: T
): T & Constructor<ICanopyElement> {
    class SlotTextObservingElement extends constructor {
        /**
         * @private
         */
        public shadowRoot!: ShadowRoot;
        private _dirParent?: HTMLElement;

        public connectedCallback(): void {
          // use this to run setup on all components,
          // add below

          // run parent connected callback
          super.connectedCallback();
        }

      public disconnectedCallback(): void {
        // run parent connected callback
        super.disconnectedCallback();

        // to run teardown on all components,
        // add below
      }
    }
    return SlotTextObservingElement;
}

export class CanopyElement extends CanopyMixin(LitElement) {}
