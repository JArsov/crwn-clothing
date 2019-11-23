import { Nullable, RootState } from "../../store/reducers/types/RootState";
import { shallowEqual, useSelector } from "react-redux";

import CollectionPreview from "../CollectionPreview/CollectionPreview";
import React from "react";
import { ShopData } from "../../store/reducers/types/ShopState";
import { selectCollectionsForPreview } from "../../store/selectors/shop/shopSelectors";
import styled from "styled-components";

const CollectionsOverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CollectionsOverview: React.FC<{}> = () => {
  const collections = useSelector<RootState, Nullable<ShopData[]>>(
    selectCollectionsForPreview,
    shallowEqual
  );
  return (
    <CollectionsOverviewContainer>
      {collections
        ? collections.map(collection => (
            <CollectionPreview key={collection.id} {...collection} />
          ))
        : null}
    </CollectionsOverviewContainer>
  );
};

export default CollectionsOverview;
