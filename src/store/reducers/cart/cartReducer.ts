import {
  CartActionTypes,
  CartActionWithPayload
} from "../../actions/cartActions";
import {
  addItemToCart,
  removeItemFromCart
} from "../../../shared/cart-utils/cart.utils";
import reducerWithActionMap, { ActionMap } from "../../storeHelper";

import { CartState } from "../types/CartState";
import { Reducer } from "redux";

type CartReducer = Reducer<CartState, CartActionWithPayload>;

const initialState: CartState = {
  hidden: true,
  cartItems: []
};

const toggleCartHidden: CartReducer = state => {
  const cartState = state as CartState;
  return {
    ...cartState,
    hidden: !cartState.hidden
  };
};

const addItem: CartReducer = (state, action) => {
  const cartState = state as CartState;
  return {
    ...cartState,
    cartItems: addItemToCart(cartState.cartItems, action.payload.item)
  };
};

const removeItem: CartReducer = (state, action) => {
  const cartState = state as CartState;
  return {
    ...cartState,
    cartItems: removeItemFromCart(cartState.cartItems, action.payload.item)
  };
};

const clearItem: CartReducer = (state, action) => {
  const cartState = state as CartState;
  return {
    ...cartState,
    cartItems: cartState.cartItems.filter(
      cartItem => cartItem.id !== action.payload.item.id
    )
  };
};

const actionMap: ActionMap<CartState, CartActionWithPayload> = {
  [CartActionTypes.TOGGLE_CART_HIDDEN]: toggleCartHidden,
  [CartActionTypes.ADD_ITEM]: addItem,
  [CartActionTypes.REMOVE_ITEM]: removeItem,
  [CartActionTypes.CLEAR_ITEM]: clearItem
};

export default reducerWithActionMap(actionMap, initialState);
