import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import Pages from './components/Pages';
import Header from './components/Header';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Pages />
    </BrowserRouter>
  );
}

export default App;
