import {createReducer, on} from '@ngrx/store';
import {
  chooseSource,
  chooseTarget,
  setTextToTranslate,
  setTranslatedText,
  swapLanguages,
  toggleTranslating
} from './translate.actions';


export interface TranslateState {
  source: string;
  target: string;
  textToTranslate: string;
  translatedText: string;
  translatingActive: boolean;
  languages: {
    code: string,
    name: string,
  }[];
}

const initialState: TranslateState = {
  source: 'en',
  target: 'fr',
  textToTranslate: '',
  translatedText: '',
  translatingActive: false,
  languages: [
    {code: 'en', name: 'English',},
    {code: 'fr', name: 'French',},
    {code: 'es', name: 'Spanish',},
    {code: 'de', name: 'German',},
    {code: 'it', name: 'Italian',},
    {code: 'ja', name: 'Japanese',},
    {code: 'pl', name: 'Polish',},
    {code: 'ru', name: 'Russian',},
    {code: 'sv', name: 'Swedish',},
  ],
};

const getFirstAvailableLanguage = (languages: { code: string; name: string }[], excluded: string): string => {
  for (const language of languages) {
    if (language.code !== excluded) {
      return language.code;
    }
  }
  return languages[0].code;
}
export const translateReducer = createReducer(
  initialState,
  on(chooseSource, (state, action) => {
      if (action.languageCode !== state.target) {
        return {
          ...state,
          source: action.languageCode,
        };
      }
      console.log(state.source, 'state.source');
      let newTarget = state.source;

      if (newTarget === 'autodetect') {
        newTarget = getFirstAvailableLanguage(state.languages, state.target);
      }
      return {
        ...state,
        target: newTarget,
        source: action.languageCode,
      };
    },
  ),

  on(chooseTarget, (state, action) => {

      if (action.languageCode !== state.source) {
        return {
          ...state,
          target: action.languageCode,
        };
      }
      return {
        ...state,
        source: state.target,
        target: action.languageCode,
      };
    },
  ),

  on(swapLanguages, (state, action) => {
      if (state.source === 'autodetect') {
        return state;
      }
      return {
        ...state,
        source: state.target,
        target: state.source,
        textToTranslate: state.translatedText,
      };
    },
  ),
  on(toggleTranslating, (state, action) => {
      return {
        ...state,
        translatingActive: action.translating,
      };
    },
  ),
  on(setTextToTranslate, (state, action) => {
      return {
        ...state,
        textToTranslate: action.text,
      };
    },
  ),
  on(setTranslatedText, (state, action) => {
      return {
        ...state,
        translatedText: action.text,
      };
    },
  ),
);
