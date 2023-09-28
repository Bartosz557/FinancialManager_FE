import { Component } from '@angular/core';
import {Router} from "@angular/router";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {}
  navigateToProfile() {
    console.log("navigating")
    this.router.navigate(['/profile']);
  }

}

