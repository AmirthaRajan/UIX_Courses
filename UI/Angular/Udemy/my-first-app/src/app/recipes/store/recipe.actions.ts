import { Action } from '@ngrx/store';
import { Recipe } from '../recipe.model';

export const SET_RECIPES = 'SET_RECIPES';
export const ADD_RECIPE = 'ADD_RECIPE';
export const ADD_RECIPES = 'ADD_RECIPES';
export const UPDATE_RECIPE = 'UPDATE_RECIPE';
export const DELETE_RECIPE = 'DELETE_RECIPE';
export const FETCH_RECIPES = 'FETCH_RECIPES';

export class FetchRecipes implements Action
{
    readonly type = FETCH_RECIPES;
}

export class SetRecipes implements Action
{
    readonly type = SET_RECIPES;

    constructor(public payload : Recipe[]){}
}

export class AddRecipes implements Action
{
    readonly type = ADD_RECIPES;

    constructor(public payload : Recipe[]){}
}

export type RecipeActions = SetRecipes | AddRecipes | FetchRecipes;