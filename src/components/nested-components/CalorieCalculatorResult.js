import React from 'react'

const CalorieCalculatorResult = ({ results, resultScroll }) => {
    return (
        <>
            <section className="calorie-calculator-result">
                <div ref={resultScroll} className="scroll-ref"></div>
                
                <h2>Results</h2>

                <div className="results">
                    {
                        results.map((result, i) => {
                            return <ResultItem 
                                        key={i} 
                                        goal={result.goal} 
                                        calory={result.calory}
                                        weight={result.weight}
                                    />
                        })
                    }
                </div>
            </section>
        </>
    )
}

const ResultItem = ({ goal, calory, weight }) => {
    return (
        <div className="result-item">
            <div className="goal">
                <p className="title">{goal}</p>
                {weight ? <p className="weight">{weight}</p> : null}
            </div>
            <div className="calories">
                <p className="text-1">{calory}</p>
                <p className="text-2">Calories / day</p>
            </div>
        </div>
    )
}

export default CalorieCalculatorResult