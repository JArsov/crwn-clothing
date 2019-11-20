import { User, UserState } from "../types/UserState";

import { Nullable } from "../types/RootState";
import cloneDeep from "lodash/cloneDeep";
import { setCurrentUser } from "../../actions/userActions";
import userReducer from "./userReducer";

export const mockUser: Nullable<User> = {
  createdAt: new Date(),
  displayName: "Mock User",
  email: "mock_user@gmail.com"
};

export const mockState: UserState = {
  currentUser: mockUser
};

describe("UserReducer", () => {
  it("should set the current user", () => {
    const copyOfMockState = cloneDeep(mockState);
    const newUser: Nullable<User> = null;

    const newState = userReducer(copyOfMockState, setCurrentUser(newUser));

    expect(newState.currentUser).toBeNull();
  });
});
