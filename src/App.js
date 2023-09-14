import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import { Products } from './pages/products/index'
import { Product } from './pages/product/index'
import { NotFound } from './pages/not found/index'
import { NavBar } from './components/navbar/index'
import { Cart } from './pages/cart/index'

function App() {
  return (
    <div className="App">
      Hello World
      <>
        <NavBar />
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
