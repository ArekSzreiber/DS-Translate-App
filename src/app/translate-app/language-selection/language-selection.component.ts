import {Store} from '@ngrx/store';
import {Language} from '../translate-app/model';
import {TranslateState} from '../../store/translate.reducer';
import {selectLanguages} from '../../store/translate.selectors';
import {take} from 'rxjs';

export abstract class LanguageSelectionComponent {

  protected buttonsLanguages: Language[] = [];
  protected selectLanguages: Language[] = [];

  protected constructor(
    protected store: Store<{ translate: TranslateState }>,
  ) {
    store.select(selectLanguages)
      .pipe(take(1))
      .subscribe(languages => {
        this.buttonsLanguages = languages.slice(0, 2);
        this.selectLanguages = languages.slice(2);
      });
  }
}
