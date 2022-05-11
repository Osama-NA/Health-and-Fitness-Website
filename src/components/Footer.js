import React from 'react'
import Logo from './nested-components/Logo'
import MenuItems from './nested-components/MenuItems';
import { Link } from 'react-router-dom';

import '../styles/desktop/Footer.scss';
import '../styles/tablet/Footer.scss';
import '../styles/mobile/Footer.scss';

const Footer = ({ setIsMenuOpened }) => {
  return (
    <footer>
      <Logo />
      <MenuItems setIsMenuOpened={setIsMenuOpened} />
      <Link to="Favorites" onClick={() => window.scrollTo(0, 0)}>Favorites</Link>
    </footer>
  )
}

export default Footer