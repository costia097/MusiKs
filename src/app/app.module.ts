import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppMusicPlayerComponent} from './compoentsInProggeress/musicPlayer/app.music.player.component';
import {AppGridsystemComponent} from './compoentsInProggeress/gridSystem/app.gridsystem.component';
import {AppHeaderComponent} from './compoentsInProggeress/headerComponent/app.header.component';

@NgModule({
  declarations: [
    AppComponent,
    AppMusicPlayerComponent,
    AppGridsystemComponent,
    AppHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
