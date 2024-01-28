import {createAction, props} from '@ngrx/store';

export const chooseSource = createAction(
  '[Translate] Choose Source',
  props<{languageCode: string}>(),
);

export const chooseTarget = createAction(
  '[Translate] Choose Target',
  props<{languageCode: string}>(),
);

export const swapLanguages = createAction(
  '[Translate] Swap Languages',
);
