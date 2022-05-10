import React, { useContext, useState, useEffect, useCallback } from 'react';
import { FavoritesContext } from '../../context/Favorites'

const AddToFavorites = ({ recipe }) => {
    const [addToFavorites, setAddToFavorites] = useState(true);

    const { favorites, setFavoriteRecipes } = useContext(FavoritesContext);

    // Returns favorite recipes excluding current recipe
    const getFavoritesWithoutThisRecipe = useCallback(() => {
        return favorites.filter(favoriteRecipe => {
            return favoriteRecipe.ingredients.toString() !== recipe.ingredients.toString()
        })
    },[favorites, recipe.ingredients])

    // checks if current recipe is a favorite
    const checkIfAFavoriteRecipe = useCallback(() => {
        let updatedFavoriteRecipes = getFavoritesWithoutThisRecipe();

        favorites.length !== updatedFavoriteRecipes.length ?
            setAddToFavorites(false):
            setAddToFavorites(true)
    }, [favorites.length, getFavoritesWithoutThisRecipe])

    const addFavorite = () => {
        const updatedFavoriteRecipes = [...favorites, recipe];
        setFavoriteRecipes(updatedFavoriteRecipes)
        setAddToFavorites(false);
    }

    const removeFavorite = () => {
        const updatedFavoriteRecipes = getFavoritesWithoutThisRecipe();
        setFavoriteRecipes(updatedFavoriteRecipes)
        setAddToFavorites(true);
    }

    useEffect(() => {
        checkIfAFavoriteRecipe()
    }, [checkIfAFavoriteRecipe])

    return (
        <p className="add-favorite" onClick={addToFavorites ? addFavorite : removeFavorite}>
            <svg className="fa-solid fa-bookmark" />
            {
                addToFavorites ?
                    <span>Add to favorites</span> :
                    <span>Remove from favorites</span> 
            }
        </p>
    )
}

export default AddToFavorites;