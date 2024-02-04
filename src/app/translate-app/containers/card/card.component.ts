import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-card',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`

    @import "../../../../assets/variables";

    .card {
      backdrop-filter: blur(10px);
      border-radius: 20px;
      border: 1px solid var(--grey);
      display: flex;
      flex-direction: column;
      min-width: 380px;
      padding: 20px;
    }

    .header {
      border-bottom: 1px solid var(--grey-darker);
      padding-bottom: 13px;

    }
    
    [textarea] {
      flex-grow: 1;
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

    @media (min-width: 1025px) {
      
      .card {
        padding: 30px;

      }

      .footer {
        margin-top: 16px;
      }
      
      .footer-buttons {
        column-gap: 10px;
      }
      
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
