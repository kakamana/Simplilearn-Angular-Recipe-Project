import {Ingredient} from '../Shared/ingredient.model';
//import { EventEmitter } from '@angular/core';
import {Subject} from 'rxjs';
export class ShoppingListService{

    //ingredientsChanged=new EventEmitter<Ingredient[]>();
    ingredientsChanged=new Subject<Ingredient[]>();

    private ingredients:Ingredient[]=[
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes',10)
      ];

      getIngredients(){
          return this.ingredients.slice();
      }

      addIngredients(ingredient:Ingredient){
          this.ingredients.push(ingredient);
          this.ingredientsChanged.next(this.ingredients.slice());
      }

      addMultipleIngredients(ingredientArr: Ingredient[]){
          /*for(let ingredient of ingredientArr){
              this.addIngredients(ingredient);
          }*/
          this.ingredients.push(...ingredientArr);
          this.ingredientsChanged.next(this.ingredients.slice());
      }
}