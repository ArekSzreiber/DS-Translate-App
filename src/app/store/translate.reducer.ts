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
}

const initialState: TranslateState = {
  source: 'en',
  target: 'fr',
  textToTranslate: '',
  translatedText: '',
  translatingActive: false,
};


export const translateReducer = createReducer(
  initialState,
  on(chooseSource, (state, action) => {

      if (action.languageCode !== state.target) {
        return {
          ...state,
          source: action.languageCode,
        };
      }
      return {
        ...state,
        target: state.source,
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
