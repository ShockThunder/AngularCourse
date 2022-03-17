import { EventEmitter, Injectable } from '@angular/core';
import { Ingridient } from '../models/ingridient';

@Injectable({
  providedIn: 'root'
})

export class ShoppingListService {
  private ingridients: Ingridient[] = [
    new Ingridient("test ingridient", 8),
    new Ingridient("TOAM", 12)
  ];

  addIngr = new EventEmitter<void>();

  constructor() { }

  getIngridients(): Ingridient[]{
    return [...this.ingridients];
  }

  addIngridient(ingridient: Ingridient){
    this.ingridients.push(ingridient);
    this.addIngr.emit();
  }

  addIngridients(ingridients: Ingridient[]){
    this.ingridients.push(...ingridients);
    this.addIngr.emit();
  }
}
