import { Component, OnInit } from '@angular/core';
import { MOCK_RECIPES } from '../mock/recipes.mock';
import { RecipeService } from '../shared/service/recipe.service';
import { Recipe } from '../shared/model/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];

  constructor(private readonly recipeService: RecipeService) { }

  ngOnInit() {
    this.allRecipes();
  }

  deleteRecipe(id: number) {
    this.recipeService.deleteApi(id).subscribe(() => {
        this.allRecipes();
      }
    );
  }

  allRecipes() {
    this.recipeService.getRecipes().subscribe(
      (result: Recipe[]) => {
        this.recipes = result;
      },
      (error) => {
        // traiter l'error
      });
  }
}
