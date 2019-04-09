import React, {Component} from 'react';
import './productDetail.css';

class ProductDetail extends Component {
    details() {
        const { match: { params } } = this.props;
        return (
            <div>
                <h3>Product Id: {params.id}</h3>
            </div>
        );
    }

    render(){
        return this.details()
    }
}

export default ProductDetail;
