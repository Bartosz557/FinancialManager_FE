import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class RegisterService{
  constructor(private http: HttpClient,private router: Router) {}

  registerUser(username: string, password: string)
  {
    {
      // "firstName": "Bartosz",
      // "email": "fdsfsd.fdfds@gmail.com",
      // "password": "password"
    }
  }
}
