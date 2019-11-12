import { CartItem } from "../store/reducers/types/CartState";
import { ShopDataItem } from "./shop.data";

const addItemToCart = (cartItems: CartItem[], cartItemToAdd: ShopDataItem) => {
  const existingCartItem = cartItems.find(item => item.id === cartItemToAdd.id);

  if (existingCartItem) {
    return cartItems.map(item =>
      item.id === cartItemToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export default addItemToCart;
