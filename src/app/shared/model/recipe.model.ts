import { RecipeIngredient } from './recipe-ingredient.model';

export class Recipe {
  id?: number;
  name: string;
  subname?: string;
  picture: string;
  description: string;
  ingredients: RecipeIngredient[];
  instructions: string[];
}
