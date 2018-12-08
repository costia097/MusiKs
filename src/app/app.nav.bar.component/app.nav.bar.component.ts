import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav-bar-component',
  template: `

    <section class="element-height-full flex-section-wrapper">
      <div class="flex-container-main-row element-pixel-height-30">
        <div class="flex-element-with-border-and-width element-alignment-center text-center">
          LOGO
        </div>
        <div class="flex-element-with-border-and-width element-alignment-center">
          <div class="flex-container-main-row">
            <div class="element-alignment-center element-width-50">
              <input class="form-control element-pixel-height-25"/>
            </div>
            <div class="element-alignment-center margin-left-10">
              <button class="btn">Search</button>
            </div>
          </div>
        </div>
        <div class="flex-container-main-row element-width-50">
          <div class="flex-element-with-border-and-width element-alignment-center text-center">
            <a class="pointer" (click)="navigateTo('/')">Main content</a>
          </div>
          <div class="flex-element-with-border-and-width element-alignment-center text-center">
            2
          </div>
          <div class="flex-element-with-border-and-width element-alignment-center text-center">
            3
          </div>
          <div class="flex-element-with-border-and-width element-alignment-center text-center">
            4
          </div>
          <div class="flex-element-with-border-and-width element-alignment-center text-center">
            5
          </div>
        </div>
        <div class="flex-container-main-row element-width-15 container-alignment-right">
          <div class="element-alignment-center">
            <button class="btn" (click)="navigateTo('login')">Login</button>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['app.nav.bar.component.css']
})
export class AppNavBarComponent {
  constructor(private router: Router) {
  }

  navigateTo(url:string) {
    this.router.navigate(['/' + url]);
  }
}
