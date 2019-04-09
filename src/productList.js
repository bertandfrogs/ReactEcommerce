import React, {Component} from 'react';
import axios from "axios";
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
               <div key={product.id} id={product.id}>
                   {/*<h1 className="title">{product.title}</h1>*/}
                   {/*<div className="description">{product.description}</div>*/}
                   {/*<div className="price">{product.price}</div>*/}
                   {/*<div className="rating">${product.rating}</div>*/}
                   <img className="img" src={product.img} alt={product.title}/>
               </div>
           )
        });
    }

    render() {
        return(
            <div>{this.renderedList()}</div>
        )
    }
}

export default ProductList;