import { HttpClient } from '@angular/common/http';
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {MainPageData} from "./main-page-data.interface";
import {catchError} from "rxjs/operators";
import {Observable, throwError} from "rxjs";

@Injectable({providedIn: 'root'})
export class DashboardService {

  constructor(private http: HttpClient, private router: Router){}

  getMainPageData(): Observable<MainPageData>{
    return this.fetchMainData().pipe(
      catchError(error => {
        console.error('Error loading main page data:', error);
        // You can throw an error or return a default value here
        return throwError('Error loading main page data');
      })
    );
  }
   fetchMainData() {
    return this.http.get<MainPageData>('/api/v1/profile/dashboard/get-data/main-page')
  }

  private errorMsg() {

  }

  setDaysLeft(dayOfMonth : number) {
    const today = new Date();
    const targetDate = new Date();
    targetDate.setDate(dayOfMonth)
    targetDate.setMonth(this.getNextMonth(targetDate))
    return this.getDaysDifference(today, targetDate);
  }
  private getDaysDifference(today : Date, targetDate : Date){
    let timeDifference =
      targetDate.getTime() - today.getTime();
    let daysDifference = Math.round(timeDifference / (1000 * 3600 * 24));
    return daysDifference
  }

  getSettlementDate(settlementDate: number) {
    const today = new Date();
    today.setDate(settlementDate)
    today.setMonth(this.getNextMonth(today))
    let month : string
    if(today.getMonth()<9){ // Than 9, because months starts from 0
      month = "0"+(today.getMonth()+1);
    }else {
      month = (today.getMonth()+1).toString()
    }

    return today.getDate()+'.'+month+'.'+today.getFullYear()
  }

  private getNextMonth(targetDate: Date){
    const today = new Date();
    if(today.getDate()<targetDate.getDate())
      return targetDate.getMonth()
    let nextMonth = targetDate.getMonth() + 1
    if(nextMonth>11)
      nextMonth-=12
    return nextMonth
  }
}
