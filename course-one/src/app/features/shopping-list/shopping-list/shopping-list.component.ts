import { Component, OnInit, ViewChild } from '@angular/core';
import { Ingridient } from 'src/app/models/ingridient';
import { ShoppingListEditComponent } from '../shopping-list-edit/shopping-list-edit.component';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  @ViewChild('editComp') editComp!: ShoppingListEditComponent;
  ingridients: Ingridient[] = [
    new Ingridient("test ingridient", 8),
    new Ingridient("TOAM", 12)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
