import React from 'react'

const MealPlanningSamples = ({ planHeading, plan }) => {
    return (
        <article>
            <h2>{planHeading}</h2>

            <table>
                <thead>
                    <tr className="heading-row">
                        <td>Meal</td>
                        <td>Plan</td>
                    </tr>
                </thead>

                <tbody>
                    {
                        plan.map((row, i) => {
                            return row.meal === "Total" ?
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
            <td>{row.meal}</td>
            <td>{row.plan.map((calories, i) => <p key={i}>{calories}</p>)}</td>
        </tr>
    )
}

const TotalRow = ({row}) => {
    return(
        <tr className="total">
            <td>{row.meal}</td>
            <td>{row.plan}</td>
        </tr>
    )
}

export default MealPlanningSamples