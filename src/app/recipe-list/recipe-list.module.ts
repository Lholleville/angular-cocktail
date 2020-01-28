import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './recipe-list.component';
import { RecipeComponent } from './recipe/recipe.component';
import { CustomMaterialModule } from '../shared/custom-material/custom-material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    RecipeComponent,
    RecipeListComponent
  ],
  imports: [
    CommonModule,
    CustomMaterialModule,
    RouterModule
  ],
  exports: [
    RecipeListComponent
  ]
})
export class RecipeListModule { }
