import * as ReactRedux from "react-redux";

import { fireEvent, render, waitForElement } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";
import { CartItem } from "../../store/reducers/types/CartState";
import CheckoutItem from "./CheckoutItem";
import React from "react";
import { store as mockStore } from "../../store/storeConfig";

const mockCartItem: CartItem = {
  id: 1,
  imageUrl: "mock-image-url",
  name: "cart-item",
  price: 2,
  quantity: 2
};

it("should dispatch a removeItem action when the < icon is clicked", async () => {
  jest.spyOn(ReactRedux, "useDispatch");
  const { getByTestId } = render(
    <ReactRedux.Provider store={mockStore}>
      <BrowserRouter>
        <CheckoutItem {...mockCartItem} />
      </BrowserRouter>
    </ReactRedux.Provider>
  );

  fireEvent.click(getByTestId("remove-item-cart-item"));
  await waitForElement(() => getByTestId("quantity-cart-item"));

  fireEvent.click(getByTestId("add-item-cart-item"));
  await waitForElement(() => getByTestId("quantity-cart-item"));

  fireEvent.click(getByTestId("clear-item-cart-item"));
  expect(ReactRedux.useDispatch).toHaveBeenCalled();
});
