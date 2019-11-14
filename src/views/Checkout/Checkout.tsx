import {
  selectCartItems,
  selectCartTotalPrice
} from "../../store/selectors/cart/cartSelectors";
import { shallowEqual, useSelector } from "react-redux";

import { CartItem } from "../../store/reducers/types/CartState";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import React from "react";
import { RootState } from "../../store/reducers/types/RootState";
import styled from "styled-components";

const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem auto 0;
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
`;

const LastCheckoutHeaderBlock = styled(CheckoutHeaderBlock)`
  width: 8%;
`;

const TotalPriceContainer = styled.div`
  margin-top: 1.9rem;
  margin-left: auto;
  font-size: 2.25rem;
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
        <LastCheckoutHeaderBlock>
          <span>Remove</span>
        </LastCheckoutHeaderBlock>
      </CheckoutHeader>
      {cartItems.map(cartItem => (
        <CheckoutItem {...cartItem} />
      ))}
      <TotalPriceContainer>
        <span>TOTAL: ${totalPrice}</span>
      </TotalPriceContainer>
    </CheckoutContainer>
  );
};

export default Checkout;
