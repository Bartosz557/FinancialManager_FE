import { Component } from '@angular/core';
import {MatStepperModule} from "@angular/material/stepper";
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {NgForOf, NgIf} from "@angular/common";
import {ProfileConfigurationService} from "../profile-configuration.service";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatListModule} from "@angular/material/list";


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
    MatOptionModule,
    MatSelectModule,
    NgIf,
    MatListModule,

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
    groceries: ['0'],
    diningOut: ['0'],
    transport: ['0'],
    entertainment: ['0'],
    clothes: ['0'],
    traveling: ['0'],
    hobby: ['0'],
    miscellaneous: ['0']
  });
  thirdFormGroup = this._formBuilder.group({
    name: [''],
    date: [''],
    amount: ['', Validators.min(0)],
    reminderType: [''],
    category: ['recurringExpense']
  });

  isOptional = false;
  expenses: ExpenseItem[] = [];
  optionsList = [
    { value: "do_not_remind", displayText: "No reminder" },
    { value: "one_reminder", displayText: "Remind the same day" },
    { value: "two_reminders", displayText: "Remind the same day & day before" },
    { value: "three_reminders", displayText: "Remind the same day & day and week before" }

  ];
  selectedReminder: any;
  selectFormControl = new FormControl('', Validators.required);
    fundsLeft: any = 1450;

  constructor(private _formBuilder: FormBuilder, private profileConfigurationService: ProfileConfigurationService) {
  }

  addExpense() {
    this.thirdFormGroup.value.reminderType=this.selectedReminder.value;
    console.log(this.thirdFormGroup.value.reminderType)
    if (this.thirdFormGroup.value.name === "" ||
        this.thirdFormGroup.value.date === "" ||
        this.thirdFormGroup.value.amount === ""||
        this.thirdFormGroup.value.reminderType === "") {
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

  onInputFocus(input: string, newDefaultValue: string) {
    switch (input) {
      case 'groceries':
        // @ts-ignore
        if(this.secondFormGroup.get('groceries').value==='' || this.secondFormGroup.get('groceries').value==='0' )
          this.secondFormGroup.patchValue({ groceries: newDefaultValue });
        break;
      case 'diningOut':
        // @ts-ignore
        if(this.secondFormGroup.get('diningOut').value==='' || this.secondFormGroup.get('diningOut').value==='0' )
          this.secondFormGroup.patchValue({ diningOut: newDefaultValue });
        break;
      case 'transport':
        // @ts-ignore
        if(this.secondFormGroup.get('transport').value==='' || this.secondFormGroup.get('transport').value==='0' )
          this.secondFormGroup.patchValue({ transport: newDefaultValue });
        break;
      case 'entertainment':
        // @ts-ignore
        if(this.secondFormGroup.get('entertainment').value==='' || this.secondFormGroup.get('entertainment').value==='0' )
          this.secondFormGroup.patchValue({ entertainment: newDefaultValue });
        break;
      case 'clothes':
        // @ts-ignore
        if(this.secondFormGroup.get('clothes').value==='' || this.secondFormGroup.get('clothes').value==='0' )
          this.secondFormGroup.patchValue({ clothes: newDefaultValue });
        break;
      case 'traveling':
        // @ts-ignore
        if(this.secondFormGroup.get('traveling').value==='' || this.secondFormGroup.get('traveling').value==='0' )
          this.secondFormGroup.patchValue({ traveling: newDefaultValue });
        break;
      case 'hobby':
        // @ts-ignore
        if(this.secondFormGroup.get('hobby').value==='' || this.secondFormGroup.get('hobby').value==='0' )
          this.secondFormGroup.patchValue({ hobby: newDefaultValue });
        break;
      case 'miscellaneous':
        // @ts-ignore
        if(this.secondFormGroup.get('miscellaneous').value==='' || this.secondFormGroup.get('miscellaneous').value==='0' )
          this.secondFormGroup.patchValue({ miscellaneous: newDefaultValue });
        break;
      default:
        console.error(`Control "${input}" does not exist in the form.`);
        break;
    }
  }

  onInputBlur(input: string) {

  }
}
interface ExpenseItem {
  name: string|null|undefined;
  date: string|null|undefined;
  amount: string|null|undefined;
  reminderType: string|null|undefined;
  category: string|null|undefined;
}
