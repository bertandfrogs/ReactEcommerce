import React, {Component} from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import './productList.css';
import store from "./store";

let initialList = [];

class ProductList extends Component {
    state = {
        inputValue: '',
        list: []
    };

    componentDidMount() {
        store.subscribe(() => this.forceUpdate());
        if(store.getState().length === 0) {
            axios.get('https://my-json-server.typicode.com/tdmichaelis/json-api/products')
                .then(response => {
                    // handle success
                    store.dispatch({type: "ADD_PRODUCT", data: response.data});
                });
        }
    }

    renderedList(){
        initialList = store.getState();

        if(this.state.list.length === 0 && this.state.inputValue === ""){

            this.state.list = initialList;

            return this.state.list.map(product => {
                return (
                    <div key={product.id} id={product.id} className="product">
                        <Link to={'/details/' + product.id}>
                            <img className="img" src={product.img} alt={product.title}/>
                        </Link>
                    </div>
                )
            });
        }
        else if(this.state.list.length === 0 && this.state.inputValue !== ""){
            return (
                <div className="noResults">No results found for "{this.state.inputValue}".</div>
            );
        }
        else{
            return this.state.list.map(product => {
                return (
                    <div key={product.id} id={product.id} className="product">
                        <Link to={'/details/' + product.id}>
                            <img className="img" src={product.img} alt={product.title}/>
                        </Link>
                    </div>
                )
            });
        }

    }

    render() {
        return(
            <div className="pageWrapper">
                <div className="ui icon input searchBar">
                    <input type='text' placeholder='Search items...' value={this.state.inputValue} onChange={this.filterList}/>
                    <i aria-hidden="true" className="search icon"/>
                </div>
                <div className="productList">{this.renderedList()}</div>
            </div>
        )
    }

    filterList = (searchTerm) =>{
        let updatedList;
        updatedList = initialList.filter((item) => {
            let tempSearch = item.title.toLowerCase() + " " + item.category.toLowerCase();
            return tempSearch.search((searchTerm.target.value).toLowerCase()) !== -1;
        });
        this.setState({
            inputValue: searchTerm.target.value,
            list: updatedList
        })
    }
}

export default ProductList;