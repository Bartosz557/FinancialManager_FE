import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePageComponent } from './profilePage/profilePage.component';
import {AppComponent} from "./app.component";

const routes: Routes = [
  { path: 'profile', component: ProfilePageComponent },
  { path: 'appComponent', component: AppComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
