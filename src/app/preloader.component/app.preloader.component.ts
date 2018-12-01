import {Component, Input} from '@angular/core';

@Component({
   selector: 'app-preloader',
  styleUrls: ['app.preloader.component.css'],
  template: `    
    
    <div class="loader" [hidden]="!showSpinner">
      <div class="loader-inner">
        <div class="loader-line-wrap">
          <div class="loader-line"></div>
        </div>
        <div class="loader-line-wrap">
          <div class="loader-line"></div>
        </div>
        <div class="loader-line-wrap">
          <div class="loader-line"></div>
        </div>
        <div class="loader-line-wrap">
          <div class="loader-line"></div>
        </div>
        <div class="loader-line-wrap">
          <div class="loader-line"></div>
        </div>
      </div>
    </div>
    
  `
})
export class AppPreloaderComponent {
  @Input()
  showSpinner: boolean = false;
}
