import React, { useEffect, useState, useCallback } from 'react';

// Menu button is only displayed if the user is on mobile size screen
const MenuButton = ({isMenuOpened, setIsMenuOpened}) => {
    return (
        isMobile() && <Button isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened} />
    )
}

const Button = ({ isMenuOpened, setIsMenuOpened }) => {

    // initial state should be 'none' since the menu is closed initially
    // to avoid applying opened menu menu button animation initially
    const [dashTwoAnimation, setDashTwoAnimation] = useState('none');
    const [dashThreeAnimation, setDashThreeAnimation] = useState('none');

    // Applies animation to the menu button on click event
    const handleMenuButton = useCallback(() => {
        if (isMenuOpened) {
            setDashTwoAnimation('fadeDownClose')
            setDashThreeAnimation('fadeUpClose')
        } else if (!isMenuOpened) {
            setDashTwoAnimation('fadeUpOpen')
            setDashThreeAnimation('fadeDownOpen')
        }
    }, [isMenuOpened]);

    // Called on every click event on the menu button
    useEffect(() => {
        handleMenuButton();
    }, [handleMenuButton, isMenuOpened]);

    return(
        <div className="menu-button" onClick={() => setIsMenuOpened(!isMenuOpened)}>
            <div className="dash-2 dash" style={{ animationName: dashTwoAnimation }}></div>
            <div className="dash-1 dash"></div>
            <div className="dash-3 dash" style={{ animationName: dashThreeAnimation}}></div>
        </div>
    )
}

const isMobile = () => document.body.offsetWidth < 769;

export default MenuButton;