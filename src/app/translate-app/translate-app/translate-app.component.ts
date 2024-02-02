import {Component, ViewEncapsulation} from '@angular/core';
import {TranslateState} from '../../store/translate.reducer';
import {Store} from '@ngrx/store';
import {setTextToTranslate, toggleTranslating} from '../../store/translate.actions';
import {Observable} from 'rxjs';
import {selectTranslatedText} from '../../store/translate.selectors';
import {TextareaComponent} from '../containers/textarea/textarea.component';

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

      <app-card>
        <header class="header">
          <app-source-selection></app-source-selection>
        </header>

        <app-textarea
          #translating
          textarea
          [placeholder]="'Hello, how are you?'"
          (textChanged)="sourceTextChanged($event)"
          [maxLength]="500"
        ></app-textarea>
        <footer class="footer">
          <div class="footer-buttons">
            <app-icon-button>
              <img ngSrc="../../../../assets/sound_max_fill.svg" width="24" height="24" alt="">
            </app-icon-button>
            <app-icon-button class="copy-icon" (click)="copyToClipboard(translating)">
              <app-tooltip class="copy-icon_tooltip" *ngIf="showTooltip">Copied to clipboard</app-tooltip>
              <img ngSrc="../../../../assets/Copy.svg" width="24" height="24" alt="">
            </app-icon-button>
          </div>
          <app-button
            (isActive)="activeChanged($event)"
          ></app-button>
        </footer>
      </app-card>


      <app-card>
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
            <app-icon-button>
              <img ngSrc="../../../../assets/sound_max_fill.svg" width="24" height="24" alt="">
            </app-icon-button>
            <app-icon-button class="copy-icon" (click)="copyToClipboard(translated)">
              <app-tooltip class="copy-icon_tooltip" *ngIf="showTooltip">Copied to clipboard</app-tooltip>
              <img ngSrc="../../../../assets/Copy.svg" width="24" height="24" alt="">
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
  translatedText$: Observable<string>;
  showTooltip: boolean = false;

  constructor(
    private store: Store<{ translate: TranslateState }>,
  ) {
    this.translatedText$ = store.select(selectTranslatedText);
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

  private displayTooltip() {
    this.showTooltip = true;
    setTimeout(() => {
      this.showTooltip = false;
    }, 2000);
  }
}
