import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-logo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    .container {
      display: flex;
      justify-content: center;
    }

    .logo {
      margin-top: 73px;
      margin-bottom: 50px;
    }
  `],
  template: `
    <div class="container">
      <img class="logo" ngSrc="assets/logo.svg" alt="" height="45" width="137">
    </div>
  `,
})
export class LogoComponent {

}
