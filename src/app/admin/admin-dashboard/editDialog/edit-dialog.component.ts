import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {EditDialogService} from "./edit-dialog.service";

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent {
  newValue: any;
  changeSetting: any;
  constructor(@Inject(MAT_DIALOG_DATA) private data: any, private editDialogService: EditDialogService) { }

  changePassword() {
    this.changeSetting = "changePassword"
  }

  changeUsername() {
    console.log(this.data)
    this.changeSetting = "changeUsername"
  }

  changeEmail() {
    this.changeSetting = "changeEmail"
  }

  applyChanges() {
    this.editDialogService.editUser(this.changeSetting, this.newValue, this.data)
    window.location.reload();
  }
}
