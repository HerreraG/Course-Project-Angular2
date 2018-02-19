import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe-list/recipe.model';
import 'rxjs/add/operator/map';

@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService) {}

  storeRecipes() {
    // const token = this.authService.getToken();
    // return this.httpClient.put('https://ng-recipe-book-d8cdf.firebaseio.com/recipes.json',
    //                        this.recipeService.getRecipes(), {
    //                          observe: 'body',
    //                          params: new HttpParams().set('auth', token)
    //                        });

    const req = new HttpRequest('PUT', 'https://ng-recipe-book-d8cdf.firebaseio.com/recipes.json',
                                this.recipeService.getRecipes(), {reportProgress: true});
    return this.httpClient.request(req);
  }

  getRecipes() {
    // this.httpClient.get<Recipe[]>('https://ng-recipe-book-d8cdf.firebaseio.com/recipes.json?auth=' + token)
    this.httpClient.get<Recipe[]>('https://ng-recipe-book-d8cdf.firebaseio.com/recipes.json', {
      observe: 'body',
      responseType: 'json'
    })
      .map(
        (recipes) => {
          console.log(recipes);
          for (const recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
