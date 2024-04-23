import { HttpClient } from '@angular/common/http';
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {catchError} from "rxjs/operators";
import {BehaviorSubject, Observable, throwError} from "rxjs";

@Injectable({providedIn: 'root'})
export class ProgressService {
    private progressSubject = new BehaviorSubject<number>(0);
    public progress$ = this.progressSubject.asObservable();

    constructor() { }

    updateProgress(newValue: number) {
        this.progressSubject.next(newValue);
    }
}
