import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { InvokeFunctionExpr } from '@angular/compiler';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
