import React, {Component} from 'react';
import './cart.css';
import store from "./store";
import {Link, Redirect} from "react-router-dom";


class Cart extends Component {

    render(){
        if(store.getState()[0].products.length === 0){
            return <Redirect to='/'/>
        }
        else {
            return store.getState()[0].cart.map((product, index) => {
                return (
                    <div className="cartItem" key={index}>
                        <div className="itemPic">
                            <img className="img" src={product.img} alt={product.title}/>
                        </div>
                        <div className="itemInfo">
                            <div>{product.title}</div>
                            <div>{product.id}</div>
                            <div>${product.price}</div>
                            <div className='buttons'>
                                <Link to={'/details/' + product.id}>
                                    <button className="productPage">Product Page</button>
                                </Link>
                                <button className="remove" onClick={this.removeFromCart(product, index)}>Remove from Cart</button>
                            </div>
                        </div>
                    </div>
                )
            });
        }
    }

    removeFromCart(product, i){
        return () => {
            console.log('delete product ' + product.id + ' at index ' + i);
        }
    }
}

export default Cart;
