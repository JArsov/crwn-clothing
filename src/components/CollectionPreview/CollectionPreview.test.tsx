import CollectionPreview from "./CollectionPreview";
import React from "react";
import SHOP_DATA from "../../shared/shop.data";
import { render } from "@testing-library/react";

it("should have 4 children under it", () => {
  const { getByTestId } = render(<CollectionPreview {...SHOP_DATA[0]} />);
  expect(getByTestId(SHOP_DATA[0].title).children.length).toBe(4);
});
