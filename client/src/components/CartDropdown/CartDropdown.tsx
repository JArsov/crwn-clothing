import {
  CartActionWithPayload,
  toggleCartHidden,
} from '../../store/actions/cartActions';
import React, { Dispatch } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import Button from '../Button/Button';
import { CartItem } from '../../store/reducers/types/CartState';
import CartItemComponent from '../CartItem/CartItem';
import { RootState } from '../../store/reducers/types/RootState';
import { selectCartItems } from '../../store/selectors/cart/cartSelectors';
import styled from 'styled-components';

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

const CartEmptyMessage = styled.span`
  font-size: 1.2rem;
  margin: 2rem auto;
`;

export const CartDropdown = ({ history }: RouteComponentProps) => {
  const dispatch = useDispatch<Dispatch<CartActionWithPayload>>();
  const cartItems = useSelector<RootState, CartItem[]>(
    selectCartItems,
    shallowEqual
  );

  const handleGoToCheckout = () => {
    history.push('/checkout');
    dispatch(toggleCartHidden());
  };
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItemComponent key={cartItem.id} {...cartItem} />
          ))
        ) : (
          <CartEmptyMessage>Your cart is empty</CartEmptyMessage>
        )}
      </CartItemsContainer>
      <GoToCheckoutButton onClick={handleGoToCheckout}>
        GO TO CHECKOUT
      </GoToCheckoutButton>
    </CartDropdownContainer>
  );
};

export default withRouter(CartDropdown);
