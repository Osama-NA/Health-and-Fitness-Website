import { Link } from 'react-router-dom';

const HomeContent = () => {
    return (
        <article className="home-content">
            <h1>A <span>healthy</span></h1>
            <h1>outside starts</h1>
            <h1>from the inside</h1>

            <p>
                Find the healthiest food for your body, track the right amount of calories to have in your meals.
            </p>
            <div className="home-buttons">
                <Link to="Calories" className="calories-btn">Calorie Calculator</Link>
                <Link to="Recipes" className="recipes-btn">
                    <svg className="fa-solid fa-magnifying-glass"></svg>
                    <span>Recipes</span>
                </Link>
            </div>
        </article>
    )
}

export default HomeContent;