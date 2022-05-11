import React, { useEffect, useState } from 'react';
import MenuItems from './MenuItems'

const Menu = ({ isMenuOpened, setIsMenuOpened }) => {
    // initial state should be 'none' since the menu is closed initially
    // to avoid applying opened menu animation initially
    const [menuAnimation, setMenuAnimation] = useState('none');

    // Applies open / close animation to the menu when the menu button is clicked
    useEffect(() => {
        isMenuOpened ? setMenuAnimation('openMenu') : setMenuAnimation('closeMenu')
    }, [isMenuOpened]);

    return (
        <nav className="menu" style={{ animationName: menuAnimation }}>
            <MenuItems setIsMenuOpened={setIsMenuOpened} />
        </nav>
    )
}

export default Menu;