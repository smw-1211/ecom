import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import { Products } from './pages/products/index'
import { Product } from './pages/product/index'
import { NotFound } from './pages/not found/index'
import { Cart } from './pages/cart/index'

function App() {
  return (
    <div className="App">

      Hello World

      <Products />
      <Product />
      <NotFound />
      <Cart />
    </div>
  );
}

export default App;
