import React, { useEffect } from 'react';
import MealPlanningSamples from './nested-components/MealPlanningSamples';
import { useLocation } from 'react-router-dom'
import { mealPlanningSamples } from '../utils/data'

import '../styles/desktop/MealPlanningSamples.scss'
import '../styles/tablet/MealPlanningSamples.scss';
import '../styles/mobile/MealPlanningSamples.scss';

const MealPlanning = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/Meal-planning") window.scrollTo(0, 0)
    }, [location.pathname, location.search])

    return (
        <main className="meal-planning-samples">
            {
                mealPlanningSamples.map((plan , i) => {
                    return <MealPlanningSamples 
                                plan={plan.plan} 
                                planHeading={plan.planHeading}
                                key={i} 
                            />
                })
            }
        </main>
  )
}

export default MealPlanning