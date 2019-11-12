import React, { Dispatch, useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import {
  UserActionTypes,
  UserActionWithPayload
} from "./store/actions/userActions";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { useDispatch, useSelector } from "react-redux";

import Header from "./components/Header/Header";
import Home from "./views/Home/Home";
import { RootState } from "./store/reducers/types/RootState";
import Shop from "./views/Shop/Shop";
import SignInSignUp from "./views/SignInSignUp/SignInSignUp";
import { UserOrNull } from "./store/reducers/types/UserState";
import styled from "styled-components";

const AppContainer = styled.div`
  padding: 2rem 4rem;

  & a {
    color: black;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

const App: React.FC<{}> = () => {
  const dispatch = useDispatch<Dispatch<UserActionWithPayload>>();
  const currentUser = useSelector<RootState, UserOrNull>(
    state => state.user.currentUser
  );

  const currentUserOrEmail = currentUser ? currentUser.email : currentUser;

  useEffect(() => {
    let unsubscribeFromAuth: firebase.Unsubscribe | null = null;
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        if (userRef) {
          userRef.onSnapshot(snapshot => {
            if (snapshot) {
              const userFromSnapshot = {
                id: snapshot.id,
                ...snapshot.data()
              };
              if (userFromSnapshot.id) {
                dispatch({
                  type: UserActionTypes.SET_CURRENT_USER,
                  payload: { currentUser: snapshot.data() }
                });
              }
            }
          });
        }
      } else {
        dispatch({
          type: UserActionTypes.SET_CURRENT_USER,
          payload: { currentUser: null }
        });
      }
    });

    // Unsubscribe from Auth
    return () => {
      if (unsubscribeFromAuth) {
        unsubscribeFromAuth();
      }
    };
  }, [currentUserOrEmail, dispatch]);

  return (
    <AppContainer>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shop" component={Shop} />
        <Route
          path="/sign-in"
          exact
          render={() => (currentUser ? <Redirect to="/" /> : <SignInSignUp />)}
        />
      </Switch>
    </AppContainer>
  );
};

export default App;
