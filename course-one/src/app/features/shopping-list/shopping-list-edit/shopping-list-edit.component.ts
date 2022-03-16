import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingridient } from 'src/app/models/ingridient';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef!: ElementRef;
  @ViewChild('amountInput') amountInputRef!: ElementRef;
  
  @Output() ingridientAdded = new EventEmitter<Ingridient>();
  constructor() { }

  ngOnInit(): void {
  }

  addIngridient(){
    this.ingridientAdded.emit(
      new Ingridient(
        this.nameInputRef.nativeElement.value,
        this.amountInputRef.nativeElement.value)
        );
  }



}
