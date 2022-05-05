import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import Pages from './components/Pages';
import Header from './components/Header';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import { ScrollProvider } from './context/Scroll'
import { useState, useEffect } from 'react';


const App = () => {

  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      setScroll(window.scrollY);
    })
  }, [])

  return (
    <div className="App">
      <BrowserRouter> {/* BrowserRouter allows routing between children elements */}
        <ScrollProvider>
          <LoadingScreen />
          <Header scroll={scroll} />
          <Pages />
          <Footer />
        </ScrollProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;