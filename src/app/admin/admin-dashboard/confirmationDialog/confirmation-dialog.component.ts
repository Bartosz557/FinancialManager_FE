import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {EditDialogService} from "../editDialog/edit-dialog.service";
import {ConfirmationDialogService} from "./confirmation-dialog.service";


@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private confirmationDialogService: ConfirmationDialogService) { }

  deleteUser() {
    this.confirmationDialogService.deleteUserByID(this.data)
  }
}
