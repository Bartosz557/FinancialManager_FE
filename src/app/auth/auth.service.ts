// auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  isAuthenticated(): Observable<boolean> {
    return this.http.get<boolean>('/api/v1/check-authentication');
  }

  isAdmin(): Observable<boolean> {
    return this.http.get<boolean>('/admin/get-status');
  }
}
