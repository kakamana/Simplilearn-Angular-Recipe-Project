import {EventEmitter} from '@angular/core'
import {Recipe} from './recipe.model';
export class RecipeService{

    recipeSelected=new EventEmitter<Recipe>();
   private  recipes: Recipe[]=[
        new Recipe('A Test Recipe','This is a sample recipe',
        'https://norecipes.com/wp-content/uploads/2018/08/teriyaki-chicken-recipe_010.jpg'),
        new Recipe('Another Recipe','Another sample recipe',
        'https://norecipes.com/wp-content/uploads/2018/08/teriyaki-chicken-recipe_010.jpg')
      ];

    getRecipes(){
        return this.recipes.slice();    
    }
}