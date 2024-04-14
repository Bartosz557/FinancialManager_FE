// auth.guard.ts

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import {catchError, map, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.authService.isAuthenticated().pipe(
      map(authenticated => {
        if (authenticated) {
          return true;
        } else {
          this.router.navigate(['/login']); // Redirect to login page
          return false;
        }
      }),
      catchError(() => {
        this.router.navigate(['/login']); // Redirect to login page on error
        return of(false);
      })
    );
  }
}
