import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/models/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("firstRecipe", "the best recipe", "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg"),
    new Recipe("secondRecipe", "the best recipe", "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg")
  ];

  @Output() onSelectRecipe = new EventEmitter<Recipe>();
  
  constructor() { }

  ngOnInit(): void {
  }

  selectRecipe(recipe: Recipe){
      this.onSelectRecipe.emit(recipe);
  }

}
