import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePageComponent } from './profilePage/profilePage.component';
import { MainPageComponent } from "./mainPage/mainPage.component";
import {AppComponent} from "./app.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {DashboardComponent} from "./profilePage/dashboard/dashboard.component";
import {ProfileConfigurationComponent} from "./profilePage/profile-configuration/profile-configuration.component";

const routes: Routes = [
  { path: '', component: MainPageComponent},
  { path: 'profile', component: ProfilePageComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'configure',
        component: ProfileConfigurationComponent
      }
    ]},
  { path: 'appComponent', component: AppComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
