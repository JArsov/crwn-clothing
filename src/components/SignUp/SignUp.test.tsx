import * as firebaseUtils from "../../firebase/firebase.utils";

import { act, fireEvent, render } from "@testing-library/react";

import React from "react";
import SignUp from "./SignUp";

test("should check if an 'Passwords do not match' error message appears", () => {
  const { getByLabelText, getByText } = render(<SignUp />);

  act(() => {
    fireEvent.change(getByLabelText("Display Name"), {
      target: { value: "Name" }
    });
  });
  act(() => {
    fireEvent.change(getByLabelText("Email"), {
      target: { value: "orce.arsov@yasdasd.com" }
    });
  });
  act(() => {
    fireEvent.change(getByLabelText("Password"), {
      target: { value: "whatever" }
    });
  });
  act(() => {
    fireEvent.change(getByLabelText("Confirm Password"), {
      target: { value: "whaasdasdtever2" }
    });
  });
  act(() => {
    fireEvent.click(getByText("SIGN UP"));
  });

  expect(getByText("Passwords do not match!")).toBeDefined();
});

test("should not sign up if the email already exists", () => {
  jest.spyOn(firebaseUtils, "doesEmailExist").mockImplementationOnce(_ => {
    return new Promise<boolean>(resolve => {
      resolve(true);
    });
  });
  const { getByLabelText, getByText } = render(<SignUp />);

  act(() => {
    fireEvent.change(getByLabelText("Display Name"), {
      target: { value: "Name" }
    });
    fireEvent.change(getByLabelText("Email"), {
      target: { value: "jordan@gmail.com" }
    });
    fireEvent.change(getByLabelText("Password"), {
      target: { value: "whatever" }
    });
    fireEvent.change(getByLabelText("Confirm Password"), {
      target: { value: "whatever" }
    });

    fireEvent.click(getByText("SIGN UP"));
  });

  // If the email exists, the input fields remain untouched
  const nameInputField = getByLabelText("Display Name") as HTMLInputElement;
  expect(nameInputField.value).toEqual("Name");
});
