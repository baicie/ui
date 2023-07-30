import { newE2EPage } from '@stencil/core/testing';

describe('bc-demo', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bc-demo></bc-demo>');

    const element = await page.find('bc-demo');
    expect(element).toHaveClass('hydrated');
  });
});
