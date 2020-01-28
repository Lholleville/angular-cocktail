import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './layout/layout.module';
import { RecipeModule } from './recipe/recipe.module';
import { RecipeListModule } from './recipe-list/recipe-list.module';
import { RecipeUpdateModule } from './recipe-update/recipe-update.module';
import { RecipeCreateModule } from './recipe-create/recipe-create.module';
import { RecipeShowModule } from './recipe-show/recipe-show.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    LayoutModule,
    RecipeCreateModule,
    RecipeModule,
    RecipeListModule,
    RecipeUpdateModule,
    RecipeShowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
