import {Component} from '@angular/core';

@Component({
  selector: 'app-main-layout',
  styleUrls: ['app.main.layout.css'],
  template: `

    <div class="flex-container-main-column element-min-height-full main-container">
      <div class="flex-element-with-border element-width-75 element-alignment-center">
        <div class="element-width-50 element-position-fixed element-width-75 element-z-index-10">
          <app-header></app-header>
        </div>
        <div class="flex-element-with-border margin-top-5 margin-bottom-5">
          <div class="element-height-full">
            <router-outlet></router-outlet>
          </div>
        </div>
        <div class="element-position-fixed element-bottom-zero element-width-75">
          <app-music-player  [listOfTracks]="musicTracks"></app-music-player>
        </div>
      </div>
    </div>

  `
})
export class AppMainLayout {
  musicTracks: Array<string> = ['assets/mission.mp3'];
}
