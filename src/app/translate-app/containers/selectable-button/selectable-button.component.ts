import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-selectable-button',
  styles: [`
    @import "../../../../assets/variables";

    .button {
      background: transparent;
      @include border-radius();
      border: 1px solid transparent;
      color: var(--grey-darker);
      @include text-xl();
      padding: 10px 13px;
      cursor: pointer;
      
      &:hover {
        color: var(--light);
      }
    }
    
    .text {
      @include text-xl();
    }
    
    .selected {
      color: var(--light);
      background: var(--grey);
    }
  `],
  template: `
    <button class="button" [class.selected]="selected">
      <span class="text">
        <ng-content></ng-content>
      </span>
    </button>
  `,
})
export class SelectableButtonComponent {
  @Input() selected: boolean = false;
}
