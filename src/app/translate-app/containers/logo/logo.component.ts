import { Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  styles: [`
    .container {
      display: flex;
      justify-content: center;
    }

    .logo {
      margin: 25px 0;
    }
  `],
  template: `
    <div class="container">
      <img class="logo" ngSrc="../../../../assets/logo.svg" alt="" height="45" width="137">
    </div>
  `,
})
export class LogoComponent {

}
