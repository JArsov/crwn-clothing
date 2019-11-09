import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import React from "react";
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
const Header: React.FC<{}> = () => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <HeaderOptionsContainer>
        <HeaderOptionsLink to="/shop">SHOP</HeaderOptionsLink>
        <HeaderOptionsLink to="/shop">CONTACT</HeaderOptionsLink>
      </HeaderOptionsContainer>
    </HeaderContainer>
  );
};

export default Header;
