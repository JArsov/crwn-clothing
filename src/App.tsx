import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import Header from "./components/Header/Header";
import Home from "./views/Home/Home";
import Shop from "./views/Shop/Shop";
import SignInSignUp from "./views/SignInSignUp/SignInSignUp";
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
  const [currentUser, setCurrentUser] = useState<any>(null);
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
              if (!currentUser || currentUser.id !== userFromSnapshot.id) {
                setCurrentUser(userFromSnapshot);
              }
            }
          });
        }
      } else {
        setCurrentUser(null);
      }
    });

    // Unsubscribe from Auth
    return () => {
      if (unsubscribeFromAuth) {
        unsubscribeFromAuth();
      }
    };
  }, [currentUser]);

  return (
    <AppContainer>
      <Header currentUser={currentUser} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/sign-in" component={SignInSignUp} />
      </Switch>
    </AppContainer>
  );
};

export default App;
