import { HttpClient } from '@angular/common/http';
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

@Injectable({providedIn: 'root'})
export class LoginService{
  constructor(private http: HttpClient,private router: Router) {}

  loginUser(username: string, password: string) {
    console.log("try to login")
    const requestBody = {
      "username": username,
      "password": password
    };
    console.log(requestBody)
    this.authenticateRequest(requestBody).subscribe(
      (response) => {
        console.log('Successfully logged in:', response)
        this.navigateToProfile()
      },
      (error) => {
          if (error.status === 401) {
          console.log('Invalid credentials', error)
          this.credentialsErrorMsg()
        }
        else {
          console.log('Unknown error', error)
          this.unknownErrorMsg()
        }
      }
    );
  }
  authenticateRequest(requestBody: any)
  {
    return this.http.post('/api/v1/login', requestBody)
  }
  navigateToProfile()
  {
    this.router.navigate(['/profile']);
  }

  credentialsErrorMsg()
  {
    // TODO error messagebox
  }

  unknownErrorMsg()
  {
    // TODO error messagebox
  }


}
