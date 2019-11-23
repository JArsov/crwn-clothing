import { cleanup, render } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";
import Directory from "./Directory";
import { Provider } from "react-redux";
import React from "react";
import mockRootState from "../../shared/test-data/mockRootState";
import { store as mockStore } from "../../store/storeConfig";

afterEach(cleanup);

it("should check if all menu items in the directory are shown on the page", () => {
  const { queryByText } = render(
    <BrowserRouter>
      <Provider store={mockStore}>
        <Directory />
      </Provider>
    </BrowserRouter>
  );

  mockRootState.directory.sections.forEach(section => {
    expect(queryByText(section.title)).toBeDefined();
  });
});
