import {Component} from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {NativeDateAdapter} from '@angular/material/core';
import {provideLuxonDateAdapter } from '@angular/material-luxon-adapter';


@Component({
    selector: 'datepicker-overview-example',
    templateUrl: 'datepicker-overview-example.html',
    standalone: true,
    providers: [provideLuxonDateAdapter ()],
    imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule],
})
export class DatepickerOverviewExample {}
