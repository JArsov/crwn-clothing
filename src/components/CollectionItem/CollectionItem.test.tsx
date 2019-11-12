import * as ReactRedux from "react-redux";

import SHOP_DATA, { ShopDataItem } from "../../shared/shop.data";
import { fireEvent, render } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";
import CollectionItem from "./CollectionItem";
import React from "react";
import configureStore from "../../store/reduxConfig";

const mockStore = configureStore();
const mockCollectionItem: ShopDataItem = {
  id: 1,
  imageUrl: "image-url",
  name: "Item 1",
  price: 1
};

it("renders without crashing", () => {
  const { queryByText } = render(
    <ReactRedux.Provider store={mockStore}>
      <BrowserRouter>
        <CollectionItem item={SHOP_DATA[0].items[0]} />
      </BrowserRouter>
    </ReactRedux.Provider>
  );
  expect(queryByText(SHOP_DATA[0].items[0].name)).toBeDefined();
});

it("should dispatch an action when addToCart handler is called", () => {
  jest.spyOn(ReactRedux, "useDispatch");
  const { getByText } = render(
    <ReactRedux.Provider store={mockStore}>
      <BrowserRouter>
        <CollectionItem item={mockCollectionItem} />
      </BrowserRouter>
    </ReactRedux.Provider>
  );

  fireEvent.click(getByText("Add to cart"));

  expect(ReactRedux.useDispatch).toHaveBeenCalled();
});
