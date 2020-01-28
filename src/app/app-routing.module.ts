import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeCreateComponent } from './recipe-create/recipe-create/recipe-create.component';
import { RecipeShowComponent } from './recipe-show/recipe-show/recipe-show.component';

const routes: Routes = [
  {
      path: 'recipes',
      component: RecipeListComponent,
      pathMatch: 'full'
  },
  {
      path: 'recipes/create',
      component: RecipeCreateComponent,
      pathMatch: 'full'
  },
  {
      path: 'recipes/:id',
      component : RecipeShowComponent,
      pathMatch: 'full'
  },

  {
      path: '**',
      redirectTo: 'recipes',
      pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
