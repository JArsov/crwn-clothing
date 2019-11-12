import { ActionWithPayload } from "../reduxHelper";
import { ShopDataItem } from "../../shared/shop.data";

export enum CartActionTypes {
  TOGGLE_CART_HIDDEN = "TOGGLE_CART_HIDDEN",
  ADD_ITEM = "ADD_ITEM"
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
