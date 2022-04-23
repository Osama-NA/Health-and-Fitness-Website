import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import Pages from './components/Pages';
import Header from './components/Header';
import LoadingScreen from './components/LoadingScreen';
import { useState, useEffect } from 'react';

// BrowserRouter allows routing between children elements
const App = () => {

  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      setScroll(window.scrollY)
    })
  })

  return (
    <div className="App">
      <BrowserRouter>
        <LoadingScreen />
        <Header scroll={scroll} />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
