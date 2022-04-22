import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/desktop/Home.scss';
import plateBackgroundImage from "../utils/images/home-background-plate-img.png"

const Home = () => {
    return (
        <main className="home">
            <article className="home-content">
                <h1>
                    A <span>healthy</span> outside starts from the inside
                </h1>
                <p>
                    Find the healthiest food for your body, track the right amount of calories to have in your meals.
                </p>
                <div className="home-buttons">
                    <Link to="Calories">Calorie Calculator</Link>
                    <Link to="Recipes">Recipes</Link>
                </div>
            </article>
            
            <aside className="plate-background">
                <img src={plateBackgroundImage} alt="Healthy food plate" />
            </aside>
        </main>
    )
}

export default Home;