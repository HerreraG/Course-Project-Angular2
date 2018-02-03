import { Injectable} from '@angular/core';
import { Recipe } from './recipe-list/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

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

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes.slice()[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
