import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] =  [
    new Ingredient('Apples', 10),
    new Ingredient('Orange', 15)
 ];

 getIngredients() {
   return this.ingredients.slice();
 }

 addIngredient(ingredient: Ingredient) {
  this.ingredients.push(ingredient);
  this.ingredientsChanged.next(this.ingredients.slice());
 }


 addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
 }
}
