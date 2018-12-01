import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {AppMainContentComponent} from './main.content.compoent/app.main.content.component';
import {AppLoginComponent} from './login.component/app.login.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        component: AppMainContentComponent
      },
      {
        path: 'login',
        pathMatch: 'full',
        component: AppLoginComponent
      },
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
