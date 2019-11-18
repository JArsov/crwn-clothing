import { shallowEqual, useSelector } from "react-redux";

import CartDropdown from "../CartDropdown/CartDropdown";
import CartIcon from "../CartIcon/CartIcon";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import React from "react";
import { RootState } from "../../store/reducers/types/RootState";
import { UserOrNull } from "../../store/reducers/types/UserState";
import { auth } from "../../firebase/firebase.utils";
import { selectCurrentUser } from "../../store/selectors/user/userSelectors";
import { selectIsCartHidden } from "../../store/selectors/cart/cartSelectors";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 5rem;
`;

const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
`;

const HeaderOptionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 50%;
`;

const HeaderOptionsLink = styled(Link)`
  padding-right: 1rem;
`;

const SignInSignOutButton = styled.div`
  padding-right: 1rem;
  cursor: pointer;
`;

const Header: React.FC<{}> = () => {
  const currentUser = useSelector<RootState, UserOrNull>(
    selectCurrentUser,
    shallowEqual
  );
  const isCartHidden = useSelector<RootState, boolean>(
    selectIsCartHidden,
    shallowEqual
  );

  const handleSignOutClick = () => {
    auth.signOut();
  };

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <HeaderOptionsContainer>
        <HeaderOptionsLink to="/shop">SHOP</HeaderOptionsLink>
        <HeaderOptionsLink to="/shop">CONTACT</HeaderOptionsLink>
        {currentUser ? (
          <SignInSignOutButton onClick={handleSignOutClick}>
            SIGN OUT
          </SignInSignOutButton>
        ) : (
          <HeaderOptionsLink to="/sign-in">SIGN IN</HeaderOptionsLink>
        )}
        <CartIcon />
      </HeaderOptionsContainer>
      {!isCartHidden ? <CartDropdown /> : null}
    </HeaderContainer>
  );
};

export default Header;
