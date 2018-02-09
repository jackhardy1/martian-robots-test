import { Component } from '@angular/core';
import { Robot } from '../classes/robot';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  
export class AppComponent {

  title = 'app';

  private xLimit: number;
  private yLimit: number;

  carryOutCommands(robot: Robot, commands: string) {
    let commandsAsArray = commands.split("");
    commandsAsArray.forEach(command => this.carryOutCommand(robot, command));
  }

  carryOutCommand(robot: Robot, command: string) {
    switch (command) {
      case "F": this.moveForward(robot);
      break;   
      case "L": this.moveLeft(robot);
      break;   
      case "R": this.moveRight(robot);
      break;      
    }
  }

  moveForward(robot: Robot): void {
    if (robot.currentDirection === "N") {
      if (this.hasBoundaries() && robot.currentYPosition + 1 > this.yLimit) {
        robot.isLost = true;
      } else {
        robot.currentYPosition += 1;
      }
    } else if (robot.currentDirection === "E") {
      if (this.hasBoundaries() && robot.currentXPosition + 1 > this.xLimit) {
        robot.isLost = true;
      } else {
        robot.currentXPosition += 1;
      }
    } else if (robot.currentDirection === "S") {
      if (this.hasBoundaries() && robot.currentYPosition - 1 < 0) {
        robot.isLost = true;
      } else {
        robot.currentYPosition -= 1;
      }
    } else if (robot.currentDirection === "W") {
      if (this.hasBoundaries() && robot.currentXPosition - 1 < 0) {
        robot.isLost = true;
      } else {
        robot.currentXPosition -= 1;
      }
    }
  }

  moveLeft(robot: Robot): void {
    switch (robot.currentDirection) {
      case "N": robot.currentDirection = "W";
        break;   
      case "E": robot.currentDirection = "N";
        break;   
      case "S": robot.currentDirection = "E";
        break;   
      case "W": robot.currentDirection = "S";
        break;   
    }
  }

  moveRight(robot: Robot): void {
    switch (robot.currentDirection) {
      case "N": robot.currentDirection = "E";
        break;   
        case "E": robot.currentDirection = "S";
        break;   
        case "S": robot.currentDirection = "W";
        break;   
        case "W": robot.currentDirection = "N";
        break;   
    }
  }

  hasBoundaries() {
    return this.xLimit !== null && this.yLimit !== null;
  }

  setBoundaries(xLimit: number, yLimit: number) {
    this.xLimit = xLimit;
    this.yLimit = yLimit;
  }
}
