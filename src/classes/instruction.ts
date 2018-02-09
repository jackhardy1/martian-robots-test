import { Robot } from './robot';

export class Instruction {
  public robot: Robot;
  public commands: string;

  constructor(robot: Robot, commands: string) {
    this.robot = robot;
    this.commands = commands;
  }
}