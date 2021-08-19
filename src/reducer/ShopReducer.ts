import { Action, ShopStore, TypeAction, Product } from '../types/types';

const findAndAddAmount = (products: Product[], productToFound: Product): Product[] => {
  const founded = products.find((product) => product.sku === productToFound.sku);
  if (founded) {
    return products.map((product) =>
      product.sku === founded.sku ? { ...product, amount: product.amount + 1 } : product
    );
  }
  return [...products, { ...productToFound, amount: 1 }];
};

function findAndRemoveOrDecreaseAmount(products: Product[], sku: String): Product[] {
  return products.reduce((acc, product): Product[] => {
    if (product.sku === sku) {
      //if i have already a product , we need to decrease the amount
      if (product.amount > 1) {
        return [...acc, { ...product, amount: product.amount - 1 }];
      } else {
        //if i found it but i have 1 amount , we need to don't add to acc
        return acc;
      }
    } else {
      //if i don't found it , return the acc
      return acc;
    }
  }, [] as Product[]);
}

const ShopReducer = (state: ShopStore, action: Action<TypeAction>): ShopStore => {
  const { productList } = state;
  const { products, totalPrice, count } = state.cartList;
  switch (action.type) {
    case 'ADD_TO_LIST':
      return { ...state, productList: [...productList, action.payload as Product] };
    case 'ADD_TO_CART':
      const { price } = action.payload as Product;
      return {
        ...state,
        cartList: {
          products: findAndAddAmount(products, action.payload as Product),
          count: count + 1,
          totalPrice: totalPrice + price,
        },
      };
    case 'REMOVE_TO_CART':
      return {
        ...state,
        cartList: {
          products: findAndRemoveOrDecreaseAmount(products, action.payload as String),
          count: count - 1,
          totalPrice: products.reduce((acc, item) => item.price * item.amount + acc, 0),
        },
      };
    default:
      return state;
  }
};

export default ShopReducer;
