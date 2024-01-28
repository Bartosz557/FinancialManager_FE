import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class ConfirmationDialogService {

  constructor(private http: HttpClient) {}


  deleteUserByID(id : any){
    this.sendDeleteResuest(id).subscribe(
      (response) => {
        console.log(response)
      },
      (error) => {
        console.error(error);
      }
    );
  }

  sendDeleteResuest(id:string){
    const url = '/admin/delete-user/'+id
    console.log(url)
    return this.http.delete(url,{ responseType: 'text' });
  }
}
