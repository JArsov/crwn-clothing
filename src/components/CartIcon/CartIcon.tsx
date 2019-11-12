import {
  CartActionTypes,
  CartActionWithPayload
} from "../../store/actions/cartActions";
import React, { Dispatch } from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import styled from "styled-components";
import { useDispatch } from "react-redux";

const CartIconContainer = styled.div`
  width: 3rem;
  height: 3rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
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
      <ItemCount> 0 </ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
