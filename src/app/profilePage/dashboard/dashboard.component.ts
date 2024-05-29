import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {timeout} from "rxjs";
import {ProfileConfigurationService} from "../profile-configuration/profile-configuration.service";
import {Router} from "@angular/router";
import {DashboardService} from "./dashboard.service";
import {MainPageData} from "./main-page-data.interface";
import {MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";
import {Dialog, DIALOG_DATA, DialogModule} from '@angular/cdk/dialog';
import {DialogAnimationsExampleDialog} from "./dialogs/add-expense-dialog/dialog-animations-example-dialog";
import {AddDepositExampleDialog} from "./dialogs/add-deposit-example-dialog/add-deposit-example-dialog";
import {PlannedExpenseExampleDialog} from "./dialogs/planned-expense-example-dialog/planned-expense-example-dialog";
import {
  RepeatingExpenseExampleDialog
} from "./dialogs/repeating-expense-example-dialog/repeating-expense-example-dialog";
import {MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipDefaultOptions} from "@angular/material/tooltip";
import {WalletSettingsDialogComponent} from "./view-dialogs/wallet-settings-dialog/wallet-settings-dialog.component";
import {PaymentRemindersDialogComponent} from "./view-dialogs/payment-reminders/payment-reminders-dialog.component";
import {RemindersInterface} from "./view-dialogs/payment-reminders/reminders.interface";

export const myCustomTooltipDefaults: MatTooltipDefaultOptions = {
  showDelay: 300,
  hideDelay: 200,
  touchendHideDelay: 0,
};
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [{provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults}]
})
export class DashboardComponent implements OnInit{

  constructor(public dialog: MatDialog, private dashboardService: DashboardService, private router: Router, private matDialog: MatDialog) {}


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
  percent: any;
  limitValue: any;
  ngOnInit() {
    this.loadData()
    this.checkReminders()

  }

  openDialog(dialogComponent: any, enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRef = this.dialog.open(this.getDialog(dialogComponent), {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
      autoFocus: false,
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
        this.percent = (response.expenses/response.limit*100);
        // this.progressService.updateProgress(50);
        this.piggyBank = response.piggyBank;
        this.residualFunds = response.residualFunds;
        this.limitValue = (response.expenses + '/' + response.limit);
      }
    );
  }

  addRecurringExpense() {

  }

  addScheduledExpense() {

  }

  addDeposit() {

  }

  checkReminders() {
    this.dashboardService.getReminder().subscribe(
      (response : RemindersInterface) => {
        if(response.today.length>0||response.tomorrow.length>0||response.nextWeek.length>0){
          console.log(response)
          const dialogRef = this.dialog.open(PaymentRemindersDialogComponent, {
            width: '250px',
            enterAnimationDuration: '0ms',
            exitAnimationDuration: '0ms',
            autoFocus: false,
            data: {
              reminders: response,
            },
          });
        }
      }
    )

  }
  test() {
  }

  private getDialog(dialogComponent: any): any {
    switch (dialogComponent){
      case 'DialogAnimationsExampleDialog':
        return DialogAnimationsExampleDialog
      case 'AddDepositExampleDialog':
        return AddDepositExampleDialog
      case 'planned-expense-example-dialog':
        return PlannedExpenseExampleDialog
      case 'repeating-expense-example-dialog':
        return RepeatingExpenseExampleDialog
      case 'wallet-settings-dialog-component':
        return WalletSettingsDialogComponent
    }
    return DialogAnimationsExampleDialog;
  }
}
