import Button from "../Button/Button";
import React from "react";
import { ShopDataItem } from "../../shared/shop.data";
import styled from "styled-components";

const CollectionItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 25rem;
  width: 21%;
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

const CollectionItem: React.FC<ShopDataItem> = ({
  id,
  name,
  imageUrl,
  price
}) => {
  return (
    <CollectionItemContainer>
      <CollectionItemImage imageUrl={imageUrl} />
      <CollectionItemFooter>
        <span>{name}</span>
        <span>{price}</span>
      </CollectionItemFooter>
      <CollectionItemButton>Add to cart</CollectionItemButton>
    </CollectionItemContainer>
  );
};

export default CollectionItem;
