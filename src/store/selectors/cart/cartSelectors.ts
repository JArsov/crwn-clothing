import { RootState } from "../../reducers/types/RootState";
import { createSelector } from "reselect";

const selectCart = (state: RootState) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectIsCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

export const selectCartItemsTotalQuantity = createSelector(
  [selectCartItems],
  allCartItems =>
    allCartItems.reduce((accumulator, cartItem) => {
      return accumulator + cartItem.quantity;
    }, 0)
);

export const selectCartTotalPrice = createSelector(
  [selectCartItems],
  allCartItems =>
    allCartItems.reduce((accumulator, cartItem) => {
      return accumulator + cartItem.quantity * cartItem.price;
    }, 0)
);
