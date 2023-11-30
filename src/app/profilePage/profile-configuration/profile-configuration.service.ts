import { HttpClient } from '@angular/common/http';
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

@Injectable({providedIn: 'root'})
export class ProfileConfigurationService{

  constructor(private http: HttpClient, private router: Router,){}

  lCategories: any;
  rExpenses: any;
  settlementDate: any;
  monthlyIncome: any;
  monthlyLimit: any;
  accountBalance: any;
  groceries: any;
  diningOut: any;
  transport: any;
  entertainment: any;
  clothes: any;
  traveling: any;
  hobby: any;
  miscellaneous: any;
  expenses: { name: string, amount: number }[] = [];

  initializeConfiguration(
    lCategories: boolean,
    rExpenses: boolean,
    settlementDate: string,
    monthlyIncome: number,
    monthlyLimit: number,
    accountBalance: number,
    groceries: number,
    diningOut: number,
    transport: number,
    entertainment: number,
    clothes: number,
    traveling: number,
    hobby: number,
    miscellaneous: number,
    expenses: { name: string; amount: number }[]
  ) {
    this.lCategories = lCategories;
    this.rExpenses = rExpenses;
    this.settlementDate = settlementDate;
    this.monthlyIncome = monthlyIncome;
    this.monthlyLimit = monthlyLimit;
    this.accountBalance = accountBalance;
    this.groceries = groceries;
    this.diningOut = diningOut;
    this.transport = transport;
    this.entertainment = entertainment;
    this.clothes = clothes;
    this.traveling = traveling;
    this.hobby = hobby;
    this.miscellaneous = miscellaneous;
    this.expenses = expenses;
  }
  setConfiguration(){
    const requestBodyString = {
      "lCategories": this.lCategories,
      "rExpenses": this.rExpenses,
      "settlementDate": this.settlementDate,
      "monthlyIncome": this.monthlyIncome,
      "monthlyLimit": this.monthlyLimit,
      "accountBalance": this.accountBalance,
    };
    this.sendConfiguration(requestBodyString).subscribe(
      (response) => {
      });

    if(this.lCategories)
      this.setLimitCategories()
    if(this.rExpenses)
      this.setExpenses()
  }

  setLimitCategories() {
    const requestBodyString = {
      "groceries": this.groceries,
      "diningOut": this.diningOut,
      "transport": this.transport,
      "entertainment": this.entertainment,
      "clothes": this.clothes,
      "traveling": this.traveling,
      "hobby": this.hobby,
      "miscellaneous": this.miscellaneous,
    };
    this.sendLimitCategories(requestBodyString).subscribe(
      (response) => {
      });
  }

  setExpenses(){
    const requestBodyString = {
      "expenses": this.expenses}
    console.log(requestBodyString)
    this.sendExpenses(requestBodyString).subscribe(
      (response) => {
      });
  }

  sendConfiguration(requestBody: any){
    return this.http.post('/api/v1/login', requestBody)
  }

  sendLimitCategories(requestBody: any){
    return this.http.post('/api/v1/login', requestBody)
  }

  sendExpenses(requestBody: any){
    return this.http.post('/api/v1/login', requestBody)
  }
}
