import {Component, OnInit} from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode, MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSliderModule} from '@angular/material/slider';
import {FormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {ProgressService} from "./progress-service";
@Component({
  selector: 'static-spinner-background',
  templateUrl: './static-spinner-background.component.html',
  styleUrls: ['./progress-spinner-configurable-example.component.css'],
  standalone: true,
  imports: [MatCardModule, MatRadioModule, FormsModule, MatSliderModule, MatProgressSpinnerModule],
})
export class StaticSpinnerBackgroundComponent{
  color: ThemePalette = 'primary';
  value = 100;

}
