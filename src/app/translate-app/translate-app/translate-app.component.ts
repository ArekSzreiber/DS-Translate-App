import {Component, ViewEncapsulation} from '@angular/core';
import {TranslateState} from '../../store/translate.reducer';
import {Store} from '@ngrx/store';
import {setTextToTranslate, toggleTranslating} from '../../store/translate.actions';
import {Observable, take} from 'rxjs';
import {selectSource, selectTarget, selectTextToTranslate, selectTranslatedText} from '../../store/translate.selectors';
import {TextareaComponent} from '../containers/textarea/textarea.component';
import {TextToSpeechService} from './text-to-speech.service';

@Component({
  selector: 'app-translate-app',
  encapsulation: ViewEncapsulation.None,
  styles: [`

    .card-container {
      display: flex;
      flex-direction: column;
      row-gap: 12px;
      margin: 0 calc(-53px + 12.5vw);
    }




    @media (min-width: 1025px) {
      .card-container {
        flex-direction: row;
        column-gap: 20px;
        margin: 60px;
        justify-content: center;
      }

      .card-container_card {
        flex-grow: 1;
      }

      .card {
        min-height: 450px;

      }
      
    }

    .buttons-container {
      display: flex;
      column-gap: 7px;
    }

    app-card:nth-of-type(1) > .card {
      background: var(--grey-opacity);
    }

    app-card:nth-of-type(2) > .card {
      background: var(--grey-darker-opacity);
    }

    .hidden {
      display: none;
    }

    .copy-icon:not(:hover) .copy-icon_tooltip {
      display: none;
    }

  `],
  template: `
    <app-background-image></app-background-image>

    <app-logo></app-logo>

    <div class="card-container">

      <app-card class="card-container_card">
        <header class="header">
          <app-source-selection></app-source-selection>
        </header>

        <app-textarea
          #translating
          textarea
          [placeholder]="'Hello, how are you?'"
          (textChanged)="sourceTextChanged($event)"
          [maxLength]="500"
          [text]="textToTranslate$ | async"
        ></app-textarea>
        <footer class="footer">
          <div class="footer-buttons">
            <app-icon-button (click)="speak(translating, source$)">
              <img class="icon-svg" src="../../../../assets/sound_max_fill.svg" alt="">
            </app-icon-button>
            <app-icon-button class="copy-icon" (click)="copyToClipboard(translating)">
              <app-tooltip class="copy-icon_tooltip" *ngIf="showTooltip">Copied to clipboard</app-tooltip>
              <img class="icon-svg" src="../../../../assets/Copy.svg" alt="">
            </app-icon-button>
          </div>
          <app-button
            (isActive)="activeChanged($event)"
          ></app-button>
        </footer>
      </app-card>


      <app-card class="card-container_card">
        <header class="header">
          <app-target-selection></app-target-selection>
        </header>
        <app-textarea
          #translated
          textarea
          placeholder="Bonjour, comment allez-vous?"
          [readonly]="true"
          [text]="translatedText$ | async"
        ></app-textarea>
        <footer class="footer">
          <div class="footer-buttons">
            <app-icon-button (click)="speak(translated, target$)">
              <img class="icon-svg" src="../../../../assets/sound_max_fill.svg" alt="">
            </app-icon-button>
            <app-icon-button class="copy-icon" (click)="copyToClipboard(translated)">
              <app-tooltip class="copy-icon_tooltip" *ngIf="showTooltip">Copied to clipboard</app-tooltip>
              <img class="icon-svg" src="../../../../assets/Copy.svg" alt="">
            </app-icon-button>
          </div>
        </footer>
      </app-card>
    </div>
  `,

})
export class TranslateAppComponent {
//   autodetect => english
//     https://mymemory.translated.net/search.php?q=cześć&lang=en&sl=Autodetect&tl=en-GB
  translate: boolean = false;
  textToTranslate$: Observable<string>;
  translatedText$: Observable<string>;
  source$: Observable<string>;
  target$: Observable<string>;
  showTooltip: boolean = false;

  constructor(
    private store: Store<{ translate: TranslateState }>,
    private textToSpeechService: TextToSpeechService,
  ) {
    this.textToTranslate$ = store.select(selectTextToTranslate);
    this.translatedText$ = store.select(selectTranslatedText);
    this.source$ = store.select(selectSource);
    this.target$ = store.select(selectTarget);
  }

  activeChanged($event: boolean) {
    this.store.dispatch(toggleTranslating({translating: $event}));
  }

  sourceTextChanged($event: string) {
    this.store.dispatch(setTextToTranslate({text: $event}));
  }

  copyToClipboard(textarea: TextareaComponent) {
    const copiedText = textarea.text;
    navigator.clipboard.writeText(copiedText).then(
      _ => {
        this.displayTooltip();
      }
    );
  }

  speak(textarea: TextareaComponent, language: Observable<string>) {
    const text = textarea.text;
    if (!text) {
      return;
    }
    language.pipe(take(1)).subscribe(lang => {
      this.textToSpeechService.speak(text, lang);
    });
  }

  private displayTooltip() {
    this.showTooltip = true;
    setTimeout(() => {
      this.showTooltip = false;
    }, 2000);
  }
}
