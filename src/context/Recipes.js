import { createContext, useReducer } from 'react';

const SET_RECIPES = 'SET_RECIPES';

const reducer = (state, action) => {
    switch (action.type) {
        case SET_RECIPES:
            return action.recipes;
        default:
            return state;
    }
}

export const RecipesContext = createContext([]);

export const RecipesProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, []);

    const setRecipes = (recipes) => dispatch({ type: SET_RECIPES, recipes })

    return (
        <RecipesContext.Provider value={{
            recipes: state,
            setRecipes,
        }}>
            {children}
        </RecipesContext.Provider>
    );
}