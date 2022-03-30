import './App.css';
import { Route, Routes } from 'react-router';
import ProductList from './components/ProductList';
import ShopCart from './components/ShopCart';

function App() {
  return (<>
        <Routes>
          <Route path="/" element={<ProductList/>} />
          <Route path="/Cart" element={<ShopCart />} />
        </Routes>
      </>);
};

export default App;

