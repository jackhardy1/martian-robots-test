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
  
});
