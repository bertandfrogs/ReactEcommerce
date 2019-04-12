import React, {Component} from 'react';
import './cart.css';
import store from "./store";
import { Redirect } from "react-router-dom";


class Cart extends Component {

    render(){
        if(store.getState().length === 0){
            return <Redirect to='/'/>
        }
        else {
            return <h2>Cart</h2>
        }
    }
}

export default Cart;