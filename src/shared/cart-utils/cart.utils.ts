import { CartItem } from "../../store/reducers/types/CartState";
import { ShopDataItem } from "../../store/reducers/types/ShopState";

export const addItemToCart = (
  cartItems: CartItem[],
  cartItemToAdd: ShopDataItem
): CartItem[] => {
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

export const removeItemFromCart = (
  cartItems: CartItem[],
  cartItemToRemove: ShopDataItem
) => {
  const existingCartItem = cartItems.find(
    item => item.id === cartItemToRemove.id
  );

  if (existingCartItem) {
    if (existingCartItem.quantity === 1) {
      return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }
    return cartItems.map(item =>
      item.id === cartItemToRemove.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
  }

  return cartItems;
};
