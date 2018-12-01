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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppIntroComponent} from './intro.component/app.intro.component';
import {AppLoginComponent} from './login.component/app.login.component';
import {AppPreloaderComponent} from './preloader.component/app.preloader.component';
import {AppMusicPlayerSharedService} from './music.player.component/app.music.player.shared.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AppMusicPlayerComponent,
    AppGridsystemComponent,
    AppHeaderComponent,
    AppMainLayout,
    AppMainContentComponent,
    TrackInfoComponent,
    AppIntroComponent,
    AppLoginComponent,
    AppPreloaderComponent
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule
  ],
  providers: [AppMusicPlayerSharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
