import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Component({
  selector: 'app-profile',
  templateUrl: './profilePage.component.html',
  styleUrls: ['./profilePage.component.css']
})

export class ProfilePageComponent {

  data: string = '';
  constructor(private http: HttpClient) {}

  fetchData()
  {
    return this.http.get<string>('api/v1/fetchdata',  { responseType: 'text' as 'json'}).subscribe(
    (response) => {
      this.data = response;
  })
  }
}
