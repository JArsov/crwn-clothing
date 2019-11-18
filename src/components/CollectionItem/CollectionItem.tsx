import {
  CartActionTypes,
  CartActionWithPayload
} from "../../store/actions/cartActions";
import React, { Dispatch } from "react";

import Button from "../Button/Button";
import { ShopDataItem } from "../../store/reducers/types/ShopState";
import styled from "styled-components";
import { useDispatch } from "react-redux";

const CollectionItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 25rem;
  width: 21vw;
`;

const CollectionItemImage = styled.div<{ imageUrl: string }>`
  flex-grow: 1;
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.imageUrl});
  &:hover {
    opacity: 0.8;
  }
`;

const CollectionItemFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CollectionItemButton = styled(Button)`
  opacity: 0.7;
`;

interface CollectionItemProps {
  item: ShopDataItem;
}

const CollectionItem: React.FC<CollectionItemProps> = ({ item }) => {
  const dispatch = useDispatch<Dispatch<CartActionWithPayload>>();
  const addToCartHandler = () => {
    dispatch({
      type: CartActionTypes.ADD_ITEM,
      payload: {
        item
      }
    });
  };
  return (
    <CollectionItemContainer>
      <CollectionItemImage imageUrl={item.imageUrl} />
      <CollectionItemFooter>
        <span>{item.name}</span>
        <span>{item.price}</span>
      </CollectionItemFooter>
      <CollectionItemButton onClick={addToCartHandler}>
        Add to cart
      </CollectionItemButton>
    </CollectionItemContainer>
  );
};

export default CollectionItem;
