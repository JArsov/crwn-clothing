import {
  convertCollectionsSnapshopToMap,
  firestore
} from "../../firebase/firebase.utils";

import { ActionWithPayload } from "../storeHelper";
import { Dispatch } from "redux";
import { ShopDataCollections } from "../../shared/shop.data";

export enum ShopActionTypes {
  FETCH_COLLECTIONS_START = "FETCH_COLLECTIONS_START",
  FETCH_COLLECTIONS_SUCCESS = "FETCH_COLLECTIONS_SUCCESS",
  FETCH_COLLECTIONS_FAILURE = "FETCH_COLLECTIONS_FAILURE"
}

export type ShopActionWithPayload<P = any> = ActionWithPayload<
  ShopActionTypes,
  P
>;

export const fetchCollectionsStart = (): ShopActionWithPayload => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch: Dispatch) => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart());
    collectionRef
      .get()
      .then(snapshot => {
        const collectionsMap = convertCollectionsSnapshopToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch(error => dispatch(fetchCollectionsFailure(error.message)));
  };
};

export const fetchCollectionsSuccess = (
  collectionsMap: ShopDataCollections | {}
): ShopActionWithPayload => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: {
    collections: collectionsMap
  }
});

export const fetchCollectionsFailure = (
  errorMessage: string
): ShopActionWithPayload => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: {
    errorMessage
  }
});
