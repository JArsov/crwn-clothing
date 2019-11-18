import { UserOrNull, UserState } from "../types/UserState";

import cloneDeep from "lodash/cloneDeep";
import { setCurrentUser } from "../../actions/userActions";
import userReducer from "./userReducer";

export const mockUser: UserOrNull = {
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
    const newUser: UserOrNull = null;

    const newState = userReducer(copyOfMockState, setCurrentUser(newUser));

    expect(newState.currentUser).toBeNull();
  });
});
