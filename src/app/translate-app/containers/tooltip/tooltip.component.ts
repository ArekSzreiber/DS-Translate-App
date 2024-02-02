import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-tooltip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    @import "../../../../assets/variables";

    .tooltip {
      @include text-xl;
      background-color: var(--background);
      border-radius: 10px;
      color: var(--light);
      cursor: default;
      padding: 10px;
      position: absolute;
      transform: translate(-50%, -130%);
    }

  `],
  template: `
    <div class="tooltip">
      <ng-content></ng-content>
    </div>
  `,

})
export class TooltipComponent {

}
