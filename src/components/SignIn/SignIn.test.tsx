import { act, fireEvent, render, waitForElement } from "@testing-library/react";

import { Provider } from "react-redux";
import React from "react";
import SignIn from "./SignIn";
import { auth } from "../../firebase/firebase.utils";
import { store as mockStore } from "../../store/storeConfig";

it("should check if an error message appears when the credentials are invalid", async () => {
  jest
    .spyOn(auth, "signInWithEmailAndPassword")
    .mockImplementationOnce((email, password) => {
      throw new Error(
        "The password is invalid or the user does not have a password."
      );
    });
  const { getByLabelText, getByText, getByTestId } = render(
    <Provider store={mockStore}>
      <SignIn />
    </Provider>
  );
  act(() => {
    fireEvent.change(getByLabelText("Email"), {
      currentTarget: { value: "orce.arsov@yasdasd.com" }
    });
    fireEvent.change(getByLabelText("Password"), {
      currentTarget: { value: "whateveasdasdasdr" }
    });
    fireEvent.click(getByText("Sign in"));
  });

  expect(
    getByTestId("sign-in-error-message-label").innerHTML.length
  ).toBeGreaterThan(0);
});

it("should successfully log in the user if correct credentials have been put", () => {
  const mockUserCredentials: firebase.auth.UserCredential = {
    additionalUserInfo: null,
    credential: null,
    operationType: "mockString",
    user: null
  };
  jest.spyOn(auth, "signInWithEmailAndPassword").mockImplementationOnce(() => {
    return new Promise<firebase.auth.UserCredential>(resolve => {
      resolve(mockUserCredentials);
    });
  });

  const { getByLabelText, getByText } = render(
    <Provider store={mockStore}>
      <SignIn />
    </Provider>
  );
  fireEvent.change(getByLabelText("Email"), {
    currentTarget: { value: "orce.arsov@yasdasd.com" }
  });
  fireEvent.change(getByLabelText("Password"), {
    currentTarget: { value: "whatever" }
  });
  fireEvent.click(getByText("Sign in"));

  // On succcessful sign in, the input fields are being cleared
  const emailInputField = getByLabelText("Email") as HTMLInputElement;
  expect(emailInputField.value).toBeFalsy();
});
