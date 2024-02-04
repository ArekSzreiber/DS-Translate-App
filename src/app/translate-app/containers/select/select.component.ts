import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {included, Language} from '../../translate-app/model';

@Component({
  selector: 'app-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    @import '../../../../assets/variables';

    .select {
      @include text-md();
      appearance: none;
      background-color: transparent;
      background-image: url('/assets/Expand_down.svg');
      background-position-x: 100%;
      background-position-y: 50%;
      background-repeat: no-repeat;
      border-radius: 14px;
      border: 1px solid transparent;
      color: var(--grey);
      cursor: pointer;
      padding: 8px 10px 8px 10px;

      &:hover {
        background-image: url('/assets/Expand_down-hover.svg');
        color: var(--light);
      }
    }

    .selected {
      background-color: var(--grey);
      background-image: url('/assets/Expand_down.svg');
      color: var(--light);
    }

    @media (min-width: 1025px) {
      .select {
        @include text-xl();
        padding: 10px 12px 10px 12px;
        border-radius: 16px;
      }
    }

  `],
  template: `
    <select
      class="select"
      [class.selected]="selected"
      [(ngModel)]="model"
    >
      @for (language of options; track language.code) {
        <option
          (click)="optionClicked(language.code)"
          [ngValue]="language.code"
        >{{ language.name }}
        </option>
      }
    </select>
  `
})
export class SelectComponent {
  @Output() languageSelected = new EventEmitter<string>();
  selected: boolean = false;
  model: string = '';

  private _selectedLanguage: string = '';

  get selectedLanguage(): string {
    return this._selectedLanguage;
  }

  @Input() set selectedLanguage(value: string | null) {
    this._selectedLanguage = value ?? '';
    this.selected = included(this.options, this.selectedLanguage);
    if (this.selected) {
      this.model = this.selectedLanguage;
    }
  }

  private _options: Language[] = [];

  get options(): Language[] {
    return this._options;
  }

  @Input() set options(value: Language[]) {
    this._options = value;
    this.selected = included(this.options, this.selectedLanguage);
    if (this.selected) {
      this.model = this.selectedLanguage;
      return;
    }
    if (!this.model) {
      this.model = this.options[0].code;
    }

  }

  optionClicked(code: string) {
    this.languageSelected.emit(code);
  }

}
