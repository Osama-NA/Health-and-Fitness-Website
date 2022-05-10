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

  useEffect(() => {
    document.addEventListener('scroll', () => {
      setScroll(window.scrollY);
    })
  }, [])

  return (
    <div className="App">
      <BrowserRouter> {/* BrowserRouter allows routing between children elements */}
        <ScrollProvider>
          <RecipesProvider>
            <FavoritesProvider>
              <LoadingScreen />
              <Header scroll={scroll} />
              <Pages />
              <Footer />
            </FavoritesProvider>
          </RecipesProvider>
        </ScrollProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;