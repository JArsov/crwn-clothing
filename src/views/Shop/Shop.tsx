import Collection, { CollectionMatchProps } from "../Collection/Collection";
import React, { useEffect } from "react";
import {
  selectIsCollectionFetching,
  selectIsCollectionsLoaded
} from "../../store/selectors/shop/shopSelectors";
import { useDispatch, useSelector } from "react-redux";

import CollectionsOverview from "../../components/CollectionsOverview/CollectionsOverview";
import { RootState } from "../../store/reducers/types/RootState";
import { Route } from "react-router-dom";
import { RouteComponentProps } from "react-router";
import WithSpinner from "../../components/WithSpinner/WithSpinner";
import { fetchCollectionsStartAsync } from "../../store/actions/shopActions";

const CollectionsOverviewWithSpinner = WithSpinner<{}>(CollectionsOverview);
const CollectionWithSpinner = WithSpinner<
  RouteComponentProps<CollectionMatchProps>
>(Collection);

const Shop: React.FC<RouteComponentProps> = ({ match }) => {
  const dispatch = useDispatch();
  const isCollectionsLoaded = useSelector<RootState, boolean>(
    selectIsCollectionsLoaded
  );
  const isCollectionFetching = useSelector<RootState, boolean>(
    selectIsCollectionFetching
  );

  useEffect(() => {
    dispatch(fetchCollectionsStartAsync());
  }, [dispatch]);

  return (
    <div>
      <Route
        path={match.path}
        exact
        render={props => (
          <CollectionsOverviewWithSpinner
            isLoading={isCollectionFetching}
            {...props}
          />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={props => (
          <CollectionWithSpinner isLoading={!isCollectionsLoaded} {...props} />
        )}
      />
    </div>
  );
};

export default Shop;
