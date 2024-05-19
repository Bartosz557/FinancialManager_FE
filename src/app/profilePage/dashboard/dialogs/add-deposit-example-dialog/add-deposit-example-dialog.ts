import {Component, OnInit} from '@angular/core';
import {MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {DialogAnimationsExampleDialogService} from "../add-expense-dialog/dialog-animations-example-dialog.service";
import {DialogAnimationsExampleDialog} from "../add-expense-dialog/dialog-animations-example-dialog";
import {AddDepositExampleDialogService} from "./add-deposit-example-dialog.service";
import {NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

@Component({
  selector: 'app-add-deposit-example-dialog',
  templateUrl: './add-deposit-example-dialog.html',
  styleUrls: ['./add-deposit-example-dialog.css'],
  standalone: true,
    imports: [
        MatDialogModule,
        NgForOf,
        FormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule
    ]
})
export class AddDepositExampleDialog implements OnInit{
  expenseValue: any;
  expenseName: any;
  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>, private dialogService: AddDepositExampleDialogService) {}
  closeDialog() {
    this.dialogRef.close({ success: false });
  }

  ngOnInit() {
    this.dialogRef.updateSize('25%', '37%');
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
