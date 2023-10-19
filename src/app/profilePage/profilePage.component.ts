import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProfilePageService} from "./profilePage.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profilePage.component.html',
  styleUrls: ['./profilePage.component.css']
})

export class ProfilePageComponent implements OnInit{

  constructor(private profilePageService: ProfilePageService,private router: Router) {
  }

  ngOnInit() {
    this.router.navigate(["/profile/test"])
  }

  navigateToProfile(){
    this.router.navigate(["/profile/test"])
  }

  logout() {
    this.profilePageService.logoutRequest().subscribe(
        (response: boolean) => {
            console.log(response)
          if(response)
            this.succesLogout()
            else
              this.unexpectedError()
        }
    )
  }


  succesLogout(){
    console.log("logout successfully")
      this.router.navigate(["/login"])
  }

  unexpectedError(){
    console.log("error has occurred")
  }
}
