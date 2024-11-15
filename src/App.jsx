import './App.css';
import HomePage from './components/HomePage';
import ProductGalery from './components/ProductGallery';
import { products } from './products';
const productImages = require.context('./assets', true);

function App() {
  return (
    <>
      <HomePage images={productImages} />
      <ProductGalery images={productImages} products={products} />
    </>
  );
}

export default App;
