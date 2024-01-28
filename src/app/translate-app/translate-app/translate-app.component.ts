import {Component, OnInit, ViewEncapsulation} from '@angular/core';

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
          textarea
          #inputTextarea
          [placeholder]="'Hello, how are you?'"
          [maxLength]="500"
        ></app-textarea>
        <footer class="footer">
          <div class="footer-buttons">
            <app-icon-button>
              <img ngSrc="../../../../assets/sound_max_fill.svg" width="24" height="24" alt="" style="fill: white">
            </app-icon-button>
            <app-icon-button>
              <img ngSrc="../../../../assets/Copy.svg" width="24" height="24" alt="">
            </app-icon-button>
          </div>
          <app-button></app-button>
        </footer>
      </app-card>
      
      
      <app-card>
        <header class="header">
          <app-target-selection></app-target-selection>
        </header>
        <app-textarea
          textarea
          placeholder="Bonjour, comment allez-vous?"
          [readonly]="true"
        ></app-textarea>
        <footer class="footer">
          <div class="footer-buttons">
            <app-icon-button>
              <img ngSrc="../../../../assets/sound_max_fill.svg" width="24" height="24" alt="" style="fill: white">
            </app-icon-button>
            <app-icon-button>
              <img ngSrc="../../../../assets/Copy.svg" width="24" height="24" alt="">
            </app-icon-button>
          </div>
        </footer>
      </app-card>
    </div>
  `,

})
export class TranslateAppComponent  {
//   autodetect => english
//     https://mymemory.translated.net/search.php?q=cześć&lang=en&sl=Autodetect&tl=en-GB

}
