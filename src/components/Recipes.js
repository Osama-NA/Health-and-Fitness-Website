import React, { useState, useContext, useEffect, useRef } from 'react';
import HealthyFoods from './nested-components/HealthyFoods';
import SearchContainer from './nested-components/SearchContainer';
import RecipesList from './nested-components/RecipesList';
import NotificationTab from './nested-components/NotificationTab';
import { RecipesContext } from '../context/Recipes'

// SEARCH CONTAINER SECTION STYLES
import '../styles/desktop/SearchContainer.scss';
import '../styles/tablet/SearchContainer.scss';
import '../styles/mobile/SearchContainer.scss';

// HEALTHY FOODS SECTION STYLES
import '../styles/desktop/HealthyFoods.scss';
import '../styles/tablet/HealthyFoods.scss';
import '../styles/mobile/HealthyFoods.scss';

// HEALTHY FOODS SECTION STYLES
import '../styles/desktop/RecipesList.scss';
import '../styles/tablet/RecipesList.scss';
import '../styles/mobile/RecipesList.scss';

const Recipes = () => {
    const [showNotificationTab, setShowNotificationTab] = useState(false);
    const [hideLoader, setHideLoader] = useState(false); 

    const { recipes, setRecipes } = useContext(RecipesContext);

    const recipesScroll = useRef(); 

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

            // used in SearchContainer and HealthyFoods components to hide loader when recipes are found
            setHideLoader(true);
        }
    }

    useEffect(() => {

    })

    // Scrolling to recipes when new recipes are displayed
    useEffect(() => {
        if (recipes.length > 0) {
            recipesScroll.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [recipes]);

    return (
        <main className="recipes">
            <SearchContainer searchForRecipes={searchForRecipes} hideLoader={hideLoader}  />
            <HealthyFoods searchForRecipes={searchForRecipes} hideLoader={hideLoader} />
            {recipes.length > 0 ? <RecipesList recipes={recipes} recipesScroll={recipesScroll} /> : null}
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
        return {
            name: recipe.recipe.label,
            prepTime: recipe.recipe.totalTime,
            ingredients: recipe.recipe.ingredientLines,
            calories: recipe.recipe.calories,
            image: recipe.recipe.images.SMALL.url
        }
    });
}

export default Recipes