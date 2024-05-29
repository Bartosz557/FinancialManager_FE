import {Component, Inject, OnInit, Renderer2} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogAnimationsExampleDialog} from "../../dialogs/add-expense-dialog/dialog-animations-example-dialog";
import {PaymentRemindersDialogService} from "./payment-reminders-dialog.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {SnackBarExample} from "../../snack-bar-example/snack-bar-example";
import {Expense, Reminders, RemindersInterface} from "./reminders.interface";

@Component({
  selector: 'payment-reminders-dialog',
  templateUrl: './payment-reminders-dialog.component.html',
  styleUrls: ['./payment-reminders-dialog.component.css']
})
export class PaymentRemindersDialogComponent implements OnInit{
  settlementDate: any = '12.05.2024';
  title: any = 'Bills';
  daysLeft: any = 25;
  dialogheight = 27;
  reminders : RemindersInterface;
  elements: Reminders[] = new Array<Reminders>();

  constructor(@Inject(MAT_DIALOG_DATA) private data:any ,private snackBar: SnackBarExample , private _snackBar: MatSnackBar, public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>, private renderer: Renderer2, private walletService: PaymentRemindersDialogService) {
     this.reminders = this.data.reminders
  }

  ngOnInit() {
    // this.dialogRef.updateSize('28%', '26%');
    console.log(this.reminders)
    let leng = this.reminders.nextWeek.length + this.reminders.tomorrow.length + this.reminders.today.length - 1;
    this.dialogheight+=(leng*12.5)
    console.log(this.dialogheight)
    this.dialogRef.updateSize('28%', this.dialogheight+'%');
    this.getReminders()
  }

  getReminders() {
    for (const reminder of this.reminders.today) {
      const newElement: Reminders = {
        daysLeft: 'Today',
        expenseName: reminder.expenseName,
        category: reminder.category,
        amount: reminder.amount
      };
      this.elements.push(newElement)
    }
    for (const reminder of this.reminders.tomorrow) {
      const newElement: Reminders = {
        daysLeft: 'Tomorrow',
        expenseName: reminder.expenseName,
        category: reminder.category,
        amount: reminder.amount
      };
      this.elements.push(newElement)
    }
    for (const reminder of this.reminders.nextWeek) {
      const newElement: Reminders = {
        daysLeft: 'In 7 days',
        expenseName: reminder.expenseName,
        category: reminder.category,
        amount: reminder.amount
      };
      this.elements.push(newElement)
    }
    console.log(this.elements.length)
  }
  closeDialog() {
    this.dialogRef.close({success: true});
  }

  pay(id:any) {

  }

  edit(id:any) {

  }
}
