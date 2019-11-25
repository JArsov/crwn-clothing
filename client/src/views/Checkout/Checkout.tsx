import {
  selectCartItems,
  selectCartTotalPrice
} from "../../store/selectors/cart/cartSelectors";
import { shallowEqual, useSelector } from "react-redux";

import { CartItem } from "../../store/reducers/types/CartState";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import React from "react";
import { RootState } from "../../store/reducers/types/RootState";
import StripeButton from "../../components/StripeButton/StripeButton";
import styled from "styled-components";

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

const TestCardWarningMessage = styled.div`
  text-align: center;
  margin-top: 2.5rem;
  font-size: 1.5rem;
  color: red;
`;

const Checkout: React.FC<{}> = () => {
  const totalPrice = useSelector<RootState, number>(
    selectCartTotalPrice,
    shallowEqual
  );
  const cartItems = useSelector<RootState, CartItem[]>(
    selectCartItems,
    shallowEqual
  );
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
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} {...cartItem} />
      ))}
      <TotalPriceContainer>
        <span>TOTAL: ${totalPrice}</span>
      </TotalPriceContainer>
      <TestCardWarningMessage>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </TestCardWarningMessage>
      <StripeButton price={totalPrice} />
    </CheckoutContainer>
  );
};

export default Checkout;
