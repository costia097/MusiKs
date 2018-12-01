import {Component, OnInit} from '@angular/core';
import {AppMusicPlayerComponent} from '../music.player.component/app.music.player.component';
import {AppMusicPlayerSharedService} from '../music.player.component/app.music.player.shared.service';

@Component({
  selector: 'app-main-content',
  styleUrls: ['app.main.content.component.css'],
  template: `

    <section>
      <div class="flex-container-main-column">
        <div class="flex-element-with-border">
          <p>
            Mission impossible
          </p>
          <button class="btn play-btn-wrapper" (click)="onTrackSelected('assets/mission.mp3')">
            <i class="fa" [ngClass]="{ 'fa-play': !isPlaying, 'fa-pause' : isPlaying}"></i>
          </button>
        </div>
        <div class="flex-element-with-border">
          <p>
            Eminem
          </p>
          <button class="btn play-btn-wrapper" (click)="onTrackSelected('assets/venom.mp3')">
            <i class="fa" [ngClass]="{ 'fa-play': !isPlaying, 'fa-pause' : isPlaying}"></i>
          </button>
        </div>
      </div>
    </section>
  `
})
export class AppMainContentComponent implements OnInit {

  constructor(private appMusicPlayerSharedService: AppMusicPlayerSharedService) {
  }

  appMusicComponent: AppMusicPlayerComponent;
  isPlaying: boolean;

  onTrackSelected(value: string) {
    if (this.appMusicComponent == null) {
      console.log('audioPlayerRef == null');
      return;
    }
    this.appMusicComponent.playCurrentTrack(value);
    this.isPlaying = !this.isPlaying;
  }

  ngOnInit(): void {
    this.appMusicComponent = this.appMusicPlayerSharedService.AppMusicPlayerComponent;
  }
}
