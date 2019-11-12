import {
  CartActionTypes,
  CartActionWithPayload
} from "../../actions/cartActions";
import reducerWithActionMap, { ActionMap } from "../../reduxHelper";

import { CartState } from "../types/CartState";
import { Reducer } from "redux";

type CartReducer = Reducer<CartState, CartActionWithPayload>;

const initialState: CartState = {
  hidden: true
};

const toggleCartHidden: CartReducer = state => {
  return {
    ...state,
    hidden: state ? !state.hidden : true
  };
};

const actionMap: ActionMap<CartState, CartActionWithPayload> = {
  [CartActionTypes.TOGGLE_CART_HIDDEN]: toggleCartHidden
};

export default reducerWithActionMap(actionMap, initialState);
