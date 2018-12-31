import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingedient.model';

@Injectable()
export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>()

    private recipes: Recipe[] = [
        new Recipe(
            "A test recipe", 
            "This is just for the test", 
            'https://torange.biz/photo/35/IMAGE/pumpkin-autumn-still-life-illustration-recipes-35541.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 2)
            ]),
        new Recipe(
            "A new recipe", 
            "This is another for the test", 
            'https://images.pexels.com/photos/569356/pexels-photo-569356.jpeg?cs=srgb&dl=bangladesh-bangladesh-food-recipes-bd-ranna-569356.jpg&fm=jpg',
            [
                new Ingredient('Meat', 2),
                new Ingredient('Burns', 1)
            ])
      ]

    constructor(private shoppinglistService: ShoppingListService){}


    getRecipes(){
        return this.recipes.slice()
    }


    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppinglistService.addIngedients(ingredients)
    }
    
} 
