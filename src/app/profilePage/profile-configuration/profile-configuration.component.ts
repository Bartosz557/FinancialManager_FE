import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-configuration',
  templateUrl: './profile-configuration.component.html',
  styleUrls: ['./profile-configuration.component.css']
})
export class ProfileConfigurationComponent {
  step: number = 1;

  nextStep() {
    if (this.step < 5) {
      this.step++;
    }
  }
  prevStep() {
    if (this.step > 1) {
      this.step--;
    }
  }
  checkVisibility()
  {
    const welcomeText = document.getElementById('welcome-div')
    if(this.step !== 1 && welcomeText != null){
      welcomeText.style.display = 'none';
    }else if(welcomeText !== null && welcomeText.style.display == 'none')
      welcomeText.style.display = 'inline';
    switch (this.step) {
      case 1:
        this.checkButton(false,false)
        break;
      case 2:
        this.checkButton(false,true)
        break;
      case 3:
        this.checkButton(true,true)
        break;
      case 4:
        this.checkButton(true,true)
        break;
      case 5:
        this.checkButton(true,false)
        break;
    }
  }

  checkButton(first: any, second: any) {
    let visibility = first;
    let button = document.getElementById('prev-button');
    for (let i = 0; i < 2; i++) {
      if (button != null) {
        if (visibility) {
          button.style.visibility = 'visible';
          button.style.pointerEvents = 'auto';
        } else {
          button.style.visibility = 'hidden';
          button.style.pointerEvents = 'none';
        }
      }
      button = document.getElementById('next-button');
      visibility = second;
    }
  }

}
