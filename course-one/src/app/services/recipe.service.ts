import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../models/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe("firstRecipe", "the best recipe", "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg"),
    new Recipe("secondRecipe", "the best recipe", "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg")
  ];

  recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  getRecipes(): Recipe[]{
    return [...this.recipes];
  }
}
