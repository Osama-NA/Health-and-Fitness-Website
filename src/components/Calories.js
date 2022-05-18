import CalorieCalculator from './nested-components/CalorieCalculator';
import CalorieCalculatorResult from './nested-components/CalorieCalculatorResult';
import FoodsCalories from './nested-components/FoodsCalories';
import CalorieDenseFoods from './nested-components/CalorieDenseFoods';
import React, {useEffect, useState, useRef} from 'react';
import { useLocation } from 'react-router-dom'

import '../styles/desktop/CalorieCalculator.scss';
import '../styles/tablet/CalorieCalculator.scss';
import '../styles/mobile/CalorieCalculator.scss';

import '../styles/desktop/CalorieCalculatorResult.scss'
import '../styles/tablet/CalorieCalculatorResult.scss';
import '../styles/mobile/CalorieCalculatorResult.scss';

import '../styles/desktop/FoodsCalories.scss'
import '../styles/tablet/FoodsCalories.scss';
import '../styles/mobile/FoodsCalories.scss';

import '../styles/desktop/CalorieDenseFoods.scss'
import '../styles/tablet/CalorieDenseFoods.scss';
import '../styles/mobile/CalorieDenseFoods.scss';

const Calories = () => {
    const [calculationResult, setCalculationResult] = useState([])

    const location = useLocation();

    const resultScroll = useRef(); // used to scroll to results when they're displayed

    const foodsCaloriesScroll = useRef();
    const calorieDenseFoodsScroll = useRef();

    useEffect(() => {
        if (location.pathname === "/Calories") window.scrollTo(0, 0)
        if (location.search === "?to=Common-foods-calories") {
            scrollTo(foodsCaloriesScroll)
        }
        if (location.search === "?to=Calorie-dense-foods") {
            scrollTo(calorieDenseFoodsScroll)
        }
    }, [location.pathname, location.search])

    useEffect(() => {
        if (resultScroll.current) {
            scrollTo(resultScroll)
        }
    }, [calculationResult])

    const scrollTo = (container) => {
        container.current.scrollIntoView()
    }

    return(
        <main className="calories">
            {/* CalorieCalculator retrieves and stores the results using setCalculationResult */}
            <CalorieCalculator setCalculationResult={setCalculationResult} />

            {/* when results are retrieved CalorieCalculatorResult is displayed and the results are passed to it */}
            {calculationResult.length > 0 && <CalorieCalculatorResult results={calculationResult} resultScroll={resultScroll} />}

            <section className="calories-sections">
                <FoodsCalories foodsCaloriesScroll={foodsCaloriesScroll} />
                <CalorieDenseFoods calorieDenseFoodsScroll={calorieDenseFoodsScroll} />
            </section>
        </main>
    )
}

export default Calories;