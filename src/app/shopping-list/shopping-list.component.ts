import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../Shared/ingredient.model';
import { ShoppingListService } from './shoping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[]=[];
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients=this.slService.getIngredients();

    this.slService.ingredientsChanged.subscribe(
      (IngredientsArr:Ingredient[]) => {
        this.ingredients=IngredientsArr;
      }
    );
  }

  /*onIngredientAdded(ingredient: Ingredient){
      this.ingredients.push(ingredient);
  }*/

}
