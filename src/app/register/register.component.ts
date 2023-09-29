import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {RegisterService} from "./register.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  password: any;
  username: any;
  confirmPassword: any;
  constructor(private router: Router,private registerService: RegisterService) {}

  registerUser()
  {
    if(this.checkPasswordSimilarity())
      this.registerService.registerUser(this.password, this.username)
    else
      this.differentPasswordMsg()
  }
  checkPasswordSimilarity()
  {
    if(this.password === this.confirmPassword)
      return true;
    else
      return false;
  }

  differentPasswordMsg()
  {
    // TODO different passwords messagebox
  }
}

