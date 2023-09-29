import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "./login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  password: any;
  username: any;
  constructor(private router: Router,
              private loginService: LoginService) {}

  register()
  {
    this.router.navigate(['/register']);

  }
  login()
  {
    this.loginService.loginUser(this.username, this.password);
  }

}

