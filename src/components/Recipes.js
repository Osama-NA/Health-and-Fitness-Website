import React, { useState, useContext, useEffect, useRef } from 'react';
import HealthyFoods from './nested-components/HealthyFoods';
import SearchContainer from './nested-components/SearchContainer';
import RecipesList from './nested-components/RecipesList';
import NotificationTab from './nested-components/NotificationTab';
import { RecipesContext } from '../context/Recipes';
import {useLocation} from 'react-router-dom'

import '../styles/desktop/SearchContainer.scss';
import '../styles/tablet/SearchContainer.scss';
import '../styles/mobile/SearchContainer.scss';

import '../styles/desktop/HealthyFoods.scss';
import '../styles/tablet/HealthyFoods.scss';
import '../styles/mobile/HealthyFoods.scss';

import '../styles/desktop/RecipesList.scss';
import '../styles/tablet/RecipesList.scss';
import '../styles/mobile/RecipesList.scss';

const Recipes = () => {
    const [showNotificationTab, setShowNotificationTab] = useState(false);
    const [hideLoader, setHideLoader] = useState(false); 

    const { recipes, setRecipes } = useContext(RecipesContext);

    const location = useLocation();

    const recipesScroll = useRef(); 

    const healthyFoodsScroll = useRef();

    // Passed down to SearchContainer and HealthyFoods to request recipes upon recipe search or click on a food type
    const searchForRecipes = async (query) => {
        if (query === "") return;

        // resetting hide loader
        setHideLoader(false);

        const requestURL = getRecipesSearchRequestRL(query);
        const searchRecipes = await fetch(requestURL);
        const returnedRecipes = await searchRecipes.json();

        if (returnedRecipes.to === 0) {
            setShowNotificationTab(true);
        } else {
            const recipes = getRequiredRecipesData(returnedRecipes.hits);
            setRecipes(recipes);
        }
        // used in SearchContainer and HealthyFoods components to hide loader when recipes are found
        setHideLoader(true);
    }

    // Scrolling to recipes when new recipes are displayed
    useEffect(() => {
        if (recipes.length > 0) {
            recipesScroll.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [recipes]);

    useEffect(() => {
        if (location.pathname === "/Recipes") window.scrollTo(0, 0)
        if (location.search === "?to=Healthy-foods") {
            healthyFoodsScroll.current.scrollIntoView();
        }
    }, [location.pathname, location.search])

    return (
        <main className="recipes">
            <SearchContainer searchForRecipes={searchForRecipes} hideLoader={hideLoader}  />
            <HealthyFoods searchForRecipes={searchForRecipes} hideLoader={hideLoader} healthyFoodsScroll={healthyFoodsScroll} />
            {recipes.length > 0 ? <RecipesList recipes={recipes} recipesScroll={recipesScroll} title="Recipes" /> : null}
            {showNotificationTab ? <NotificationTab text="No recipes found for your search" setShowNotificationTab={setShowNotificationTab} /> : null}
        </main>
    )
}

// Returns URL used to fetch recipes from edamam recipe search api
// using the required environment variables id and key which are stored in .env file
const getRecipesSearchRequestRL = (query) => {
    const id = process.env.REACT_APP_EDAMAM_APP_ID
    const key = process.env.REACT_APP_EDAMAM_APP_KEY
    return `https://api.edamam.com/api/recipes/v2?type=public&q=${query}s&app_id=${id}&app_key=${key}`
}

const getRequiredRecipesData = (recipes) => {
    return recipes.map((recipe) => {
        let largeImage = recipe.recipe.images.LARGE !== undefined ? 
            recipe.recipe.images.LARGE.url :
            recipe.recipe.images.REGULAR.url ;

        return {
            name: recipe.recipe.label,
            prepTime: recipe.recipe.totalTime,
            ingredients: recipe.recipe.ingredientLines,
            calories: recipe.recipe.calories,
            image: recipe.recipe.images.SMALL.url,
            largeImage: largeImage
        }
    });
}

export default Recipes