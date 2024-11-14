import './App.css';
import ProductList from './components/ProductList';
import HomePage from './components/HomePage';
import ProductGalery from './components/ProductGalery';

const productImages = require.context('./assets', true);

function App() {
  return (
    <>
      <HomePage images={productImages} />
    </>
  );
}

export default App;
