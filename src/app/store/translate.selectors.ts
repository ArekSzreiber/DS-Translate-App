import {createSelector} from '@ngrx/store';

export const selectTranslate =
  (state: { translate: { source: string, target: string } }) => state.translate;

// export const selectSource =
//   (state: { translate: { source: string, target: string } }) => state.translate.source;
export const selectSource = createSelector(
  selectTranslate,
  (state: { source: string, target: string }) => state.source,
);



export const selectTarget  = createSelector(
  selectTranslate,
  (state: { source: string, target: string }) => state.target,
);
