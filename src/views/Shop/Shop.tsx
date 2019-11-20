import Collection, { CollectionMatchProps } from "../Collection/Collection";
import React, { Dispatch, useEffect, useState } from "react";
import {
  ShopActionTypes,
  ShopActionWithPayload
} from "../../store/actions/shopActions";
import {
  convertCollectionsSnapshopToMap,
  firestore
} from "../../firebase/firebase.utils";

import CollectionsOverview from "../../components/CollectionsOverview/CollectionsOverview";
import { Route } from "react-router-dom";
import { RouteComponentProps } from "react-router";
import WithSpinner from "../../components/WithSpinner/WithSpinner";
import { useDispatch } from "react-redux";

const CollectionsOverviewWithSpinner = WithSpinner<{}>(CollectionsOverview);
const CollectionWithSpinner = WithSpinner<
  RouteComponentProps<CollectionMatchProps>
>(Collection);

const Shop: React.FC<RouteComponentProps> = ({ match }) => {
  const dispatch = useDispatch<Dispatch<ShopActionWithPayload>>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    let unsubscribeFromFirestore: firebase.Unsubscribe | null = null;
    const collectionRef = firestore.collection("collections");

    unsubscribeFromFirestore = collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshopToMap(snapshot);
      dispatch({
        type: ShopActionTypes.UPDATE_COLLECTIONS,
        payload: {
          collections: collectionsMap
        }
      });
      setIsLoading(false);
    });

    // Unsubscribe from Firestore
    return () => {
      if (unsubscribeFromFirestore) {
        unsubscribeFromFirestore();
      }
    };
  }, [dispatch, isLoading]);

  return (
    <div>
      <Route
        path={match.path}
        exact
        render={props => (
          <CollectionsOverviewWithSpinner isLoading={isLoading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={props => (
          <CollectionWithSpinner isLoading={isLoading} {...props} />
        )}
      />
    </div>
  );
};

export default Shop;
