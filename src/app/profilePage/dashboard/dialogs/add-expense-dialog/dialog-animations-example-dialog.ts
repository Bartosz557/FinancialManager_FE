import {Component, OnInit} from '@angular/core';
import {MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {DialogAnimationsExampleDialogService} from "./dialog-animations-example-dialog.service";
import {NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: './dialog-animations-example-dialog.html',
  styleUrls: ['./dialog-animations-example-dialog.css'],
  standalone: true,
  imports: [
    MatDialogModule,
    NgForOf,
    FormsModule,
    MatButtonModule
  ]
})
export class DialogAnimationsExampleDialog implements OnInit{

  optionsList: any;
  expenseValue: any;
  expenseName: any;
  selectedCategory: any;
  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>, private dialogService: DialogAnimationsExampleDialogService) {}

  ngOnInit() {
    this.dialogRef.updateSize('25%', '30%');
    this.dialogService.fetchCategories().subscribe((data) => {
      console.log(data)
      this.optionsList = data;
    });
  }


  sendTransaction() {
    const requestBody = {
      expenseName: this.expenseName,
      categoryName: this.selectedCategory,
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

  closeDialog() {
    this.dialogRef.close({ success: false });
  }
}
