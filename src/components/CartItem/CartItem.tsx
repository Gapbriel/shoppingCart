import React from 'react';
import { CartItemProps } from '../../types/types';
import './CartItem.css';

const CartItem: React.FC<CartItemProps> = ({ product, addItemToCart, removeItemFromCart }) => {

    if (!product) return <div />

    return (
        <div className="cart-item-container">
            <img alt="none" width="50" src={product.assets.detail.file.url} />
            <label>{product.name}</label>
            <label>${product.price}</label>

            <div className="button-container">
                <button onClick={() => removeItemFromCart(product.sku)}> - </button>
                <label>{product.amount}</label>
                <button onClick={() => addItemToCart(product)}> +</button>
            </div>
        </div>
    )
};


export default CartItem;