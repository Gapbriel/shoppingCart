import React from 'react';
import { listProductProps } from '../../types/types'
import './Product.css'

const Product: React.FC<listProductProps> = ({ product, handleAddToCart }) => {

    return (
        <div className="product-item">
            <img alt='alt' width="50" src={product.assets.detail.file.url} />
            <label>{product.name}</label>
            <label>${product.price}</label>
            <button onClick={() => handleAddToCart(product)}> Buy Me!!</button>
        </div>
    )
};


export default Product;