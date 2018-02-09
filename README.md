## Red Badger Martian Robots Test (12:40)

Before starting the challenge, having read through the instructions carefully, I am going to make use of the sample data as much as possible, as well as to start with the hardest part first. I am going to approach this test in a Test-Driven-Development way. It would be harder to solve the logic first, and then easier to end with user Inputs / the UI. 
I have chosen Angular-ClI for this project, as it is a quick way to get the basic setup running smoothly, including test support. I'd prefer to spend more time on the actual problem given the time constraints. 
I have decided to start with the smallest possible movement of the robot to start with, then gradually build up the robots movements to be more complex. 

#### 15:55
The first test is passing now, the robot can move forward North. Now I will try the same for all directions to cover any possible error.




## Test Instructions
#### Developer Programming Problem
#### Introduction
Think of this challenge as an opportunity to show us what “good” looks like to you; and a fun way to showcase your skills.
Here are some tips and guidelines:
● We don’t expect you to spend more than 2-3 hours on this challenge
● If you don’t have time to fully complete the challenge, please still send it in and
indicate what your next steps would be. Remember to try to solve the hardest
problems first.
● Use any language and frameworks you want
● KISS - Keep it Simple Stupid.
● User interface design is not the main focus of the problem
● Put your code on a public source repository (such as GitHub) and give us the URL
● Please submit your commit history, we are interested to see how you approach the
challenge and how you verify the validity of your solution.
● We should be able to run your code without any crazy steps
● Secret tip: Make use of the sample data ;)
Problem: Martian Robots
The Problem
The surface of Mars can be modelled by a rectangular grid around which robots are able to move according to instructions provided from Earth. You are to write a program that determines each sequence of robot positions and reports the final position of the robot.
A robot position consists of a grid coordinate (a pair of integers: x-coordinate followed by y-coordinate) and an orientation (N, S, E, W for north, south, east, and west).
A robot instruction is a string of the letters “L”, “R”, and “F” which represent, respectively, the instructions:
● Left : the robot turns left 90 degrees and remains on the current grid point.
● Right : the robot turns right 90 degrees and remains on the current grid point.
● Forward : the robot moves forward one grid point in the direction of the current
orientation and maintains the same orientation.
The direction North corresponds to the direction from grid point (x, y) to grid point (x, y+1).
 Developer Programming Problem Red Badger Consulting Limited
Page1of3
 There is also a possibility that additional command types may be required in the future and provision should be made for this.
Since the grid is rectangular and bounded (...yes Mars is a strange planet), a robot that moves “off” an edge of the grid is lost forever. However, lost robots leave a robot “scent” that prohibits future robots from dropping off the world at the same grid point. The scent is left at the last grid position the robot occupied before disappearing over the edge. An instruction to move “off” the world from a grid point from which a robot has been previously lost is simply ignored by the current robot.
The Input
The first line of input is the upper-right coordinates of the rectangular world, the lower-left coordinates are assumed to be 0, 0.
The remaining input consists of a sequence of robot positions and instructions (two lines per robot). A position consists of two integers specifying the initial coordinates of the robot and an orientation (N, S, E, W), all separated by whitespace on one line. A robot instruction is a string of the letters “L”, “R”, and “F” on one line.
Each robot is processed sequentially, i.e., finishes executing the robot instructions before the next robot begins execution.
The maximum value for any coordinate is 50.
All instruction strings will be less than 100 characters in length.
The Output
For each robot position/instruction in the input, the output should indicate the final grid position and orientation of the robot. If a robot falls off the edge of the grid the word “LOST” should be printed after the position and orientation.

#### Sample Input
53
11E RFRFRFRF
32N FRRFLLFFRRFLL
03W LLFFFLFLFL

#### Sample Output
11E
33NLOST 23S




# MartianRobotsTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
