import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../styles/desktop/Header.scss';
import '../styles/tablet/Header.scss';
import '../styles/mobile/Header.scss';
import MenuButton from './nested-components/MenuButton';
import Menu from './nested-components/NavMenu';

const Header = () => {
    const [isMenuOpened, setIsMenuOpened] = useState(false);

    return (
        <header>
            <MenuButton isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened} />
            <Logo />
            <Menu isMenuOpened={isMenuOpened} />
            <Favorites />
        </header>
  )
}

const Logo = () => {
    return(
        <Link to="" className="logo">
            <h1>FoodFinder</h1>
        </Link>
    )
}

const Favorites = () => {
    return (
        <div className="favorites">
            <button>
                <svg className="fa-solid fa-bookmark" />
            </button>
        </div>
    )
}

export default Header;