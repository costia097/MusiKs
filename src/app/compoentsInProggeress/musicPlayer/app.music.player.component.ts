import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-music-player',
  styleUrls: ['./app.music.player.component.css'],
  template: `

    <audio #audioPlayer (timeupdate)="timeUpdate()">
      <source src="{{currentTrackSource}}">
    </audio>

    <div class="flex-container-main" style="padding-top: 56%">
      <div class="progress progress-bar-element flex-component" (click)="changeProgress($event)" style="height: 15px; width: 100%">
        <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" #progressBar
             [ngStyle]="{'width':currentProgressInPercents +'%'}"></div>
      </div>
    </div>
    <div class="flex-container-main" style="padding-top: 15px">
      <div class="flex-component">
        <button class="btn" (click)="backward()">
          <i class="fa fa-fast-backward"></i>
        </button>
      </div>
      <div class="flex-component">
        <button class="btn play-btn-wrapper" (click)="play()">
          <i class="fa" [ngClass]="{ 'fa-play': !isPlaying, 'fa-pause' : isPlaying}"></i>
        </button>
      </div>
      <div class="flex-component">
        <button class="btn" (click)="forward()">
          <i class="fa fa-fast-forward"></i>
        </button>
      </div>
      <div class="flex-component" (click)="showTrackList()">
        <button >Show track list</button>
      </div>
      <div class="flex-component">
        NEY
      </div>
      <div class="flex-component">
        NEY
      </div>
      <div class="flex-component">
        NEY
      </div>
      <div class="flex-component" style="width: 65%">
        <div>
          {{currentTime}}/{{compositionTime}} sec
        </div>
        <div>
          {{currentTrackSource}}
        </div>
      </div>
      <div class="flex-component" style="width: 30%">
        <div class="flex-container-main">
          <input type="range" min="1" max="100" value="50" class="slider" (input)="changeVolume()" #volumeChanger>
          <div style="margin-top: 2px; margin-left: 25px">
            <i class="fa fa-volume-down volume-wrapper"></i>
          </div>
        </div>
      </div>
    </div>
    
    <div *ngIf="isShowTrackList" class="flex-container-main" style="flex-direction: column">
      <div *ngFor="let track of listOfTracks">
        {{track}}
      </div>
    </div>
  `,
})
export class AppMusicPlayerComponent implements OnInit{
  @ViewChild('audioPlayer')
  audioPlayerRef: ElementRef;

  @ViewChild('progressBar')
  progressBarRef: ElementRef;

  @ViewChild('volumeChanger')
  volumeChanger: ElementRef;

  isDebug: boolean;
  isPlaying: boolean;
  currentProgressInPercents: number;
  compositionTime: number;
  currentTime: number;

  currentTrackSource: string;
  currentIndexOfTrackInArray: number;
  currentIndexOfTrack: number;

  isShowTrackList: boolean;

  @Input()
  listOfTracks: Array<string>;


  ngOnInit(): void {

    this.currentTrackSource = this.listOfTracks[0];
    this.currentIndexOfTrackInArray = 0;
    this.currentIndexOfTrack = 1;
  }

  play() {
    if (this.compositionTime == null) {
      this.compositionTime = Math.round(this.audioPlayerRef.nativeElement.duration)
    }
    this.isPlaying = !this.isPlaying;
    if (this.isPlaying) {
      this.audioPlayerRef.nativeElement.play();
    } else {
      this.audioPlayerRef.nativeElement.pause();
    }
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
    if (this.isDebug) {
      console.log('Change volume: ' + newVolumeValue);
    }
  }

  changeProgress(event: any) {
    let maxWidth = window.innerWidth;
    let newProgressBarValueInPercentages = 100 / maxWidth * event.offsetX;
    this.currentProgressInPercents = newProgressBarValueInPercentages;
    let newTime = this.audioPlayerRef.nativeElement.duration * newProgressBarValueInPercentages * 0.01;
    this.audioPlayerRef.nativeElement.currentTime = newTime;
    if (this.isDebug) {
      console.log('NewTIme is: ' + newTime + ' duration is: ' + this.audioPlayerRef.nativeElement.duration);
      console.log('offsetX: ' + event.offsetX + 'newProgressBarValueInPercentages: ' + newProgressBarValueInPercentages);
    }
  }

  timeUpdate() {
    if (this.isDebug) {
      console.log('Time update ' + 'current time is: ' + this.audioPlayerRef.nativeElement.currentTime + ' durations is: ' + this.audioPlayerRef.nativeElement.duration);
      console.log('Current progress is: ' + this.currentProgressInPercents);
    }
    this.currentTime = Math.round(this.audioPlayerRef.nativeElement.currentTime);
    this.currentProgressInPercents = (100 / this.audioPlayerRef.nativeElement.duration * this.audioPlayerRef.nativeElement.currentTime);
  }

  showTrackList(){
    this.isShowTrackList = !this.isShowTrackList;
  }
}
