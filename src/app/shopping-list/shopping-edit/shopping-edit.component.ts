import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subcription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private ShoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subcription =  this.ShoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedItem = this.ShoppingListService.getIngredient(this.editedItemIndex);
        this.slForm.setValue(
          {
            name: this.editedItem.name,
            amount: this.editedItem.amount
          }
        );
      }
    );
  }

  onSubmit() {
    const value = this.slForm.value;
    const newIngredient = new Ingredient(value.name, value.amount);

    if (this.editMode) {
      this.ShoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      this.ShoppingListService.addIngredient(newIngredient);
    }
    this.editMode = false;
    this.slForm.reset();
  }

  onDelete() {
    this.onClear();
    this.ShoppingListService.deleteIngredient(this.editedItemIndex);
  }

  onClear() {
    this.slForm.reset();
  }

  ngOnDestroy() {
    this.subcription.unsubscribe();
  }
}
