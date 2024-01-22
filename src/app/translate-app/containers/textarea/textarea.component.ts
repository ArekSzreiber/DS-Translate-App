import { Component } from '@angular/core';

@Component({
  selector: 'app-textarea',
  styles: [`
    @import "../../../../assets/variables";


    .textarea {
      background: none;
      width: 100%;
      //min-height: 190px;
      min-height: 150px;
      color: var(--light);
      @include text-xl();
      border: none;
      outline: none;
      resize: none;

      &::placeholder {
        color: var(--light);
        opacity: 1;
      }
    }

    #character-counter {
      @include text-xs();
      color: var(--light-darker);
      display: flex;
      justify-content: flex-end;
    }
  `],
  template: `
    <textarea
      class="textarea"
      placeholder="Hello, how are you?"
      maxlength="500"
      rows="5"
      cols="30"
    ></textarea>
    <div id="character-counter">
      <span id="current">0</span>
      <span id="maximum">/500</span>
    </div>
  `,
})
export class TextareaComponent {

}
