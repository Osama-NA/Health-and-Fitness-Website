import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/desktop/Home.scss';
import '../styles/tablet/Home.scss';
import plateBackgroundImage from "../utils/images/home-background-plate-img.png"

const IMAGE_ALT = "Image of healthy food from pexels.com by Allexana";

const Home = () => { 
    return (
        <main className="home">
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

            <aside className="plate-background">
                <img src={plateBackgroundImage} alt={IMAGE_ALT} draggable={false} />

                <div className="blurred-color-bg-1"></div>
                <div className="blurred-color-bg-2"></div>
            </aside>
        </main>
    )
}

export default Home;