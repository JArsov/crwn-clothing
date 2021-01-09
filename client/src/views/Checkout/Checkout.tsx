import {
  CartActionWithPayload,
  clearCart,
} from '../../store/actions/cartActions';
import React, { Dispatch } from 'react';
import {
  selectCartItems,
  selectCartTotalPrice,
} from '../../store/selectors/cart/cartSelectors';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import Button from '../../components/Button/Button';
import { CartItem } from '../../store/reducers/types/CartState';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import { RootState } from '../../store/reducers/types/RootState';
import StripeButton from '../../components/StripeButton/StripeButton';
import styled from 'styled-components';

const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem auto 0;

  > button {
    margin-left: auto;
    margin-top: 3rem;
  }

  @media screen and (max-width: 800px) {
    width: 90%;
    margin: 1rem auto 0;
  }
`;

const CheckoutHeader = styled.div`
  width: 100%;
  padding: 0.7rem 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

const CheckoutHeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;
  &:last-child {
    width: 8%;
  }
  @media screen and (max-width: 800px) {
    width: 22%;
    &:last-child {
      width: 12%;
    }
  }
`;

const TotalPriceContainer = styled.div`
  margin-top: 1.9rem;
  margin-left: auto;
  font-size: 2.25rem;
`;

const ClearCartContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const ClearCartButton = styled(Button)`
  color: red;
  border-color: red;
  background-color: whitesmoke;

  &:hover {
    border-color: whitesmoke;
    color: whitesmoke;
    background-color: red;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:active {
    border-color: transparent;
  }
`;

const TestCardWarningMessage = styled.div`
  text-align: center;
  margin-top: 2.5rem;
  font-size: 1.5rem;
  color: red;
`;

const Checkout = () => {
  const totalPrice = useSelector<RootState, number>(
    selectCartTotalPrice,
    shallowEqual
  );
  const cartItems = useSelector<RootState, CartItem[]>(
    selectCartItems,
    shallowEqual
  );
  const cartDispatch = useDispatch<Dispatch<CartActionWithPayload>>();
  const clearCartHandler = () => {
    const result = window.confirm('Are you sure you want to clear your cart?');
    if (result) {
      cartDispatch(clearCart());
    }
  };
  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <CheckoutHeaderBlock>
          <span>Product</span>
        </CheckoutHeaderBlock>
        <CheckoutHeaderBlock>
          <span>Description</span>
        </CheckoutHeaderBlock>
        <CheckoutHeaderBlock>
          <span>Quantity</span>
        </CheckoutHeaderBlock>
        <CheckoutHeaderBlock>
          <span>Price</span>
        </CheckoutHeaderBlock>
        <CheckoutHeaderBlock>
          <span>Remove</span>
        </CheckoutHeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} {...cartItem} />
      ))}
      <ClearCartContainer>
        <ClearCartButton
          isDisabled={!cartItems || cartItems.length === 0}
          onClick={clearCartHandler}
        >
          Clear Cart
        </ClearCartButton>
      </ClearCartContainer>
      <TotalPriceContainer>
        <span>TOTAL: ${totalPrice}</span>
      </TotalPriceContainer>
      <TestCardWarningMessage>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/30 - CVV: 123
      </TestCardWarningMessage>
      <StripeButton price={totalPrice} />
    </CheckoutContainer>
  );
};

export default Checkout;
