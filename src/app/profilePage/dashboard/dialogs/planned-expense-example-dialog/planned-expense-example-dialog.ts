import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {DialogAnimationsExampleDialogService} from "../add-expense-dialog/dialog-animations-example-dialog.service";
import {DialogAnimationsExampleDialog} from "../add-expense-dialog/dialog-animations-example-dialog";
import {PlannedExpenseExampleDialogService} from "./planned-expense-example-dialog.service";
import {formatDate, NgForOf, NgIf} from "@angular/common";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {range} from "rxjs";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {DatepickerOverviewExample} from "../../angular-materials/datepicker-overview-example";
import {MatInputModule} from "@angular/material/input";
import { DateTime } from 'luxon';
import {MatButtonModule} from "@angular/material/button";
import {MAT_DATE_LOCALE, MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MAT_TOOLTIP_DEFAULT_OPTIONS} from "@angular/material/tooltip";
import {myCustomTooltipDefaults} from "../../dashboard.component";
import {provideMomentDateAdapter} from '@angular/material-moment-adapter';

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
    MatInputModule,
    MatButtonModule,
    MatOptionModule,
    MatSelectModule,
    NgIf
  ],



})
export class PlannedExpenseExampleDialog implements OnInit{
  expenseValue: any;
  expenseName: any;
  selectFormControl = new FormControl('', Validators.required);
  selectFormControlTwo = new FormControl('', Validators.required);

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
  selectedCategory: any;
  optionsListTwo: any;
  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>, private dialogService: PlannedExpenseExampleDialogService) {}
  closeDialog() {
    this.dialogRef.close({ success: false });
  }

  ngOnInit() {
    this.dialogRef.updateSize('30%', '66%');
    this.dialogService.fetchCategories().subscribe((data) => {
      console.log(data)
      this.optionsListTwo = data;
    });
  }

  formatDate() {
    this.formatedDate = DateTime.fromJSDate(this.date).toFormat('dd.MM.yyyy');

  }
  sendTransaction() {
    const requestBody = {
      name: this.expenseName,
      date: this.formatedDate,
      amount: this.expenseValue,
      reminderType: this.reminderType.value,
      category: this.selectedCategory
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
