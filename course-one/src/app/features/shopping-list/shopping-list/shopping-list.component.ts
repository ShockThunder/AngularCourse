import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingridient } from 'src/app/models/ingridient';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingridients!: Ingridient[];
  private idChangeSub!: Subscription;

  constructor(private shoppingService: ShoppingListService) { }
  
  ngOnDestroy(): void {
    this.idChangeSub.unsubscribe();
  }

  ngOnInit(): void {
    this.ingridients = this.shoppingService.getIngridients();
    this.idChangeSub = this.shoppingService.addIngr.subscribe(() => this.ingridients = this.shoppingService.getIngridients());
  }

}
