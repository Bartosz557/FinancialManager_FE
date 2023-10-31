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
  timeout1: any;
  timeout2: any;

  // green circle goes up
  // dashboard.component.ts:37 green circle goes down
  // dashboard.component.ts:79 2circle goes down
  // dashboard.component.ts:66 2circle goes up
  // dashboard.component.ts:70 2box goes up
  // dashboard.component.ts:66 2circle goes up
  // dashboard.component.ts:70 2box goes up
  // dashboard.component.ts:41 green circle index goes to 1
  // dashboard.component.ts:79 2circle goes down
  // dashboard.component.ts:92 2circle index goes 2

  mouseEnter(targetId: string)
  {
    clearTimeout(this.timeout)
    setTimeout(() => {
      console.log("green circle goes up")
      const id = parseInt(targetId)
      const target = document.getElementById(this.IDs[id]);
      const circle = document.getElementById(targetId);
      if (target && circle) {
        target.style.backgroundColor = this.colors[id];
        target.style.transform = 'scale(2)';
        target.style.zIndex = '3';
      }
    }, 50);
  }
  resetBtn(targetId: string) {
    const id = parseInt(targetId)
    const circle = document.getElementById(targetId);
    const target = document.getElementById(this.IDs[id]);
    console.log("green circle goes down")
    if (target && circle) {
      this.timeout = setTimeout(() => {
        target.style.zIndex = '1' //setting the green box's z-Index to 1, so it doesn't block the instant hover detection for 2 other circles and add-spent button
        console.log("green circle index goes to 1")
      }, 200);
    }
    setTimeout(() => {
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


  mouseEnter2(targetId: string)
  {
    const id = parseInt(targetId)
    if(id==1)
      clearTimeout(this.timeout1)
    else
      clearTimeout(this.timeout2)
    setTimeout(() => {
      console.log(targetId + "circle goes up")
      const target = document.getElementById(this.IDs[id]);
      const circle = document.getElementById(targetId);
      if (target && circle) {
        console.log(targetId + "box goes up")
        target.style.backgroundColor = this.colors[id];
        target.style.transform = 'scale(2)';
        circle.style.zIndex = '4';  //puts the current circle on top of the green circle (otherwise the green circle remains on top)
        target.style.zIndex = '4';
      }
    }, 50);
  }
  resetBtn2(targetId: string) {
    console.log(targetId + "circle goes down")
    const id = parseInt(targetId)
    const circle = document.getElementById(targetId);
    const target = document.getElementById(this.IDs[id]);
    if (target && circle) {
      if(id==1) {
        this.timeout1 = setTimeout(() => {
          console.log(targetId + "circle index goes 2")
            circle.style.zIndex = '2'; //putting the x-index to the correct one, behind the green circle
            target.style.zIndex = '2'; //(otherwise the circles remains on top breaking interaction mechanics)
        }, 220);
      }else {
        this.timeout2 = setTimeout(() => {
          console.log(targetId + "circle index goes 2")
          circle.style.zIndex = '2'; //putting the x-index to the correct one, behind the green circle
            target.style.zIndex = '2'; //(otherwise the circles remains on top breaking interaction mechanics)
        }, 220);
      }
    }
    setTimeout(() => {
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
