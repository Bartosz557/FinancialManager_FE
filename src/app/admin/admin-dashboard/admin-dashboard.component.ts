import {Component, OnInit} from '@angular/core';
import {MainPageService} from "../../mainPage/mainPage.service";
import {AdminDashboardService} from "./admin-dashboard.service";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit  {

  constructor(private adminDashboardService: AdminDashboardService) {}
  users: any[] = [];
  public ngOnInit(): void {
    const newUsers = this.adminDashboardService.getUsers()
    for (const user in newUsers) {
      this.users.push(user);
    }
  }



  editUser(user: any) {

  }

  deleteUser(user: any) {

  }

  viewDetails(user: any) {

  }


}
