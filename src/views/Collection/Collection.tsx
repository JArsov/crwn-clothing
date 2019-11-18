import { shallowEqual, useSelector } from "react-redux";

import CollectionItem from "../../components/CollectionItem/CollectionItem";
import React from "react";
import { RootState } from "../../store/reducers/types/RootState";
import { RouteComponentProps } from "react-router";
import { ShopData } from "../../store/reducers/types/ShopState";
import { selectCollection } from "../../store/selectors/shop/shopSelectors";
import styled from "styled-components";

interface CollectionMatchProps {
  collectionId: string;
}

const CollectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    font-size: 2.3rem;
    margin: 0 auto 1.9rem;
  }
`;

const CategoryItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 0.7rem;
  margin-bottom: 1.9rem;
`;

const Category: React.FC<RouteComponentProps<CollectionMatchProps>> = ({
  match
}) => {
  const { title, items } = useSelector<RootState, ShopData | undefined>(
    state => selectCollection(match.params.collectionId)(state),
    shallowEqual
  ) as ShopData;
  return (
    <CollectionContainer>
      <h2>{title}</h2>
      <CategoryItemsContainer>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CategoryItemsContainer>
    </CollectionContainer>
  );
};

export default Category;