import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProfilePageComponent} from "./profilePage/profilePage.component";
import {MainPageComponent} from "./mainPage/mainPage.component";
import {MainPageService} from "./mainPage/mainPage.service";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {FormsModule} from "@angular/forms";
import {LoginService} from "./login/login.service";
import {RegisterService} from "./register/register.service";
import {ProfilePageService} from "./profilePage/profilePage.service";


@NgModule({
  declarations: [
    ProfilePageComponent,
    MainPageComponent,
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ {provide: MainPageService, useClass: MainPageService },
               {provide: LoginService, useClass: LoginService },
               {provide: RegisterService, useClass: RegisterService },
               {provide: ProfilePageService, useClass: ProfilePageService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
