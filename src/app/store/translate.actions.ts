import {createAction, props} from '@ngrx/store';

export const chooseSource = createAction(
  '[Translate] Choose Source',
  props<{ languageCode: string }>(),
);

export const chooseTarget = createAction(
  '[Translate] Choose Target',
  props<{ languageCode: string }>(),
);

export const swapLanguages = createAction(
  '[Translate] Swap Languages',
);
export const toggleTranslating = createAction(
  '[Translate] Toggle Translating',
  props<{ translating: boolean }>(),
);

export const setTextToTranslate = createAction(
  '[Translate] Set Text To Translate',
  props<{ text: string }>(),
);

export const setTranslatedText = createAction(
  '[Translate] Set Translated Text',
  props<{ text: string }>(),
);

