import React from 'react'
import Logo from './nested-components/Logo'
import MenuItems from './nested-components/MenuItems';
import { Link } from 'react-router-dom';

import '../styles/desktop/Footer.scss';
import '../styles/tablet/Footer.scss';
import '../styles/mobile/Footer.scss';

const Footer = ({ setIsMenuOpened }) => {

  const handleFavoritesClick = () => {
    window.scrollTo(0, 0)
    setIsMenuOpened(false)
  }

  return (
    <footer>
      <Logo setIsMenuOpened={setIsMenuOpened}/>
      <MenuItems setIsMenuOpened={setIsMenuOpened} />
      <Link to="Favorites" onClick={handleFavoritesClick}>Favorites</Link>
    </footer>
  )
}

export default Footer