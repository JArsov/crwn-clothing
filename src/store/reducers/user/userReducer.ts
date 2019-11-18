import {
  UserActionTypes,
  UserActionWithPayload
} from "../../actions/userActions";
import reducerWithActionMap, { ActionMap } from "../../storeHelper";

import { Reducer } from "redux";
import { UserState } from "../types/UserState";

const initialState: UserState = {
  currentUser: null
};

type UserReducer = Reducer<UserState, UserActionWithPayload>;

const setCurrentUser: UserReducer = (state, { payload }) => {
  return {
    ...state,
    currentUser: payload.currentUser
  };
};

const actionMap: ActionMap<UserState, UserActionWithPayload> = {
  [UserActionTypes.SET_CURRENT_USER]: setCurrentUser
};

export default reducerWithActionMap(actionMap, initialState);
