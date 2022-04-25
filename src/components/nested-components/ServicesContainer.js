import Service from './Service';
import RecipesServiceImage from '../../utils/images/services-recipes-img.png';
import CaloriesServiceImage from '../../utils/images/services-calories-img.png';

const Services = ({ img, description, path, text, buttonIcon }) => {
    return (
        <div className="services-container">
            <Service
                description="Find the best meal for you and its recipes from FoodFinder's list of recommended meals or search for a recipe of your choice."
                path="Recipes"
                text="Find a Recipe"
                buttonIcon="fa-solid fa-bowl-rice"
                img={RecipesServiceImage}
            />
            <Service
                description="Get the right amount of calories you need to consume daily to maintain, lose, or gain weight and stay in a healthy shape."
                path="Calories"
                text="Calculate Calories"
                buttonIcon="fa-solid fa-fire-flame-curved"
                img={CaloriesServiceImage}
            />
        </div>
    )
}

export default Services;