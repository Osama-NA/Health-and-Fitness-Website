import { createContext, useReducer } from 'react';

const SET_FAVORITE_RECIPES = 'SET_FAVORITE_RECIPES';

const getStoredFavorites = () => {
    const favorites = localStorage.getItem("favorites");
    return favorites ? favorites : []
}

const initialState = getStoredFavorites();

const reducer = (state, action) => {
    switch (action.type) {
        case SET_FAVORITE_RECIPES:
            return action.favorites;
        default:
            return state;
    }
}

export const FavoritesContext = createContext(initialState);

export const FavoritesProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const setFavoriteRecipes = (favorites) => dispatch({ type: SET_FAVORITE_RECIPES, favorites })

    return (
        <FavoritesContext.Provider value={{
            favorites: state,
            setFavoriteRecipes
        }}>
            {children}
        </FavoritesContext.Provider>
    );
}