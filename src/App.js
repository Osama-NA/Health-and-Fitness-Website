import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import Pages from './components/Pages';
import Header from './components/Header';

// BrowserRouter allows routing between children elements
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
