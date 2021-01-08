import {
  CartActionWithPayload,
  toggleCartHidden,
} from './store/actions/cartActions';
import { Nullable, RootState } from './store/reducers/types/RootState';
import React, { Dispatch, Suspense, lazy, useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import {
  UserActionWithPayload,
  checkUserSession,
} from './store/actions/userActions';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { GlobalStyle } from './global.style';
import Header from './components/Header/Header';
import Spinner from './components/Spinner/Spinner';
import { User } from './store/reducers/types/UserState';
import { selectCurrentUser } from './store/selectors/user/userSelectors';
import { selectIsCartHidden } from './store/selectors/cart/cartSelectors';
import styled from 'styled-components';

const Home = lazy(() => import('./views/Home/Home'));
const Shop = lazy(() => import('./views/Shop/Shop'));
const SignInSignUp = lazy(() => import('./views/SignInSignUp/SignInSignUp'));
const Checkout = lazy(() => import('./views/Checkout/Checkout'));

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  background: grey;
  opacity: 0.7;
`;

const App = () => {
  const userDispatch = useDispatch<Dispatch<UserActionWithPayload>>();
  const cartDispatch = useDispatch<Dispatch<CartActionWithPayload>>();
  const currentUser = useSelector<RootState, Nullable<User>>(
    selectCurrentUser,
    shallowEqual
  );
  const isCartHidden = useSelector<RootState, boolean>(
    selectIsCartHidden,
    shallowEqual
  );

  useEffect(() => {
    userDispatch(checkUserSession());
  }, [userDispatch]);

  const closeCartDropdown = () => {
    cartDispatch(toggleCartHidden());
  };

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route path="/" exact component={Home} />
            <Route path="/shop" component={Shop} />
            <Route path="/checkout" component={Checkout} />
            <Route
              path="/sign-in"
              exact
              render={() =>
                currentUser ? <Redirect to="/" /> : <SignInSignUp />
              }
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
      {!isCartHidden ? <Backdrop onClick={closeCartDropdown} /> : null}
    </div>
  );
};

export default App;
