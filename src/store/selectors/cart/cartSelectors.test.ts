import {
  selectCartItems,
  selectCartItemsTotalQuantity,
  selectCartTotalPrice,
  selectIsCartHidden
} from "./cartSelectors";

import mockRootState from "../../../shared/test-data/mockRootState";

describe("Cart selectors", () => {
  it("should return the cart items array", () => {
    const cartItems = selectCartItems(mockRootState);

    expect(cartItems).toEqual(mockRootState.cart.cartItems);
  });

  it("should return the hidden property of the cart", () => {
    const isCartHidden = selectIsCartHidden(mockRootState);

    expect(isCartHidden).toEqual(mockRootState.cart.hidden);
  });

  it("should select the total quantity of all items in the cart", () => {
    const totalQuantity = selectCartItemsTotalQuantity(mockRootState);

    expect(totalQuantity).toBe(6);
  });

  it("should select the total price of the cart", () => {
    const totalPrice = selectCartTotalPrice(mockRootState);

    expect(totalPrice).toBe(14);
  });
});
