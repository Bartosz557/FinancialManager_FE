import {Component, OnInit} from '@angular/core';
import {MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {PiggyBankDialogService} from "./piggy-bank-dialog.service";
import {NgForOf, NgIf} from "@angular/common";
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";

@Component({
  selector: 'piggy-bank-dialog',
  templateUrl: './piggy-bank-dialog.html',
  styleUrls: ['./piggy-bank-dialog.css'],
  standalone: true,
  imports: [
    MatDialogModule,
    NgForOf,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    NgIf,
    ReactiveFormsModule
  ]
})
export class PiggyBankDialog implements OnInit{

  optionsList: any;
  expenseValue: any;
  expenseName: any;
  selectedCategory: any;

  constructor(public dialogRef: MatDialogRef<PiggyBankDialog>, private dialogService: PiggyBankDialogService) {}
  selectFormControl = new FormControl('', Validators.required);

  ngOnInit() {
    this.dialogRef.updateSize('25%', '27%');
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
    console.log(this.selectedCategory.value)
    const requestBody = {
      expenseName: this.expenseName,
      categoryName: this.selectedCategory.value,
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
