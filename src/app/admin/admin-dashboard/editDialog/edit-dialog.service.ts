import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class EditDialogService {

  constructor(private http: HttpClient) {}

  editUser(changeSetting: any, newValue:any, username:any){
    switch (changeSetting) {
      case 'changePassword':
        this.applyChangesOnServer("/admin/change-user-settings/change-password", newValue,username).subscribe(
          (response) => {
            console.log('Password has been successfully changed', response);
          },
          (error) => {
            console.error('Error:', error);
          }
        );
        break;
      case 'changeUsername':
        this.applyChangesOnServer("/admin/change-user-settings/change-username", newValue,username).subscribe(
          (response) => {
            console.log(response)
          },
          (error) => {
            console.error(error);
          }
        );
        break;
      case 'changeEmail':
        this.applyChangesOnServer("/admin/change-user-settings/change-email", newValue,username).subscribe(
          (response) => {
            if (response) {
              console.log('Email has been successfully changed');
            } else {
              console.error('Unexpected response:', response);
            }
          },
          (error) => {
            console.error('Error:', error);
          }
        );
        break;
      default:
        break;
    }
  }

  applyChangesOnServer(url:any,value:string,username:string) {
    const requestBody = {
      "username": username,
      "newValue": value
    };
    console.log(requestBody)
    return this.http.put(url,requestBody,{ responseType: 'text' })
  }

}
