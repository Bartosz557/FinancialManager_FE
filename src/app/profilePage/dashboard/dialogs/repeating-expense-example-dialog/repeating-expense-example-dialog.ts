import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {DialogAnimationsExampleDialogService} from "../add-expense-dialog/dialog-animations-example-dialog.service";
import {DialogAnimationsExampleDialog} from "../add-expense-dialog/dialog-animations-example-dialog";
import {RepeatingExpenseExampleDialogService} from "./repeating-expense-example-dialog.service";
import {formatDate, NgForOf, NgIf} from "@angular/common";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {range} from "rxjs";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {DatepickerOverviewExample} from "../../angular-materials/datepicker-overview-example";
import {MatInputModule} from "@angular/material/input";
import { DateTime } from 'luxon';
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";


@Component({
  selector: 'repeating-expense-example-dialog',
  templateUrl: './repeating-expense-example-dialog.html',
  styleUrls: ['./repeating-expense-example-dialog.css'],
  standalone: true,
  imports: [
    MatDialogModule,
    NgForOf,
    FormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    DatepickerOverviewExample,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    NgIf,
    MatButtonModule
  ]
})
export class RepeatingExpenseExampleDialog implements OnInit{
  expenseValue: any;
  expenseName: any;

  protected readonly range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  date: any;
  public reminderType: any;
  optionsList = [
    { value: "do_not_remind", displayText: "No reminder" },
    { value: "one_reminder", displayText: "Remind the same day" },
    { value: "two_reminders", displayText: "Remind the same day & day before" },
    { value: "three_reminders", displayText: "Remind the same day & day and week before" }

  ];
  selectFormControl = new FormControl('', Validators.required);



  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>, private dialogService: RepeatingExpenseExampleDialogService) {}
  closeDialog() {
    this.dialogRef.close({ success: false });
  }

  ngOnInit() {
    this.dialogRef.updateSize('30%', '60%');
  }


  sendTransaction() {
    const requestBody = [
      {
        name: this.expenseName,
        date: this.date,
        amount: this.expenseValue,
        reminderType: this.reminderType.value,
      }
    ]
    this.dialogService.sendTransactionData(requestBody).subscribe(
      (success) => {
        this.dialogRef.close({ success: true });
        console.log(success)
      },
      (error) => {
        console.log('Error:', error);
      }
    );
    console.log(this.reminderType)
    // TODO: Success window popup
  }

}
