import * as firebaseUtils from "../../firebase/firebase.utils";

import { act, fireEvent, render } from "@testing-library/react";

import { Provider } from "react-redux";
import React from "react";
import SignUp from "./SignUp";
import { store as mockStore } from "../../store/storeConfig";

it("should check if an 'Passwords do not match' error message appears", () => {
  const { getByAltText, getByText } = render(
    <Provider store={mockStore}>
      <SignUp />
    </Provider>
  );

  act(() => {
    fireEvent.change(getByAltText("displayName"), {
      target: { value: "Name" }
    });
  });
  act(() => {
    fireEvent.change(getByAltText("email"), {
      target: { value: "orce.arsov@yasdasd.com" }
    });
  });
  act(() => {
    fireEvent.change(getByAltText("password"), {
      target: { value: "whatever" }
    });
  });
  act(() => {
    fireEvent.change(getByAltText("confirmPassword"), {
      target: { value: "whaasdasdtever2" }
    });
  });
  act(() => {
    fireEvent.click(getByText("SIGN UP"));
  });

  expect(getByText("Passwords do not match!")).toBeDefined();
});

it("should not sign up if the email already exists", () => {
  jest.spyOn(firebaseUtils, "doesEmailExist").mockImplementationOnce(_ => {
    return new Promise<boolean>(resolve => {
      resolve(true);
    });
  });

  const { getByAltText, getByText } = render(
    <Provider store={mockStore}>
      <SignUp />
    </Provider>
  );

  act(() => {
    fireEvent.change(getByAltText("email"), {
      target: { value: "jordan@gmail.com" }
    });
    fireEvent.change(getByAltText("displayName"), {
      target: { value: "Name" }
    });
    fireEvent.change(getByAltText("password"), {
      target: { value: "whatever" }
    });
    fireEvent.change(getByAltText("confirmPassword"), {
      target: { value: "whatever" }
    });

    fireEvent.click(getByText("SIGN UP"));
  });

  // If the email exists, the input fields remain untouched
  const nameInputField = getByAltText("displayName") as HTMLInputElement;
  expect(nameInputField.value).toEqual("Name");
});
