import {Actions, createEffect, ofType} from '@ngrx/effects';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {debounceTime, Observable, tap, withLatestFrom} from 'rxjs';
import {TranslateState} from './translate.reducer';
import {selectTranslate} from './translate.selectors';
import {setTextToTranslate, setTranslatedText, toggleTranslating} from './translate.actions';

@Injectable()
export class TranslateEffects {
  startTranslation = createEffect(() => this.actions$.pipe(
    ofType(
      setTextToTranslate,
      toggleTranslating,
    ),
    debounceTime(1000),
    withLatestFrom(this.store.select(selectTranslate)),
    tap(([action, state]) => {
      if (!state.translatingActive) {
        return;
      }
      this.translate(state.source, state.target, state.textToTranslate)
        .subscribe(response => {
          this.store.dispatch(setTranslatedText({text: response.responseData.translatedText}))
        });
    }),
  ), {
    dispatch: false
  });


  constructor(
    private actions$: Actions,
    private store: Store<{ translate: TranslateState }>,
    private http: HttpClient,
  ) {
  }

  translate(sourceLanguage: string, targetLanguage: string, sourceText: string): Observable<any> {
    const params = new HttpParams()
      .set('q', sourceText)
      .set('langpair', `${sourceLanguage}|${targetLanguage}`);
    return this.http.get(`https://api.mymemory.translated.net`,
      {
        params
      }
    );
  }

}