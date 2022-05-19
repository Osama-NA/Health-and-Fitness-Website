import React, { useContext} from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { ScrollContext } from '../../context/Scroll'


const MenuItems = ({ setIsMenuOpened}) => {
  const location = useLocation();

  const { samePageScroll } = useContext(ScrollContext);

  const handleMenuItemClick = () => {
  // scrolls top if already on clicked page
    window.scrollTo(0, 0)
    setIsMenuOpened(false)
  }

  // router doesn't re-scroll to contact if already on home page
  // so a re scroll is triggered by update scroll context which 
  // triggers a useEffect in Home page component to re-scroll
  const handleContactClick = () => {
    if (location.pathname === "/" && location.search === "?to=Contact") samePageScroll()
    
    setIsMenuOpened(false)
  }
  
  return (
      <>
          <Link to="Recipes" onClick={handleMenuItemClick}>Recipes</Link>
          <Link to="Calories" onClick={handleMenuItemClick}>Calories</Link>
          <Link to="Meal-planning" onClick={handleMenuItemClick}>Meal planning</Link>
          <Link to={`/?to=Contact`} onClick={handleContactClick}>Contact</Link>
      </>
  )
}

export default MenuItems