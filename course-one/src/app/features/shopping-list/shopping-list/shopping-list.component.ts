import { Component, OnInit, ViewChild } from '@angular/core';
import { Ingridient } from 'src/app/models/ingridient';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { ShoppingListEditComponent } from '../shopping-list-edit/shopping-list-edit.component';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingridients!: Ingridient[];

  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingridients = this.shoppingService.getIngridients();
    this.shoppingService.addIngr.subscribe(() => this.ingridients = this.shoppingService.getIngridients());
  }

}
