import {
  CartActionTypes,
  CartActionWithPayload
} from "../../store/actions/cartActions";
import React, { Dispatch } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { RootState } from "../../store/reducers/types/RootState";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { selectCartItemsTotalQuantity } from "../../store/selectors/cart/cartSelectors";
import styled from "styled-components";

const CartIconContainer = styled.div`
  width: 3rem;
  height: 3rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 5;
`;

const ItemCount = styled.span`
  position: absolute;
  font-size: 0.7rem;
  font-weight: bold;
  bottom: 0.8rem;
`;

const StyledShoppingIcon = styled(ShoppingIcon)`
  width: 1.5rem;
  height: 1.5rem;
`;

const CartIcon: React.FC<{}> = () => {
  const dispatch = useDispatch<Dispatch<CartActionWithPayload>>();
  const cartItemsQuantity = useSelector<RootState, number>(
    selectCartItemsTotalQuantity,
    shallowEqual
  );

  const handleCartIconClick = () => {
    dispatch({
      type: CartActionTypes.TOGGLE_CART_HIDDEN
    });
  };

  return (
    <CartIconContainer
      onClick={handleCartIconClick}
      title="cart-icon"
      id="cart-icon"
      data-testid="cart-icon"
    >
      <StyledShoppingIcon />
      <ItemCount> {cartItemsQuantity} </ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
