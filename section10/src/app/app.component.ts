import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: ['ShoppingListService', 'RecipeService']
})
export class AppComponent {
  loadedFeature = 'recipe';

  constructor(){}

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
