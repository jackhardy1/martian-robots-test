import { Component } from '@angular/core';
import { Robot } from '../classes/robot';
import { Instruction } from '../classes/instruction';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  
export class AppComponent {

  title = 'app';

  private xLimit: number;
  private yLimit: number;

  public instructions: Array<Instruction> = [];
  public outputs: Array<string> = [];

  public addInstruction(startingXPosition: number, startingYPosition: number, startingDirection: string, commands: string) {
    var robot = new Robot(startingXPosition, startingYPosition, startingDirection);
    this.instructions.push({ robot: robot, commands: commands });
  }

  public runInstructions() {
    this.instructions.forEach(i => this.carryOutCommands(i.robot, i.commands));
  }

  carryOutCommands(robot: Robot, commands: string) {
    let commandsAsArray = commands.split("");
    commandsAsArray.forEach(command => this.carryOutCommand(robot, command));
    let output = robot.currentXPosition.toString() + robot.currentYPosition.toString() + robot.currentDirection;
    robot.isLost ? output += " LOST" : "";
    this.outputs.push(output);
  }

  carryOutCommand(robot: Robot, command: string) {
    if (!robot.isLost) {
      switch (command) {
        case "F": this.moveForward(robot);
        break;   
        case "L": this.moveLeft(robot);
        break;   
        case "R": this.moveRight(robot);
        break;      
      }
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
