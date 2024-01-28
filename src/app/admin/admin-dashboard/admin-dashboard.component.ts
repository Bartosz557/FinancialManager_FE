import {Component, OnInit} from '@angular/core';
import {MainPageService} from "../../mainPage/mainPage.service";
import {AdminDashboardService, Root, Root2} from "./admin-dashboard.service";
import {ProfilePageService} from "../../profilePage/profilePage.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ConfirmationDialogComponent} from "./confirmationDialog/confirmation-dialog.component";
import { MatDialog } from '@angular/material/dialog';
import {EditDialogComponent} from "./editDialog/edit-dialog.component";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent  implements OnInit{

  constructor(private dialog: MatDialog, private adminDashboardService: AdminDashboardService, private profilePageService: ProfilePageService, private router: Router, private http: HttpClient) {}

  userData: Root | undefined
  // TODO: change the username to ID and add Id to the response in spring
  public ngOnInit(): void {
      this.fetchData()
  }

  async fetchData() {
      this.adminDashboardService.fetchUsersData().subscribe(
        (response: Root) => {
          this.userData = response
          console.log(response[0])
          console.log(response[0].username)
        }
      );
  }


  editUser(user: any) {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '600px', // Set the width of the dialog box
      data: user.username,
      position: {top: '-50px', left:'760px'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed with result:', result);
    });
  }

  deleteUser(user: any) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '400px',
      data: user.username,
      position: {top: '-50px', left:'760px'}
    });


    dialogRef.afterClosed().subscribe(
      (result : Root) => {
      if (result) {
        // User confirmed deletion, implement deletion logic here
        console.log('Deleting user:', user);
      }
    });
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



