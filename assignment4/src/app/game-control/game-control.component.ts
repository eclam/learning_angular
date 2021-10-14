import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() broadcastInterval = new EventEmitter<number>();
  interval;
  lastNumber = 0;

  constructor() {}

  ngOnInit() {}

  onStartGame(){
    this.interval = setInterval(()=>{
      this.lastNumber++;
      this.broadcastInterval.emit(this.lastNumber);
    }, 1000);
  }
  onEndGame(){
    clearInterval(this.interval);
  }

}
