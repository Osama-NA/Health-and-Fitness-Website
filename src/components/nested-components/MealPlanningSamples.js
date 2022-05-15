import React from 'react'
import { mealPlanningSamples } from '../../utils/data'

const MealPlanningSamples = ({mealPlanningSamplesScroll}) => {
    return (
        <article className="meal-planning-samples">
            <div ref={mealPlanningSamplesScroll} className="scroll-ref"></div>

            <h2>Calories meal planning samples</h2>

            <table>
                <thead>
                    <tr className="heading-row">
                        <td>Meal</td>
                        <td>1200 Cal Plan</td>
                        <td>1500 Cal Plan</td>
                        <td>2000 Cal Plan</td>
                    </tr>
                </thead>

                <tbody>
                    {
                        mealPlanningSamples.map((row, i) => {
                            return row.col1 === "Total" ?
                                    <TotalRow key={i} row={row} /> :
                                    <PlansRow key={i} row={row} /> 
                        })
                    }
                </tbody>
            </table>
        </article>
  )
}

const PlansRow = ({row}) => {
    return (
        <tr className="plan-row">
            <td>{row.col1}</td>
            <td>{row.col2.map((calories, i) => <p key={i}>{calories}</p>)}</td>
            <td>{row.col3.map((calories, i) => <p key={i}>{calories}</p>)}</td>
            <td>{row.col4.map((calories, i) => <p key={i}>{calories}</p>)}</td>
        </tr>
    )
}

const TotalRow = ({row}) => {
    return(
        <tr className="total">
            <td>{row.col1}</td>
            <td>{row.col2}</td>
            <td>{row.col3}</td>
            <td>{row.col4}</td>
        </tr>
    )
}

export default MealPlanningSamples