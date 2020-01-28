import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeShowComponent } from './recipe-show/recipe-show.component';
import { CustomMaterialModule } from '../shared/custom-material/custom-material.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [RecipeShowComponent],
  imports: [
    CommonModule,
    CustomMaterialModule,
    RouterModule
  ],
  exports: [
    RecipeShowComponent
  ]
})
export class RecipeShowModule { }
