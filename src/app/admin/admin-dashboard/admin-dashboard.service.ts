import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable, of, tap} from "rxjs";

@Injectable({providedIn: 'root'})
export class AdminDashboardService {
  constructor(private http: HttpClient) {}

  fetchUsersData(){
    return this.http.get<Root[]>('/admin/get-all-users')
  }

  isAdmin(){
    return this.http.get('/admin/get-status');
  }
}

export interface Root {
  username: string;
  email: string;
  configured: boolean;
  enabled: boolean;
}

