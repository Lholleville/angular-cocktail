import { Component, OnInit } from '@angular/core';
import { MOCK_RECIPES } from '../mock/recipes.mock';
import { RecipeService } from '../service/recipe.service';
import { Recipe } from '../model/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];

  constructor(private readonly recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.getRecipes().subscribe(
      (result: Recipe[]) => {
        this.recipes = result;
      },
      (error) => {
        // traiter l'error
      });
  }
}
