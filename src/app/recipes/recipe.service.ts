import {EventEmitter,Injectable} from '@angular/core'
import {Recipe} from './recipe.model';
import { Ingredient } from '../Shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shoping-list.service';
@Injectable()
export class RecipeService{

    recipeSelected=new EventEmitter<Recipe>();

    constructor(private slsService:ShoppingListService){

    }

   private  recipes: Recipe[]=[
        new Recipe('A Test Recipe','This is a sample recipe',
        'https://norecipes.com/wp-content/uploads/2018/08/teriyaki-chicken-recipe_010.jpg',
        [new Ingredient('Meat',1),new Ingredient('French Fries',20)]),
        new Recipe('Another Recipe','Another sample recipe',
        'https://norecipes.com/wp-content/uploads/2018/08/teriyaki-chicken-recipe_010.jpg',
        [new Ingredient('Cheese',2),new Ingredient('Pepper',5)])
      ];

    getRecipes(){
        return this.recipes.slice();    
    }

    getRecipe(index: number){
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.slsService.addMultipleIngredients(ingredients);
    }
}