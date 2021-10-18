import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showRecipes: Boolean;
  showShoppingList: Boolean;

  onShowRecipes(bool: Boolean){
    this.showRecipes = bool;
    console.log('(PARENT) Show Recipes Check : ' + this.showRecipes);
  }

  onShowShoppingList(bool: Boolean){
    this.showShoppingList = bool;
    console.log('(PARENT) Show shopping list check : ' + this.showShoppingList);
  }

}
