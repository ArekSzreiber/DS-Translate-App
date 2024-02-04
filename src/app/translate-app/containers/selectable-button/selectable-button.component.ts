import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Language} from "../../translate-app/model";

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


    @media (min-width: 1025px) {
      .button {
        @include text-xl();
        padding: 10px 14px 8px 14px;
        border-radius: 16px;
      }
    }

    .selected {
      color: var(--light);
      background: var(--grey);
    }
  `],
  template: `
    <button
      class="button"
      [class.selected]="selected"
      (click)="languageSelected.emit(language.code)"
    >
      <span class="text">
        {{ language.name }}
      </span>
    </button>
  `,
})
export class SelectableButtonComponent {
  @Input() selected: boolean = false;
  @Input() language!: Language;
  @Output() languageSelected = new EventEmitter<string>();
}
