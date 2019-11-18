import { ActionWithPayload } from "../storeHelper";
import { ShopDataItem } from "../reducers/types/ShopState";

export enum CartActionTypes {
  TOGGLE_CART_HIDDEN = "TOGGLE_CART_HIDDEN",
  ADD_ITEM = "ADD_ITEM",
  REMOVE_ITEM = "REMOVE_ITEM",
  CLEAR_ITEM = "CLEAR_ITEM"
}

export type CartActionWithPayload<P = any> = ActionWithPayload<
  CartActionTypes,
  P
>;

export const toggleCartHidden = (): CartActionWithPayload => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = (item: ShopDataItem): CartActionWithPayload => ({
  type: CartActionTypes.ADD_ITEM,
  payload: {
    item
  }
});

export const removeItem = (item: ShopDataItem): CartActionWithPayload => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: {
    item
  }
});

export const clearItem = (item: ShopDataItem): CartActionWithPayload => ({
  type: CartActionTypes.CLEAR_ITEM,
  payload: {
    item
  }
});
