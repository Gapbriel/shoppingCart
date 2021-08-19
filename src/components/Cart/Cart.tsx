import React, { useContext } from 'react';
import CartItem from '../CartItem/CartItem';
import { ShopContext } from '../Shop/Shop';
import { Product } from '../../types/types';
import { addItemToCart as addItem, removeItemToCart as removeItem } from '../../Actions/actions';
import './Cart.css'
const Cart: React.FC = () => {

    const { state, dispatch } = useContext(ShopContext);

    const addItemToCart = (product: Product) => {
        dispatch(addItem(product));
    }
    const removeItemFromCart = (sku: string) => {
        dispatch(removeItem(sku));
    }

    return (
        <div className="cart-container">
            <div className="cart-title"> Cart </div>
            <div className="cart-list-container">
                {state.cartList.products && state.cartList.products.map((item: Product) => <CartItem key={item.sku} product={item} addItemToCart={addItemToCart} removeItemFromCart={removeItemFromCart} />)}
            </div>
            <div className="cart-list-totals">
                <div className="cart-list-count">{state.cartList.count} Items</div>
                <div className="cart-list-total-price">
                    Total :  ${state.cartList.totalPrice}
                </div>
            </div>
        </div>
    )
};


export default Cart;