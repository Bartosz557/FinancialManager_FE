import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
@Injectable({providedIn: 'root'})
export class ProfilePageService{

    constructor(private http: HttpClient){}
  logoutRequest()
  {
    return  this.http.get<boolean>('/api/v1/logout')
  }
}

