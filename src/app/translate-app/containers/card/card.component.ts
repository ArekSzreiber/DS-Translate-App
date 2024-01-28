import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-card',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`

    @import "../../../../assets/variables";

    .card {
      padding: 20px;
      border: 1px solid var(--grey);
      border-radius: 20px;
      backdrop-filter: blur(10px);
      min-width: 380px;
    }

    .header {
      border-bottom: 1px solid var(--grey-darker);
      padding-bottom: 13px;

    }

    .footer {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin-top: 10px;
    }

    .footer-buttons {
      display: flex;
      column-gap: 5px;
    }
  `],
  template: `
    <div class="card">
      <ng-content select="header"></ng-content>
      <ng-content select="[textarea]"></ng-content>
      <ng-content select="footer"></ng-content>
    </div>
  `,
})
export class CardComponent {
}
