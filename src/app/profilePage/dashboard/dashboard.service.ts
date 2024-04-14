import { HttpClient } from '@angular/common/http';
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

@Injectable({providedIn: 'root'})
export class DashboardService {

  constructor(private http: HttpClient, private router: Router,){}

   fetchUsername() {
    return this.http.get('/api/v1/profile/get-username')
  }
}
