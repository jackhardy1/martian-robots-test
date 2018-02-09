import { Component } from '@angular/core';
import { Robot } from '../classes/robot';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  
export class AppComponent {

  title = 'app';

  moveForward(robot: Robot): void {
    if (robot.currentDirection === "N") {
      robot.currentYPosition += 1;
    } else if (robot.currentDirection === "E") {
      robot.currentXPosition += 1;
    } else if (robot.currentDirection === "S") {
      robot.currentYPosition -= 1;
    } else if (robot.currentDirection === "W") {
      robot.currentXPosition -= 1;
    }
  }
}
