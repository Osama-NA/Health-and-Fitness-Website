import React, { useEffect, useState, useCallback } from 'react';

// Only displayed if the user is on mobile size screen
const MenuButton = ({isMenuOpened, setIsMenuOpened}) => {
    return (
        isMobile() && <Button isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened} />
    )
}

const Button = ({ isMenuOpened, setIsMenuOpened }) => {

    const [dashTwoStyle, setDashTwoStyle] = useState('none');
    const [dashThreeStyle, setDashThreeStyle] = useState('none');

    // Applies animation to the menu button on click event
    const handleMenuButton = useCallback(() => {
        if (isMenuOpened) {
            setDashTwoStyle('fadeDownClose')
            setDashThreeStyle('fadeUpClose')
        } else if (!isMenuOpened) {
            setDashTwoStyle('fadeUpOpen')
            setDashThreeStyle('fadeDownOpen')
        }
    }, [isMenuOpened]);

    // Called on every click event on the menu button
    useEffect(() => {
        handleMenuButton();
    }, [handleMenuButton, isMenuOpened]);

    return(
        <div className="menu-button" onClick={() => setIsMenuOpened(!isMenuOpened)}>
            <div className="dash-2 dash" style={{ animationName: dashTwoStyle }}></div>
            <div className="dash-1 dash"></div>
            <div className="dash-3 dash" style={{ animationName: dashThreeStyle}}></div>
        </div>
    )
}

const isMobile = () => document.body.offsetWidth < 769;

export default MenuButton;