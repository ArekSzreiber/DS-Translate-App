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

    }
    
    .text {
      display: block;
      @include text-xl;
      color: var(--light-2);
      word-spacing: 12px;

      &::first-letter {
        text-decoration: underline;
      }
    }

  `],
  template: `
    <button type="button" class="button">
      <span class="text">A Translate</span>
    </button>
  `,
})
export class ButtonComponent {

}
