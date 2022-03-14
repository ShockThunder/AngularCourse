import { Component, OnInit } from '@angular/core';
import { Ingridient } from 'src/app/models/ingridient';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingridients: Ingridient[] = [
    new Ingridient("test ingridient", 8),
    new Ingridient("TOAM", 12)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
