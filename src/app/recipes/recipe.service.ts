import { Injectable} from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Recipe } from './recipe-list/recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('Tasty Schnitzel',
            'A tasty schnitzel - just awesome!',
            'http://givememora.com/wp-content/uploads/2014/03/shnitzel.jpg',
            [
              new Ingredient('Meat', 1),
              new Ingredient('French Fries', 20)
            ]),
    new Recipe('Big Fat Burger',
            'What else you need to say?',
            'http://aht.seriouseats.com/images/20100331-fatburger-large.jpg',
            [
              new Ingredient('Buns', 2),
              new Ingredient('Meat Fries', 1)
            ])
  ];

  constructor() {}

  setRecipes(recipes: Recipe []) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes.slice()[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  // deleteIngredient(recipeIndex: number, ingredientindex: number) {
  //   this.recipes[recipeIndex].ingredients.splice(ingredientindex, 1);
  //   this.recipesChanged.next(this.recipes.slice());
  // }
}
