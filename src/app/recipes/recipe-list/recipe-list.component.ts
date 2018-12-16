import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("A test recipe", "This is just for the test", 'https://torange.biz/photo/35/IMAGE/pumpkin-autumn-still-life-illustration-recipes-35541.jpg'),
    new Recipe("A new recipe", "This is another for the test", 'https://images.pexels.com/photos/569356/pexels-photo-569356.jpeg?cs=srgb&dl=bangladesh-bangladesh-food-recipes-bd-ranna-569356.jpg&fm=jpg')
  ]
  constructor() { }

  ngOnInit() {
  }

}
