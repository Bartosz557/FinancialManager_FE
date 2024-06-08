import {Component, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "./login.service";
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router, private loginService: LoginService) {}
  errorMessage = '';
  errorPassMessage = '';
  email = new FormControl('', [Validators.required, Validators.email]);
  emailValue: any;
  password = new FormControl('', [Validators.required, Validators.minLength(5)]);
  passwordValue: any;
  hide = true;
  register() {
    this.router.navigate(['/register']);
  }
  login() {
    this.loginService.loginUser(this.emailValue, this.passwordValue);
  }
  updatePasswordErrorMessage() {
    if (this.password.hasError('required')) {
      this.errorPassMessage = 'You must enter a value';
    } else if (this.password.hasError('minlength')) {
      this.errorPassMessage = 'Password must be at least 5 character long';
    } else {
      this.errorPassMessage = '';
    }
  }
  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage = 'You must enter a value';
    } else if (this.email.hasError('email')) {
      this.errorMessage = 'Not a valid email';
    } else {
      this.errorMessage = '';
    }
  }
  clickEvent() {
    let passwordField = document.getElementById("password") as HTMLInputElement;
    if(passwordField!=null) {
      if (passwordField.type === "password") {
        passwordField.type = "text";
      } else {
        passwordField.type = "password";
      }
    }
  }

}

