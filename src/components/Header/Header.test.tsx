import { fireEvent, render } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import { Provider } from "react-redux";
import React from "react";
import configureStore from "../../store/reduxConfig";

const mockStore = configureStore();

test("display 'Sign In' button if the user is not signed in", () => {
  const { queryByText } = render(
    <Provider store={mockStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );

  expect(queryByText("SIGN IN")).toBeDefined();
});

test("display the cart component if the cart icon is clicked", () => {
  const { queryByText, getByTestId, getByText } = render(
    <Provider store={mockStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );

  fireEvent.click(getByTestId("cart-icon"));
  expect(getByText("GO TO CHECKOUT")).toBeDefined();

  fireEvent.click(getByTestId("cart-icon"));
  expect(queryByText("GO TO CHECKOUT")).toBeFalsy();
});
