import { useEffect, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import MenuButton from './nested-components/MenuButton';
import Menu from './nested-components/NavMenu';
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

const Header = ({scroll}) => {
    const [isMenuOpened, setIsMenuOpened] = useState(false);
    const [headerStyle, setHeaderStyle] = useState(null);

    const handleBackgroundColor = useCallback(() => {
        if (isMobile()) return;

        scroll > 0 ?
            setHeaderStyle(FILLED_BACKGROUND) :
            setHeaderStyle(TRANSPARENT);
    },[scroll]);

    useEffect(() => {
        handleBackgroundColor();
    }, [handleBackgroundColor, scroll]);

    return (
        <header style={headerStyle}>
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