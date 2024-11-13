import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList';
const productImages = require.context('./assets', true);


function App() {
  return (
    <div>
      
      <ProductList />
    </div>
  );
}

export default App;
