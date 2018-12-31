import { Ingredient } from '../shared/ingedient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService{
    ingredientAdded = new EventEmitter<Ingredient[]>()

    private ingredients: Ingredient[] =  [
        new Ingredient('Apples', 5),
        new Ingredient('Banana', 4)
    ]; 

    getIngredients(){
        return this.ingredients.slice()
    }

    addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient)
        this.ingredientAdded.emit(this.ingredients.slice())
    }

    addIngedients(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientAdded.emit(this.ingredients.slice())
    }
}