import { Component } from '@angular/core';
import {MainPageService} from "./mainPage.service";


@Component({
  selector: 'app-root',
  templateUrl: './mainPage.component.html',
  styleUrls: ['./mainPage.component.css']
})
export class MainPageComponent {
  constructor(private mainPageService: MainPageService) {}

  navigateToProfile() {
    this.mainPageService.checkAuthentication();
  }

}

