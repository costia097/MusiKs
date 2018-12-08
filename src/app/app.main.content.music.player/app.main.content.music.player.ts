import {Component, Input, OnInit} from '@angular/core';
import {AppMusicPlayerComponent} from '../music.player.component/app.music.player.component';
import {AppMusicPlayerSharedService} from '../music.player.component/app.music.player.shared.service';

@Component({
  selector: 'app-main-content-music-player',
  styleUrls: ['app.main.content.music.player.css'],
  template: `
    <div>
      <p>
        {{name}}
      </p>
      <button class="btn play-btn-wrapper" (click)="onTrackSelected(source)">
        <i class="fa" [ngClass]="{ 'fa-play': !isPlaying, 'fa-pause' : isPlaying}"></i>
      </button>
    </div>
  `
})
export class AppMainContentMusicPlayer implements OnInit {

  constructor(private appMusicPlayerSharedService: AppMusicPlayerSharedService) {
  }

  @Input()
  source: string;
  @Input()
  name: string;

  isPlaying: boolean;
  appMusicComponent: AppMusicPlayerComponent;

  onTrackSelected(value: string) {
    if (this.appMusicComponent == null) {
      console.log('audioPlayerRef == null');
      return;
    }
    this.appMusicComponent.playCurrentTrack(value);
    this.appMusicComponent.isPlaying = !this.appMusicComponent.isPlaying;
    this.isPlaying = !this.isPlaying;
  }

  ngOnInit(): void {
    this.appMusicComponent = this.appMusicPlayerSharedService.AppMusicPlayerComponent;
  }
}
