import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-icon-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    @import "../../../../assets/variables";

    .icon-button {
      border-radius: 11px;
      border: 2px solid var(--grey);
      background: transparent;
      cursor: pointer;
      padding: 5px 5px 2px 4px;
    }

    @media (min-width: 1025px) {
      .icon-button {
        border-radius: 16px;
        border-width: 3px;
        padding: 7px 7px 4px 7px;
      }
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
