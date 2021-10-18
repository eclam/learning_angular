import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() showRecipes = new EventEmitter<Boolean>();
  @Output() showShoppingList = new EventEmitter<Boolean>();

  showRecipesCheck: Boolean = false;
  showShoppingListCheck: Boolean = false;

  onShowRecipes(){
    this.showRecipesCheck = !this.showRecipesCheck;
    // console.log('Show Recipes Check : ' + this.showRecipesCheck);
    this.showRecipes.emit(this.showRecipesCheck);
  }

  onShowShoppingList(){
    this.showShoppingListCheck = !this.showShoppingListCheck;
    // console.log('Show shopping list check : ' + this.showShoppingListCheck);
    this.showShoppingList.emit(this.showShoppingListCheck);
  }

}
