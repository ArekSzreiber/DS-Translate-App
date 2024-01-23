import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-selectable-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    @import "../../../../assets/variables";

    .button {
      background: transparent;
      border-radius: 14px;
      border: 1px solid transparent;
      color: var(--grey);
      @include text-md();
      padding: 8px 10px;
      cursor: pointer;
      
      &:hover {
        color: var(--light);
      }
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
