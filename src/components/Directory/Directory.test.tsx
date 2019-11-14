import Directory, { allSections } from "./Directory";
import { cleanup, render } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";
import React from "react";

afterEach(cleanup);

it("should check if all menu items in the directory are shown on the page", () => {
  const { queryByText } = render(
    <BrowserRouter>
      <Directory />
    </BrowserRouter>
  );

  allSections.forEach(section => {
    expect(queryByText(section.title)).toBeDefined();
  });
});
