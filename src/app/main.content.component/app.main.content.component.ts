import {Component, OnInit} from '@angular/core';
import {MainContentTrackHolder} from './MainContentTrackHolder';

@Component({
  selector: 'app-main-content',
  styleUrls: ['app.main.content.component.css'],
  template: `

    <section>
      <div class="flex-container-main-column">
        <div *ngFor="let element of listOfTracks" class="flex-element-with-border">
          <app-main-content-music-player [name]="element.getName()" [source]="element.getSource()"></app-main-content-music-player>
        </div>
      </div>
    </section>
  `
})
export class AppMainContentComponent implements OnInit {

  listOfTracks: Array<MainContentTrackHolder> = [];


  ngOnInit(): void {

    let firstElement = new MainContentTrackHolder();
    firstElement.setName('Eminem');
    firstElement.setSource('assets/venom.mp3');

    this.listOfTracks.push(firstElement);

    let secondElement = new MainContentTrackHolder();
    secondElement.setName('Mission');
    secondElement.setSource('assets/mission.mp3');

    this.listOfTracks.push(secondElement);
  }
}
