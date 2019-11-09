import CollectionItem from "./CollectionItem";
import React from "react";
import SHOP_DATA from "../../shared/shop.data";
import { render } from "@testing-library/react";

it("renders without crashing", () => {
  const { queryByText } = render(<CollectionItem {...SHOP_DATA[0].items[0]} />);
  expect(queryByText(SHOP_DATA[0].items[0].name)).toBeDefined();
});
