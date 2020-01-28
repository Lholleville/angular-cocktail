import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeCreateComponent } from './recipe-create/recipe-create.component';
import { CustomMaterialModule } from '../shared/custom-material/custom-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [RecipeCreateComponent],
  imports: [
    CommonModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    RecipeCreateComponent
  ]
})
export class RecipeCreateModule { }
