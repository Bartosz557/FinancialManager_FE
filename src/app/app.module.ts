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
import { DashboardComponent } from './profilePage/dashboard/dashboard.component';
import {ProfileConfigurationComponent} from "./profilePage/profile-configuration/profile-configuration.component";
import {ProfileConfigurationService} from "./profilePage/profile-configuration/profile-configuration.service";
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import {AdminDashboardService} from "./admin/admin-dashboard/admin-dashboard.service";

@NgModule({
  declarations: [
    ProfilePageComponent,
    MainPageComponent,
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ProfileConfigurationComponent,
    AdminDashboardComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ {provide: MainPageService, useClass: MainPageService },
               {provide: LoginService, useClass: LoginService },
               {provide: ProfileConfigurationService, useClass: ProfileConfigurationService },
               {provide: RegisterService, useClass: RegisterService },
               {provide: AdminDashboardService, useClass: AdminDashboardService },
               {provide: ProfilePageService, useClass: ProfilePageService }],


  bootstrap: [AppComponent]
})
export class AppModule { }
