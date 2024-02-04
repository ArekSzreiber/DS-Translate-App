import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {included, Language} from '../../translate-app/model';

@Component({
  selector: 'app-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['select.component.scss'],
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
