import {Component} from '@angular/core';

@Component({
  selector: 'app-gridsystem',
  template:`

    <section>

      <div class="flex-container-main-row">
        <div class="flex-container-main-column element-width-25 margin-left-1">
          <div class="flex-element-with-border-and-width element-width-full">
            1
          </div>
          <div class="flex-element-with-border-and-width">
            2
          </div>
          <div class="flex-element-with-border-and-width element-width-full">
            3
          </div>
        </div>
        <div class="flex-container-main-column element-width-25 margin-left-1">
          <div class="flex-element-with-border-and-width element-width-25">
            4
          </div>
          <div class="flex-element-with-border-and-width element-width-25 element-alignment-center">
            5
          </div>
          <div class="flex-element-with-border-and-width element-width-25 element-alignment-right">
            6
          </div>
        </div>
        <div class="flex-container-main-row element-width-50 margin-left-1">
          <div class="flex-element-with-border-and-width">
            7
          </div>
          <div class="flex-element-with-border-and-width">
            8
          </div>
          <div class="flex-element-with-border-and-width element-grow-2">
            9
          </div>
          <div class="flex-element-with-border-and-width">
            10
          </div>
        </div>
      </div>

    </section>

  `,
  styleUrls: ['app.gridsystem.component.css']
})
export class AppGridsystemComponent {

}
