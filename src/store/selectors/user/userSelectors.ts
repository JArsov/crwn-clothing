import { RootState } from "../../reducers/types/RootState";
import { User } from "../../reducers/types/UserState";
import { createSelector } from "reselect";

const selectUser = (state: RootState) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser as User
);

export const selectDisplayName = createSelector(
  [selectCurrentUser],
  currentUser => currentUser.displayName
);

export const selectEmail = createSelector(
  [selectCurrentUser],
  currentUser => currentUser.email
);
