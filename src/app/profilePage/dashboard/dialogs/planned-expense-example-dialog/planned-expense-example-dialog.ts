import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {DialogAnimationsExampleDialogService} from "../add-expense-dialog/dialog-animations-example-dialog.service";
import {DialogAnimationsExampleDialog} from "../add-expense-dialog/dialog-animations-example-dialog";
import {PlannedExpenseExampleDialogService} from "./planned-expense-example-dialog.service";
import {formatDate, NgForOf} from "@angular/common";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {range} from "rxjs";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {DatepickerOverviewExample} from "../../angular-materials/datepicker-overview-example";
import {MatInputModule} from "@angular/material/input";
import { DateTime } from 'luxon';

@Component({
  selector: 'planned-expense-example-dialog',
  templateUrl: './planned-expense-example-dialog.html',
  styleUrls: ['./planned-expense-example-dialog.css'],
  standalone: true,
  imports: [
    MatDialogModule,
    NgForOf,
    FormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    DatepickerOverviewExample,
    MatInputModule
  ]
})
export class PlannedExpenseExampleDialog implements OnInit{
  expenseValue: any;
  expenseName: any;

  protected readonly range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  date: any;
  private formatedDate: any;
  public reminderType: any;
  optionsList = [
    { value: "do_not_remind", displayText: "No reminder" },
    { value: "one_reminder", displayText: "Remind the same day" },
    { value: "two_reminders", displayText: "Remind the same day & day before" },
    { value: "three_reminders", displayText: "Remind the same day & day and week before" }

  ];
  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>, private dialogService: PlannedExpenseExampleDialogService) {}
  closeDialog() {
    this.dialogRef.close({ success: false });
  }

  ngOnInit() {
    this.dialogRef.updateSize('30%', '40%');
  }

  formatDate() {
    this.formatedDate = DateTime.fromJSDate(this.date).toFormat('dd.MM.yyyy');

  }
  sendTransaction() {
    const requestBody = {
      date: this.formatedDate,
      amount: this.expenseValue,
      reminderType: this.reminderType.value,
      transactionStatus: 'PENDING'

    }
    this.dialogService.sendTransactionData(requestBody).subscribe(
      (success) => {
        this.dialogRef.close({ success: true });
        console.log(success)
      },
      (error) => {
        console.log('Error:', error);
      }
    );

    console.log(this.formatedDate)
    console.log(this.reminderType)
    // TODO: Success window popup
  }

}
