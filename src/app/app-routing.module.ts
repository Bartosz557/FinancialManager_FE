import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePageComponent } from './profilePage/profilePage.component';
import { MainPageComponent } from "./mainPage/mainPage.component";
import {AppComponent} from "./app.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {DashboardComponent} from "./profilePage/dashboard/dashboard.component";
import {ProfileConfigurationComponent} from "./profilePage/profile-configuration/profile-configuration.component";
import {AdminDashboardComponent} from "./admin/admin-dashboard/admin-dashboard.component";
import {AuthGuard} from "./auth/auth.guard";
import {AdminAuthGuard} from "./auth/admin.auth.guard";
import {WalletHistoryComponent} from "./profilePage/wallet-history/wallet-history.component";
import {UpcomingPaymentsComponent} from "./profilePage/dashboard/upcoming-payments/upcoming-payments.component";
import {AccountSettingsComponent} from "./profilePage/account-settings/account-settings/account-settings.component";

const routes: Routes = [
  { path: '', component: MainPageComponent},
  { path: 'profile', component: ProfilePageComponent, canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'configure',
        component: ProfileConfigurationComponent
      },
      {
        path: 'wallet-history',
        component: WalletHistoryComponent
      },
      {
        path: 'upcoming-payments',
        component: UpcomingPaymentsComponent
      },
      {
        path: 'account-settings',
        component: AccountSettingsComponent
      }
    ]},
  { path: 'appComponent', component: AppComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'cockpit/admin-dashboard', component: AdminDashboardComponent, canActivate: [AdminAuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
