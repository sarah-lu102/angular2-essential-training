//the root module

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    MediaItemComponent
  ],
  bootstrap: [
    AppComponent //when bootstrapping, it tells appcomponent to find its selector and modify the corresponding dom element
  ]
})
export class AppModule { }