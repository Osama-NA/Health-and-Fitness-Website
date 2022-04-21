import React from 'react'
import '../styles/Header.scss';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <h1>FoodFinder</h1>
            <nav className="menu">
                <Link to="Recipes">Recipes</Link>
                <Link to="Calories">Calories</Link>
                <Link to="Contact">Contact</Link>
            </nav>
            <div className="favorites">
                <i class="fa-solid fa-bookmark"></i>
            </div>
        </header>
  )
}

export default Header;