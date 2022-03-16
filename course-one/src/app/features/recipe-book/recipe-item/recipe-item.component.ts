import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/models/recipe';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe!: Recipe;

  @Output() onSelectRecipe = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  selectRecipe(){
    this.onSelectRecipe.emit();
  }

}
