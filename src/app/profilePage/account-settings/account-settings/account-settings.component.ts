import {Component, OnInit} from '@angular/core';
import {Observable, throwError} from "rxjs";
import {MainPageData} from "../../dashboard/main-page-data.interface";
import {catchError} from "rxjs/operators";
import {AccountSettingsComponentService} from "./account-settings.component.service";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit{
  errorPassMessage: any;
  confirmErrorMessage: any;
  username: any;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(5)]);
  confirmPass = new FormControl('', [Validators.required, Validators.minLength(5)]);
  constructor(private settingsService: AccountSettingsComponentService) {}
  ngOnInit(): void {
    this.settingsService.getUserName().subscribe(
      (response: string) => {
        this.username = response;
      });
  }
  updateSettings(updateFieldName: string){
    this.settingsService.sendUpdateSettingsRequest(updateFieldName, this.getFieldValue())
  }
  updatePassword(){
    if(this.password && this.confirmPass && !this.checkPasswords())
      this.settingsService.sendUpdateSettingsRequest('newPassword', this.password.value)
  }
  checkPasswords() {
    if( this.confirmPass.hasError('duplicate')||this.password.hasError('duplicate')){
      this.confirmErrorMessage = 'Passwords must be the same';
      this.errorPassMessage = 'Passwords must be the same';
      return false;
    }
    return true;
  }
  updatePasswordErrorMessage() {
    if (this.password.hasError('required')) {
      this.errorPassMessage = 'You must enter a value';
    } else if (this.password.hasError('minlength')) {
      this.errorPassMessage = 'Password must be at least 5 character long';
    } else {
      this.errorPassMessage = '';
    }
  }
  getFieldValue(){
    return 'sadasda'
  }
}
