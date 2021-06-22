import { fixture, elementUpdated, expect, html } from '@open-wc/testing';

import '../ui-button.js';
import { Button } from '..';

describe('#Button', () => {
  it('loads default button accessibly', async () => {
    const el = await fixture<Button>(
      html`
        <ui-button></ui-button>
        `
    );

    await elementUpdated(el);

    await expect(el).to.be.accessible();
  });
});
