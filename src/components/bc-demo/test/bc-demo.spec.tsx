import { newSpecPage } from '@stencil/core/testing';
import { BcDemo } from '../bc-demo';

describe('bc-demo', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BcDemo],
      html: `<bc-demo></bc-demo>`,
    });
    expect(page.root).toEqualHtml(`
      <bc-demo>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bc-demo>
    `);
  });
});
