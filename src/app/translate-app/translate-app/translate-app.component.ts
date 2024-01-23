import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-translate-app',
  encapsulation: ViewEncapsulation.None,
  styles: [`

    .card-container {
      display: flex;
      flex-direction: column;
      row-gap: 12px;
      margin: 0 20px;
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
          <div class="buttons-container">
            <app-selectable-button>Detect Language</app-selectable-button>
            <app-selectable-button [selected]="true">English</app-selectable-button>
            <app-selectable-button>French</app-selectable-button>
            <app-select></app-select>
          </div>
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
          <div class="buttons-container">
            <app-selectable-button [selected]="true">English</app-selectable-button>
            <app-selectable-button>French</app-selectable-button>
            <app-select></app-select>
          </div>

          <app-icon-button>
            <img ngSrc="../../../assets/Horizontal_top_left_main.svg" width="24" height="24" alt="">
          </app-icon-button>

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
export class TranslateAppComponent {

}
