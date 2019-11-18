import {
  selectCurrentUser,
  selectDisplayName,
  selectEmail
} from "./userSelectors";

import { User } from "../../reducers/types/UserState";
import mockRootState from "../../../shared/test-data/mockRootState";

describe("User selectors", () => {
  it("should select the current user", () => {
    expect(selectCurrentUser(mockRootState)).toEqual(
      mockRootState.user.currentUser
    );
  });

  it("should select the display name of the current user", () => {
    expect(selectDisplayName(mockRootState)).toEqual(
      (mockRootState.user.currentUser as User).displayName
    );
  });

  it("should select the email of the current user", () => {
    expect(selectEmail(mockRootState)).toEqual(
      (mockRootState.user.currentUser as User).email
    );
  });
});
