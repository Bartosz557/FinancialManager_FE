import { ComponentFixture, TestBed } from '@angular/core/testing';

import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class EditHistoryTransactionService {

constructor(private http: HttpClient, private router: Router) {
}
  fetchCategories() {
    return this.http.get("/api/v1/profile/dashboard/get-all-categories")
  }
  sendTransactionData(requestBody: any): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      this.sendTransactionRequest(requestBody).subscribe(
        (response) => {
          if(response) {
            observer.next(true);
            observer.complete();
          }else{
            observer.error("Something went wrong");
            observer.complete();
          }
        },
        (error) => {
          // this.unknownErrorMsg()
          observer.error(error);
          observer.complete();
        }
      );
    });
  }

  private sendTransactionRequest(requestBody: any) {
    return this.http.post('/api/v1/profile/dashboard/add-recurring-expense',requestBody)

  }

}
