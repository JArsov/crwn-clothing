import CollectionPreview from "./CollectionPreview";
import { Provider } from "react-redux";
import React from "react";
import SHOP_DATA from "../../shared/shop.data";
import { store as mockStore } from "../../store/storeConfig";
import { render } from "@testing-library/react";

it("should have 4 children under it", () => {
  const { getByTestId } = render(
    <Provider store={mockStore}>
      <CollectionPreview {...SHOP_DATA[0]} />
    </Provider>
  );
  expect(getByTestId(SHOP_DATA[0].title).children.length).toBe(4);
});
