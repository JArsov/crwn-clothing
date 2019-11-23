import { User, UserState } from "../types/UserState";
import { clearUserErrorMessage, signInSuccess, signOutFailure, signOutSuccess } from "../../actions/userActions";

import { Nullable } from "../types/RootState";
import userReducer from "./userReducer";

export const mockUser: Nullable<User> = {
  createdAt: new Date(),
  displayName: "Mock User",
  email: "mock_user@gmail.com"
};

export const mockState: UserState = {
  currentUser: mockUser,
  errorMessage: '',
};

describe("UserReducer", () => {

  it('should set the current user when signInSuccess is called', () => {
    mockState.currentUser = null;
    const newState = userReducer(mockState, signInSuccess(mockUser));

    expect(newState.currentUser).toEqual(mockUser);
  });

  it('should sign set the current user to null when signOutSuccess is called', () => {
    const newState = userReducer(mockState, signOutSuccess());

    expect(newState.currentUser).toBeNull();
  });

  it('should set an error message when signInSignOutSignUpFailure is called', () => {
    const errorMessage = 'An error occured';
    const newState = userReducer(mockState, signOutFailure(errorMessage));

    expect(newState.errorMessage).toEqual(errorMessage);
  });

  it('should clear the user error message when clearUserErrorMessage is called', () => {
    const newState = userReducer(mockState, clearUserErrorMessage());

    expect(newState.errorMessage).toHaveLength(0);
  });
});
