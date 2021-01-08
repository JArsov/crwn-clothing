import React, { Suspense, lazy, useEffect } from 'react';

import { Route } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import Spinner from '../../components/Spinner/Spinner';
import { fetchCollectionsStart } from '../../store/actions/shopActions';
import { useDispatch } from 'react-redux';

const CollectionsOverviewWithSpinner = lazy(
  () => import('../../components/CollectionsOverview/CollectionsOverview')
);
const CollectionWithSpinner = lazy(() => import('../Collection/Collection'));

const Shop = ({ match }: RouteComponentProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionsStart());
  }, [dispatch]);

  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <Route
          path={match.path}
          exact
          component={CollectionsOverviewWithSpinner}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionWithSpinner}
        />
      </Suspense>
    </div>
  );
};

export default Shop;
