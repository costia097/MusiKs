import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppMusicPlayerComponent} from './music.player.component/app.music.player.component';
import {AppGridsystemComponent} from './grid.system.component/app.gridsystem.component';
import {AppNavBarComponent} from './app.nav.bar.component/app.nav.bar.component';
import {AppMainLayoutComponent} from './main.layout.component/app-main-layout.component';
import {AppMainContentComponent} from './main.content.component/app.main.content.component';
import {AppRoutingModule} from './app.routing.module';
import {TrackInfoComponent} from './track.info.component/track.info.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppIntroComponent} from './intro.component/app.intro.component';
import {AppLoginComponent} from './login.component/app.login.component';
import {AppPreloaderComponent} from './preloader.component/app.preloader.component';
import {AppMusicPlayerSharedService} from './music.player.component/app.music.player.shared.service';
import {HttpClientModule} from '@angular/common/http';
import {AppMainContentMusicPlayer} from './app.main.content.music.player/app.main.content.music.player';

@NgModule({
  declarations: [
    AppComponent,
    AppMusicPlayerComponent,
    AppGridsystemComponent,
    AppNavBarComponent,
    AppMainLayoutComponent,
    AppMainContentComponent,
    TrackInfoComponent,
    AppIntroComponent,
    AppLoginComponent,
    AppPreloaderComponent,
    AppMainContentMusicPlayer
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule
  ],
  providers: [AppMusicPlayerSharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
