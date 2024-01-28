import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable, tap} from 'rxjs';
import {chooseSource} from '../../../store/translate.actions';
import {LanguageSelectionComponent} from '../language-selection.component';
import {Language} from '../../translate-app/model';
import {selectSource} from '../../../store/translate.selectors';

@Component({
  selector: 'app-source-selection',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    :host {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  `],
  template: `
    <div class="buttons-container">
      {{ source$ | async }}

      <app-selectable-button
        [language]="autodetect"
        [selected]="autodetect.code === (source$ | async)"
        (languageSelected)="selectSource($event)"
      ></app-selectable-button>

      @for (language of buttonsLanguages; track language.code) {
        <app-selectable-button
          [language]="language"
          [selected]="language.code === (source$ | async)"
          (languageSelected)="selectSource($event)"
        ></app-selectable-button>
      }
      @if (selectLanguages.length) {
        <app-select
          [options]="selectLanguages"
          [selectedLanguage]="(source$ | async)"
          (languageSelected)="selectSource($event)"
        ></app-select>
      }
    </div>
  `,
})
export class SourceSelectionComponent extends LanguageSelectionComponent {
  selectedInSelect: boolean = false;


  source$: Observable<string>;
  autodetect: Language = {
    code: 'autodetect',
    name: 'Detect Language',
  };

  constructor(
    store: Store<{ translate: { source: string, target: string } }>,
  ) {
    super(store);

    this.source$ = store.select(selectSource).pipe(
      tap(selectedCode => {
        this.selectedInSelect = this.selectLanguages.some(
          (language: Language) => language.code === selectedCode
        );
      })
    );
  }

  selectSource(code: string) {
    this.store.dispatch(chooseSource({languageCode: code}));
  }

}
