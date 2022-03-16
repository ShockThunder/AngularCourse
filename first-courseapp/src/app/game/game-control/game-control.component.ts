import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  gameStarted = false;
  interval: any = undefined;
  counter = 0;
  @Output() counterEvent = new EventEmitter<number>();

  constructor() { }


  ngOnInit(): void {
  }

  startGame(): void {
    this.gameStarted = true;
    this.counter = 0;
    this.interval = setInterval(() => {
      this.gameLoop();
  }, 1000);
  }

  stopGame(): void {
    this.gameStarted = false;
    clearInterval(this.interval);
  }

  gameLoop(){
    this.counter++;
    this.counterEvent.emit(this.counter);
  }
}
