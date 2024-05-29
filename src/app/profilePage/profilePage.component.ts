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

  constructor(private profilePageService: ProfilePageService,private router: Router, private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get<boolean>('/api/v1/profile/is-configured').subscribe(
      (configurated: boolean) => {
        console.log(`Configuration status: ${configurated}`);
        if(configurated)
          this.router.navigate(["/profile/dashboard"])
        else
          this.router.navigate(["/profile/configure"])

      },
      (error) => {
        console.error('Error:', error);
        // TODO error messagebox
      }
    );
  }

  navigateToProfile(){
    this.router.navigate(["/profile/dashboard"])
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

  walletHistory() {
    this.router.navigate(["/profile/wallet-history"])
  }

  upcomingPayments() {
    this.router.navigate(["/profile/upcoming-payments"])
  }
}
