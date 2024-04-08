import { HttpClient } from '@angular/common/http';
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

@Injectable({providedIn: 'root'})
export class ProfileConfigurationService{

  constructor(private http: HttpClient, private router: Router,){}


  sendConfiguration(requestBody: any){
    this.sendPost(requestBody).subscribe(
      (response) => {
        if(response) {
          console.log("Configuration has been completed")
          this.router.navigate(['/profile/dashboard']);
        }else{
          console.log("Something went wrong")
        }
      },
      (error) => {
        console.log('Unknown error', error)
        //this.unknownErrorMsg()
      }
    );
  }

  sendPost(requestBody: any){
    return this.http.post('/api/v1/profile/set-configuration', requestBody)
  }
}
