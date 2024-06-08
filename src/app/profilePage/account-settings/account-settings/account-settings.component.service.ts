import {Observable, throwError} from "rxjs";
import {MainPageData} from "../../dashboard/main-page-data.interface";
import {catchError} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class AccountSettingsComponentService {
  constructor(private http: HttpClient) {
  }

  getUserName(): Observable<string> {
    return this.fetchMainData().pipe(
        catchError(error => {
          console.error('Error loading username:', error);
          // You can throw an error or return a default value here
          return throwError('Error loading username');
        })
    );
  }

  private fetchMainData() {
    return this.http.get('/api/v1/profile/get-username',{ responseType: 'text' })

  }


  sendUpdateSettingsRequest(updateFieldName: string, fieldValue: string|null) {

  }
}

