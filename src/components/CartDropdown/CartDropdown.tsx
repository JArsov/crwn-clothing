import Button from "../Button/Button";
import React from "react";
import styled from "styled-components";

const CartDropdownContainer = styled.div`
  position: absolute;
  width: 15rem;
  height: 21.5;
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  border: 1px solid black;
  background-color: white;
  top: 5.5rem;
  right: 2.5rem;
  z-index: 5;
`;

const CartItemsContainer = styled.div`
  height: 15rem;
  display: flex;
  flex-direction: column;
  overflow: scroll-y;
`;

const GoToCheckoutButton = styled(Button)`
  margin-top: auto;
`;

const CartDropdown: React.FC<{}> = () => {
  return (
    <CartDropdownContainer>
      <CartItemsContainer></CartItemsContainer>
      <GoToCheckoutButton>GO TO CHECKOUT</GoToCheckoutButton>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
