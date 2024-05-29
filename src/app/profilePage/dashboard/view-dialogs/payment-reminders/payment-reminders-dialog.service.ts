import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class PaymentRemindersDialogService {
    constructor(private http: HttpClient, private router: Router) {
    }

    updateWallet(settlementDate: any,url:any) {
        return new Observable<boolean>((observer) => {
            this.setNewWalletValue(settlementDate,url).subscribe(
                (response) => {
                    if(response) {
                        observer.next(true);
                        observer.complete();
                    }else{
                        observer.error("Something went wrong");
                        observer.complete();
                    }
                },
                (error) => {
                    // this.unknownErrorMsg()
                    observer.error(error);
                    observer.complete();
                }
            );
        });
    }

    setNewWalletValue(settlementDate: any, url: any) {
        return this.http.put(settlementDate,'/api/v1/profile/wallet/'+url)
    }



}
