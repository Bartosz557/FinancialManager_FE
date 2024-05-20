import {Component, inject} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatSnackBar, MatSnackBarRef} from "@angular/material/snack-bar";


@Component({
  selector: 'app-snack-bar-example',
  templateUrl: './snack-bar-example.html',
  styleUrls: ['./snack-bar-example.css'],
  standalone: true,
  imports: [
    MatButtonModule
  ]
})
export class SnackBarExample {
  constructor(public snackBar: MatSnackBar) {
  }
}
