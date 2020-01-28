import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../shared/model/recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})

export class RecipeComponent implements OnInit {

  @Input()
  recipe: Recipe;

  @Output()
  delete = new EventEmitter<number>();

  public show = false;

  constructor() { }

  ngOnInit() { }

  toggleExpand() {
    this.show = !this.show;
  }

  deleteRecipe() {
    this.delete.emit(this.recipe.id);
  }
}
