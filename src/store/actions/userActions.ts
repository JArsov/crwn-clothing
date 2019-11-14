import { ActionWithPayload } from "../storeHelper";
import { UserOrNull } from "../reducers/types/UserState";

export enum UserActionTypes {
  SET_CURRENT_USER = "SET_CURRENT_USER"
}

export type UserActionWithPayload<P = any> = ActionWithPayload<
  UserActionTypes,
  P
>;

export const setCurrentUser = (user: UserOrNull) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: {
    currentUser: user
  }
});
