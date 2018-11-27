import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppMusicPlayerComponent} from './compoentsInProggeress/musicPlayer/app.music.player.component';

@NgModule({
  declarations: [
    AppComponent, AppMusicPlayerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
