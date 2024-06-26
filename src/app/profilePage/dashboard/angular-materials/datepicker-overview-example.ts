import {Component} from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
    selector: 'datepicker-overview-example',
    templateUrl: 'datepicker-overview-example.html',
    standalone: true,
    imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule],
})
export class DatepickerOverviewExample {}
