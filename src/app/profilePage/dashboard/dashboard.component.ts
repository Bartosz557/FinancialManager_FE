import { Component } from '@angular/core';
import {timeout} from "rxjs";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  IDs: string[] = ["white-box", "left-box", "right-box"];
  colors: string[] = ["#48e18d","#EDBB99","#5499C7"];
  timeout: any;

  mouseEnter(targetId: string)
  {
    clearTimeout(this.timeout)
    setTimeout(() => {
      const id = parseInt(targetId)
      console.log(id)
      const target = document.getElementById(this.IDs[id]);
      const circle = document.getElementById(targetId);
      if (target && circle) {
        target.style.backgroundColor = this.colors[id];
        target.style.transform = 'scale(2)';
        if(id!=0) {
          circle.style.zIndex = '4';  //puts the current circle on top of the green circle (otherwise the green circle remains on top)
          target.style.zIndex = '4';
        }else
          target.style.zIndex = '3';
      }
    }, 50);
  }
  clicked()
  {
    console.log("clicked")
  }
  resetBtn(targetId: string) {
    const id = parseInt(targetId)
    const circle = document.getElementById(targetId);
    const target = document.getElementById(this.IDs[id]);
    if (target && circle) {
        this.timeout = setTimeout(() => {
          console.log("pause")
          target.style.zIndex = '1' //setting the green box's z-Index to 2, so it doesn't block the instant hover detection for 2 other circles and add-spent button
        }, 300);
        setTimeout(() => {
          if(id!=0) {
            circle.style.zIndex = '2'; //putting the x-index to the correct one, behind the green circle
            target.style.zIndex = '2'; //(otherwise the circles remains on top breaking interaction mechanics)
          }      }, 220);
      }
    setTimeout(() => {
      console.log(id)
      if (target && circle) {
        target.style.backgroundColor = 'transparent';
        target.style.transition = 'transform 0.9s ease, background-color 0.3s ease';
        target.style.transform = 'scale(0.5)';
        target.style.transform = 'translateX(270px)';
        setTimeout(() => {
          target.style.transition = 'transform 0.3s ease, background-color 0.3s ease';
        }, 50);
      }
    }, 100);

  }

}
