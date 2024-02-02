import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-icon-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    @import "../../../../assets/variables";

    .icon-button {
      border-radius: 10px;
      border: 2px solid var(--grey);
      background: transparent;
      cursor: pointer;
      padding: 2px 3px;
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
