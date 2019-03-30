import { Component, OnInit,OnDestroy } from '@angular/core';
import { Ingredient } from '../Shared/ingredient.model';
import { ShoppingListService } from './shoping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[]=[];
  private subscription: Subscription;
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients=this.slService.getIngredients();

    this.subscription= this.slService.ingredientsChanged.subscribe(
      (IngredientsArr:Ingredient[]) => {
        this.ingredients=IngredientsArr;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  /*onIngredientAdded(ingredient: Ingredient){
      this.ingredients.push(ingredient);
  }*/

}
