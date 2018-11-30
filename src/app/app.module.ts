import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppMusicPlayerComponent} from './compoentsInProggeress/music.player.component/app.music.player.component';
import {AppGridsystemComponent} from './compoentsInProggeress/grid.system.component/app.gridsystem.component';
import {AppHeaderComponent} from './compoentsInProggeress/headerComponent/app.header.component';
import {AppMainLayout} from './compoentsInProggeress/main.layout.component/app.main.layout';
import {AppMainContentComponent} from './compoentsInProggeress/main.content.compoent/app.main.content.component';
import {AppRoutingModule} from './app.routing.module';
import {TrackInfoComponent} from './compoentsInProggeress/track.info.component/track.info.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AppMusicPlayerComponent,
    AppGridsystemComponent,
    AppHeaderComponent,
    AppMainLayout,
    AppMainContentComponent,
    TrackInfoComponent
  ],
  imports: [
    BrowserModule,FormsModule,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
