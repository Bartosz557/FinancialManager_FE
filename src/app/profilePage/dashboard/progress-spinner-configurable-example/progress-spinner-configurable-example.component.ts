import {Component, OnInit} from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode, MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSliderModule} from '@angular/material/slider';
import {FormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {ProgressService} from "./progress-service";
@Component({
  selector: 'app-progress-spinner-configurable-example',
  templateUrl: './progress-spinner-configurable-example.component.html',
  styleUrls: ['./progress-spinner-configurable-example.component.css'],
    standalone: true,
    imports: [MatCardModule, MatRadioModule, FormsModule, MatSliderModule, MatProgressSpinnerModule],
})
export class ProgressSpinnerConfigurableExampleComponent implements OnInit {
    color: ThemePalette = 'accent';
    value = 0;
    spinnerText: string ='';
    constructor(private progressService: ProgressService) { }
    ngOnInit() {
        this.progressService.progress$.subscribe(value => {
            this.value = value;
        });
        this.progressService.value$.subscribe(amount => {
          this.spinnerText = amount;
        });
    }
}
