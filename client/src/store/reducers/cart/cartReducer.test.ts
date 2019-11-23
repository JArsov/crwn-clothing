import { CartItem, CartState } from "../types/CartState";
import {
  addItem,
  clearCart,
  clearItem,
  removeItem,
  toggleCartHidden
} from "../../actions/cartActions";

import { ShopDataItem } from "../types/ShopState";
import cartReducer from "./cartReducer";

export const mockState: CartState = {
  hidden: true,
  cartItems: []
};

let mockCartItems: CartItem[] = [
  {
    id: 1,
    imageUrl: "image-url",
    name: "Name 1",
    price: 1,
    quantity: 3
  },
  {
    id: 2,
    imageUrl: "image-url2",
    name: "Name 2",
    price: 1,
    quantity: 1
  }
];

beforeEach(() => {
  mockCartItems = [
    {
      id: 1,
      imageUrl: "image-url",
      name: "Name 1",
      price: 1,
      quantity: 3
    },
    {
      id: 2,
      imageUrl: "image-url2",
      name: "Name 2",
      price: 1,
      quantity: 1
    }
  ];
});

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

  it("should decrease the quantity of an existing cart item in the cart", () => {
    mockState.cartItems = mockCartItems;
    const itemWhoseQuantityShouldBeDecreased: ShopDataItem = {
      ...mockCartItems[0]
    };

    const newState = cartReducer(
      mockState,
      removeItem(itemWhoseQuantityShouldBeDecreased)
    );

    expect(newState.cartItems.length).toBe(mockState.cartItems.length);
    expect(newState.cartItems[0].quantity).toBe(
      mockState.cartItems[0].quantity - 1
    );
  });

  it("should remove an item from the cart if it has quantity 1", () => {
    mockState.cartItems = mockCartItems;
    const itemToBeRemoved: ShopDataItem = { ...mockCartItems[1] };

    const newState = cartReducer(mockState, removeItem(itemToBeRemoved));

    expect(newState.cartItems.length).toBe(mockState.cartItems.length - 1);
  });

  it("should clear an item from the cart", () => {
    mockState.cartItems = mockCartItems;
    const itemToBeCleared: ShopDataItem = { ...mockCartItems[0] };

    const newState = cartReducer(mockState, clearItem(itemToBeCleared));

    expect(newState.cartItems.length).toBe(mockState.cartItems.length - 1);
  });

  it('should clear the cart', () => {
    mockState.cartItems = mockCartItems;
    const newState = cartReducer(mockState, clearCart());

    expect(newState.cartItems.length).toBe(0);
  });
});
