import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ProductList from './productList';
import ProductDetail from "./productDetail";

function Cart() {
  return <h2>Cart</h2>;
}

function App() {
  return (
      <Router>
        <div className="links">
          <div className="link"><Link to="/">Products</Link></div>
          <div className="link"><Link to="/cart/">Cart</Link></div>
        </div>

          <Route path="/" exact component={ProductList} />
          <Route path="/details/:id" component={ProductDetail} />
          <Route path="/cart/" component={Cart} />
      </Router>
  );
}

export default App;
