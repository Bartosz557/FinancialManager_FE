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
import {ProgressSpinnerConfigurableExampleComponent} from './profilePage/dashboard/progress-spinner-configurable-example/progress-spinner-configurable-example.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {ProgressService} from "./profilePage/dashboard/progress-spinner-configurable-example/progress-service";
import {ConfigurationStepsComponent} from './profilePage/profile-configuration/angular-materials/configuration-steps/configuration-steps.component';
import {MatStepperModule} from '@angular/material/stepper';
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {StaticSpinnerBackgroundComponent} from "./profilePage/dashboard/progress-spinner-configurable-example/static-spinner-background.component";


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
    StaticSpinnerBackgroundComponent,
    ProgressSpinnerConfigurableExampleComponent,
    MatProgressSpinnerModule,
    ConfigurationStepsComponent,
    MatStepperModule,
    CommonModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  providers: [ {provide: MainPageService, useClass: MainPageService },
               {provide: LoginService, useClass: LoginService },
               {provide: ProfileConfigurationService, useClass: ProfileConfigurationService },
               {provide: RegisterService, useClass: RegisterService },
               {provide: AdminDashboardService, useClass: AdminDashboardService },
               {provide: ProgressService, useClass: ProgressService },
               {provide: ProfilePageService, useClass: ProfilePageService }],
  bootstrap: [AppComponent],
})
export class AppModule { }
