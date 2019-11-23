import {
  UserActionTypes,
  UserActionWithPayload
} from "../../actions/userActions";
import reducerWithActionMap, { ActionMap } from "../../storeHelper";

import { Reducer } from "redux";
import { UserState } from "../types/UserState";

const initialState: UserState = {
  currentUser: null,
  errorMessage: ''
};

type UserReducer = Reducer<UserState, UserActionWithPayload>;

const signInSuccess: UserReducer = (state, { payload }) => {
  const userState = state as UserState;
  return {
    ...userState,
    currentUser: payload.user,
    errorMessage: ''
  };
};

const signOutSuccess: UserReducer = (state) => {
  const userState = state as UserState;
  return {
    ...userState,
    currentUser: null,
    errorMessage: ''
  };
};

const signInSignOutSignUpFailure: UserReducer = (state, { payload }) => {
  const userState = state as UserState;
  return {
    ...userState,
    errorMessage: payload.errorMessage
  };
};

const clearUserErrorMessage: UserReducer = (state) => {
  const userState = state as UserState;
  return {
    ...userState,
    errorMessage: ''
  };
};

const actionMap: ActionMap<UserState, UserActionWithPayload> = {
  [UserActionTypes.SIGN_IN_SUCCESS]: signInSuccess,
  [UserActionTypes.SIGN_OUT_SUCCESS]: signOutSuccess,
  [UserActionTypes.SIGN_IN_FAILURE]: signInSignOutSignUpFailure,
  [UserActionTypes.SIGN_OUT_FAILURE]: signInSignOutSignUpFailure,
  [UserActionTypes.SIGN_UP_FAILURE]: signInSignOutSignUpFailure,
  [UserActionTypes.CLEAR_USER_ERROR_MESSAGE]: clearUserErrorMessage
};

export default reducerWithActionMap(actionMap, initialState);
