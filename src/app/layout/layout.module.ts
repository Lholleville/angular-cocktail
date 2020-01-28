import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from '../shared/custom-material/custom-material.module';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    CustomMaterialModule,
    RouterModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class LayoutModule { }
