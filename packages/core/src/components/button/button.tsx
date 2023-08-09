import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'baicie-button',
  styleUrl: 'button.scss',
  shadow: true,
})
export class BButton {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
