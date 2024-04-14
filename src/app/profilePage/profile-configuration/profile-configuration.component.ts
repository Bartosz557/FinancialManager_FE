import { Component } from '@angular/core';
import {ProfileConfigurationService} from "./profile-configuration.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile-configuration',
  templateUrl: './profile-configuration.component.html',
  styleUrls: ['./profile-configuration.component.css']
})
export class ProfileConfigurationComponent {
  constructor(private profileConfigurationService: ProfileConfigurationService,private router: Router) {}

  step: number = 1;

  settlementDate: string = '';
  monthlyIncome: number = 0;
  monthlyLimit: number = 0;
  accountBalance: number = 0;

  groceries: number = 0;
  diningOut: number = 0;
  transport: number = 0;
  entertainment: number = 0;
  clothes: number = 0;
  traveling: number = 0;
  hobby: number = 0;
  miscellaneous: number = 0;

  expenses: { name: string, date: string, amount: number }[] = [];
  newExpense: { name: string, date: string, amount: number } = { name: '', date: '', amount: 0 };

  nextStep() {
    if (this.step < 7) {
      this.step++;
    }
  }

  byTwo() {
    if (this.step < 6) {
      this.step+=2;
    }
  }

  // TODO EDIT THE METHOD, SO APP REMEMBERS WHETHER IT HAS TO GO TO FORM OR QUESTION (STEPS 3,4 AND 5,6)
  prevStep() {
    if (this.step > 1) {
      if(this.step == 5 || this.step == 7)
        this.step--;
      this.step--;
    }
  }
  checkVisibility()
  {
    const welcomeText = document.getElementById('welcome-div')
    if(this.step !== 1 && welcomeText != null){
      welcomeText.style.display = 'none';
    }else if(welcomeText !== null && welcomeText.style.display == 'none')
      welcomeText.style.display = 'inline';
    switch (this.step) {
      case 1:
        this.checkButton(false,false)
        break;
      case 2:
        this.checkButton(false,true)
        break;
      case 4:
      case 6:
        this.checkButton(true,true)
        break;
      case 3:
      case 5:
      case 7:
        this.checkButton(true,false)
        break;
    }
  }
  xdd()
  {}

  checkButton(first: any, second: any) {
    let visibility = first;
    let button = document.getElementById('prev-button');
    for (let i = 0; i < 2; i++) {
      if (button != null) {
        if (visibility) {
          button.style.visibility = 'visible';
          button.style.pointerEvents = 'auto';
        } else {
          button.style.visibility = 'hidden';
          button.style.pointerEvents = 'none';
        }
      }
      button = document.getElementById('next-button');
      visibility = second;
    }
  }

  addExpense() {
    if (this.newExpense.name.trim() === '' || isNaN(this.newExpense.amount) || this.newExpense.amount < 0) {
      alert('Please enter valid expense details.');
      return;
    }
    this.expenses.push({ name: this.newExpense.name, date: this.newExpense.date, amount: this.newExpense.amount });
    this.newExpense = { name: '', date: '', amount: 0 };
  }

  confirmConfiguration(event: Event) {
    event.preventDefault();
    const requestBody = {
      "mainConfig": {
        "settlementDate": this.settlementDate,
        "monthlyIncome": this.monthlyIncome,
        "monthlyLimit": this.monthlyLimit,
        "accountBalance": this.accountBalance
      },
      "subCategories": {
        "expenseCategories": true,
        "groceries": this.groceries,
        "diningOut": this.diningOut,
        "transport": this.transport,
        "entertainment": this.entertainment,
        "clothes": this.clothes,
        "traveling": this.traveling,
        "hobby": this.hobby,
        "miscellaneous": this.miscellaneous
      },
      "repeatingExpenses": {
        "repeatingExpense": true,
        "expenses": this.expenses
      }
    }
    this.profileConfigurationService.sendConfiguration(requestBody);

  }

}
