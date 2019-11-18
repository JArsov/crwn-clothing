import * as ReactRedux from "react-redux";

import { fireEvent, render } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";
import CollectionItem from "./CollectionItem";
import React from "react";
import SHOP_DATA from "../../shared/shop.data";
import { ShopDataItem } from "../../store/reducers/types/ShopState";
import { store as mockStore } from "../../store/storeConfig";

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
        <CollectionItem item={SHOP_DATA.hats.items[0]} />
      </BrowserRouter>
    </ReactRedux.Provider>
  );
  expect(queryByText(SHOP_DATA.hats.items[0].name)).toBeDefined();
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
