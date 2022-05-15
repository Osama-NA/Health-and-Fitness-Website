import React from 'react'
import { commonFoodsCalories } from '../../utils/data'

const FoodsCalories = ({ foodsCaloriesScroll}) => {
    return (
        <article className="foods-calories">
            <div ref={foodsCaloriesScroll} className="scroll-ref"></div>

            <h2>Calories in common foods</h2>

            <table>
                <thead>
                    <tr className="heading-row">
                        <td>Food</td>
                        <td>Serving size</td>
                        <td>Calories</td>
                        <td>kJ</td>
                    </tr>
                </thead>

                {
                    commonFoodsCalories.map((category, i) => {
                        return (
                            <tbody key={i} className="category">
                                <tr className="category-row">
                                    <td>{category.categoryName}</td>
                                </tr>
                                {
                                    category.categoryRows.map((row, i) => {
                                        return <FoodRow row={row} key={i} />
                                    })
                                }
                            </tbody>
                        )
                    })
                }
            </table>
        </article>
    )
}

const FoodRow = ({ row, i }) => {
    return (
        <tr key={i} className="food-row">
            <td>{row.food}</td>
            <td>{row.servingSize}</td>
            <td>{row.calories}</td>
            <td>{row.kJ}</td>
        </tr>
    )
}

export default FoodsCalories