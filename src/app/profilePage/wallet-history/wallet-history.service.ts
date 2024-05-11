import {Observable, throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Transaction} from "./history-interface";
import {catchError} from "rxjs/operators";
import {Monthly} from "./monthly.interface";
@Injectable({providedIn: 'root'})
export class WalletHistoryService{

    constructor(private http: HttpClient) {
    }
    getTransHistoryData(): Observable<Transaction[]> {
        return this.fetchTransHistoryData().pipe(
            catchError(error => {
                console.error('Error while fetching user transaction history data:', error);
                return throwError('Error while fetching user transaction history data');
            })
        );
    }

    private fetchTransHistoryData() {
       return this.http.get<Transaction[]>('/api/v1/wallet-history/transaction/get-data')
    }

  getMonthHistoryData() {
      return this.fetchMonthHistoryData().pipe(
          catchError(error => {
              console.error('Error while fetching user transaction history data:', error);
              return throwError('Error while fetching user transaction history data');
          })
      );
  }

    private fetchMonthHistoryData() {
        return this.http.get<Monthly[]>('/api/v1/wallet-history/monthly/get-data')
    }
}
