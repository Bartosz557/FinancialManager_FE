import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {EditHistoryTransactionService} from "./edit-history-transaction.service";
import {formatDate, NgForOf, NgIf} from "@angular/common";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {range} from "rxjs";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { DateTime } from 'luxon';
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {
  DialogAnimationsExampleDialog
} from "../../dashboard/dialogs/add-expense-dialog/dialog-animations-example-dialog";


@Component({
  selector: 'edit-history-transaction',
  templateUrl: './edit-history-transaction.html',
  styleUrls: ['./edit-history-transaction.css'],
  standalone: true,
  imports: [
    MatDialogModule,
    NgForOf,
    FormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    NgIf,
    MatButtonModule
  ]
})
export class EditHistoryTransaction implements OnInit{
  expenseValue: any;
  expenseName: any;

  protected readonly range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  date: any;

  selectFormControl = new FormControl();

  example: any;
  description: any;
  value: any;
  category: any;
  selectedCategory: any;
  optionsList: any;

  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>, private dialogService: EditHistoryTransactionService) {}
  closeDialog() {
    this.dialogRef.close({ success: false });
  }

  ngOnInit() {
    this.dialogRef.updateSize('30%', '46%');
    this.dialogService.fetchCategories().subscribe((data:any) => {
      console.log(data)
      this.optionsList = data.map((item:string) => ({ value: item, text: this.formatted(item) }));
    });
  }

  formatted(name: string){
    if (name.toLowerCase() === "diningout") {
      name = "dining out";
    }
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
  sendTransaction() {
    const requestBody = [
      {
        name: this.expenseName,
        date: this.date,
        amount: this.expenseValue,
        category: 'recurringExpense'
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
    // TODO: Success window popup
  }

}
