import { fireEvent, render } from "@testing-library/react";

import { Provider } from "react-redux";
import React from "react";
import SignIn from "./SignIn";
import { auth } from "../../firebase/firebase.utils";
import configureStore from "../../store/reduxConfig";

const mockStore = configureStore();

test("should check if an error message appears when the credentials are invalid", () => {
  jest.spyOn(auth, "signInWithEmailAndPassword").mockImplementationOnce(() => {
    throw new Error();
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

  expect(getByText("Incorrect username/password combination")).toBeDefined();
});

test("should successfully log in the user if correct credentials have been put", () => {
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

  const { getByLabelText, getByText } = render(<SignIn />);
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
