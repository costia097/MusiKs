import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
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
              <button>Search</button>
            </div>
          </div>
        </div>
        <div class="flex-container-main-row element-width-50">
          <div class="flex-element-with-border-and-width element-alignment-center text-center">
            <a class="pointer">1</a>
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
            <button>Button</button>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['app.header.component.css']
})
export class AppHeaderComponent {

}
