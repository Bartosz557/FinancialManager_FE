import {Component, OnInit} from '@angular/core';
import {Observable, throwError} from "rxjs";
import {MainPageData} from "../../dashboard/main-page-data.interface";
import {catchError} from "rxjs/operators";
import {AccountSettingsComponentService} from "./account-settings.component.service";

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit{

    constructor(private settingsService: AccountSettingsComponentService) {
    }
    ngOnInit(): void {
        this.settingsService.getUserName().subscribe(
            (response: string) => {
                this.username=response;
        }  );
    }
    username: any  = '';


}
