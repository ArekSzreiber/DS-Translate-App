import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {StoreModule} from '@ngrx/store';


import {AppComponent} from './app.component';
import {BackgroundImageComponent} from './translate-app/containers/background-image/background-image.component';
import {ButtonComponent} from './translate-app/containers/button/button.component';
import {
  CharacterCounterComponent
} from './translate-app/containers/textarea/character-counter/character-counter.component';
import {CardComponent} from './translate-app/containers/card/card.component';
import {IconButtonComponent} from './translate-app/containers/icon-button/icon-button.component';
import {LogoComponent} from './translate-app/containers/logo/logo.component';
import {SelectComponent} from './translate-app/containers/select/select.component';
import {SelectableButtonComponent} from "./translate-app/containers/selectable-button/selectable-button.component";
import {SourceSelectionComponent} from './translate-app/language-selection/source-selection/source-selection.component';
import {TargetSelectionComponent} from './translate-app/language-selection/target-selection/target-selection.component';
import {TextareaComponent} from './translate-app/containers/textarea/textarea.component';
import {TranslateAppComponent} from './translate-app/translate-app/translate-app.component';
import {translateReducer} from './store/translate.reducer';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundImageComponent,
    ButtonComponent,
    CardComponent,
    CharacterCounterComponent,
    IconButtonComponent,
    LogoComponent,
    SelectComponent,
    SelectableButtonComponent,
    SourceSelectionComponent,
    TargetSelectionComponent,
    TextareaComponent,
    TranslateAppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgOptimizedImage,
    StoreModule.forRoot({
      translate: translateReducer,
    }, {}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
