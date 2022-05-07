import React from 'react';
import HealthyFoods from './nested-components/HealthyFoods';
import SearchContainer from './nested-components/SearchContainer';
import RecipesList from './nested-components/RecipesList';

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
    return (
        <main className="recipes">
            <SearchContainer />
            <HealthyFoods />
            <RecipesList />
        </main>
    )
}

export default Recipes