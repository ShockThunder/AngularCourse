import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  @Input() recipe!: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  toShoppingList(): void {
    this.recipeService.addIngridientsToShoppingList(this.recipe.ingridients);
  }

}
