import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {logMessages} from "@angular-devkit/build-angular/src/tools/esbuild/utils";

@Injectable({providedIn: 'root'})
export class RegisterService{
  constructor(private http: HttpClient,private router: Router) {}

  registerUser(username: string, email: string, password: string)
  {
    const requestBody = {
      "firstName": username,
      "email": email,
      "password": password
    }
    this.registerRequest(requestBody)
  }

  registerRequest(requestBody: any)
  {
    console.log("try to register")
    console.log(requestBody)
    this.http.post('/api/v1/registration', requestBody).subscribe(
      (response) => {
        console.log('Successfully logged in')
        this.successRegistration()
      },
      (error) => {
        if (error.status === 500) {
          console.log('email already taken', error)
          this.error500Msg()
        }
        else {
          console.log('Unknown error', error)
          this.unknownErrorMsg()
        }
      }
    );
  }

  successRegistration(){
    this.router.navigate(['/login']);
    //TODO SUCCESS REGISTRATION MESSAGEBOX
  }
  error500Msg() {
    //TODO 500 ERROR MESSAGEBOX
  }
  unknownErrorMsg(){
    //TODO UNKNOWN ERROR MESSAGEBOX
  }
}
