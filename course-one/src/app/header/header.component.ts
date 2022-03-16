import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() isRecipe = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  openRecipe(){
    this.isRecipe.emit(true);
  }

  openShopping(){
    this.isRecipe.emit(false);
  }

}
