import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/model/recipe.model';
import { RecipeService } from 'src/app/shared/service/recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-show',
  templateUrl: './recipe-show.component.html',
  styleUrls: ['./recipe-show.component.scss']
})
export class RecipeShowComponent implements OnInit {

  recipe: Recipe = null;

  constructor(
    private readonly router: ActivatedRoute,
    private readonly recipeService: RecipeService
    ) {

  }

  ngOnInit() {
    const id = +this.router.snapshot.paramMap.get('id');
    this.recipeService.getRecipe(id).subscribe(recipe => this.recipe = recipe);
  }

}
