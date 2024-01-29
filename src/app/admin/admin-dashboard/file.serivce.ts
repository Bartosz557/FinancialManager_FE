import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) { }

  downloadFile(logs: string): Observable<string> {
    return this.http.get('/admin/logger/' + logs + '-logs', { responseType: 'text' });
  }
}
