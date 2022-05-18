import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Recipes from './Recipes';
import Favorites from './Favorites';
import Calories from './Calories';
import MealPlanning from './MealPlanning';

const Pages = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} exact></Route>
            <Route path="/Recipes" element={<Recipes />} exact></Route>
            <Route path="/Favorites" element={<Favorites />} exact></Route>
            <Route path="/Calories" element={<Calories />} exact></Route>
            <Route path="/Meal-planning" element={<MealPlanning />} exact></Route>
        </Routes>
  )
}

export default Pages;