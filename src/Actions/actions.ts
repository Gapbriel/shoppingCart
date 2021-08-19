import { Product, Action, TypeAction } from '../types/types';
export const addItemToCart = (item: Product): Action<TypeAction> => {
  return {
    type: 'ADD_TO_CART',
    payload: item,
  };
};

export const removeItemToCart = (sku: string): Action<TypeAction> => {
  return {
    type: 'REMOVE_TO_CART',
    payload: sku,
  };
};

export const addItemToList = (item: Product): Action<TypeAction> => {
  return {
    type: 'ADD_TO_LIST',
    payload: item,
  };
};
