import { Component } from '@angular/core';

@Component({
  selector: 'app-a3',
  templateUrl: './a3.component.html',
  styleUrls: ['./a3.component.css']
})
export class A3Component {
  showContainer: boolean = false;
  counter: number = 0;
  // toggles = [0];
  toggles = [] as any;
  constructor() {}

  onToggleContainer(){
    this.showContainer = !this.showContainer;
    this.counter++;
    this.toggles.push(this.counter);
  }

  getColor(num:Number){
    return num >= 5 ? 'blue' : '';
  }
}
