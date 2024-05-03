import { Component } from '@angular/core';
import {MatStepperModule} from "@angular/material/stepper";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {NgForOf} from "@angular/common";
import {ProfileConfigurationService} from "../../profile-configuration.service";

@Component({
  selector: 'app-configuration-steps',
  templateUrl: './configuration-steps.component.html',
  styleUrls: ['./configuration-steps.component.css'],
  standalone: true,
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    NgForOf,
  ],
})
export class ConfigurationStepsComponent {
  firstFormGroup = this._formBuilder.group({
    settlementDate: ['', Validators.required],
    monthlyIncome: ['', Validators.required],
    monthlyLimit: ['', Validators.required],
    accountBalance: ['', Validators.required]
  });
  secondFormGroup = this._formBuilder.group({
    groceries: ['0', Validators.required],
    diningOut: ['0', Validators.required],
    transport: ['0', Validators.required],
    entertainment: ['0', Validators.required],
    clothes: ['0', Validators.required],
    traveling: ['0', Validators.required],
    hobby: ['0', Validators.required],
    miscellaneous: ['0', Validators.required]
  });
  thirdFormGroup = this._formBuilder.group({
    name: [''],
    date: [''],
    amount: ['', Validators.min(0)]
  });

  isOptional = false;
  expenses: ExpenseItem[] = [];

  constructor(private _formBuilder: FormBuilder, private profileConfigurationService: ProfileConfigurationService) {
  }

  addExpense() {
    if (this.thirdFormGroup.value.name === "" ||
        this.thirdFormGroup.value.date === "" ||
        this.thirdFormGroup.value.amount === "") {
      // TODO: MESSAGE BOX = NEED FILL ALL FIELDS TO ADD EXPENSE
      return;
    }
    this.expenses.push(<ExpenseItem>this.thirdFormGroup.value);

    // Clear form controls after adding expense
    this.thirdFormGroup.reset();
    console.log(this.expenses[0])
  }

  sendConfiguration() {
    const firstFormValues = this.firstFormGroup.value;
    const secondFormValues = this.secondFormGroup.value;
    let repeatingExepnse;
    if (this.expenses.length > 0)
      repeatingExepnse = true
    else
      repeatingExepnse = false
    const requestBody = {
      "mainConfig": {
        "settlementDate": firstFormValues.settlementDate,
        "monthlyIncome": firstFormValues.monthlyIncome,
        "monthlyLimit": firstFormValues.monthlyLimit,
        "accountBalance": firstFormValues.accountBalance
      },
      "subCategories": {
        "groceries": secondFormValues.groceries,
        "diningOut": secondFormValues.diningOut,
        "transport": secondFormValues.transport,
        "entertainment": secondFormValues.entertainment,
        "clothes": secondFormValues.clothes,
        "traveling": secondFormValues.traveling,
        "hobby": secondFormValues.hobby,
        "miscellaneous": secondFormValues.miscellaneous
      },
      "repeatingExpenses": {
        "repeatingExpense": repeatingExepnse,
        "expenses": this.expenses
      }
    }
    console.log(JSON.stringify(requestBody, null, 2)); // 2 is the number of spaces for indentation
    this.profileConfigurationService.sendConfiguration(requestBody)
  }
}
interface ExpenseItem {
  name: string|null|undefined;
  date: string|null|undefined;
  amount: string|null|undefined;
}