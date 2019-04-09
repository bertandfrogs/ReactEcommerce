import React, {Component} from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
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
               <div key={product.id} id={product.id} className="product">
                   <Link to={'/details/' + product.id}>
                       <img className="img" src={product.img} alt={product.title}/>
                   </Link>
               </div>
           )
        });
    }

    render() {
        return(
            <div>
                <input type="text" placeholder="Search..."></input>
                <div className="productList">{this.renderedList()}</div>
            </div>
        )
    }
}

export default ProductList;