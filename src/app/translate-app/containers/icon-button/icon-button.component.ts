import { Component } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  styles: [`
    .icon-button {
    border: 2px solid var(--grey-2);
      border-radius: 12px;
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
