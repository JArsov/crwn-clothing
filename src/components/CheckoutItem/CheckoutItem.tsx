import {
  CartActionTypes,
  CartActionWithPayload
} from "../../store/actions/cartActions";
import React, { Dispatch } from "react";

import { CartItem } from "../../store/reducers/types/CartState";
import styled from "styled-components";
import { useDispatch } from "react-redux";

const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 1rem 0;
  font-size: 1.25rem;
  align-items: center;
`;

const CheckoutItemImageContainer = styled.div`
  width: 23%;
  padding-right: 1rem;
`;

const CheckoutItemImage = styled.img`
  width: 100%;
  height: 100%;
`;

const ColumnContainer = styled.span`
  width: 23%;
`;

const QuantityColumnContainer = styled(ColumnContainer)`
  padding-left: 1.25rem;
  display: flex;
`;

const RemoveButtonContainer = styled.span`
  padding-left: 0.75rem;
  cursor: pointer;
`;

const QuantityArrowContainer = styled.div`
  cursor: pointer;
`;

const QuantityValue = styled.span`
  margin: 0 0.7rem;
`;

const CheckoutItem: React.FC<CartItem> = cartItem => {
  const { name, price, quantity, imageUrl } = cartItem;
  const dispatch = useDispatch<Dispatch<CartActionWithPayload>>();
  const clearItemHandler = () => {
    dispatch({
      type: CartActionTypes.CLEAR_ITEM,
      payload: {
        item: cartItem
      }
    });
  };
  const addItemToCartHandler = () => {
    dispatch({
      type: CartActionTypes.ADD_ITEM,
      payload: {
        item: cartItem
      }
    });
  };
  const removeItemFromCartHandler = () => {
    dispatch({
      type: CartActionTypes.REMOVE_ITEM,
      payload: {
        item: cartItem
      }
    });
  };
  return (
    <CheckoutItemContainer>
      <CheckoutItemImageContainer>
        <CheckoutItemImage alt="item" src={imageUrl} />
      </CheckoutItemImageContainer>
      <ColumnContainer>{name}</ColumnContainer>
      <QuantityColumnContainer>
        <QuantityArrowContainer
          data-testid={`remove-item-${name}`}
          onClick={removeItemFromCartHandler}
        >
          &#10094;
        </QuantityArrowContainer>
        <QuantityValue data-testid={`quantity-${name}`}>
          {quantity}
        </QuantityValue>
        <QuantityArrowContainer
          data-testid={`add-item-${name}`}
          onClick={addItemToCartHandler}
        >
          &#10095;
        </QuantityArrowContainer>
      </QuantityColumnContainer>
      <ColumnContainer>{price}</ColumnContainer>
      <RemoveButtonContainer
        data-testid={`clear-item-${name}`}
        onClick={clearItemHandler}
      >
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
