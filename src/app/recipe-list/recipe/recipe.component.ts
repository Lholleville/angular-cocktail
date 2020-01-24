import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../model/recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})

export class RecipeComponent implements OnInit {

  @Input()
  recipe: Recipe;

  public show = false;

  constructor() { }

  ngOnInit() { }

  toggleExpand() {
    this.show = !this.show;
    console.log(this.recipe.name);
  }
}
