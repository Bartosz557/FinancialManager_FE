import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {RegisterService} from "./register.service";
import {LoginService} from "../login/login.service";
import {AbstractControl, FormControl, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
  usernameValue: any;
  emailValue: any;
  passwordValue: any;
  confirmPassword: any;

  constructor(private router: Router,private registerService: RegisterService) {}


  errorMessage = ''
  errorPassMessage = ''
  confirmErrorMessage=''
  emailErrorMessage: string = '';


  username = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(5)]);
  confirmPass = new FormControl('', [Validators.required, Validators.minLength(5)]);


  registerUser()
  {
    if(this.checkPasswordSimilarity())
      this.registerService.registerUser(this.usernameValue, this.emailValue, this.passwordValue)
    else
      this.differentPasswordMsg()
  }
  checkPasswordSimilarity()
  {
    if(this.passwordValue !== this.confirmPassword){
      this.confirmPass.setErrors({ differentPasswords: true })
      this.confirmErrorMessage = "Passwords must be the same"
      this.password.setErrors({ differentPasswords: true })
      this.errorPassMessage = "Passwords must be the same"
      return false;
    }
    return true;
  }


  differentPasswordMsg()
  {
    // TODO different passwords messagebox
  }

  updatePasswordErrorMessage() {
    if (this.password.hasError('required')) {
      this.errorPassMessage = 'You must enter a value';
    } else if (this.password.hasError('minlength')) {
      this.errorPassMessage = 'Password must be 5 characters min.';
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
  checkPasswords() {
    if( this.confirmPass.hasError('duplicate')||this.password.hasError('duplicate')){
      this.confirmErrorMessage = 'Passwords must be the same';
      this.errorPassMessage = 'Passwords must be the same'
    }
  }
  hide = true;
  hideTwo = true;
  clickEvent(elementname:any) {
    let passwordField = document.getElementById(elementname) as HTMLInputElement;
    if(passwordField!=null) {
      if (passwordField.type === "password") {
        passwordField.type = "text";
      } else {
        passwordField.type = "password";
      }
    }
  }

  confirmPasswordErrorMessage() {
    if (this.confirmPass.hasError('required')) {
      this.confirmErrorMessage = 'You must enter a value';
    } else if (this.confirmPass.hasError('minlength')) {
      this.confirmErrorMessage = 'Password must be 5 characters min.';
    } else {
      this.confirmErrorMessage = '';
    }
  }


  updateUsernameMessage() {
    this.emailErrorMessage = 'You must enter a value';
  }

  backToLogin() {
    this.router.navigate(['/login']);

  }
}

