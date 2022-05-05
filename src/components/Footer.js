import React from 'react'
import Logo from './nested-components/Logo'
import MenuItems from './nested-components/MenuItems'

import '../styles/desktop/Footer.scss';
import '../styles/tablet/Footer.scss';
import '../styles/mobile/Footer.scss';

const Footer = () => {
  return (
    <footer>
          <Logo />
          <MenuItems />
          <button>Favorites</button>
    </footer>
  )
}

export default Footer