import {createReducer, on} from '@ngrx/store';
import {chooseSource, chooseTarget, swapLanguages} from './translate.actions';


export interface TranslateState {
  source: string;
  target: string;
  translatingText: string;
  translatedText: string;
}

const initialState: TranslateState = {
  source: 'en',
  target: 'fr',
  translatingText: '',
  translatedText: '',
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
    return {
      ...state,
      source: state.target,
      target: state.source,
    };
    },
  ),
);
