import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    
    <button class="btn" (click)="addTrack()">
      Add
    </button>
    
    <app-music-player [listOfTracks]="listOfTracks"></app-music-player>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listOfTracks: Array<string> = ['assets/venom.mp3', 'assets/mission.mp3'];

  addTrack() {
    this.listOfTracks.push('assets/venom.mp3');
  }
}
