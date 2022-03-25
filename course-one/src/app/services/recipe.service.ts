import { EventEmitter, Injectable } from '@angular/core';
import { Ingridient } from '../models/ingridient';
import { Recipe } from '../models/recipe';
import { ShoppingListService } from './shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      "firstRecipe", 
      "the best recipe", 
      "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg",
      [
        new Ingridient('meat', 1),
        new Ingridient('French fries', 20)
      ]
    ),
    new Recipe(
      "secondRecipe", 
      "the best recipe",
       "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg", 
       [
         new Ingridient('Buns',2),
         new Ingridient('Meat',2)
       ])
  ];

  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingService: ShoppingListService) { }

  getRecipes(): Recipe[]{
    return [...this.recipes];
  }

  addIngridientsToShoppingList(ingridients: Ingridient[]){
    this.shoppingService.addIngridients(ingridients);
  }

  getRecipe(index: number): Recipe{
    return this.recipes[index];
  }
}
