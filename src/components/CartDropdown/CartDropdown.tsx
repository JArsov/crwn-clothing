import Button from "../Button/Button";
import { CartItem } from "../../store/reducers/types/CartState";
import CartItemComponent from "../CartItem/CartItem";
import React from "react";
import { RootState } from "../../store/reducers/types/RootState";
import styled from "styled-components";
import { useSelector } from "react-redux";

const CartDropdownContainer = styled.div`
  position: absolute;
  width: 15rem;
  height: 21.5rem;
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
  overflow: scroll;
  overflow-x: hidden;
`;

const GoToCheckoutButton = styled(Button)`
  margin-top: auto;
`;

const CartDropdown: React.FC<{}> = () => {
  const cartItems = useSelector<RootState, CartItem[]>(
    state => state.cart.cartItems
  );
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.map(cartItem => (
          <CartItemComponent key={cartItem.id} {...cartItem} />
        ))}
      </CartItemsContainer>
      <GoToCheckoutButton>GO TO CHECKOUT</GoToCheckoutButton>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
