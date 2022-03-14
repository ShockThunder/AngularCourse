import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './features/shopping-list/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './features/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './features/recipe-book/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './features/recipe-book/recipe-item/recipe-item.component';
import { RecipeDetailsComponent } from './features/recipe-book/recipe-details/recipe-details.component';
import { RecipeBookComponent } from './features/recipe-book/recipe-book.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailsComponent,
    RecipeBookComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
