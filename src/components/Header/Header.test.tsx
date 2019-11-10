import { fireEvent, render } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import React from "react";
import { auth } from "../../firebase/firebase.utils";

test("display 'Sign Out' button if the user is signed in", () => {
  const mockCurrentUser = {
    displayName: "Jordan",
    email: "jordan@gmail.com"
  };
  const { getByText, queryByText } = render(
    <BrowserRouter>
      <Header currentUser={mockCurrentUser} />
    </BrowserRouter>
  );

  expect(queryByText("SIGN OUT")).toBeDefined();

  jest.spyOn(auth, "signOut").mockImplementationOnce(() => {
    return new Promise<void>(resolve => {
      resolve();
    });
  });

  fireEvent.click(getByText("SIGN OUT"));

  expect(queryByText("SIGN IN")).toBeDefined();
});

test("display 'Sign In' button if the user is not signed in", () => {
  const mockCurrentUser = null;
  const { getByText, queryByText } = render(
    <BrowserRouter>
      <Header currentUser={mockCurrentUser} />
    </BrowserRouter>
  );

  expect(queryByText("SIGN IN")).toBeDefined();
});
