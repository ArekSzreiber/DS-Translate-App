import { Component } from '@angular/core';

@Component({
  selector: 'app-background-image',
  template: `
    <div class="container">
      <img class="background-image" ngSrc="../../../../assets/hero_img.jpg" alt="" height="460" width="1280">
    </div>
  `,
  styles: [`
    .container {
      position: absolute;
      display: flex;
      justify-content: center;
      width: 100vw;
    }

    .background-image {
      z-index: -1;
      max-width: 100vw;
      min-width: 1280px;
      width: auto;
      height: auto;
      flex-grow: 1;
    }

  `]
})
export class BackgroundImageComponent {

}
