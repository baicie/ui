import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'bc-demo',
  styleUrl: 'bc-demo.css',
  shadow: true,
})
export class BcDemo {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
