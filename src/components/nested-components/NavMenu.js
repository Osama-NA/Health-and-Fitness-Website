import React, { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { ScrollContext } from '../../context/Scroll'
import MenuItems from './MenuItems'

const Menu = ({ isMenuOpened }) => {
    const location = useLocation();

    const { samePageScroll } = useContext(ScrollContext);

    // initial state should be 'none' since the menu is closed initially
    // to avoid applying opened menu animation initially
    const [menuAnimation, setMenuAnimation] = useState('none');

    // Applies open / close animation to the menu when the menu button is clicked
    useEffect(() => {
        isMenuOpened ? setMenuAnimation('openMenu') : setMenuAnimation('closeMenu')
    }, [isMenuOpened]);

    // Used to check if user is trying to navigate to a different section on same page,
    // because if the user is on the same page as the section that he is trying to navigate to,
    // react router will not reload page or scroll to required section.
    // Therefore, current page is scrolled to required section using a 
    // useEffect, on every update to the global state variable(scroll)
    const handleClick = (e) => {
        // Gets target page name by using the href of the clicked link
        let targetPage = e.target.href.replaceAll('/', " ").split(" ").reverse()[0].split("?")[0];
        // Gets current page name using 'useLocation' pathname from 'react-router-dom',
        let currentPage = location.pathname.replace("/", "");

        if (targetPage === currentPage) samePageScroll();
    }

    return (
        <nav className="menu" style={{ animationName: menuAnimation }} onClick={handleClick}>
            <MenuItems />
        </nav>
    )
}

export default Menu;