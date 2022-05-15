import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import Pages from './components/Pages';
import Header from './components/Header';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import { ScrollProvider } from './context/Scroll'
import { RecipesProvider } from './context/Recipes'
import { FavoritesProvider } from './context/Favorites'
import { useState, useEffect } from 'react';


const App = () => {
  const [scroll, setScroll] = useState(0); // used in header to apply background color on scroll
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      setScroll(window.scrollY);
    })
  }, [])

  return (
    <div className="App" onLoad={() => setShowLoadingScreen(false)}>
      <BrowserRouter> {/* BrowserRouter allows routing between children elements */}
        <ScrollProvider>
          <RecipesProvider>
            <FavoritesProvider>
              
              <Header scroll={scroll} isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened} />
              <Pages />
              <Footer setIsMenuOpened={setIsMenuOpened} />
              
              {showLoadingScreen && <LoadingScreen />}
            </FavoritesProvider>
          </RecipesProvider>
        </ScrollProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;