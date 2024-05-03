import {Component, OnInit} from '@angular/core';
import {timeout} from "rxjs";
import {ProfileConfigurationService} from "../profile-configuration/profile-configuration.service";
import {Router} from "@angular/router";
import {DashboardService} from "./dashboard.service";
import {MainPageData} from "./main-page-data.interface";
import {MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";
import {Dialog, DIALOG_DATA, DialogModule} from '@angular/cdk/dialog';
import {ProgressService} from "./progress-spinner-configurable-example/progress-service";
import {DialogAnimationsExampleDialog} from "./my-modal/dialog-animations-example-dialog";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  constructor(public dialog: MatDialog, private dashboardService: DashboardService, private router: Router, private matDialog: MatDialog, private progressService: ProgressService) {}


  IDs: string[] = ["white-box", "left-box", "right-box"];
  colors: string[] = ["#48e18d","#EDBB99","#5499C7"];
  timeout: any;timeout1: any;
  timeout2: any;

  // green circle goes up
  // dashboard.component.ts:37 green circle goes down
  // dashboard.component.ts:79 2circle goes down
  // dashboard.component.ts:66 2circle goes up
  // dashboard.component.ts:70 2box goes up
  // dashboard.component.ts:66 2circle goes up
  // dashboard.component.ts:70 2box goes up
  // dashboard.component.ts:41 green circle index goes to 1
  // dashboard.component.ts:79 2circle goes down
  // dashboard.component.ts:92 2circle index goes 2
  daysLeft: any;
  username: any;
  settlementDate: any;
  accountBalance: any;
  piggyBank: any;
  residualFunds: any;
  expenses: any;
  limit: any
  ngOnInit() {
    this.loadData()
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRef = this.dialog.open(DialogAnimationsExampleDialog, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result && result.success === true) {
        console.log("dialog success")
        this.loadData()
      } else {
        console.log("dialog fail")
      }
    });
  }

  private loadData() {
    this.dashboardService.getMainPageData().subscribe(
      (response: MainPageData) => {
        this.username = response.username.charAt(0).toUpperCase() + response.username.slice(1);
        this.settlementDate = this.dashboardService.getSettlementDate(response.settlementDate);
        this.accountBalance = response.accountBalance;
        // this.setMickeyMouse(response.piggyBank,response.residualFunds, response.expenses, response.limit)
        this.daysLeft = this.dashboardService.setDaysLeft(response.settlementDate);
        this.progressService.updateProgress(response.expenses/response.limit*100);
        // this.progressService.updateProgress(50);
        this.progressService.updateValue(response.expenses + '/' + response.limit);
      }
    );
  }

  addRecurringExpense() {

  }

  addScheduledExpense() {

  }

  addDeposit() {

  }

  manaWallet() {

  }
  test() {
  }
}
