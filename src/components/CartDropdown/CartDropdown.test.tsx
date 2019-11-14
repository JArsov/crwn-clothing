import * as ReactRedux from "react-redux";

import { fireEvent, render } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";
import { CartDropdown } from "./CartDropdown";
import React from "react";
import configureStore from "../../store/reduxConfig";
import { routerTestProps } from "../../shared/reactRouterHelper";

const mockStore = configureStore();

it("should navigate to checkout when GO TO CHECKOUT button is clicked", () => {
  const { history, location, match } = routerTestProps("/checkout", {});
  spyOn(history, "push");
  jest.spyOn(ReactRedux, "useDispatch");
  const { getByText } = render(
    <ReactRedux.Provider store={mockStore}>
      <BrowserRouter>
        <CartDropdown history={history} location={location} match={match} />
      </BrowserRouter>
    </ReactRedux.Provider>
  );

  fireEvent.click(getByText("GO TO CHECKOUT"));

  expect(ReactRedux.useDispatch).toHaveBeenCalled();
  expect(history.push).toHaveBeenCalledWith("/checkout");
});
