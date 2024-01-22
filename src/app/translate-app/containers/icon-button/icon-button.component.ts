import { Component } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  styles: [`
    @import "../../../../assets/variables";

    .icon-button {
      @include border-radius();
      border: 2px solid var(--grey);
      background: transparent;
      cursor: pointer;
    }
  `],
  template: `
<button class="icon-button">
  <ng-content></ng-content>
</button>
  `,

})
export class IconButtonComponent {

}
