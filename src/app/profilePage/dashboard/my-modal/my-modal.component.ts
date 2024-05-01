import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.component.html',
  styleUrls: ['./my-modal.component.css']
})
export class MyModalComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<MyModalComponent>) { }
  ngOnInit(): void {
  }

  closeModal() {
    this.dialogRef.close();
  }
}
