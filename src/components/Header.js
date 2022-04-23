import { useEffect, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import MenuButton from './nested-components/MenuButton';
import Menu from './nested-components/NavMenu';
import '../styles/desktop/Header.scss';
import '../styles/tablet/Header.scss';
import '../styles/mobile/Header.scss';

const TRANSPARENT = "transparent";
const FILLED_BACKGROUND = "#fbf8f3";

const isMobile = () => document.body.offsetWidth < 769;

const Header = ({scroll}) => {
    const [isMenuOpened, setIsMenuOpened] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState(TRANSPARENT);

    const handleBackgroundColor = useCallback(() => {
        if (isMobile()) return;

        scroll > 0 ?
            setBackgroundColor(FILLED_BACKGROUND) :
            setBackgroundColor(TRANSPARENT);
    },[scroll]);

    useEffect(() => {
        handleBackgroundColor();
    }, [handleBackgroundColor, scroll]);

    return (
        <header style={{backgroundColor: backgroundColor}}>
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