import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  template: `    
    
    <app-main-layout></app-main-layout>
    
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
