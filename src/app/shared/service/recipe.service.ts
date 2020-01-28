import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recipe } from '../model/recipe.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  public ip = '10.0.1.153';

  public url = 'http://' + this.ip + ':8080/api/v1/recipes';

  constructor(private readonly httpClient: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
     return this.httpClient.get<Recipe[]>(this.url);
  }

  getRecipe(id: number): Observable<Recipe>{
    return this.httpClient.get<Recipe>(`${ this.url }/${id}`);
  }

  postToApi(RecipeToCreate: Partial<Recipe>): Observable<number>{
    return this.httpClient.post<number>(this.url, RecipeToCreate);
  }

  deleteApi(id: number): Observable<any> {
    return this.httpClient.delete(`${ this.url }/${id}`);
  }

}
