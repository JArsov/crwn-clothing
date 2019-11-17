import { CartItem } from "../../store/reducers/types/CartState";
import { addItemToCart } from "./cart.utils";

const mockCartItem: CartItem = {
  id: 1,
  imageUrl: "image-url",
  name: "cart-item1",
  price: 1,
  quantity: 1
};

const mockInitialEmptyCartItemsArray: CartItem[] = [];
const mockInitialNotEmptyCartItemsArray: CartItem[] = [mockCartItem];

describe("Cart utils", () => {
  it("should add an item which does not exist in the cart yet", () => {
    const newCartItemsArray = addItemToCart(
      mockInitialEmptyCartItemsArray,
      mockCartItem
    );

    expect(newCartItemsArray.length).toBe(1);
    expect(newCartItemsArray[0]).toMatchObject(mockCartItem);
  });

  it("should add an item which already exists in the cart", () => {
    const newCartItemsArray = addItemToCart(
      mockInitialNotEmptyCartItemsArray,
      mockCartItem
    );

    expect(newCartItemsArray.length).toBe(
      mockInitialNotEmptyCartItemsArray.length
    );
    expect(newCartItemsArray[0].quantity).toBe(
      mockInitialNotEmptyCartItemsArray[0].quantity + 1
    );
  });
});
