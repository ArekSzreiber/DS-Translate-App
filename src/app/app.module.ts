import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BackgroundComponent } from './translate-app/containers/background/background.component';
import { ButtonComponent } from './translate-app/containers/button/button.component';
import { CardComponent } from './translate-app/containers/card/card.component';
import { IconButtonComponent } from './translate-app/containers/icon-button/icon-button.component';
import { SelectButtonComponent } from './translate-app/containers/select-button/select-button.component';
import { TextareaComponent } from './translate-app/containers/textarea/textarea.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    ButtonComponent,
    CardComponent,
    IconButtonComponent,
    SelectButtonComponent,
    TextareaComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
