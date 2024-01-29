import {Store} from '@ngrx/store';
import {Language} from '../translate-app/model';
import {TranslateState} from '../../store/translate.reducer';

export abstract class LanguageSelectionComponent {

  protected buttonsLanguages: Language[] = [];
  protected selectLanguages: Language[] = [];

  protected constructor(
    protected store: Store<{ translate: TranslateState }>,
  ) {
    const languages: Language[] = [
      {
        code: 'en',
        name: 'English',
      },
      {
        code: 'fr',
        name: 'French',
      },
      {
        code: 'es',
        name: 'Spanish',
      },
      {
        code: 'de',
        name: 'German',
      },
      {
        code: 'it',
        name: 'Italian',
      },
      {
        code: 'ja',
        name: 'Japanese',
      },
      {
        code: 'pl',
        name: 'Polish',
      },
      {
        code: 'ru',
        name: 'Russian',
      },
      {
        code: 'sv',
        name: 'Swedish',
      },
    ];
    this.buttonsLanguages = languages.slice(0, 2);
    this.selectLanguages = languages.slice(2);
  }
}
