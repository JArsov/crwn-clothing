import { MenuItem } from "./MenuItem";
import React from "react";
import { render } from "@testing-library/react";
import { routerTestProps } from "../../shared/reactRouterHelper";

test("should check if SHOP NOW subtitle is displayed in the component", () => {
  const { history, location, match } = routerTestProps("/route/:id", {
    id: "1"
  });
  const mockMenuItemModel = {
    title: "hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    id: 1,
    linkUrl: "shop/hats",
    history,
    location,
    match
  };
  const { queryByText } = render(
    <MenuItem {...mockMenuItemModel}>{}</MenuItem>
  );

  expect(queryByText("SHOP NOW")).toBeDefined();
});
