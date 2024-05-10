import {Observable, throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Transaction} from "./history-interface";
import {catchError} from "rxjs/operators";
@Injectable({providedIn: 'root'})
export class WalletHistoryService{

    constructor(private http: HttpClient) {
    }
    getTransHistoryData(): Observable<Transaction[]> {
        return this.fetchTransHistoryData().pipe(
            catchError(error => {
                console.error('Error while fetching user transaction history data:', error);
                // You can throw an error or return a default value here
                return throwError('Error while fetching user transaction history data');
            })
        );
    }

    private fetchTransHistoryData() {
       return this.http.get<Transaction[]>('/api/v1/wallet-history/transaction/get-data')
    }
}
