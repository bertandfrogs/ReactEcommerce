import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ProductList from './productList';
import ProductDetail from "./productDetail";
import Cart from './cart.js'

function App() {
  return (
      <div className="">
          <Router>
            <div className="ui inverted menu">
              <Link to="/" className="item">Products</Link>
              <Link to="/cart/" className="item">Cart</Link>
            </div>

            <Route path="/" exact component={ProductList} />
            <Route path="/details/:id" component={ProductDetail} />
            <Route path="/cart/" component={Cart} />
          </Router>
      </div>
  );
}

export default App;
