import { Component, OnInit} from '@angular/core';
import {Ingredient} from '../../Shared/ingredient.model';
import { ShoppingListService } from '../shoping-list.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem(form: NgForm){
    const value=form.value;
    const newIngredient=new Ingredient(value.name,value.amount);
    this.slService.addIngredients(newIngredient);
  }

}
