import RecipesServiceImage from '../../utils/images/services-recipes-img.png';
import CaloriesServiceImage from '../../utils/images/services-calories-img.png';
import { Link } from 'react-router-dom';

const SERVICE_ALT = "FoodFinder Services";

const Services = () => {
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

const Service = ({ img, description, path, text, buttonIcon }) => {
    return (
        <article className="service">
            <img src={img} alt={SERVICE_ALT} draggable={false} />

            <p>{description}</p>

            <Link to={path}>
                <span>{text}</span>
                <svg className={buttonIcon}></svg>
            </Link>
        </article>
    )
}


export default Services;