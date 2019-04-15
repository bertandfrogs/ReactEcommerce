import React, {Component} from 'react';
import './productDetail.css';
import store from './store';
import { Redirect } from 'react-router-dom'

class ProductDetail extends Component {
    details() {
        const { match: { params } } = this.props;
        let productId = params.id;
        let productData = store.getState()[productId -1];

        return (
            <div className="page">
                <div className="right">
                    <img className="productImg" src={productData.img} alt={productData.title}/>
                </div>
                <div className="left">
                    <p className="title">{productData.title}</p>
                    <p className="description">{productData.description}</p>
                    <p>Price: ${productData.price}</p>
                    <p>Star Rating: {productData.rating} / 5 </p>
                    <p>Percentage Rating: {Math.round(100* productData.rating / 5)}%</p>
                    <button className="cartButton" onClick={this.addProductToCart(productId)}>Add To Cart</button>
                </div>
            </div>
        );
    }

    addProductToCart(productId){
        return(
            () => {
                console.log("add product " + productId + " to cart");

            }
        )
    }

    render(){
        if(store.getState().length === 0){
            return <Redirect to='/'/>
        }
        else{
            return this.details()
        }
    }
}

export default ProductDetail;
