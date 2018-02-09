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
  }))

  it('robot can move forward south', async(() => {    
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    
    var robot = new Robot(4, 3, "S");

    app.moveForward(robot);

    expect(robot.currentYPosition).toBe(2);
  }))
    
  it('robot can move forward east', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    
    var robot = new Robot(4,3,"E");

    app.moveForward(robot);

    expect(robot.currentXPosition).toBe(5);
  }))
  
  it('robot can move forward west', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    
    var robot = new Robot(4,3,"W");

    app.moveForward(robot);

    expect(robot.currentXPosition).toBe(3);
  }))
  
});
