import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/shared/service/recipe.service';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.scss']
})
export class RecipeCreateComponent implements OnInit {

  name = '';
  picture = '';
  description = '';

  recipeForm: AbstractControl;

  constructor(
    private readonly router: Router,
    private readonly recipeService: RecipeService,
    private readonly formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    this.recipeForm = this.formBuilder.group({
      name: ['', Validators.required],
      picture: ['', this.urlValidator],
      description: ['', [Validators.required, Validators.minLength(20)]]
    });
  }

  urlValidator = (control: AbstractControl): {[key: string]: any} | null => {
      return !control.value.includes('http')
      ? { url : true }
      : null;
  }

  submit(): void {
    this.recipeService.postToApi({
      description: this.description,
      name: this.name,
      picture: this.picture
    }).subscribe((id: number) => this.router.navigate(['recipes', id]));
  }
}
