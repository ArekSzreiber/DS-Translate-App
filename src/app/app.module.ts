import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgOptimizedImage} from "@angular/common";


import {AppComponent} from './app.component';
import {BackgroundImageComponent} from './translate-app/containers/background-image/background-image.component';
import {ButtonComponent} from './translate-app/containers/button/button.component';
import {CardComponent} from './translate-app/containers/card/card.component';
import {IconButtonComponent} from './translate-app/containers/icon-button/icon-button.component';
import {SelectButtonComponent} from './translate-app/containers/select-button/select-button.component';
import {TextareaComponent} from './translate-app/containers/textarea/textarea.component';
import {TranslateAppComponent} from './translate-app/translate-app/translate-app.component';
import { LogoComponent } from './translate-app/containers/logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundImageComponent,
    ButtonComponent,
    CardComponent,
    IconButtonComponent,
    SelectButtonComponent,
    TextareaComponent,
    TranslateAppComponent,
    LogoComponent,
  ],
  imports: [
    BrowserModule,
    NgOptimizedImage,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
