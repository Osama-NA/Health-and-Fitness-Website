import {useState, useEffect} from 'react';
import { healthyFoods } from '../../utils/data';
import Loader from './Loader';

// searchForRecipes Function is passed to each food item
// On click of any of the food items the function is called to search for the clicked item
const HealthyFoods = ({ searchForRecipes, hideLoader, healthyFoodsScroll}) => {
    const [showLoader, setShowLoader] = useState(false);

    useEffect(() => {
        setShowLoader(false);
    }, [hideLoader])

    return (
        <section className="healthy-foods">
            <div ref={healthyFoodsScroll} className="scroll-ref"></div>
            <h2>Our top 10 healthiest foods</h2>

            <div className="food-items">
                {
                    healthyFoods.map((food, i) => {
                        return <FoodItem
                            key={i}
                            name={food.name}
                            image={food.image}
                            query={food.query}
                            searchForRecipes={searchForRecipes}
                            setShowLoader={setShowLoader}
                        />
                    })
                }
            </div>

            {showLoader ? <Loader /> : null}
        </section>
    )
}

const FoodItem = ({ name, image, query, searchForRecipes, setShowLoader }) => {

    const handleClick = () => {
        setShowLoader(true)
        searchForRecipes(query)
    }

    return (
        <div 
            onClick={handleClick} 
            className="food-item" 
            style={{ backgroundImage: `url('${image}')` }}
        >
            <p>{name}</p>
            <div className="overlay"></div>
        </div>
    )
}

export default HealthyFoods;