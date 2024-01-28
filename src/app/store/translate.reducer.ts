import {createReducer, on} from '@ngrx/store';
import {chooseSource, chooseTarget, swapLanguages} from './translate.actions';


const initialState = {
  source: 'en',
  target: 'fr',
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
