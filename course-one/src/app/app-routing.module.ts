import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RecipeBookComponent } from './features/recipe-book/recipe-book.component';
import { ShoppingListComponent } from './features/shopping-list/shopping-list/shopping-list.component';
import { RecipeStartComponent } from './features/recipe-book/recipe-start/recipe-start.component';
import { RecipeDetailsComponent } from './features/recipe-book/recipe-details/recipe-details.component';
import { RecipeEditComponent } from './features/recipe-book/recipe-edit/recipe-edit.component';

const appRoutes: Routes = [
  {
    path: 'recipes', component: RecipeBookComponent, children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: RecipeDetailsComponent },
      { path: ':id/edit', component: RecipeEditComponent },
    ]
  },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: '', redirectTo: '/recipes', pathMatch: 'full' }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
