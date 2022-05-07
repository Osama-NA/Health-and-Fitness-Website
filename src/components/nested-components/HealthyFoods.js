import { healthyFoods } from '../../utils/data';

const HealthyFoods = () => {
    return (
        <section className="healthy-foods">
            <h2>Our <span>top 10</span> healthiest foods</h2>

            <div className="food-items">
                {
                    healthyFoods.map((food, i) => {
                        return <FoodItem key={i} name={food.name} image={food.image} />
                    })
                }
            </div>
        </section>
    )
}

const FoodItem = ({ name, image }) => {
    return (
        <div className="food-item" style={{ backgroundImage: `url('${image}')` }}>
            <p>{name}</p>
            <div className="overlay"></div>
        </div>
    )
}

export default HealthyFoods;