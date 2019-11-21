import { RootState } from "../../reducers/types/RootState";
import { createSelector } from "reselect";

const selectShop = (state: RootState) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
);

/**
 * Maps the collections in an array format, instead of an object
 */
export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : null
);

export const selectCollection = (collectionUrlParam: string) =>
  createSelector([selectCollections], collections =>
    collections ? collections[collectionUrlParam.toString()] : null
  );

export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  shop => !!shop.collections
);
