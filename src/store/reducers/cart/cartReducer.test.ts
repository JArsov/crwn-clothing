import { CartItem, CartState } from "../types/CartState";
import { addItem, toggleCartHidden } from "../../actions/cartActions";

import { ShopDataItem } from "../../../shared/shop.data";
import cartReducer from "./cartReducer";

export const mockState: CartState = {
  hidden: true,
  cartItems: []
};

const mockCartItems: CartItem[] = [
  {
    id: 1,
    imageUrl: "image-url",
    name: "Name 1",
    price: 1,
    quantity: 3
  },
  {
    id: 1,
    imageUrl: "image-url2",
    name: "Name 2",
    price: 1,
    quantity: 1
  }
];

describe("CartReducer", () => {
  it("should toggle the cartHidden property", () => {
    const newState = cartReducer(mockState, toggleCartHidden());

    expect(newState.hidden).toBe(!mockState.hidden);
  });

  it("should increase the quantity of an existing cart item in the cart", () => {
    mockState.cartItems = mockCartItems;
    const itemToBeAdded: ShopDataItem = { ...mockCartItems[0] };

    const newState = cartReducer(mockState, addItem(itemToBeAdded));

    expect(newState.cartItems.length).toBe(mockState.cartItems.length);
    expect(newState.cartItems[0].quantity).toBe(
      mockState.cartItems[0].quantity + 1
    );
  });

  it("should add a new item in the cart", () => {
    mockState.cartItems = mockCartItems;
    const itemToBeAdded: ShopDataItem = {
      id: 3,
      imageUrl: "image-url3",
      name: "Name 3",
      price: 1
    };

    const newState = cartReducer(mockState, addItem(itemToBeAdded));

    expect(newState.cartItems.length).toBe(mockState.cartItems.length + 1);
  });
});
