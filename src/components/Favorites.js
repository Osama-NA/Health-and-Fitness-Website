import React, { useContext, useState, useEffect } from 'react';
import { FavoritesContext } from '../context/Favorites'
import RecipesList from './nested-components/RecipesList';
import { Link } from 'react-router-dom';

import '../styles/desktop/RecipesList.scss';
import '../styles/tablet/RecipesList.scss';
import '../styles/mobile/RecipesList.scss';

import '../styles/desktop/Favorites.scss';
import '../styles/tablet/Favorites.scss';
import '../styles/mobile/Favorites.scss';

const Favorites = () => {
    const [favoritesFound, setFavoritesFound] = useState(null);
    const { favorites } = useContext(FavoritesContext);

    useEffect(() => {
        favorites.length > 0 ? setFavoritesFound(true) : setFavoritesFound(false);
    }, [favorites.length])

    return (
        <main className="favorite-recipes">
            <RecipesList recipes={favorites} title="My favorite recipes" />
            <NoFavoritesFound favoritesFound={favoritesFound} />
        </main>
    )
}

const NoFavoritesFound = ({ favoritesFound}) => {
    return(
        <>
            {
                !favoritesFound && <Link to="/Recipes" className="no-favorites">
                                        <p>No favorite recipes yet.</p>
                                        <p><span>Search</span> for your favorite recipes!</p>
                                    </Link>
            }
        </>
    )
}

export default Favorites