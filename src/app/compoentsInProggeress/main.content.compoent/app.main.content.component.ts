import {Component, ElementRef, EventEmitter, Input, Output} from '@angular/core';
import {AppMusicPlayerComponent} from '../music.player.component/app.music.player.component';

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
export class AppMainContentComponent {
  @Input()
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
}
