import {Component, OnInit} from '@angular/core';
import {MainPageService} from "../../mainPage/mainPage.service";
import {AdminDashboardService} from "./admin-dashboard.service";
import {ProfilePageService} from "../../profilePage/profilePage.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent   {

  constructor(private adminDashboardService: AdminDashboardService, private profilePageService: ProfilePageService, private router: Router, private http: HttpClient) {}
  users: any[] = [];
  public ngOnInit(): void {
    // const newUsers = this.adminDashboardService.getUsers()
    // for (const user in newUsers) {
    //   this.users.push(user);
    // }
  }



  editUser(user: any) {

  }

  deleteUser(user: any) {

  }

  viewDetails(user: any) {

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

  registerNewUser() {


  }
}
