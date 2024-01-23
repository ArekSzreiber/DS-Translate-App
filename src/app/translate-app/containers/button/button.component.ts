import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    @import "../../../../assets/variables";

    .button {
      background-color: var(--primary);
      border: 1px solid var(--primary-2);
      border-radius: 12px;
      padding: 10px 20px;
      cursor: pointer;
      display: flex;
      align-items: center;
    }

    .text {
      @include text-xl();
      color: var(--light);
      margin-left: 5px;
      align-self: center;
    }

  `],
  template: `
    <button type="button" class="button">
      <img ngSrc="../../../../assets/Sort_alfa.svg" alt="A" width="24" height="24">
      <span class="text">Translate</span>
    </button>
  `,
})
export class ButtonComponent {

}
