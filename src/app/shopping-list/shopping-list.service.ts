import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] =  [
    new Ingredient('Apples', 10),
    new Ingredient('Orange', 15)
 ];

 getIngredient(index: number) {
   return this.ingredients[index];
 }

 updateIngredient(index: number, newIngredient: Ingredient) {
  this.ingredients[index] = newIngredient;
  this.ingredientsChanged.next(this.ingredients.slice());
 }

 deleteIngredient(index: number) {
   this.ingredients.splice(index, 1);
   this.ingredientsChanged.next(this.ingredients.slice());
 }
}
