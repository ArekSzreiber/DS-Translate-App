import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  styles: [`
    
    @import "../../../../assets/variables";
    .button {
      background-color: var(--primary);
      border: 2px solid var(--primary-2);
      border-radius: 10px;
      padding: 15px 25px;
      cursor: pointer;
      display: flex;
      align-items: center;
      line-height: 24px;

    }
    
    .text {
      @include text-xl;
      color: var(--light-2);
      margin-left: 6px;
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
