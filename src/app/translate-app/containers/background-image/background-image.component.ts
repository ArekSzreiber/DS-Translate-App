import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-background-image',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="container">
      <img
        class="background-image"
        ngSrc="assets/hero_img.jpg"
        alt=""
        height="460"
        width="1280"
        priority
      >

    </div>
  `,
  styles: [`
    .container {
      display: flex;
      justify-content: center;
      position: absolute;
      width: 100vw;
      z-index: -1;
      overflow-x: hidden;
    }

    .background-image {
      flex-grow: 1;
      height: auto;
      max-width: 100vw;
      min-width: 1280px;
      width: auto;
    }

  `]
})
export class BackgroundImageComponent {

}
