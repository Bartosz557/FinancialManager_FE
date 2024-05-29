import {Observable, throwError} from "rxjs";
import {Transaction} from "../../wallet-history/history-interface";
import {catchError} from "rxjs/operators";
import {UpcomingPaymentsInterface} from "./upcoming-payments.interface";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class UpcomingPaymentsService{
  constructor(private http: HttpClient) {}
  getPaymentsData(): Observable<UpcomingPaymentsInterface[]> {
    return this.fetchTransHistoryData().pipe(
      catchError(error => {
        console.error('Error while fetching upcoming payments:', error);
        return throwError('Error while fetching upcoming payments');
      })
    );
  }

  private fetchTransHistoryData() {
    return this.http.get<UpcomingPaymentsInterface[]>('/api/v1/upcoming-payments/get-data')
  }
}
