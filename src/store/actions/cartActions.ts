import { ActionWithPayload } from "../reduxHelper";

export enum CartActionTypes {
  TOGGLE_CART_HIDDEN = "TOGGLE_CART_HIDDEN"
}

export type CartActionWithPayload<P = any> = ActionWithPayload<
  CartActionTypes,
  P
>;

export const toggleCartHidden = (): CartActionWithPayload => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});
