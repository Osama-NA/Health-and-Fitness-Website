import CalorieCalculator from './nested-components/CalorieCalculator';
import CalorieCalculatorResult from './nested-components/CalorieCalculatorResult';
import React, {useEffect, useState, useRef} from 'react';
import { useLocation } from 'react-router-dom'

import '../styles/desktop/CalorieCalculator.scss';
import '../styles/tablet/CalorieCalculator.scss';
import '../styles/mobile/CalorieCalculator.scss';

import '../styles/desktop/CalorieCalculatorResult.scss'
import '../styles/tablet/CalorieCalculatorResult.scss';
import '../styles/mobile/CalorieCalculatorResult.scss';;

const Calories = () => {
    const [calculationResult, setCalculationResult] = useState([])

    const location = useLocation();

    const resultScroll = useRef(); // used to scroll to results when they're displayed

    useEffect(() => {
        if (location.pathname === "/Calories") window.scrollTo(0, 0)
    }, [location.pathname])

    useEffect(() => {
        if (resultScroll.current) {
            resultScroll.current.scrollIntoView()
        }
    }, [calculationResult])

    return(
        <main className="calories">
            {/* CalorieCalculator retrieves and stores the results using setCalculationResult */}
            <CalorieCalculator setCalculationResult={setCalculationResult} />
            {/* when results are retrieved CalorieCalculatorResult is displayed and the results are passed to it */}
            {calculationResult.length > 0 && <CalorieCalculatorResult results={calculationResult} resultScroll={resultScroll} />}
        </main>
    )
}

export default Calories;