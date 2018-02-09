export class Robot {
  
    public currentYPosition: number;
    public currentXPosition: number;
    public currentDirection: string;
  
    constructor(currentXPosition: number, currentYPosition: number, currentDirection: string) {    
      this.currentXPosition = currentXPosition;
      this.currentYPosition = currentYPosition;
      this.currentDirection = currentDirection.toUpperCase();
    }
    
  }