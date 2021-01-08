import { CartItem } from '../../store/reducers/types/CartState';
import React from 'react';
import styled from 'styled-components';

const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 5rem;
  margin-bottom: 0.9rem;
`;

const CartItemImage = styled.img`
  width: 30%;
`;

const CartItemDetailsContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0.6rem 1.25rem;
`;

const CartItemName = styled.span`
  font-size: 1rem;
`;

const CartItemPrice = styled.span``;

/**
 * I am using Component suffix to differentiate the Component with the model itself
 */
const CartItemComponent = ({ name, imageUrl, price, quantity }: CartItem) => {
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt="item" />
      <CartItemDetailsContainer>
        <CartItemName>{name}</CartItemName>
        <CartItemPrice>
          {quantity} x {price}
        </CartItemPrice>
      </CartItemDetailsContainer>
    </CartItemContainer>
  );
};

export default React.memo(CartItemComponent);
