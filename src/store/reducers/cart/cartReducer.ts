import {
  CartActionTypes,
  CartActionWithPayload
} from "../../actions/cartActions";
import reducerWithActionMap, { ActionMap } from "../../reduxHelper";

import { CartState } from "../types/CartState";
import { Reducer } from "redux";
import addItemToCart from "../../../shared/cart.utils";

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

const actionMap: ActionMap<CartState, CartActionWithPayload> = {
  [CartActionTypes.TOGGLE_CART_HIDDEN]: toggleCartHidden,
  [CartActionTypes.ADD_ITEM]: addItem
};

export default reducerWithActionMap(actionMap, initialState);
