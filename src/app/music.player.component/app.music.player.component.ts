import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {AppMusicPlayerSharedService} from './app.music.player.shared.service';

@Component({
  selector: 'app-music-player',
  styleUrls: ['./app.music.player.component.css'],
  template: `

    <section class="flex-section-wrapper">

      <audio #audioPlayer (timeupdate)="timeUpdate()">
        <source [src]="currentTrackSource">
      </audio>
      <div class="flex-container-main-row">
        <div class="flex-element-with-border-and-width element-width-full pointer">
          <div class="progress margin-bottom-auto element-pixel-height-8" (click)="changeProgress($event)">
            <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" #progressBar
                 [ngStyle]="{'width':currentProgressInPercents +'%'}"></div>
          </div>
        </div>
      </div>

      <div class="flex-container-main-row element-pixel-height-45" #audioWrapper>
        <div class="flex-element-with-border element-alignment-center">
          <button class="btn" (click)="backward()">
            <i class="fa fa-fast-backward"></i>
          </button>
        </div>
        <div class="flex-element-with-border element-alignment-center">
          <button class="btn play-btn-wrapper" (click)="playOrPause()">
            <i class="fa" [ngClass]="{ 'fa-play': !isPlaying, 'fa-pause' : isPlaying}" (window:keydown.space)="globalWindowKeyPress()"></i>
          </button>
        </div>
        <div class="flex-element-with-border element-alignment-center">
          <button class="btn" (click)="forward()">
            <i class="fa fa-fast-forward"></i>
          </button>
        </div>
        <div class="flex-element-with-border element-alignment-center">
          <button class="btn" (click)="showTrackList()">Show track list</button>
        </div>
        <div class="flex-element-with-border-and-width element-alignment-center text-center">
          <div class="flex-container-main-row">
            <div class="flex-element-with-border element-width-50 element-alignment-center">
              {{currentTime}}/{{compositionTime}} sec
            </div>
            <div class="flex-element-with-border element-width-40">
              <button (click)="changeAutoPlayValue()" [ngStyle]="{'background' : isAutoPlay == true ? '#0080004a' : '#ff000054'}">AutoPlay
              </button>
            </div>
          </div>
        </div>
        <div class="flex-element-with-border-and-width element-alignment-center text-center">
          <div class="flex-element-with-border">
            {{currentTrackSource}}
          </div>
        </div>
        <div class="flex-element-with-border-and-width element-alignment-center text-center">
          <div class="flex-element-with-border">
            img
          </div>
        </div>
        <div class="flex-element-with-border-and-width element-alignment-center">
          <div class="flex-container-main-row container-alignment-center">
            <div class="flex-element-with-border">
              <input type="range" min="1" max="100" value="3" class="margin-top-9 my-progress-bar" (input)="changeVolume()" #volumeChanger>
            </div>
            <div class="flex-element-with-border margin-left-10 font-size-20">
              <i class="fa fa-volume-down volume-wrapper"></i>
            </div>
          </div>
        </div>
      </div>

      <div *ngIf="isShowTrackList" class="flex-container-main-column">
        <div *ngFor="let track of listOfTracks; let i = index" class="flex-element-with-border">
          <div class="flex-container-main-row">
            <div class="flex-element-with-border-and-width">
              {{track}}
            </div>
            <div class="flex-element-with-border-and-width" *ngIf="i==currentIndexOfTrackInArray"
                 [ngStyle]="{'background': isPlaying == true ? '#00800054': '#ff000061'}">
              CURRENT
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class AppMusicPlayerComponent implements OnInit {

  constructor(private appMusicPlayerSharedService: AppMusicPlayerSharedService) {
  }

  @ViewChild('audioPlayer')
  audioPlayerRef: ElementRef;

  @ViewChild('progressBar')
  progressBarRef: ElementRef;

  @ViewChild('volumeChanger')
  volumeChanger: ElementRef;

  @ViewChild('audioWrapper')
  audioWrapper: ElementRef;

  isPlaying: boolean;
  currentProgressInPercents: number;
  compositionTime: number;
  currentTime: number;
  currentTrackSource: string;
  currentIndexOfTrackInArray: number;
  currentIndexOfTrack: number;
  isShowTrackList: boolean;
  isAutoPlay: boolean;
  isTrackFinished: boolean;

  @Input()
  listOfTracks: Array<string>;

  ngOnInit(): void {
    this.currentTrackSource = this.listOfTracks[0];
    this.currentIndexOfTrackInArray = 0;
    this.currentIndexOfTrack = 1;
    this.audioPlayerRef.nativeElement.autoplay = false;
    this.appMusicPlayerSharedService.AppMusicPlayerComponent = this;
  }

  playOrPause() {
    console.log('currentTrackSource: ' + this.currentTrackSource);
    this.currentTrackSource = this.listOfTracks[0];
    if (this.compositionTime == null) {
      this.compositionTime = Math.round(this.audioPlayerRef.nativeElement.duration);
    }
    this.isPlaying = !this.isPlaying;
    if (this.isPlaying) {
      this.audioPlayerRef.nativeElement.play();
    } else {
      this.audioPlayerRef.nativeElement.pause();
    }
    this.audioPlayerRef.nativeElement.autoplay = false;
  }

  playCurrentTrack(source: string) {
    if (this.currentTrackSource === source) {
      if (this.isPlaying) {
        this.audioPlayerRef.nativeElement.pause();
      } else {
        this.audioPlayerRef.nativeElement.play();
      }
      return;
    }
    this.currentTrackSource = source;
    this.audioPlayerRef.nativeElement.load();
    this.audioPlayerRef.nativeElement.play();
    this.audioPlayerRef.nativeElement.autoplay = false;
  }

  forward() {
    if (this.currentIndexOfTrack >= this.listOfTracks.length) {
      return;
    }
    this.currentTrackSource = this.listOfTracks[++this.currentIndexOfTrackInArray];
    this.audioPlayerRef.nativeElement.load();
    this.audioPlayerRef.nativeElement.autoplay = true;
    this.isPlaying = true;
    this.currentIndexOfTrack++;
  }

  backward() {
    if (this.currentIndexOfTrack <= 1) {
      return;
    }
    this.currentTrackSource = this.listOfTracks[--this.currentIndexOfTrackInArray];
    this.audioPlayerRef.nativeElement.load();
    this.currentIndexOfTrack--;
  }

  changeVolume() {
    let newVolumeValue = this.volumeChanger.nativeElement.value / 100;
    if (newVolumeValue <= 0.01) {
      this.audioPlayerRef.nativeElement.volume = 0;
    } else {
      this.audioPlayerRef.nativeElement.volume = newVolumeValue;
    }
  }

  changeProgress(event: any) {
    let maxWidth = this.audioWrapper.nativeElement.offsetWidth;
    let newProgressBarValueInPercentages = 100 / maxWidth * event.offsetX;
    this.currentProgressInPercents = newProgressBarValueInPercentages;
    this.audioPlayerRef.nativeElement.currentTime = this.audioPlayerRef.nativeElement.duration * newProgressBarValueInPercentages * 0.01;
  }

  timeUpdate() {
    this.currentTime = Math.round(this.audioPlayerRef.nativeElement.currentTime);
    this.currentProgressInPercents = (100 / this.audioPlayerRef.nativeElement.duration * this.audioPlayerRef.nativeElement.currentTime);
    if (this.currentTime > this.compositionTime && !this.isTrackFinished && this.isAutoPlay) {
      this.isTrackFinished = true;
      this.switchToNextTrackWithDelay();
    }
  }

  showTrackList() {
    this.isShowTrackList = !this.isShowTrackList;
  }

  changeAutoPlayValue() {
    this.isAutoPlay = !this.isAutoPlay;
    this.audioPlayerRef.nativeElement.autoplay = this.isAutoPlay;
  }

  switchToNextTrackWithDelay() {
    this.delay(2500)
      .then(() => {
        this.forward();
        this.isTrackFinished = false;
      });
  }

  async delay(delay: number) {
    return new Promise(resolve => setTimeout(resolve, delay));
  }

  globalWindowKeyPress() {
    this.playOrPause();
  }
}
