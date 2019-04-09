import React, {Component} from 'react';
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './productList.css';

let result;
class ProductList extends Component {
    state = {
        products: []
    };


    componentDidMount() {
        axios.get('https://my-json-server.typicode.com/tdmichaelis/json-api/products')
            .then(response => {
                // handle success
                result = response.data;
                this.setState({products: result});
                console.log(result);
            });
    }

    renderedList(){
        return this.state.products.map(product => {
           return (
               <Link to="/details/" key={product.id} id={product.id} className="product" onClick={() => {this.details(product)}}>
                   <img className="img" src={product.img} alt={product.title}/>
               </Link>
           )
        });
    }

    details(product){
        console.log(product);
    }

    render() {
        return(
            <div className="productList">{this.renderedList()}</div>
        )
    }
}

export default ProductList;