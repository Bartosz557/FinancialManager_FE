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
          console.log(users)
      }
    )
    return users;
  }

  fetchUsersData(){
    return this.http.get('/admin/get-all-users')
  }

  isAdmin(){
    return this.http.get('/admin/get-status');
  }
}
