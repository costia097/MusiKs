import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppMusicPlayerComponent} from './music.player.component/app.music.player.component';
import {AppGridsystemComponent} from './grid.system.component/app.gridsystem.component';
import {AppHeaderComponent} from './headerComponent/app.header.component';
import {AppMainLayout} from './main.layout.component/app.main.layout';
import {AppMainContentComponent} from './main.content.compoent/app.main.content.component';
import {AppRoutingModule} from './app.routing.module';
import {TrackInfoComponent} from './track.info.component/track.info.component';
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
