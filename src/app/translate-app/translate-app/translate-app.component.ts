import { Component } from '@angular/core';

@Component({
  selector: 'app-translate-app',
  styles: [`
  `],
  template: `
    <app-background-image></app-background-image>
    <app-button></app-button>
    <app-card></app-card>
    <app-card></app-card>
    <app-icon-button>
      <img ngSrc="../../../assets/sound_max_fill.svg" width="24" height="24" alt="">
    </app-icon-button>
    <app-icon-button>
      <img ngSrc="../../../assets/Copy.svg" width="24" height="24" alt="">
    </app-icon-button>
    <app-icon-button>
      <img ngSrc="../../../assets/Horizontal_top_left_main.svg" width="24" height="24" alt="">
    </app-icon-button>
    <app-logo></app-logo>

  `,

})
export class TranslateAppComponent {

}
