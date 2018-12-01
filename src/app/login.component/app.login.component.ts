import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  styleUrls: ['app.login.component.css'],
  template: `

    <div class="element-width-full">
      <div class="flex-container-main-row container-alignment-center">
        <form [formGroup]="loginForm" (ngSubmit)="onFormSubmit()">
          <div class="flex-container-main-column container-alignment-center element-shadow-down">
            <label>
              Login:
              <input type="text" formControlName="login" [ngStyle]="{'background-color': determinateColorForFormControl('login')}">
            </label>
            <label>
              Password:
              <input type="password" formControlName="password" [ngStyle]="{'background-color':  determinateColorForFormControl('password') }">
            </label>
            <button type="submit" [disabled]="!loginForm.valid">Submit</button>
          </div>
        </form>
      </div>
    </div>
  `
})
export class AppLoginComponent {
  constructor(private fb: FormBuilder) {
  }

  loginForm = this.fb.group({
    login: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });


  determinateColorForFormControl(formControlName: string) {
    let formControl = this.loginForm.get(formControlName);
    if (formControl.touched) {
      if (formControl.invalid) {
        return '#ff0b0b4f';
      } else {
        return '#22bd573b';
      }
    } else {
      return 'white';
    }
  }


  onFormSubmit() {
    console.log('login: ' + this.loginForm.get('login').value);
    console.log('password: ' + this.loginForm.get('password').value);

  }
}
