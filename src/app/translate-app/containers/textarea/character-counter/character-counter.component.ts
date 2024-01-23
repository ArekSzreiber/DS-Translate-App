import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-character-counter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    @import "../../../../../assets/variables";

    #character-counter {
      @include text-xs();
      color: var(--grey);
      display: flex;
      justify-content: flex-end;
    }
  `],
  template: `
    <div id="character-counter">
      <span id="current">{{current}}</span>
      <span id="maximum">/{{maxLength}}</span>
    </div>
  `,
})
export class CharacterCounterComponent {
  @Input() current: number = 0;
  @Input() maxLength: number = 0;
}
