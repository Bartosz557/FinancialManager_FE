import {Component, OnInit} from '@angular/core';
import {MainPageService} from "../../mainPage/mainPage.service";
import {AdminDashboardService, Root} from "./admin-dashboard.service";
import {ProfilePageService} from "../../profilePage/profilePage.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ConfirmationDialogComponent} from "./confirmationDialog/confirmation-dialog.component";
import { MatDialog } from '@angular/material/dialog';
import {EditDialogComponent} from "./editDialog/edit-dialog.component";
import {FileService} from "./file.serivce";
import {MatTableDataSource} from "@angular/material/table";
import {UpcomingPaymentsInterface} from "../../profilePage/dashboard/upcoming-payments/upcoming-payments.interface";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent  implements OnInit{

  constructor(private dialog: MatDialog,private fileService: FileService, private adminDashboardService: AdminDashboardService, private profilePageService: ProfilePageService, private router: Router, private http: HttpClient) {}
  // TODO: change the username to ID and add Id to the response in spring

  displayedColumns: string[] = ['username', 'email', 'configured', 'enabled', 'options'];
  data: Root[] = [{
        username: '',
        email: '',
        configured: false,
        enabled: false
    }];
  dataSource: MatTableDataSource<Root> =  new MatTableDataSource(this.data)

  public ngOnInit(): void {
      this.fetchData()
  }

  async fetchData() {
      this.adminDashboardService.fetchUsersData().subscribe(
        (response: Root[]) => {
            this.dataSource = new MatTableDataSource(response);
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

  getPrintReg() {
    this.fileService.downloadFile("registration").subscribe(data => {
      const blob = new Blob([data], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      window.open(url);
    });
  }

  getPrintLog() {
    this.fileService.downloadFile("login").subscribe(data => {
      const blob = new Blob([data], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      window.open(url);
    });
  }

    edit(row:any) {

    }

    delete(row:any) {

    }
}



