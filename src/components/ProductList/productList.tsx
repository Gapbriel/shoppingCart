import React, { useContext, useEffect } from 'react';
import { Product as ProductType } from '../../types/types'
import { ShopContext } from '../Shop/Shop';
import Product from '../Product/Product';
import { addItemToList, addItemToCart } from '../../Actions/actions';
import './productList.css';

type ProductLustProps = { products: ProductType[] | undefined };

const ProductList: React.FC<ProductLustProps> = ({ products }) => {
    const { state, dispatch } = useContext(ShopContext);
    useEffect(() => {
        if (products?.length) {
            products.forEach(element => {
                dispatch(addItemToList(element))
            });
        }
    }, [products, dispatch]);

    const handleAddToCart = (product: ProductType) => {
        dispatch(addItemToCart(product));
    }
    return (
        <div className="product-list">
            {state.productList && state.productList.map((product: ProductType) => <Product key={product.sku} product={product} handleAddToCart={handleAddToCart} />)}
        </div>
    )
};


export default ProductList;