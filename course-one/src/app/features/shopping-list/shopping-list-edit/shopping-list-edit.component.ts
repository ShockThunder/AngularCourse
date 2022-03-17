import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingridient } from 'src/app/models/ingridient';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef!: ElementRef;
  @ViewChild('amountInput') amountInputRef!: ElementRef;
  
  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit(): void {
  }

  addIngridient(): void{
    this.shoppingService.addIngridient(new Ingridient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value));
  }
}
