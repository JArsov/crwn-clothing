import * as ReactRedux from "react-redux";

import { fireEvent, render } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";
import CartIcon from "./CartIcon";
import React from "react";
import { store as mockStore } from "../../store/storeConfig";

it("should dispatch an action toggleCartHidden action when the cart icon is clicked", () => {
  jest.spyOn(ReactRedux, "useDispatch");
  const { getByTestId } = render(
    <ReactRedux.Provider store={mockStore}>
      <BrowserRouter>
        <CartIcon />
      </BrowserRouter>
    </ReactRedux.Provider>
  );

  fireEvent.click(getByTestId("cart-icon"));

  expect(ReactRedux.useDispatch).toHaveBeenCalled();
});
