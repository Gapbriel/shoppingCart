export type TypeAction = Product | string;

export type Product = {
  name: string;
  sku: string;
  price: number;
  amount: number;
  assets: {
    detail: {
      file: {
        url: string;
      };
    };
  };
};

export type ShopStore = {
  productList: Product[];
  cartList: {
    products: Product[];
    totalPrice: number;
    count: number;
  };
};

export type CartItemProps = {
  product: Product;
  addItemToCart: (product: Product) => void;
  removeItemFromCart: (id: string) => void;
};

export type listProductProps = {
  product: Product;
  handleAddToCart: (product: Product) => void;
};

export interface Action<TypeAction> {
  type: string;
  payload: TypeAction;
}

export type dispatch = {
  (action: Action<TypeAction>): void;
};

export type contextShopType = {
  state: ShopStore;
  dispatch: ({ type, payload }: { type: string; payload: TypeAction }) => void;
  // dispatch: dispatch;
};
