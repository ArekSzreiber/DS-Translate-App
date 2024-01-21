import { Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  styles: [`
    .logo {
    }
  `],
  template: `
    <img class="logo" ngSrc="../../../../assets/logo.svg" alt="" height="45" width="137">
  `,
})
export class LogoComponent {

}
