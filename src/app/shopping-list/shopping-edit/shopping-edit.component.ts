import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {Ingredient} from '../../Shared/ingredient.model';
import { ShoppingListService } from '../shoping-list.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  //@Output() ingredientAdded=new EventEmitter<Ingredient>();
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem(){
    const ingName=this.nameInputRef.nativeElement.value;
    const ingAmount=this.amountInputRef.nativeElement.value;
    const newIngredient=new Ingredient(ingName,ingAmount);
    //this.ingredientAdded.emit(newIngredient);
    this.slService.addIngredients(newIngredient);
  }

}
