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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginService} from "./login/login.service";
import {RegisterService} from "./register/register.service";
import {ProfilePageService} from "./profilePage/profilePage.service";
import { DashboardComponent } from './profilePage/dashboard/dashboard.component';
import {ProfileConfigurationComponent} from "./profilePage/profile-configuration/profile-configuration.component";
import {ProfileConfigurationService} from "./profilePage/profile-configuration/profile-configuration.service";
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import {AdminDashboardService} from "./admin/admin-dashboard/admin-dashboard.service";
import {ConfirmationDialogComponent} from "./admin/admin-dashboard/confirmationDialog/confirmation-dialog.component";
import {MatDialogModule} from "@angular/material/dialog";
import {EditDialogComponent} from "./admin/admin-dashboard/editDialog/edit-dialog.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {ConfigurationStepsComponent} from './profilePage/profile-configuration/configuration-steps/configuration-steps.component';
import {MatStepperModule} from '@angular/material/stepper';
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {
  DialogAnimationsExampleDialogService
} from "./profilePage/dashboard/dialogs/add-expense-dialog/dialog-animations-example-dialog.service";
import {NgCircleProgressModule} from "ng-circle-progress";
import { AddDepositExampleDialog } from './profilePage/dashboard/dialogs/add-deposit-example-dialog/add-deposit-example-dialog';
import {
  AddDepositExampleDialogService
} from "./profilePage/dashboard/dialogs/add-deposit-example-dialog/add-deposit-example-dialog.service";
import {DatepickerOverviewExample} from "./profilePage/dashboard/angular-materials/datepicker-overview-example";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { WalletHistoryComponent } from './profilePage/wallet-history/wallet-history.component';
import {WalletHistoryService} from "./profilePage/wallet-history/wallet-history.service";
import {MatTabsModule} from "@angular/material/tabs";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {CdkListbox} from "@angular/cdk/listbox";
import {MatTooltipModule} from "@angular/material/tooltip";
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
    ConfirmationDialogComponent,
    EditDialogComponent,
    WalletHistoryComponent,
  ],
  imports: [
    MatSlideToggleModule,
    MatDialogModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    ConfigurationStepsComponent,
    MatStepperModule,
    CommonModule,
    MatButtonModule,
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300
    }),
    DatepickerOverviewExample,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    MatTableModule,
    MatIconModule,
    CdkListbox,
    MatTooltipModule
  ],
  providers: [
    {provide: MainPageService, useClass: MainPageService },
    {provide: LoginService, useClass: LoginService },
    {provide: ProfileConfigurationService, useClass: ProfileConfigurationService },
    {provide: RegisterService, useClass: RegisterService },
    {provide: AdminDashboardService, useClass: AdminDashboardService },
    {provide: ProfilePageService, useClass: ProfilePageService },
    {provide: DialogAnimationsExampleDialogService, useClass: DialogAnimationsExampleDialogService},
    {provide: AddDepositExampleDialogService, useClass: AddDepositExampleDialogService},
    {provide: WalletHistoryService, useClass: WalletHistoryService},
    MatDatepickerModule,
    MatNativeDateModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
