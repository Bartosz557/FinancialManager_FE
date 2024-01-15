import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class AdminDashboardService {

  constructor(private http: HttpClient) {}

  getUsers(){
    let users: any = [];
    this.fetchUsersData().subscribe(
      (respone) => {
          users = respone;
      }
    )
    return users;
  }

  fetchUsersData(){
    return this.http.get('/api/v1/profile/get-user-role')
  }

  isAdmin(){
    return this.http.get('/admin/get-status');
  }
}
