import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RecipeBookComponent } from './features/recipe-book/recipe-book.component';
import { ShoppingListComponent } from './features/shopping-list/shopping-list/shopping-list.component';

const appRoutes: Routes = [
  { path: 'recipes', component: RecipeBookComponent},
  { path: 'shopping-list', component: ShoppingListComponent},
  { path: '', redirectTo: '/recipes', pathMatch: 'full'}
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
