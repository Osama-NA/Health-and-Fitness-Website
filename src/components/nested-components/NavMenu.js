import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Menu = ({ isMenuOpened }) => {
    const [menuAnimation, setMenuAnimation] = useState('none');

    // Applies open / close animation to the menu when the menu button is clicked
    useEffect(() => {
        if (isMenuOpened) {
            setMenuAnimation('openMenu')
        } else {
            setMenuAnimation('closeMenu')
        }
    }, [isMenuOpened]);

    return (
        <nav className="menu" style={{ animationName: menuAnimation }}>
            <Link to="Recipes">Recipes</Link>
            <Link to="Calories">Calories</Link>
            <Link to="Contact">Contact</Link>
        </nav>
    )
}

export default Menu;