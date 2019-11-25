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
  align-items: center;
  position: relative;
  &:hover {
    img {
      opacity: 0.8;
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }

  @media screen and (max-width: 800px) {
    width: 40vw;
    &:hover {
      img,
      button {
        opacity: unset;
      }
    }
  }
`;

const CollectionItemImage = styled.div<{ imageUrl: string }>`
  flex-grow: 1;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 95%;
  background-image: url(${props => props.imageUrl});
  margin-bottom: 0.3rem;
`;

const CollectionItemFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

const NameContainer = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

const PriceContainer = styled.span`
  width: 10%;
  text-align: right;
`;

const CollectionItemButton = styled(Button)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 16rem;
  display: none;

  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 0.7rem;
  }
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
        <NameContainer>{item.name}</NameContainer>
        <PriceContainer>{item.price}</PriceContainer>
      </CollectionItemFooter>
      <CollectionItemButton onClick={addToCartHandler}>
        Add to cart
      </CollectionItemButton>
    </CollectionItemContainer>
  );
};

export default CollectionItem;
