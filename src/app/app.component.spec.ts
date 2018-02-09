import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { Robot } from '../classes/robot';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('robot can move forward north', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    
    var robot = new Robot(4, 3, "N");

    app.moveForward(robot);
    
    expect(robot.currentYPosition).toBe(4);
  }));

  it('robot can move forward south', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    
    var robot = new Robot(4, 3, "S");

    app.moveForward(robot);

    expect(robot.currentYPosition).toBe(2);
  }));
    
  it('robot can move forward east', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    
    var robot = new Robot(4, 3, "E");

    app.moveForward(robot);

    expect(robot.currentXPosition).toBe(5);
  }));
  
  it('robot can move forward west', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    
    var robot = new Robot(4, 3, "W");

    app.moveForward(robot);

    expect(robot.currentXPosition).toBe(3);
  }));

  it('robot can move left', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    
    var robot = new Robot(4, 3, "W");

    app.moveLeft(robot);

    expect(robot.currentDirection).toBe("S");
  }));

  it('robot can move right', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    
    var robot = new Robot(4, 3, "S");

    app.moveRight(robot);

    expect(robot.currentDirection).toBe("W");
  }));

  it('robot can move left, then forward, then right', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    
    var robot = new Robot(4,3,"W");

    app.moveLeft(robot);
    app.moveForward(robot);
    app.moveRight(robot);

    expect(robot.currentXPosition).toBe(4);
    expect(robot.currentYPosition).toBe(2);
    expect(robot.currentDirection).toBe("W");
  }))
  
  it('can carry out one command left', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    
    var robot = new Robot(4,3,"W");

    app.carryOutCommand(robot, "L");

    expect(robot.currentDirection).toBe("S");
  }))
  
  it('can carry out one command right', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    
    var robot = new Robot(4,3,"W");

    app.carryOutCommand(robot, "R");

    expect(robot.currentDirection).toBe("N");
  }))
  
  it('can carry out one command foward', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    
    var robot = new Robot(4,3,"W");

    app.carryOutCommand(robot, "F");

    expect(robot.currentXPosition).toBe(3);
  }))
  
  it('can carry out multiple commands - sample input 1', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    
    var robot = new Robot(1, 1, "E");
    var commands = "RFRFRFRF";
    
    app.carryOutCommands(robot, commands);
    
    expect(robot.currentXPosition).toBe(1);
    expect(robot.currentYPosition).toBe(1);
    expect(robot.currentDirection).toBe("E");
  }))

  it('robot is lost when out of bounds', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    var robot = new Robot(2, 2, "N");
    var commands = "FFFFF";
    
    app.setBoundaries(2, 2);
    
    app.carryOutCommands(robot, commands);
    
    expect(robot.isLost).toBeTruthy();
  }))
  
});
