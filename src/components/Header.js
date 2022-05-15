import { useEffect, useCallback, useState } from 'react';
import MenuButton from './nested-components/MenuButton';
import Menu from './nested-components/NavMenu';
import Logo from './nested-components/Logo';
import {Link} from 'react-router-dom';
import '../styles/desktop/Header.scss';
import '../styles/tablet/Header.scss';
import '../styles/mobile/Header.scss';

const TRANSPARENT = {
    backgroundColor: "transparent",
    boxShadow: "none"
}

const FILLED_BACKGROUND = {
    backgroundColor: "#fbf8f3",
    boxShadow: "-10px 10px 30px rgba(119, 119, 119, 0.1)"
}

const isMobile = () => document.body.offsetWidth < 769;

const Header = ({ scroll, isMenuOpened, setIsMenuOpened }) => {
    // state variable used to handle header style toggle on scroll
    const [headerStyle, setHeaderStyle] = useState(null);

    // adds background color and dropdown shadow when user scrolls
    // otherwise removes background and dropdown shadow when user returns to the top of the page
    const handleBackgroundColor = useCallback(() => {
        if (isMobile()) return;

        scroll > 0 ? setHeaderStyle(FILLED_BACKGROUND) : setHeaderStyle(TRANSPARENT);
    },[scroll]);

    // calls handleBackgroundColor() whenever user scrolls
    useEffect(() => {
        handleBackgroundColor();
    }, [handleBackgroundColor, scroll]);

    return (
        <header style={headerStyle}>
            <MenuButton isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened} />
            <Logo setIsMenuOpened={setIsMenuOpened} />
            <Menu isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened} />
            <Favorites setIsMenuOpened={setIsMenuOpened} />
        </header>
  )
}

const Favorites = ({ setIsMenuOpened}) => {

    const handleClick= () => {
        window.scrollTo(0, 0)
        setIsMenuOpened(false);
    }

    return (
        <div className="favorites" onClick={handleClick} >
            <Link to="Favorites">
                <svg className="fa-solid fa-bookmark" />
            </Link>
        </div>
    )
}

export default Header;