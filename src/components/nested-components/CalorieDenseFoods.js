import React from 'react'
import { calorieDenseFoods } from '../../utils/data'

const CalorieDenseFoods = ({ calorieDenseFoodsScroll }) => {
    return (
        <article className="calorie-dense-foods">
            <div ref={calorieDenseFoodsScroll} className="scroll-ref"></div>

            <h2>Top calorie dense foods to gain weight</h2>

            <table>
                <thead>
                    <tr className="heading-row">
                        <td>Food</td>
                        <td>Calories per 100g</td>
                    </tr>
                </thead>

                <tbody>
                    {
                        calorieDenseFoods.map((food, i) => {
                            return (
                                <tr key={i}>
                                    <td>{food.name}</td>
                                    <td>{food.calories}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </article>
    )
}

export default CalorieDenseFoods