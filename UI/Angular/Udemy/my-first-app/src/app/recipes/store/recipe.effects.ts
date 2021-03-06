import { Actions, Effect, ofType } from '@ngrx/effects';
import * as RecipeActions from './recipe.actions';
import { switchMap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../recipe.model';
import { Injectable } from '@angular/core';

@Injectable()
export class RecipeEffects
{
    @Effect()
    fetchRecipes = this.actions$.pipe(
        ofType(RecipeActions.FETCH_RECIPES),
        switchMap(RecipeAction => {
           return this.http.get<Recipe[]>('https://angular-burget.firebaseio.com/recipes.json')
        }),map(recipes => {
            return recipes.map(recipe => {
                return {
                    ...recipe,
                    ingredients : recipe.ingredients ? recipe.ingredients : []
                }
            })
        }),
        map(recipes => {
            return new RecipeActions.SetRecipes(recipes)
        })
    );

    constructor(private actions$ : Actions,private http : HttpClient){}
}