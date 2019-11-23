import { ActionWithPayload } from "../storeHelper";
import { User } from "../reducers/types/UserState";

export enum UserActionTypes {
  GOOGLE_SIGN_IN_START = "GOOGLE_SIGN_IN_START",
  EMAIL_SIGN_IN_START = "EMAIL_SIGN_IN_START",
  FACEBOOK_SIGN_IN_START = "FACEBOOK_SIGN_IN_START",
  SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS",
  SIGN_IN_FAILURE = "SIGN_IN_FAILURE",
  CHECK_USER_SESSION = "CHECK_USER_SESSION",
  SIGN_OUT_START = "SIGN_OUT_START",
  SIGN_OUT_SUCCESS = "SIGN_OUT_SUCCESS",
  SIGN_OUT_FAILURE = "SIGN_OUT_FAILURE",
  SIGN_UP_START = "SIGN_UP_START",
  SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS",
  SIGN_UP_FAILURE = "SIGN_UP_FAILURE",
  CLEAR_USER_ERROR_MESSAGE = "CLEAR_USER_ERROR_MESSAGE"
}

export interface EmailAndPassword {
  email: string;
  password: string;
}

export interface SignUpValues {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export type UserActionWithPayload<P = any> = ActionWithPayload<
  UserActionTypes,
  P
>;

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START
});

export const facebookSignInStart = () => ({
  type: UserActionTypes.FACEBOOK_SIGN_IN_START
});

export const emailSignInStart = (emailAndPassword: EmailAndPassword): UserActionWithPayload => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: {
    emailAndPassword
  }
});

export const signInSuccess = (user: User): UserActionWithPayload => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: {
    user
  }
});

export const signInFailure = (errorMessage: string): UserActionWithPayload => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: {
    errorMessage
  }
});

export const signOutStart = (): UserActionWithPayload => ({
  type: UserActionTypes.SIGN_OUT_START
});

export const signOutSuccess = (): UserActionWithPayload => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS
});

export const signOutFailure = (errorMessage: string): UserActionWithPayload => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: {
    errorMessage
  }
});

export const signUpStart = (signUpValues: SignUpValues): UserActionWithPayload => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: {
    signUpValues
  }
});

export const signUpSuccess = (user: User, additionalData: any): UserActionWithPayload => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: {
    user,
    additionalData
  }
});

export const signUpFailure = (errorMessage: string): UserActionWithPayload => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: {
    errorMessage
  }
});

export const clearUserErrorMessage = (): UserActionWithPayload => ({
  type: UserActionTypes.CLEAR_USER_ERROR_MESSAGE,
});

export const checkUserSession = (): UserActionWithPayload => ({
  type: UserActionTypes.CHECK_USER_SESSION
});
