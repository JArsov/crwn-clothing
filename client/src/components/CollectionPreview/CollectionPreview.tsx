import CollectionItem from "../CollectionItem/CollectionItem";
import React from "react";
import { ShopData } from "../../store/reducers/types/ShopState";
import styled from "styled-components";

const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  @media screen and (max-width: 800px) {
    align-items: center;
  }
`;

const CollectionPreviewTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1.75rem;
`;

const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
  }
`;

const CollectionPreview: React.FC<ShopData> = ({ title, items }) => {
  return (
    <CollectionPreviewContainer>
      <CollectionPreviewTitle>{title}</CollectionPreviewTitle>
      <PreviewContainer data-testid={title}>
        {items
          .filter((_, index) => index < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default CollectionPreview;
