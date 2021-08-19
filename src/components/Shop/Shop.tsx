import React, { useReducer } from 'react';
import ProductList from '../ProductList/productList';
import Cart from '../Cart/Cart';
import { contextShopType } from '../../types/types';
import ShopReducer from '../../reducer/ShopReducer'
import { useProducts } from '../../hooks/useProducts';
import './Shop.css';


export const ShopContext = React.createContext({} as contextShopType);

const Shop: React.FC = () => {

    const initialState = {
        productList: [],
        cartList: {
            products: [],
            totalPrice: 0,
            count: 0
        }
    }
    const [state, dispatch] = useReducer(ShopReducer, initialState);


    const { loading, products } = useProducts();


    return (
        <ShopContext.Provider value={{ state, dispatch }} >
            {!loading ? (<div className="shop-container">
                <ProductList products={products} />
                {state.cartList.products.length ? (
                    <Cart />
                ) : <></>}
            </div>) : <div> Loading...</div>
            }
        </ShopContext.Provider >
    );

}

export default Shop;