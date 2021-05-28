import { Recipe } from '../recipe.model';
import * as RecipeActions from './recipe.actions';

export interface State
{
    recipes : Recipe[]
}

const initialState : State = {
    recipes : []
}

export function recipeReducer(state = initialState,action : RecipeActions.RecipeActions)
{
    switch(action.type)
    {
        case "ADD_RECIPES" :
            return { ...state , recipes :[ ...state.recipes , ...action.payload] };
        case "SET_RECIPES" :
            return { recipes : [...action.payload] };
        case "FETCH_RECIPES" :
            return state;
        default:
            return state;
    }
}