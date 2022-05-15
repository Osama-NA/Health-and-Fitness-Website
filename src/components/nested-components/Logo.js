import React from 'react'
import { Link } from 'react-router-dom';

const Logo = ({setIsMenuOpened}) => {
    // Scrolls to top of home page if user is already on home page
    const handleLogoClick = () => {
        if (window.location.pathname === "/") window.scrollTo(0, 0);
        setIsMenuOpened(false)
    }
    
    return (
        <Link to="" className="logo" onClick={handleLogoClick}>
            <h1>FoodFinder</h1>
        </Link>
  )
}

export default Logo