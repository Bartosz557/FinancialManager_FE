// admin-auth.guard.ts

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import {Observable, of} from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.authService.isAdmin().pipe(
      map(isAdmin => {
        if (isAdmin) {
          return true;
        } else {
          this.router.navigate(['/login']); // Redirect to login page if not an admin
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
