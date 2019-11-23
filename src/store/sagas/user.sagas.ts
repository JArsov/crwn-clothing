import {
  EmailAndPassword,
  SignUpValues,
  UserActionTypes,
  UserActionWithPayload,
  clearUserErrorMessage,
  signInFailure,
  signInSuccess,
  signOutFailure,
  signOutSuccess,
  signUpFailure,
  signUpSuccess,
} from "../actions/userActions";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { auth, createUserProfileDocument, doesEmailExist, facebookProvider, getCurrentUser, googleProvider } from "../../firebase/firebase.utils";

import { Nullable } from "../reducers/types/RootState";
import { User } from "firebase";

export function* getSnapshotFromUserAuth(user: Nullable<firebase.User>, additionalData?: any) {
  try {
    const userRef = yield call(createUserProfileDocument, user, additionalData);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* signInWithFacebook() {
  try {
    const { user } = yield auth.signInWithPopup(facebookProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* signInWithEmail(action: UserActionWithPayload) {
  try {
    const { payload } = action;
    const emailAndPassword: EmailAndPassword = payload.emailAndPassword as EmailAndPassword;
    const { email, password } = emailAndPassword;
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    console.log(error.message);
    yield put(signInFailure(error.message));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) {
      return;
    }
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error.message));
  }
}

export function* signUp(action: UserActionWithPayload) {
  try {
    yield put(clearUserErrorMessage());
    const { payload } = action;
    const signUpValues: SignUpValues = payload.signUpValues as SignUpValues;
    const { email, password, confirmPassword, displayName } = signUpValues;

    if (password !== confirmPassword) {
      yield put(signUpFailure('Passwords do not match!'));
      return;
    }

    const doesUserExist = yield doesEmailExist(email);
    if (doesUserExist) {
      yield put(signUpFailure('Email address already registered'));
      return;
    }
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccess(user, { displayName }));
  } catch (error) {
    yield put(signUpFailure(error.message));
  }
}

export function* signInAfterSignUp(action: UserActionWithPayload) {
  const { payload } = action;
  const user: User = payload.user as User;
  const additionalData: any = payload.additionalData;
  yield getSnapshotFromUserAuth(user, additionalData);
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onFacebookSignInStart() {
  yield takeLatest(UserActionTypes.FACEBOOK_SIGN_IN_START, signInWithFacebook);
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

export function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
  yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onFacebookSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess)
  ]);
}
