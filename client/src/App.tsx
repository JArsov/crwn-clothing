import { Nullable, RootState } from "./store/reducers/types/RootState";
import React, { Dispatch, useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import {
  UserActionWithPayload,
  checkUserSession
} from "./store/actions/userActions";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import Checkout from "./views/Checkout/Checkout";
import { GlobalStyle } from "./global.style";
import Header from "./components/Header/Header";
import Home from "./views/Home/Home";
import Shop from "./views/Shop/Shop";
import SignInSignUp from "./views/SignInSignUp/SignInSignUp";
import { User } from "./store/reducers/types/UserState";
import { selectCurrentUser } from "./store/selectors/user/userSelectors";

const App: React.FC<{}> = () => {
  const dispatch = useDispatch<Dispatch<UserActionWithPayload>>();
  const currentUser = useSelector<RootState, Nullable<User>>(
    selectCurrentUser,
    shallowEqual
  );

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/checkout" component={Checkout} />
        <Route
          path="/sign-in"
          exact
          render={() => (currentUser ? <Redirect to="/" /> : <SignInSignUp />)}
        />
      </Switch>
    </div>
  );
};

export default App;
