import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class MainPageService {
  constructor(private router: Router,private http: HttpClient) {}

  checkAuthentication() {
    this.getStatus().subscribe((authenticated: boolean) => {
      console.log(`Is authenticated: ${authenticated}`);
      if (authenticated) {
        this.router.navigate(['/profile']);
      } else {
        console.log("User is not authenticated. Proceed to login page.");
        this.router.navigate(['/login']);
      }
    });
  }

  getStatus(): Observable<boolean> {
    return this.http.get<boolean>('/api/v1/check-authentication')
  }
}
