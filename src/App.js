import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import Pages from './components/Pages';
import Header from './components/Header';
import LoadingScreen from './components/LoadingScreen';

// BrowserRouter allows routing between children elements
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <LoadingScreen />
        <Header />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
