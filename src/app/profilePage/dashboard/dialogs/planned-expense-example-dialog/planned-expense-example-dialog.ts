import {Component, OnInit} from '@angular/core';
import {MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {DialogAnimationsExampleDialogService} from "../add-expense-dialog/dialog-animations-example-dialog.service";
import {DialogAnimationsExampleDialog} from "../add-expense-dialog/dialog-animations-example-dialog";
import {PlannedExpenseExampleDialogService} from "./planned-expense-example-dialog.service";
import {NgForOf} from "@angular/common";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {range} from "rxjs";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {DatepickerOverviewExample} from "../../angular-materials/datepicker-overview-example";

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
    DatepickerOverviewExample
  ]
})
export class PlannedExpenseExampleDialog implements OnInit{
  expenseValue: any;
  expenseName: any;

  protected readonly range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>, private dialogService: PlannedExpenseExampleDialogService) {}
  closeDialog() {
    this.dialogRef.close({ success: false });
  }

  ngOnInit() {
    this.dialogRef.updateSize('25%', '30%');
  }
  sendTransaction() {
    const requestBody = {
      expenseName: this.expenseName,
      categoryName: "other",
      transactionValue: this.expenseValue,
      transactionType: "EXPENSE"
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



    // TODO: Success window popup
  }

}
