import React, { useEffect, useState } from 'react';

const isMobile = () => document.body.offsetWidth < 769;

const MenuButton = ({isMenuOpened, setIsMenuOpened}) => {
    return isMobile() && <Button isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened} />
}

const Button = ({ isMenuOpened, setIsMenuOpened }) => {

    const [dashTwoStyle, setDashTwoStyle] = useState('none');
    const [dashThreeStyle, setDashThreeStyle] = useState('none');

    useEffect(() => {
        if (isMenuOpened) {
            setDashTwoStyle('fadeDownClose')
            setDashThreeStyle('fadeUpClose')
        } else {
            setDashTwoStyle('fadeUpOpen')
            setDashThreeStyle('fadeDownOpen')
        }
    }, [isMenuOpened]);

    return(
        <div className="menu-button" onClick={() => setIsMenuOpened(!isMenuOpened)}>
            <div className="dash-2 dash" style={{ animationName: dashTwoStyle }}></div>
            <div className="dash-1 dash"></div>
            <div className="dash-3 dash" style={{ animationName: dashThreeStyle}}></div>
        </div>
    )
}

export default MenuButton;