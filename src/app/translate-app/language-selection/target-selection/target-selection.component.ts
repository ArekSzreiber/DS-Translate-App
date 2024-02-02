import {Observable, of, tap} from 'rxjs';
import {Store} from '@ngrx/store';
import {LanguageSelectionComponent} from '../language-selection.component';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {chooseTarget, swapLanguages} from '../../../store/translate.actions';
import {selectTarget} from '../../../store/translate.selectors';
import {Language} from '../../translate-app/model';
import {TranslateState} from '../../../store/translate.reducer';


@Component({
  selector: 'app-target-selection',
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

      @for (language of buttonsLanguages; track language.code) {
        <app-selectable-button
          [language]="language"
          [selected]="language.code === (target$ | async)"
          (languageSelected)="selectTarget($event)"
        ></app-selectable-button>
      }
      @if (selectLanguages.length) {
        <app-select
          [options]="selectLanguages"
          [selectedLanguage]="(target$ | async)"
          (languageSelected)="selectTarget($event)"
        ></app-select>
      }

    </div>

    <app-icon-button (click)="swapLanguages()">
      <img ngSrc="../../../assets/Horizontal_top_left_main.svg" width="24" height="24" alt="">
    </app-icon-button>
  `,
})
export class TargetSelectionComponent extends LanguageSelectionComponent {
  selectedInSelect: boolean = false;

  target$: Observable<string>;

  constructor(
    store: Store<{ translate: TranslateState }>,
  ) {
    super(store);

    this.target$ = store.select(selectTarget).pipe(
      tap(selectedCode => {
        this.selectedInSelect = this.selectLanguages.some(
          (language: Language) => language.code === selectedCode
        );
      })
    ) as Observable<string>;
  }

  selectTarget(code: string) {
    this.store.dispatch(chooseTarget({languageCode: code}));
  }

  swapLanguages() {
    this.store.dispatch(swapLanguages());
  }
}
